<?php

namespace ApiBundle\Api\Resource\WrongBook;

use ApiBundle\Api\Annotation\Access;
use ApiBundle\Api\ApiRequest;
use ApiBundle\Api\Resource\AbstractResource;
use AppBundle\Common\ArrayToolkit;
use Biz\Activity\Service\ActivityService;
use Biz\Course\Service\CourseService;
use Biz\Course\Service\CourseSetService;
use Biz\ItemBankExercise\Service\ExerciseModuleService;
use Biz\Task\Service\TaskService;
use Biz\WrongBook\Service\WrongQuestionService;
use Biz\WrongBook\WrongBookException;
use Codeages\Biz\ItemBank\Assessment\Service\AssessmentService;
use Codeages\Biz\ItemBank\Item\Service\ItemCategoryService;
use Codeages\Biz\ItemBank\Item\Service\ItemService;

class WrongBookStudentWrongQuestion extends AbstractResource
{
    /**
     * @Access(roles="ROLE_ADMIN,ROLE_SUPER_ADMIN,ROLE_TEACHER")
     */
    public function search(ApiRequest $request, $targetId, $targetType)
    {
        if (!in_array($targetType, ['course', 'classroom', 'exercise'])) {
            throw WrongBookException::WRONG_QUESTION_TARGET_TYPE_REQUIRE();
        }

        $conditions = $this->prepareConditions($request->query->all(), $targetId, $targetType);

        $wrongTimesSort = $request->query->get('wrongTimesSort', 'DESC');
        $orderBys['wrongTimes'] = 'ASC' == $wrongTimesSort ? 'ASC' : 'DESC';

        list($offset, $limit) = $this->getOffsetAndLimit($request);
        $wrongQuestions = $this->getWrongQuestionService()->searchWrongQuestionsWithDistinctItem($conditions, $orderBys, $offset, $limit);
        $wrongQuestions = $this->makeCourseWrongQuestionInfo($wrongQuestions, $conditions['answer_scene_ids']);
        $wrongQuestionCount = $this->getWrongQuestionService()->countWrongQuestionsWithDistinctItem($conditions);

        return $this->makePagingObject($wrongQuestions, $wrongQuestionCount, $offset, $limit);
    }

    protected function prepareConditions($conditions, $targetId, $targetType)
    {
        $prepareConditions = [];

        $pool = 'wrong_question.'.$targetType.'_pool';
        $sceneIds = $this->biz[$pool]->prepareSceneIdsByTargetId($targetId, $conditions);

        $prepareConditions['answer_scene_ids'] = $sceneIds;
        if ('exercise' === $targetType && 'chapter' === $conditions['exerciseMediaType'] && !empty($conditions['chapterId'])) {
            $prepareConditions['testpaper_id'] = $conditions['chapterId'];
        }
        if ('exercise' === $targetType && 'testpaper' === $conditions['exerciseMediaType'] && !empty($conditions['testpaperId'])) {
            $prepareConditions['testpaper_id'] = $conditions['testpaperId'];
        }

        return $prepareConditions;
    }

    protected function makeCourseWrongQuestionInfo($wrongQuestions, $sceneIds)
    {
        $itemIds = ArrayToolkit::column($wrongQuestions, 'item_id');
        $items = $this->getItemService()->findItemsByIds($itemIds);
        $wrongQuestionScenes = $this->getWrongQuestionService()->searchWrongQuestion([
            'answer_scene_ids' => $sceneIds,
        ], [], 0, PHP_INT_MAX);
        $sceneIds = array_unique(ArrayToolkit::column($wrongQuestionScenes, 'answer_scene_id'));
        $activityScenes = $this->getActivityScenes($sceneIds);
        $sources = $this->getCourseWrongQuestionSources($wrongQuestionScenes, $activityScenes);
        $wrongQuestionInfo = [];
        foreach ($wrongQuestions as $wrongQuestion) {
            $wrongQuestionInfo[] = [
                'itemId' => $wrongQuestion['item_id'],
                'itemTitle' => $items[$wrongQuestion['item_id']]['material'],
                'sourceName' => $sources[$wrongQuestion['item_id']]['sourceName'],
                'courseName' => $sources[$wrongQuestion['item_id']]['courseName'],
                'sourceType' => $sources[$wrongQuestion['item_id']]['sourceType'],
                'wrong_times' => $wrongQuestion['wrongTimes'],
            ];
        }

        return $wrongQuestionInfo;
    }

