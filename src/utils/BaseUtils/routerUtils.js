import router from "../../router/index";

class RouterUtils {
    static routers = {
        appView:{
            home:{
                path: '/',
                name: 'HOME',
            },

            shop:{
                path: '/shop',
                name: 'SHOP',
            },

            product_details:{
                path: '/product/:payload_name',
                name: 'PRODUCT_DETAILS',
            },

            seller_page:{
                path: '/sellerpage',
                name: 'Seller_Page',
            },

            checkout:{
                path: '/checkout',
                name: 'CHECKOUT',
            },

            add_ads:{
                path: '/add-free-ad',
                name: 'Add_Ads',
            },

        },

        auth:{
            login:{
                path: '/login',
                name: 'LOGIN',
            },
        }
    };

    static pageTitles = {
        DEFAULT: "DEFAULT",
    };
    static navigateTo(targetRoute) {
        router.push({name: targetRoute}).then();
    }
    static goBack() {router.go(-1);}
}
export default RouterUtils;
