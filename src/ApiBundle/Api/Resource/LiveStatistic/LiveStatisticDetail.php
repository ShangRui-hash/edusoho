<?php

namespace ApiBundle\Api\Resource\LiveStatistic;

use ApiBundle\Api\ApiRequest;
use ApiBundle\Api\Resource\AbstractResource;
use AppBundle\Common\ArrayToolkit;
use Biz\Course\Service\CourseService;
use Biz\Course\Service\CourseSetService;
use Biz\LiveStatistics\Service\Impl\LiveCloudStatisticsServiceImpl;
use Biz\Task\Service\TaskService;
use Biz\Task\TaskException;

class LiveStatisticDetail extends AbstractResource
{
    public function search(ApiRequest $request, $taskId)
    {
        $task = $this->getTaskService()->getTask($taskId);
        if (empty($task)) {
            TaskException::NOTFOUND_TASK();
        }
        $result = $this->getLiveStatisticsService()->getLiveData($task);
        $task = $this->getTaskService()->getTask($taskId);
        $result['task'] = ArrayToolkit::parts($task, ['id', 'startTime', 'endTime', 'title', 'length']);
        $course = $this->getCourseSetService()->getCourseSet($task['courseId']);
        $course['title'] = empty($course['title']) ? $course['courseSetTitle'] : $course['title'];
        $result['course'] = ArrayToolkit::parts($course, ['id', 'title', 'price', 'studentNum']);
        $result['course']['title'] = empty($result['course']['title']) ? $result['course']['courseSetTitle'] : $result['course']['title'];

        return $result;
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
     * @return LiveCloudStatisticsServiceImpl
     */
    protected function getLiveStatisticsService()
    {
        return $this->service('LiveStatistics:LiveCloudStatisticsService');
    }

    /**
     * @return TaskService
     */
    protected function getTaskService()
    {
        return $this->service('Task:TaskService');
    }
}
