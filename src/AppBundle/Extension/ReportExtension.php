<?php

namespace AppBundle\Extension;

use Biz\AuditCenter\ReportSources\CommonReview;
use Biz\AuditCenter\ReportSources\CourseNote;
use Biz\AuditCenter\ReportSources\CourseThread;
use Biz\AuditCenter\ReportSources\CourseThreadReply;
use Pimple\Container;
use Pimple\ServiceProviderInterface;

class ReportExtension extends Extension implements ServiceProviderInterface
{
    public function register(Container $pimple)
    {
        // TODO: Implement register() method.
    }

    /**
     * @return string[]
     *                  简单类暂不使用单例模式
     */
    public function getReportSources()
    {
        return [
            'course_review' => CommonReview::class,
            'course_review_reply' => CommonReview::class,
            'classroom_review' => CommonReview::class,
            'classroom_review_reply' => CommonReview::class,
            'course_note' => CourseNote::class,
            'item_bank_exercise_review' => CommonReview::class,
            'item_bank_exercise_review_reply' => CommonReview::class,
            'course_thread' => CourseThread::class,
            'course_question' => CourseThread::class,
            'course_thread_reply' => CourseThreadReply::class,
            'course_question_reply' => CourseThreadReply::class,
        ];
    }
}
