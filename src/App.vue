<template>
  <layout />
</template>

<script>
import Layout from "./views/appLayout/Layout";
import storeUtils from "./utils/BaseUtils/storeUtils";
export default {
  components:{Layout},
  mounted(){
    storeUtils.dispatch(storeUtils.actions.auth.authUserDetails)
  }
}
</script>

<style></style>
