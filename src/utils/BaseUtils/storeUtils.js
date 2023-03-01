import store from "../../store"
class storeUtils {

    static actions ={
        auth:{
            authInitiateEnrollment:"auth/authInitiateEnrollment",
            authCompleteEnrollment:"auth/authCompleteEnrollment",
            authLogin:"auth/authLogin",
            authUserDetails:"auth/authUserDetails",
            authLogout:"auth/authLogout"
        },

        app: {
            addToCartAction: "app/addToCartAction",
            addForPreview:"app/addForPreview",
            uploadTos3bucket:"app/uploadTos3bucket",
            readProducts:"app/readProducts",
            readProductsById:"app/readProductsById",
            readProductsByUserId:"app/readProductsByUserId",
            deleteProducts:"app/deleteProducts",
            createProducts:"app/createProducts"
        }
    }

    static mutations ={
        auth:{
            updateToken:"auth/updateToken",
            updateAuthLoading:"auth/updateAuthLoading",
            updateUser:"auth/updateUser",
            updateOtpScreen:"auth/updateOtpScreen"
        },
        app:{
            updateCart:"app/updateCart",
            updateSingleProductPreview:"app/updateSingleProductPreview",
            updateAuth:"app/updateAuth",
            updateUploadedImage:"app/updateUploadedImage",
            updateImageUploadLoading:"app/updateImageUploadLoading",
            updateLoading:"app/updateLoading",
            updateProducts:"app/updateProducts",
            updateSingleProduct:"app/updateSingleProduct",
            updateUserProducts:"app/updateUserProducts"
        }
    }

    static getters ={
        auth:{
            getToken:"auth/getToken",
            getUser:"auth/getUser",
            getAuthLoading:"auth/getAuthLoading",
            getOtpScreen:"auth/getOtpScreen"
        },
        app: {
            getCart: "app/getCart",
            getSingleProductPreview:"app/getSingleProductPreview",
            getAuth:"app/getAuth",
            getUploadedImage:"app/getUploadedImage",
            getLoading:"app/getLoading",
            getProducts:"app/getProducts",
            getUserProducts:"app/getUserProducts"
        }
    }


    static dispatch(actionToDispatch, payload) {
        return store.dispatch(actionToDispatch, payload, { root: true });
    }

    static commit(mutationToCommit, payload) {
        return store.commit(mutationToCommit, payload, { root: true });
    }

    static rootGetters(getter, payload) {
        if (payload) {
            return store.getters[getter](payload);
        } else {
            return store.getters[getter];
        }
    }
}

export default storeUtils


