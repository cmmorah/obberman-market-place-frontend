<template>
  <div class="bg-white">
    <div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 class="sr-only">Products</h2>
      <div class="md:grid md:grid-cols-3 md:gap-6">
          <div class="md:col-span-1">
            <div class="px-4 sm:px-0">
              <h3 class="text-lg font-medium leading-6 text-gray-900">Post ad</h3>
              <p class="mt-1 text-sm text-gray-600">This information will be displayed publicly so be careful what you share.</p>
              <button @click="toNext" type="submit" class="mt-1 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                {{ step ? 'Next' : 'Back' }}</button>
            </div>
          </div>
        <form @submit.prevent="createProduct" class="mt-5 md:col-span-2 md:mt-0">
          <div v-if="step">
              <div class="shadow sm:overflow-hidden sm:rounded-md">
                <div class="space-y-6 bg-white px-4 py-5 sm:p-6">
                  <div class="grid grid-cols-6 gap-6">
                    <div class="col-span-6 sm:col-span-3">
                      <label for="first-name" class="block text-sm font-medium text-gray-700">Name</label>
                      <input v-model="model2.seller_name" type="text" name="first-name" id="first-name" autocomplete="given-name" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                    </div>

                    <div class="col-span-6 sm:col-span-3">
                      <label for="last-name" class="block text-sm font-medium text-gray-700">Phone</label>
                      <input v-model="model2.seller_phone" type="text" name="last-name" id="last-name" autocomplete="family-name" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                    </div>
                  </div>


                  <div>
                    <h6>Add Photo</h6>
                    <label class="block text-sm font-medium text-gray-700">Add at least 1 photo for this category</label>
                    <div class="mt-1 flex items-center">
                      <span class="inline-block h-24 w-24 overflow-hidden rounded-full bg-gray-100" v-for="(i, index) in uploadedImages" :key="index" :style="{backgroundImage:`url(${i})`,backgroundPosition:'center', backgroundRepeat:'no-repeat', backgroundSize:'cover'}">
<!--                        <img  :src="i" style="object-fit: fill"/>-->
                      <svg v-show="uploadedImages.length < 1" class="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                           <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                       </svg>
                      </span>
                      <span v-show="!loading && uploadedImages.length < 1" class="inline-block h-14 w-14 overflow-hidden rounded-full bg-gray-100">
                      <svg  class="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                           <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                       </svg>
                      </span>
                    </div>
                  </div>

                  <div>
                    <label class="block text-sm font-medium text-gray-700">Cover photo</label>
                    <div class="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                      <div class="space-y-1 text-center">
                        <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                          <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <spinner-loader color="black" v-show="loading"/>
                        <div v-show="!loading" class="flex text-sm text-gray-600">
                          <label for="file-upload" class="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500">
                            <span>Upload a file</span>
                            <input id="file-upload" name="file-upload" type="file" accept="image/*"  class="sr-only"  @change="uploadFile"/>
                          </label>
                          <p class="pl-1">or drag and drop</p>
                        </div>
                        <p class="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
          <div v-else >
              <div class="shadow sm:overflow-hidden sm:rounded-md">
                <div class="space-y-6 bg-white px-4 py-5 sm:p-6">
                  <div class="grid grid-cols-6 gap-6">
                    <div class="col-span-6 sm:col-span-3">
                      <label for="first-name" class="block text-sm font-medium text-gray-700">Title</label>
                      <input v-model="model2.title" type="text" name="first-name" id="Second-first-name" autocomplete="given-name" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                    </div>

                    <div class="col-span-6 sm:col-span-3">
                      <label for="last-name" class="block text-sm font-medium text-gray-700">Brand</label>
                      <input v-model="model2.brand" type="text" name="last-name" id="Second-last-name" autocomplete="family-name" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                    </div>
                  </div>

                  <div class="grid grid-cols-6 gap-6">
                    <div class="col-span-6 sm:col-span-3">
                      <label for="Price" class="block text-sm font-medium text-gray-700">Price</label>
                      <input v-model="model2.price" type="text" name="first-name" id="Price" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                    </div>

                    <div class="col-span-6 sm:col-span-3">
                      <label for="condition" class="block text-sm font-medium text-gray-700">Condition</label>
                      <input v-model="model2.condition" type="text" name="last-name" id="condition" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                    </div>
                  </div>

                  <div class="grid grid-cols-6 gap-6">
                    <div class="col-span-6 sm:col-span-3">
                      <label for="first-name" class="block text-sm font-medium text-gray-700">Location</label>
                      <select v-model="model2.location" name="first-name" id="location"  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" >
                        <option>FCT/Abuja</option>
                        <option>Lagos</option>
                      </select>
                    </div>
                    <div class="col-span-6 sm:col-span-3">
                      <label for="category" class="block text-sm font-medium text-gray-700">Category</label>
                      <select v-model="model2.category" name="first-name" id="category"  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" >
                        <option>Agriculture/Farm</option>
                        <option>Clothing</option>
                        <option>Food</option>
                      </select>
                    </div>
                  </div>

                  <div class="grid grid-cols-6 gap-6">
                    <div class="col-span-6 sm:col-span-3">
                      <label for="description" class="block text-sm font-medium text-gray-700">Description</label>
                      <input v-model="model2.description" type="text" name="description" id="description"  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" >
                    </div>
                    <div class="col-span-6 sm:col-span-3">
                      <label for="description" class="block text-sm font-medium text-gray-700">Link to youtube video</label>
                      <input v-model="model2.youtube_link" type="text" name="description" id="company-website"  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" >
                      </div>
                  </div>




                  <!--                  <div class="grid grid-cols-3 gap-6">-->
