<?php

namespace ApiBundle\Api\Resource\Good;

use ApiBundle\Api\Annotation\ApiConf;
use ApiBundle\Api\ApiRequest;
use ApiBundle\Api\Resource\AbstractResource;
use ApiBundle\Api\Resource\Filter;
use ApiBundle\Api\Resource\User\UserFilter;
use ApiBundle\Api\Util\AssetHelper;
use Biz\Course\Service\CourseSetService;
use Biz\Favorite\Service\FavoriteService;
use Biz\Goods\Service\GoodsService;
use Biz\Product\Service\ProductService;
use Biz\System\Service\SettingService;

class GoodComponent extends AbstractResource
{
    /**
     * @param $id
     * @param $component
     *
     * @ApiConf(isRequiredAuth=false)
     */
    public function get(ApiRequest $request, $id, $component)
    {
        return $this->getComponentsByTypes($id, [$component]);
    }

    /**
     * @param $id
     *
     * @return array
     * @ApiConf(isRequiredAuth=false)
     */
    public function search(ApiRequest $request, $id)
    {
        $componentTypes = $request->query->get('componentTypes');
        if (empty($componentTypes)) {
            return [];
        }

        return $this->getComponentsByTypes($id, $componentTypes);
    }

    private function getComponentsByTypes($goodsId, array $types)
    {
        $goods = $this->getGoodsService()->getGoods($goodsId);
        $product = $this->getProductService()->getProduct($goods['productId']);

        $components = [];
        foreach ($types as $type) {
            if ('isFavorite' == $type) {
                $components['isFavorite'] = $this->getIsFavoriteComponent($product['targetType'], $product['targetId']);
                continue;
            }

            if ('mpQrCode' == $type) {
                $components['mpQrCode'] = $this->getMpQrCodeComponent();
                continue;
            }

            if ('teachers' == $type) {
                $components['teachers'] = $this->getTeacherComponent($product['targetType'], $product['targetId']);
            }

            if ('reviews' == $type) {
            }

            if ('recommendGoods' == $type) {
            }
        }

        return $components;
    }

    private function getIsFavoriteComponent($productType, $productId)
    {
        $favorite = $this->getFavoriteService()->getUserFavorite(
            $this->getCurrentUser()->getId(),
            $productType,
            $productId
        );

        return !empty($favorite);
    }

    private function getMpQrCodeComponent()
    {
        $goodsSetting = $this->getSettingService()->get('goods_setting', []);

        return [
            'title' => $goodsSetting['leading']['label'],
            'content' => $goodsSetting['leading']['description'],
            'imageUrl' => AssetHelper::getFurl($goodsSetting['leading']['qrcode'] , 'default'),
        ];
    }

    private function getTeacherComponent($productType, $productId)
    {
        if ('course' ==  $productType) {
            $courseSet = $this->getCourseSetService()->getCourseSet($productId);
            if (empty($courseSet['teacherIds'])) {
                return [];
            }

            $teachers['teacherIds'] = array_unique(array_merge($courseSet['teacherIds'], [$courseSet['creator']]));
            $this->getOCUtil()->single($teachers, ['teacherIds']);
            $userFilter = new UserFilter();
            $userFilter->setMode(Filter::SIMPLE_MODE);
            $userFilter->filters($teachers['teachers']);

            return  $teachers['teachers'];
        }
    }

    /**
     * @return GoodsService
     */
    protected function getGoodsService()
    {
        return $this->service('Goods:GoodsService');
    }

    /**
     * @return ProductService
     */
    protected function getProductService()
    {
        return $this->service('Product:ProductService');
    }

    /**
     * @return FavoriteService
     */
    protected function getFavoriteService()
    {
        return $this->service('Favorite:FavoriteService');
    }

    /**
     * @return SettingService
     */
    protected function getSettingService()
    {
        return $this->service('System:SettingService');
    }

    /**
     * @return CourseSetService
     */
    protected function getCourseSetService()
    {
        return $this->service('Course:CourseSetService');
    }

