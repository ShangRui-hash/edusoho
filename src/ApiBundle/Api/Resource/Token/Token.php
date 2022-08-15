<?php

namespace ApiBundle\Api\Resource\Token;

use ApiBundle\Api\ApiRequest;
use ApiBundle\Api\Resource\AbstractResource;
use Biz\System\Service\LogService;
use Biz\System\Service\SettingService;
use Biz\User\Service\UserService;
use Codeages\Biz\Pay\Service\AccountService;

class Token extends AbstractResource
{
    const MOBILE_MODULE = 'mobile';

    const TOKEN_TYPE = 'mobile_login';

    public function add(ApiRequest $request)
    {
        $type = $request->request->get('type');
        $client = $request->request->get('client', '');
        $user = $this->getCurrentUser()->toArray();

        $token = $this->getUserService()->makeToken(self::TOKEN_TYPE, $user['id'], time() + 3600 * 24 * 30, ['client' => $client]);

        $this->appendUser($user);
        $this->getUserService()->markLoginInfo($type);

        $userToken = $this->getUserService()->getUserToken($token);

        if ('app' == $client) {
            $this->getBatchNotificationService()->checkoutBatchNotification($user['id']);

            $delTokens = $this->getTokenService()->findTokensByUserIdAndType($user['id'], self::TOKEN_TYPE);

            foreach ($delTokens as $delToken) {
                if ($delToken['token'] != $token) {
                    $this->getTokenService()->destoryToken($delToken['token']);
                }
            }
        }

        return [
            'token' => $token,
            'tokenExpire' => $userToken['expiredTime'],
            'refreshToken' => $userToken['refresh_token'],
            'user' => $user,
        ];
    }

    public function refresh(ApiRequest $request, $refreshToken)
    {
        var_dump("hello  fasjdlkfj");die;
        $user = $this->getCurrentUser()->toArray();
        $client = $request->request->get('client', '');
        //根据refreshtoken查询用户token//更新token
        $userToken = $this -> getUserService() -> updateToken($refreshToken, time() + 3600 * 24 * 30);
        if (empty($userToken)) {
            return [];
        }
        //返回token和过期时间
        return[
            'token' => $userToken['token'],
            'tokenExpire' => $userToken['expiredTime'],
        ];
    }

    public function remove(ApiRequest $request, $token)
    {
        $user = $this->getCurrentUser()->toArray();

        $device = $this->getPushDeviceService()->getPushDeviceByUserId($user['id']);
        if (!empty($device)) {
            $device = $this->getPushDeviceService()->updatePushDevice($device['id'], ['userId' => 0]);
            $this->getPushDeviceService()->getPushSdk()->setDeviceActive($device['regId'], 0);
        }

        $this->getLogService()->info(self::MOBILE_MODULE, 'user_logout', '用户退出', ['userToken' => $user]);

        $this->getUserService()->deleteToken(self::TOKEN_TYPE, $user['loginToken']);

        return ['success' => true];
    }

    private function appendUser(&$user)
    {
        $profile = $this->getUserService()->getUserProfile($user['id']);
        $user = array_merge($profile, $user);

        if ($this->isPluginInstalled('vip')) {
            $vip = $this->service('VipPlugin:Vip:VipService')->getMemberByUserId($user['id']);
            if ($vip) {
                $level = $this->service('VipPlugin:Vip:LevelService')->getLevel($vip['levelId']);
                $user['vip'] = [
                    'levelId' => $vip['levelId'],
                    'vipName' => $level['name'],
                    'deadline' => date('c', $vip['deadline']),
                    'seq' => $level['seq'],
                ];
            } else {
                $user['vip'] = null;
            }
        }

        $storageSetting = $this->getSettingService()->get('storage');
        if (isset($storageSetting['video_fingerprint_content'])) {
            $fingerPrint = $this->getWebExtension()->getFingerprint();
            $user['fingerPrintSetting']['video_fingerprint_content'] = substr($fingerPrint, strpos($fingerPrint, '>') + 1, strrpos($fingerPrint, '<') - strlen($fingerPrint));
        }

        $user['havePayPassword'] = $this->getAccountService()->isPayPasswordSetted($user['id']) ? 1 : -1;

        return $user;
    }

    protected function getBatchNotificationService()
    {
        return $this->service('User:BatchNotificationService');
    }

    protected function getTokenService()
    {
        return $this->service('User:TokenService');
    }

    /**
     * @return \Biz\PushDevice\Service\Impl\PushDeviceServiceImpl
     */
    protected function getPushDeviceService()
    {
        return $this->service('PushDevice:PushDeviceService');
    }

    /**
     * @return LogService
     */
    private function getLogService()
    {
        return $this->service('System:LogService');
    }

    /**
     * @return UserService
     */
    private function getUserService()
    {
        return $this->service('User:UserService');
    }

    /**
     * @return AccountService
     */
    private function getAccountService()
    {
        return $this->service('Pay:AccountService');
    }
}
