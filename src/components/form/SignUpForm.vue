<template>
  <TransitionRoot as="template" :show="open">
    <Dialog as="div" class="relative z-10" @close="open = false">
      <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      </TransitionChild>

      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
            <DialogPanel class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div class="w-full max-w-md space-y-8">
                  <div>
                    <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
                    <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Create your account</h2>
                    <p class="mt-2 text-center text-sm text-gray-600">
                      <span v-if="isOtpScreen()" class="font-medium text-indigo-600 hover:text-indigo-500">otp was sent to your email</span>
                    </p>
                  </div>
                  <form v-if="!isOtpScreen()" class="mt-8 space-y-6" @submit.prevent="initiateEnrollment">
                    <input type="hidden" name="remember" value="true" />
                    <div class="-space-y-px rounded-md shadow-sm">
                      <div>
                        <label for="email-address" class="sr-only">Email address</label>
                        <input id="email-address" v-model="AuthRequest.initiateEnrolment.email" name="email" type="email" autocomplete="email" required class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Email address" />
                      </div>
                      <br />
                      <div>
                        <label for="text" class="sr-only">Name</label>
                        <input id="text" v-model="AuthRequest.initiateEnrolment.name" name="text" type="text"  required class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Name" />
                      </div>
                    </div>

<!--                    <div class="flex items-center justify-between">-->
<!--                      <div class="flex items-center">-->
<!--                        <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />-->
<!--                        <label for="remember-me" class="ml-2 block text-sm text-gray-900">Remember me</label>-->
<!--                      </div>-->

<!--                      <div class="text-sm">-->
<!--                        <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">Forgot your password?</a>-->
<!--                      </div>-->
<!--                    </div>-->

                    <div>
                      <button type="submit" class="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                        <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                          <LockClosedIcon class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                        </span>
                        Proceed
                      </button>
                    </div>
                  </form>
                  <form v-else class="mt-8 space-y-6" @submit.prevent="completeEnrollment">
                    <div class="-space-y-px rounded-md shadow-sm">
                      <div>
                        <label for="otp" class="sr-only">OTP</label>
                        <input id="otp" v-model="AuthRequest.completeEnrolment.otp" name="otp" type="text"  required class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="OTP" />
                      </div>
                      <br />
                      <div>
                        <label for="text">Password</label>
                        <input id="password" v-model="AuthRequest.completeEnrolment.password" name="password" type="password"  required class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="******" />
                      </div>
                      <br />
                      <div>
                        <label for="text">Confirm Password</label>
                        <input id="comfirmPassword" v-model="AuthRequest.completeEnrolment.passwordConfirmation" name="password" type="password"  required class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="******" />
                      </div>
                    </div>

                    <div>
                      <button type="submit" class="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                        <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                          <LockClosedIcon class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                        </span>
                        Proceed
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <!--                <button type="button" class="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm" @click="open = false">Deactivate</button>-->
                <button type="button" class="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" @click="open = false, closeAuthModel()" ref="cancelButtonRef">Cancel</button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>


<script setup>
import { ref } from 'vue'
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { ExclamationTriangleIcon } from '@heroicons/vue/24/outline'
import storeUtils from "../../utils/BaseUtils/storeUtils";
import AuthRequest from "../../model/request/AuthRequest";

const open = ref(true)


function closeAuthModel(){ storeUtils.commit(storeUtils.mutations.app.updateAuth, null)}

function initiateEnrollment(){
  storeUtils.dispatch(storeUtils.actions.auth.authInitiateEnrollment, AuthRequest.initiateEnrolment)
}

function completeEnrollment(){
  storeUtils.dispatch(storeUtils.actions.auth.authCompleteEnrollment, AuthRequest.completeEnrolment)
}

function loading(){
  storeUtils.rootGetters(storeUtils.getters.auth.getLoading)
}

function isOtpScreen(){
  return storeUtils.rootGetters(storeUtils.getters.auth.getOtpScreen)
}


</script>