    protected function getActivityScenes($sceneIds)
    {
        $activityScenes = [];
        array_walk($sceneIds, function ($sceneId) use (&$activityScenes) {
            $activityScenes[$sceneId] = $this->getActivityService()->getActivityByAnswerSceneId($sceneId);
        });

        return $activityScenes;
    }

    protected function getCourseWrongQuestionSources($wrongQuestionScenes, $activityScenes)
    {
        $sources = [];
        $tempSceneIds = [];
        foreach ($wrongQuestionScenes as $wrongQuestion) {
            $itemId = $wrongQuestion['item_id'];
            $sceneId = $wrongQuestion['answer_scene_id'];
            $activity = $activityScenes[$sceneId];
            $inItemScene = empty($tempSceneIds[$itemId]) ? [] : $tempSceneIds[$itemId];
            if (!empty($activity) && in_array($activity['mediaType'], ['testpaper', 'homework', 'exercise'])) {
                if (!in_array($sceneId, $inItemScene)) {
                    $courseTask = $this->getCourseTaskService()->getTaskByCourseIdAndActivityId($activity['fromCourseId'], $activity['id']);
                    $courseSet = $this->getCourseSetService()->getCourseSet($activity['fromCourseSetId']);
                    $sources[$itemId]['courseName'][] = $courseSet['title'];
                    $sources[$itemId]['sourceName'][] = $courseTask['title'];
                    $sources[$itemId]['sourceType'][] = $activity['mediaType'];
                    $tempSceneIds[$itemId][] = $sceneId;
                }
            } else {
                $exerciseModule = $this->getExerciseModuleService()->getByAnswerSceneId($sceneId);
                $sources[$itemId]['sourceType'][] = $exerciseModule['type'];
                if ('chapter' === $exerciseModule['type']) {
                    $itemCategory = $this->getItemCategoryService()->getItemCategory($wrongQuestion['testpaper_id']);
                    $sources[$itemId]['sourceName'][] = $itemCategory['name'];
                } else {
                    $assessment = $this->getAssessmentService()->getAssessment($wrongQuestion['testpaper_id']);
                    $sources[$itemId]['sourceName'][] = $assessment['name'];
                }
            }
        }

        return $this->filterSourceInfo($sources);
    }

    protected function filterSourceInfo($sources)
    {
        $sourcesInfo = [];
        array_walk($sources, function ($info, $itemId) use (&$sourcesInfo) {
            $sourcesInfo[$itemId]['courseName'] = empty($info['courseName']) ? [] : array_values(array_filter(array_unique($info['courseName'])));
            $sourcesInfo[$itemId]['sourceName'] = empty($info['sourceName']) ? [] : array_values(array_filter(array_unique($info['sourceName'])));
            $sourcesInfo[$itemId]['sourceType'] = empty($info['sourceType']) ? [] : array_values(array_filter(array_unique($info['sourceType'])));
        });

        return $sourcesInfo;
    }

    /**
     * @return TaskService
     */
    protected function getCourseTaskService()
    {
        return $this->biz->service('Task:TaskService');
    }

    /**
     * @return CourseSetService
     */
    protected function getCourseSetService()
    {
        return $this->service('Course:CourseSetService');
    }

    /**
     * @return ItemService
     */
    protected function getItemService()
    {
        return $this->service('ItemBank:Item:ItemService');
    }

    /**
     * @return CourseService
     */
    protected function getCourseService()
    {
        return $this->service('Course:CourseService');
    }

    /**
     * @return ActivityService
     */
    protected function getActivityService()
    {
        return $this->service('Activity:ActivityService');
    }

    /**
     * @return WrongQuestionService
     */
    protected function getWrongQuestionService()
    {
        return $this->service('WrongBook:WrongQuestionService');
    }

    /**
     * @return ExerciseModuleService
     */
    protected function getExerciseModuleService()
    {
        return $this->service('ItemBankExercise:ExerciseModuleService');
    }

    /**
     * @return ItemCategoryService
     */
    protected function getItemCategoryService()
    {
        return $this->service('ItemBank:Item:ItemCategoryService');
    }

    /**
     * @return AssessmentService
     */
    protected function getAssessmentService()
    {
        return $this->service('ItemBank:Assessment:AssessmentService');
    }
}