<!--                    <div class="col-span-3 sm:col-span-2">-->
<!--                      <label for="company-website" class="block text-sm font-medium text-gray-700">Price</label>-->
<!--                      <div class="mt-1 flex rounded-md shadow-sm">-->
<!--                        <span class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">http://</span>-->
<!--                        <input v-model="model2.price" type="text" name="company-website" id="company-website" class="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="www.example.com" />-->
<!--                      </div>-->
<!--                    </div>-->
<!--                    <div class="col-span-3 sm:col-span-2">-->
<!--                      <label for="company-website" class="block text-sm font-medium text-gray-700">Price</label>-->
<!--                      <div class="mt-1 flex rounded-md shadow-sm">-->
<!--                        <span class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">http://</span>-->
<!--                        <input v-model="model2.price" type="text" name="company-website" id="company-website" class="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="www.example.com" />-->
<!--                      </div>-->
<!--                    </div>-->
<!--                  </div>-->
                </div>
              </div>
              <div class="px-4 py-3 text-right sm:px-6">
                <button  type="submit" class="mt-1 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                  Post Ad</button>
              </div>
          </div>
        </form>
      </div>

    </div>

  </div>
</template>


<script>
import storeUtils from "../utils/BaseUtils/storeUtils";
import AppRequest from "../model/request/AppRequest";
import SpinnerLoader from "../components/SpinnerLoader";
import { Listbox, ListboxButton, ListboxLabel, ListboxOption, ListboxOptions } from '@headlessui/vue'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/vue/20/solid'

export default {
  name: "AddFreeAds",
  components:{SpinnerLoader},
  setup(){

  },
  data(){
    return{
      step:true,
      model:AppRequest.createDocument,
      model2:AppRequest.createProduct,
    }
  },
  methods:{
    createProduct(){
      this.model2.pictures = this.uploadedImages.toString()
      this.model2.user_id = this.user.id
      storeUtils.dispatch(storeUtils.actions.app.createProducts, this.model2).then(() => {
        Object.keys(this.model2).forEach(key => {
          return this.model2[key] = null
        })
      })
    },
    toNext(){
      this.step = !this.step
    },
    uploadFile(event) {
      this.handleUpload(event)
    },

    async handleUpload(event) {
      const file = event.target.files[0];
      const reader = new FileReader();
      try {
        reader.onload = async e => {
          this.model.fileUpload.base64 = e.target.result
          this.model.fileUpload.username = file.name.replace(" ","-").toLowerCase()
          await storeUtils.dispatch(storeUtils.actions.app.uploadTos3bucket, this.model.fileUpload)
        };
        reader.readAsDataURL(file);
      } catch (e) {
        console.warn(e.message)
      }
    },
  },

  computed:{
    uploadedImages(){
      return storeUtils.rootGetters(storeUtils.getters.app.getUploadedImage)
    },
    loading(){
      return this.$store.state.app.imageUploadLoading
    },
    user(){
      return storeUtils.rootGetters(storeUtils.getters.auth.getUser)
    }
  }
}
</script>

<style scoped>

</style>