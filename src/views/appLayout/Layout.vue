<template>
  <div>
    <header-nav />

    <login />

    <eroll />

    <router-view />

    <!-- Footer Start -->
    <!-- Footer End -->


<!--    &lt;!&ndash; Back to Top &ndash;&gt;-->
<!--    <a href="#" class="btn btn-primary back-to-top"><i class="fa fa-angle-double-up"></i></a>-->
  </div>
</template>

<script>
import HeaderNav from "../../components/HeaderNav";
import categories from "../../PayloadSimulation/categories";
import router from "../../router";
import Login from "../auth/Login";
import Eroll from "../auth/SignUp"
import storeUtils from "../../utils/BaseUtils/storeUtils";
export default {
  name: "Layout",
  components: {HeaderNav,Login,Eroll},
  data(){
    return{
      categories:categories
    }
  },
  computed:{
    route(){
      return router.currentRoute
    },
    cartLength(){
      return this.$store.state.cart
    },
  }
}
</script>

<style scoped>
#link a.active{
  z-index: 3;
  color: #fff;
  background-color: #D19C97;
  border-color: #D19C97;
}
</style>