import router from "../../router";
import AppService from "../../service/AppService";
import Urls from "../../service/Urls"
import {Toast} from "../../components/NotificationToast";
import AuthRequest from "../../model/request/AuthRequest";
import storeUtils from "../../utils/BaseUtils/storeUtils";


export const state = {
    user:null,
    authLoading:false,
    otpScreen:false
}

export const getters = {
    getUser:(state) => {return state.user},
    getAuthLoading:(state) => {return state.authLoading},
    getOtpScreen:(state) => {return state.otpScreen},
    getToken:(state) => {return state.token},

}

export const mutations = {
    updateToken:(state, payload)=> {
        state.token = payload
    },
    updateAuthLoading:(state, payload)=> {
        state.authLoading = payload
    },
    updateUser:(state, payload)=> {
        state.user = payload
    },
    updateOtpScreen:(state, payload)=> {
        state.otpScreen = payload
    },
}


export const actions ={

    authInitiateEnrollment:({commit,state}, payload = AuthRequest.initiateEnrolment) => {
        commit("updateAuthLoading",true)
        return AppService.callServiceApis(Urls.initiateEnrollmentUrl, payload).then(response => {
            commit("updateAuthLoading", false)
            let responseData = response.data
            if(responseData.responseCode === "00"){
                localStorage.email = payload.email
                commit("updateOtpScreen",true)
                Toast.fire({text:responseData.responseMessage, icon:'success'}).then()
            }else {
                Toast.fire({text:responseData.responseMessage, icon:'error'}).then()
            }
        }).catch((e) => {
            commit("updateAuthLoading", false)
            Toast.fire({text:e, icon:'error'}).then()
        })

    },

    authCompleteEnrollment:({commit,state}, payload = AuthRequest.completeEnrolment) => {
        payload.email = localStorage.email
        commit("updateAuthLoading",true)
        return AppService.callServiceApis(Urls.completeEnrollmentUrl, payload).then(async response => {
            commit("updateAuthLoading", false)
            let responseData = response.data
            if(responseData.responseCode === "00"){
                await Toast.fire({text:responseData.responseMessage, icon:'success'}).then()
                await storeUtils.commit(storeUtils.mutations.app.updateAuth, null)
                commit("updateOtpScreen",false)
                AuthRequest.login.email = localStorage.email
                AuthRequest.login.password = payload.password
                await storeUtils.dispatch(storeUtils.actions.auth.authLogin, AuthRequest.login)
            }else {
                Toast.fire({text:responseData.responseMessage, icon:'error'}).then()
                storeUtils.commit(storeUtils.mutations.app.updateAuth, null)
            }
        }).catch((e) => {
            commit("updateAuthLoading", false)
            Toast.fire({text:e, icon:'error'}).then()
        })

    },

    authLogin:({commit,state}, payload = AuthRequest.login) => {
        commit("updateAuthLoading",true)
        return AppService.callServiceApis(Urls.loginUrl, payload).then(response => {
            commit("updateAuthLoading", false)
            let responseData = response.data
            if(responseData.responseCode === "00"){
                Toast.fire({text:responseData.responseMessage, icon:'success'}).then()
                commit("updateUser", responseData.user)
                commit("updateToken", responseData.token)
                localStorage.user_id = responseData.user.id
                localStorage.token = responseData.token
                storeUtils.commit(storeUtils.mutations.app.updateAuth, null)
            }else {
                Toast.fire({text:responseData.responseMessage, icon:'error'}).then()
            }
        }).catch((e) => {
            commit("updateAuthLoading", false)
            Toast.fire({text:e, icon:'error'}).then()
        })

    },

    authUserDetails:({commit}) => {
        return AppService.callGetServiceApis(Urls.getUserDetailsUrl).then(response => {
            let responseData = response.data
            commit("updateUser", responseData.user)
        }).catch(() => {
            commit("updateAuthLoading", false)
        })

    },

    authLogout:({commit}) => {
        return AppService.callGetServiceApis(Urls.logOutUrl).then(response => {
            let responseData = response.data
            if(responseData.responseCode === "00"){
                Toast.fire({text:responseData.responseMessage, icon:'success'}).then()
                commit("updateUser", null)
                commit("updateToken", null)
                localStorage.clear()
            }
        }).catch((e) => {
            commit("updateAuthLoading", false)
            Toast.fire({text:e.message, icon:'error'})
        })

    },
}