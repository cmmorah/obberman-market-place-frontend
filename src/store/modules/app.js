import {Toast} from "../../components/NotificationToast";
import router from "../../router";
import AppRequest from "../../model/request/AppRequest";
import AppService from "../../service/AppService";
import Urls from "../../service/Urls"

export const state = {
    cart:[],
    singleProductPreview:null,
    auth:null,
    uploadedImage:[],
    imageUploadLoading:false,
    loading:false,
    products:null,
    singleProducts:null,
    userProducts:null
}

export const getters = {
    getCart:(state) => {return state.cart ? state.cart : []},
    getAuth:(state) => {return state.auth ? state.auth : []},
    getSingleProductPreview:(state) => {return state.singleProducts ? state.singleProducts : null},
    getUploadedImage:(state) => {return state.uploadedImage ? state.uploadedImage : null},
    getImageUploadLoading:(state) => {return state.imageUploadLoading},
    getLoading:(state) => {return state.loading},
    getProducts:(state) => {return state.products},
    getUserProducts:(state) => {return state.userProducts},

}

export const mutations= {
    updateCart:(state, payload)=> {
        state.cart = payload
    },
    updateImageUploadLoading:(state, payload)=> {
        state.imageUploadLoading = payload
    },
    updateSingleProductPreview:(state, payload)=> {
        state.singleProductPreview = payload
    },
    updateAuth:(state, payload)=> {
        state.auth = payload
    },
    updateUploadedImage:(state, payload)=> {
        state.uploadedImage = payload
    },

    updateLoading:(state, payload)=> {
        state.loading = payload
    },

    updateProducts:(state, payload)=> {
        state.products = payload
    },
    updateSingleProduct:(state, payload)=> {
        state.singleProducts = payload
    },
    updateUserProducts:(state, payload)=> {
        state.userProducts = payload
    }
}


export const actions ={
    addToCartAction:({commit,state},payload) => {
        let newCartItem = [...state.cart, ...[payload]]
        commit("updateCart", newCartItem)
    },

    addForPreview:({commit},payload) => {
        router.push({path:`product/${payload.title}`})
        commit("updateLoading",true)
        return AppService.callGetServiceApis(Urls.readProductByIdUrl, payload.id).then(response => {
            let responseData = response.data
            if(responseData.responseCode === "00"){
                commit("updateLoading",false)
                commit("updateSingleProduct", responseData.data)
            }else{
                commit("updateLoading",false)
            }
        }).catch(e => {
            console.log(e)
        })
    },


    uploadTos3bucket:({commit,state}, payload = AppRequest.createDocument) => {
        commit("updateImageUploadLoading",true)
        return AppService.callImageUploadServiceApi(Urls.productImageTos3Url, payload).then(response => {
            commit("updateImageUploadLoading", false)
            let responseData = response.data
            if(responseData.responseCode === "00"){
                Toast.fire({text:responseData.responseMessage, icon:'success'}).then()
                let newImage = [...state.uploadedImage, ...[responseData.url]]
                commit("updateUploadedImage", newImage)
            }else {
                commit("updateImageUploadLoading", false)
                Toast.fire({text:responseData.responseMessage, icon:'error'}).then()

            }
        }).catch((e) => {
            commit("updateImageUploadLoading", false)
            Toast.fire({text:e, icon:'error'}).then()
        })

    },

    readProducts:({commit,state}) => {
        if(state.products?.data?.length < 1)commit("updateLoading", true)
        return AppService.callGetServiceApis(Urls.readProductUrl).then(response => {
            commit("updateLoading", false)
            let responseData = response.data
            if(responseData.responseCode === "00"){
                commit("updateProducts", responseData)
            }else{
                 Toast.fire({ text:responseData.responseMessage, icon:'error'})
            }
        }).catch(e => {
            commit("updateLoading", false)
            Toast.fire({text:e, icon:'error'})
        })
    },

    readProductsById:({commit}) => {
        commit("updateLoading", true)
        return AppService.callGetServiceApis(Urls.readProductByIdUrl).then(response => {
            commit("updateLoading", false)
            let responseData = response.data
            if(responseData.responseData === "00"){
                commit("updateSingleProduct", responseData.data)
            }
        }).catch(e => {
            commit("updateLoading", false)
            Toast.fire({text:e, icon:'error'})
        })
    },

    readProductsByUserId:({commit}) => {
        commit("updateLoading", true)
        return AppService.callGetServiceApis(Urls.readProductByUserIdUrl).then(response => {
            commit("updateLoading", false)
            let responseData = response.data
            if(responseData.responseCode === "00"){
                commit("updateUserProducts", responseData.data)
            }
        }).catch(e => {
            commit("updateLoading", false)
            Toast.fire({text:e, icon:'error'})
        })
    },

    deleteProducts:({commit}) => {
        commit("updateLoading", true)
        return AppService.callGetServiceApis(Urls.deleteUrl).then(response => {
            commit("updateLoading", false)
            let responseData = response.data
            if(responseData.responseData === "00"){
                Toast.fire({text:responseData.responseMessage, icon:'success'})
            }
        }).catch(e => {
            commit("updateLoading", false)
            Toast.fire({text:e, icon:'error'})
        })
    },

    createProducts:({commit}, payload=AppRequest.createProduct) => {
        payload.user_id = localStorage.user_id
        commit("updateLoading", true)
        return AppService.callServiceApis(Urls.createProductUrl, payload).then(response => {
            commit("updateLoading", false)
            let responseData = response.data
            if(responseData.responseCode === "00"){
                Toast.fire({text:responseData.responseMessage, icon:'success'})
            }else{
                Toast.fire({text:responseData.responseMessage, icon:'error'})
            }
        }).catch(e => {
            commit("updateLoading", false)
            Toast.fire({text:e, icon:'error'})
        })
    },
}