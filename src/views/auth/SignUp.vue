<template>
  <div>
    <sign-up-from v-if="authIs === 'enroll'"/>
  </div>
</template>

<script>
import SignUpFrom from '../../components/form/SignUpForm'
import storeUtils from "../../utils/BaseUtils/storeUtils";
export default {
  name: "SignUp",
  components:{
    SignUpFrom
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