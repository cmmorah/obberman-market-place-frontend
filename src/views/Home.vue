<template>
  <div>
    <!-- Jumbotron -->
    <div class="p-4 text-center bg-white" style="background-color: rgba(7,7,7,0.62) !important;">
      <h1 class="mx-5 my-5 text-white">Find anything on Shop mall</h1>
      <div class="mx-5 my-5">
        <div class="flex justify-center mx-5 my-5">
          <div class="mb-3 xl:w-96 mx-2 my-2" style="width: 50%">
            <div class="relative mb-4 flex w-full flex-wrap items-stretch">
              <input
                  type="search"
                  class="relative m-0 -mr-px block w-[1%] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-3 text-base font-normal text-neutral-700 outline-none transition duration-300 ease-in-out focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:text-neutral-200 dark:placeholder:text-neutral-200"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="button-addon1" />
              <button
                  class="relative z-[2] flex items-center rounded-r bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
                  type="button"
                  id="button-addon1"
                  data-te-ripple-init
                  data-te-ripple-color="light">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="h-5 w-5">
                  <path
                      fill-rule="evenodd"
                      d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                      clip-rule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Jumbotron -->

    <!-- Products Start -->
    <div class="bg-white">
      <div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 class="sr-only">Products</h2>
        <spinner-loader color="black" v-show="loading"/>
        <div v-if="Products?.data?.length > 0"  class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            <product-card  @click="addToReview(i)" v-for="i in Products.data" :key="i.id">
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
          <div v-else style="width: 100%">
            <h1 class="mx-5 my-5 text-black text-center">No Products Available</h1>
          </div>
      </div>
    </div>
    <!-- Products End -->
  </div>
</template>

<script>
// @ is an alias to /src
import products from "../PayloadSimulation/products";
import ProductCard from "../components/card/ProductCard";
import storeUtils from "../utils/BaseUtils/storeUtils";
import {Toast} from "../components/NotificationToast";
import SpinnerLoader from "../components/SpinnerLoader";


export default {
  name: 'Home',
  components: {ProductCard,SpinnerLoader},
  data(){
    return{
      products:products
    }
  },
  methods:{
    addToCart(obj){
      storeUtils.dispatch(storeUtils.actions.store.addToCartAction, obj).then(() => {
        Toast.fire({text:'Successfully Added To Cart',icon:'success'})
      })
    },
    addToReview(obj){
      storeUtils.dispatch(storeUtils.actions.app.addForPreview, obj)
    },
  },
  computed:{
    Products(){
      return storeUtils.rootGetters(storeUtils.getters.app.getProducts)
    },

    loading(){
      return storeUtils.rootGetters(storeUtils.getters.app.getLoading)
    },
  },
  mounted() {
    storeUtils.dispatch(storeUtils.actions.app.readProducts)
  }
}
</script>
