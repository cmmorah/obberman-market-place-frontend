import RouterUtils from "../../utils/BaseUtils/routerUtils";

export default [

    {
        path: RouterUtils.routers.appView.home.path,
        name: RouterUtils.routers.appView.home.name,
        meta: {layout:'app',authRequired:false},
        component:() => import(/* webpackChunkName: "about" */ '../../views/Home')
    },
    {
        path: RouterUtils.routers.appView.shop.path,
        name: RouterUtils.routers.appView.shop.name,
        meta: {layout:'app',authRequired:false},
        component:() => import(/* webpackChunkName: "about" */ '../../views/Shop')
    },

    {
        path: RouterUtils.routers.appView.product_details.path,
        name: RouterUtils.routers.appView.product_details.name,
        meta: {layout:'app',authRequired:false},
        component:() => import(/* webpackChunkName: "about" */ '../../views/ShopDetails')
    },

    {
        path: RouterUtils.routers.appView.checkout.path,
        name: RouterUtils.routers.appView.checkout.name,
        meta: {layout:'app',authRequired:false},
        component:() => import(/* webpackChunkName: "about" */ '../../views/pages/CheckOut')
    },

    {
        path: RouterUtils.routers.appView.seller_page.path,
        name: RouterUtils.routers.appView.seller_page.name,
        meta: {layout:'app',authRequired:false},
        component:() => import(/* webpackChunkName: "about" */ '../../views/SellerPage')
    },
    {
        path: RouterUtils.routers.appView.add_ads.path,
        name: RouterUtils.routers.appView.add_ads.name,
        meta: {layout:'app',authRequired:false},
        component:() => import(/* webpackChunkName: "about" */ '../../views/AddFreeAds')
    },
]