    protected function getMockedComponents($component)
    {
        $mockedComponents = [
            'teachers' => [
                [
                    'id' => 1,
                    'avatar' => [
                        'small' => 'http://try6.edusoho.cn/files/user/2020/06-15/1741586dd258161303.jpg',
                        'medium' => 'http://try6.edusoho.cn/files/user/2020/06-15/1741586dd258161303.jpg',
                        'large' => 'http://try6.edusoho.cn/files/user/2020/06-15/1741586dd258161303.jpg',
                    ],
                    'name' => '马老师',
                    'title' => '国家一级教师',
                ],
                [
                    'id' => 2,
                    'avatar' => [
                        'small' => 'http://try6.edusoho.cn/files/user/2020/06-15/1741586dd258161303.jpg',
                        'medium' => 'http://try6.edusoho.cn/files/user/2020/06-15/1741586dd258161303.jpg',
                        'large' => 'http://try6.edusoho.cn/files/user/2020/06-15/1741586dd258161303.jpg',
                    ],
                    'name' => '李老师',
                    'title' => '国家中级教师',
                ],
            ],
            'mpQrcode' => [
                'title' => '关注公众号',
                'imageUrl' => 'https://cdn2.jianshu.io/assets/web/download-index-side-qrcode-4130a7a6521701c4cb520ee6997d5fdb.png',
                'mpName' => '小兵果屋',
                'content' => '关注公众号，随时随地学习最新知识',
            ],
            'reviews' => [
                [
                    'id' => 1,
                    'userId' => 10,
                    'user' => [
                        'id' => 10,
                        'nickname' => '小兵张嘎',
                        'title' => '',
                        'smallAvatar' => 'http://try6.edusoho.cn/files/user/2020/06-15/1741586de969821923.jpg',
                        'mediumAvatar' => 'http://try6.edusoho.cn/files/user/2020/06-15/1741586ddefc650434.jpg',
                        'largeAvatar' => 'http://try6.edusoho.cn/files/user/2020/06-15/1741586dd258161303.jpg',
                        'uuid' => '3dfd51f26077d3c1e6b3b40286b6a968d65ad502',
                        'destroyed' => '0',
                    ],
                    'content' => '不错的课程',
                    'rating' => '4',
                    'targetName' => '默认学习计划',
                    'targetId' => 1,
                    'createdTime' => date('c'),
                ],
                [
                    'id' => 2,
                    'userId' => 11,
                    'user' => [
                        'id' => 11,
                        'nickname' => '小兵张嘎',
                        'title' => '',
                        'smallAvatar' => 'http://try6.edusoho.cn/files/user/2020/06-15/1741586de969821923.jpg',
                        'mediumAvatar' => 'http://try6.edusoho.cn/files/user/2020/06-15/1741586ddefc650434.jpg',
                        'largeAvatar' => 'http://try6.edusoho.cn/files/user/2020/06-15/1741586dd258161303.jpg',
                        'uuid' => '3dfd51f26077d3c1e6b3b40286b6a968d65ad502',
                        'destroyed' => '0',
                    ],
                    'content' => '很棒的课程',
                    'rating' => '5',
                    'targetId' => 1,
                    'targetName' => '默认学习计划',
                    'createdTime' => date('c'),
                ],
            ],
            'recommendGoods' => [
                [
                    'id' => 1,
                    'dataDescription' => '富文本商品描述，有挂件，多计划，计划无优惠，永久有效，承诺服务',
                    'title' => '课程商品标题',
                    'subtitle' => '课程商品副标题',
                    'image' => 'http://try6.edusoho.cn/files/course/2020/04-14/18332003d725680219.jpeg',
                ],
                [
                    'id' => 2,
                    'dataDescription' => '富文本商品描述，有挂件，多计划，计划无优惠，永久有效，承诺服务',
                    'title' => '课程商品标题',
                    'subtitle' => '课程商品副标题',
                    'image' => 'http://try6.edusoho.cn/files/course/2020/04-14/18332003d725680219.jpeg',
                ],
            ],
            'classroomCourses' => [
            ],
            'courseTasks' => [
            ],
        ];

        return empty($mockedComponents[$component]) ? [] : $mockedComponents[$component];
    }
}
