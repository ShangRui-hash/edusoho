<?php

namespace Biz\Certificate\Event;

use AppBundle\Common\ArrayToolkit;
use Biz\Certificate\Service\CertificateService;
use Biz\Certificate\Service\RecordService;
use Biz\Classroom\Service\ClassroomService;
use Biz\Course\Service\CourseService;
use Biz\Course\Service\CourseSetService;
use Biz\Course\Service\MemberService;
use Codeages\Biz\Framework\Event\Event;
use Codeages\PluginBundle\Event\EventSubscriber;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;

class CertificateEventSubscriber extends EventSubscriber implements EventSubscriberInterface
{
    public static function getSubscribedEvents()
    {
        return [
            'course.task.finish' => 'onCourseTaskFinish',
        ];
    }

    public function onCourseTaskFinish(Event $event)
    {
        $taskResult = $event->getSubject();
        $course = $this->getCourseService()->getCourse($taskResult['courseId']);
        $courseSet = $this->getCourseSetService()->getCourseSet($course['courseSetId']);

        $this->processCourseCertificate($courseSet, $course, $taskResult);
        $this->processClassroomCertificate($courseSet, $taskResult['userId']);
    }

    protected function processCourseCertificate($courseSet, $course, $taskResult)
    {
        $student = $this->getCourseMemberService()->getCourseMember($taskResult['courseId'], $taskResult['userId']);

        if (empty($student['finishedTime']) || $student['learnedCompulsoryTaskNum'] != $course['compulsoryTaskNum']) {
            return;
        }
        $certificates = $this->getCertificateService()->findByTargetIdAndTargetType($courseSet['id'], 'course');
        foreach ($certificates as $certificate) {
            $this->getRecordService()->autoIssueCertificates($certificate['id'], [$taskResult['userId']]);
        }
    }

    protected function processClassroomCertificate($courseSet, $userId)
    {
        $classroomCourses = $this->getClassroomService()->findClassroomCourseByCourseSetIds([$courseSet['id']]);
        $classroomIds = ArrayToolkit::column($classroomCourses, 'classroomId');
        $members = $this->getClassroomService()->findMembersByUserIdAndClassroomIds($userId, $classroomIds);
        $classroomCourseGroups = ArrayToolkit::group($classroomCourses, 'classroomId');
        $classroomIds = ArrayToolkit::column($members, 'classroomId');
        if (empty($classroomIds)) {
            return true;
        }

        $certificates = $this->getCertificateService()->search(['targetIds' => $classroomIds, 'targetType' => 'classroom'], [], 0, PHP_INT_MAX);
        $classroomIds = ArrayToolkit::column($certificates, 'targetId');
        $certificateGroups = ArrayToolkit::group($certificates, 'targetId');

        foreach ($classroomIds as $classroomId) {
            if (empty($classroomCourseGroups[$classroomId]) || empty($certificateGroups[$classroomId])) {
                continue;
            }
            $courses = $classroomCourseGroups[$classroomId];
            $courseIds = ArrayToolkit::column($courses, 'courseId');
            $memberCounts = $this->getCourseMemberService()->countMembers(['finishedTime_GT' => 0, 'userId' => $userId, 'courseIds' => $courseIds]);

            //没有全部完成忽略
            if ($memberCounts < count($courseIds)) {
                continue;
            }
            foreach ($certificateGroups[$classroomId] as $certificate) {
                $this->getRecordService()->autoIssueCertificates($certificate['id'], [$userId]);
            }
        }
    }

    /**
     * @return CourseSetService
     */
    protected function getCourseSetService()
    {
        return $this->getBiz()->service('Course:CourseSetService');
    }

    /**
     * @return CourseService
     */
    public function getCourseService()
    {
        return $this->getBiz()->service('Course:CourseService');
    }

    /**
     * @return MemberService
     */
    protected function getCourseMemberService()
    {
        return $this->getBiz()->service('Course:MemberService');
    }

    /**
     * @return CertificateService
     */
    protected function getCertificateService()
    {
        return $this->getBiz()->service('Certificate:CertificateService');
    }

    /**
     * @return RecordService
     */
    protected function getRecordService()
    {
        return $this->getBiz()->service('Certificate:RecordService');
    }

    /**
     * @return ClassroomService
     */
    protected function getClassroomService()
    {
        return $this->getBiz()->service('Classroom:ClassroomService');
    }
}
