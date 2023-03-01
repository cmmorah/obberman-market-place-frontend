import {apiClient} from "./BaseService";

export default {
    callServiceApis(url, payload) {
        return apiClient.appClient.post(url, payload)
    },
    callImageUploadServiceApi(url, payload) {
        return apiClient.appClient1.post(url, payload)
    },
    callGetServiceApis(url, payload) {
        return apiClient.appClient.get(payload ? `${url}${payload}` : url)
    }
}
