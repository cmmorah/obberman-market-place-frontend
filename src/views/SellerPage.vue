<template>
  <div class="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:flex lg:max-w-7xl lg:gap-x-8 lg:px-8 lg:pt-4 lg:pb-24">
    <div class="mt-4 lg:row-span-3lg:mt-0">
      <div class="shadow-md p-2">
        <h2 class="sr-only">Product information</h2>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-18 h-18">
          <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd" />
        </svg>
        <div>
          <h2>{{ user.name }}</h2>
          <h4>{{ user.email }}</h4>
        </div>

      </div>


      <!-- Reviews -->
      <div class="shadow-md mt-6 p-2">
        <h3 class="sr-only">Number of Ads</h3>
        <div class="flex items-center">
          <div class="flex items-center">
          </div>
          <p class="sr-only"> out of 5 stars</p>
          <a class="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"> Number of Ads</a>
        </div>
      </div>
    </div>

    <div class="lg:col-span-8 lg:border-gray-200 lg:pr-8 text-center"  style="width: 100%;">
<!--      {{userProduct}}-->

          <h2 class="sr-only">Products</h2>
          <spinner-loader color="black" v-if="loading"/>
          <div v-if="!loading && userProduct?.length > 0"  class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            <product-card @click="addToReview(i)" v-for="i in userProduct" :key="i.id">
              <template v-slot:content>
                <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                  <img :src="i.pictures.split(',')[0]" alt="Hand holding black machined steel mechanical pencil with brass tip and top." class="h-full w-full object-cover object-center group-hover:opacity-75">
                </div>

                <h3 class="mt-4 text-sm text-gray-700">{{i.title }}</h3>

                <p class="mt-1 text-lg font-medium text-gray-900">{{ i.price }}</p>

              </template>
            </product-card>

            <!-- More products... -->
          </div>

          <h3 v-if="!loading && userProduct?.length < 1" class="text-sm text-center font-medium text-gray-900">No Product ads to display here.</h3>


    </div>

  </div>
</template>

<script>
import storeUtils from "../utils/BaseUtils/storeUtils";
import SpinnerLoader from "../components/SpinnerLoader";
import ProductCard from "../components/card/ProductCard";

export default {
  components:{
    SpinnerLoader,
    ProductCard
  },

  methods:{
    addToReview(obj){
      storeUtils.dispatch(storeUtils.actions.app.addForPreview, obj)
    },
  },

  computed:{
    user(){
      return storeUtils.rootGetters(storeUtils.getters.auth.getUser)
    },

    userProduct(){
      return storeUtils.rootGetters(storeUtils.getters.app.getUserProducts)
    },

    loading(){
      return storeUtils.rootGetters(storeUtils.getters.app.getLoading)
    }
  },

  mounted() {
    storeUtils.dispatch(storeUtils.actions.app.readProductsByUserId)
  }

}
</script>

<style scoped>

</style>