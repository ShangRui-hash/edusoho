<?php

namespace ApiBundle\Api\Resource\LiveStatistic;

use ApiBundle\Api\ApiRequest;
use ApiBundle\Api\Resource\AbstractResource;
use Biz\Activity\Service\ActivityService;
use Biz\Course\Service\CourseService;
use Biz\Course\Service\CourseSetService;
use Biz\Task\Service\TaskService;

class LiveStatistic extends AbstractResource
{
    public function search(ApiRequest $request)
    {
        $courseId = $request->query->get('courseId', 0);

        $course = $this->getCourseService()->tryManageCourse($courseId);
        $taskConditions = [
            'courseId' => $courseId,
            'fromCourseSetId' => $course['courseSetId'],
            'type' => 'live',
            'titleLike' => $request->query->get('title'),
            'status' => 'published',
        ];
        list($offset, $limit) = $this->getOffsetAndLimit($request);

        $liveTasks = $this->getTaskService()->searchTasks(
            $taskConditions,
            ['seq' => 'ASC'],
            $offset,
            $limit
        );
        foreach ($liveTasks as &$liveTask) {
            $liveTask['maxStudentNum'] = empty($course['maxStudentNum']) ? '无限制' ： $course['maxStudentNum'];
            $liveTask['status'] = $liveTask['startTime'] > time() ? 'coming' : ($liveTask['endTime'] < time() ? 'finished' : 'playing');
        }

        return $this->makePagingObject($liveTasks, $this->getTaskService()->countTasks($taskConditions), $offset, $limit);
    }

    /**
     * @return CourseSetService
     */
    protected function getCourseSetService()
    {
        return $this->service('Course:CourseSetService');
    }

    /**
     * @return CourseService
     */
    protected function getCourseService()
    {
        return $this->service('Course:CourseService');
    }

    /**
     * @return TaskService
     */
    protected function getTaskService()
    {
        return $this->service('Task:TaskService');
    }

    /**
     * @return ActivityService
     */
    protected function getActivityService()
    {
        return $this->service('Activity:ActivityService');
    }
}
