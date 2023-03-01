import RouterUtils from "../../utils/BaseUtils/routerUtils";

export default [
    {
        path: RouterUtils.routers.auth.login.path,
        name: RouterUtils.routers.auth.login.name,
        meta: {layout:'app',authRequired:false},
        component:() => import(/* webpackChunkName: "about" */ '../../views/auth/Login')
    },
]