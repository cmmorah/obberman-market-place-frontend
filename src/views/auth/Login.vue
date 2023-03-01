<template>
  <div>
    <login-form  v-if="authIs === 'signin'" />
  </div>
</template>

<script>
import LoginForm from "../../components/form/LoginForm"
import storeUtils from "../../utils/BaseUtils/storeUtils";
export default {
name: "Login",
components:{
  LoginForm
},
computed:{
  authIs(){
    return storeUtils.rootGetters(storeUtils.getters.app.getAuth)
  }

}
}
</script>

<style scoped>

</style>