<?php

namespace MarketingMallBundle\Event;

use Biz\User\Service\UserService;
use Codeages\Biz\Framework\Event\Event;
use MarketingMallBundle\Biz\SyncList\Service\SyncListService;

class UserEventSubscriber extends BaseEventSubscriber
{
    public static function getSubscribedEvents()
    {
        return [
            'user.change_avatar' => 'onUserAvatarChange',
            'user.update' => 'onUserProfileUpdate',
            'user.change_nickname' => 'onUserNicknameChange',
            'user.change_password' => 'onUserPasswordChange',
            'user.lock' => 'onUserLock',
            'user.unlock' => 'onUserUnLock',
            'user.role.change' => 'onUserRoleChange'
        ];
    }

    public function onUserAvatarChange(Event $event)
    {
        $user = $event->getSubject();
        $this->syncUserInfoToMarketingMall($user['id']);
    }

    public function onUserProfileUpdate(Event $event)
    {
        $subject = $event->getSubject();
        if (array_intersect(['title', 'about'], array_keys($subject['fields']))) {
            $this->syncUserInfoToMarketingMall($subject['user']['id']);
        }
    }

    public function onUserNicknameChange(Event $event)
    {
        $user = $event->getSubject();
        if ($user['nickname'] != $event->getArgument('oldNickname')) {
            $this->syncUserInfoToMarketingMall($user['id']);
        }
    }

    public function onUserPasswordChange(Event $event)
    {
        $user = $event->getSubject();
        $this->syncUserInfoToMarketingMall($user['id']);

    }

    public function onUserLock(Event $event)
    {
        $user = $event->getSubject();
        $this->syncUserInfoToMarketingMall($user['id']);

    }

    public function onUserUnLock(Event $event)
    {
        $user = $event->getSubject();
        $this->syncUserInfoToMarketingMall($user['id']);

    }

    public function onUserRoleChange(Event $event)
    {
        $user = $event->getSubject();
        $this->syncUserInfoToMarketingMall($user['id']);

    }

    protected function syncUserInfoToMarketingMall($userId)
    {
        $data = $this->getSyncListService()->getSyncDataId($userId);

        foreach ($data as $value) {
            if($value['id'] && $value['type'] == 'userUpdate' && $value['status'] == 'new') {
                return;
            }
        }

        $this->getSyncListService()->addSyncList(['type' => 'userUpdate', 'data' => $userId]);
    }

    /**
     * @return UserService
     */
    protected function getUserService()
    {
        return $this->getBiz()->service('User:UserService');
    }

    /**
     * @return SyncListService
     */
    protected function getSyncListService()
    {
        return $this->getBiz()->service('MarketingMallBundle:SyncList:SyncListService');
    }
}
