<!--
  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
-->
<template>
  <div class="bg-white">
    <!-- Mobile menu -->
    <TransitionRoot as="template" :show="open">
      <Dialog as="div" class="relative z-40 lg:hidden" @close="open = false">
        <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100" leave-to="opacity-0">
          <div class="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>

        <div class="fixed inset-0 z-40 flex">
          <TransitionChild as="template" enter="transition ease-in-out duration-300 transform" enter-from="-translate-x-full" enter-to="translate-x-0" leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0" leave-to="-translate-x-full">
            <DialogPanel class="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
              <div class="flex px-4 pt-5 pb-2">
                <button type="button" class="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400" @click="open = false">
                  <span class="sr-only">Close menu</span>
                  <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              <!-- Links -->


              <div class="space-y-6 border-t border-gray-200 py-6 px-4">
                <div v-for="page in pages" :key="page.name" class="flow-root">
                  <a :href="page.href" class="-m-2 block p-2 font-medium text-gray-900">{{ page.name }}</a>
                </div>
              </div>

              <div class="space-y-6 border-t border-gray-200 py-6 px-4">
                <div class="flow-root">
                  <span  @click="showLoginModal()" class="-m-2 block p-2 font-medium text-gray-900">Sign in</span>
                </div>
                <div class="flow-root">
                  <span @click="showEnrollModal()" class="-m-2 block p-2 font-medium text-gray-900">Create account</span>
                </div>
              </div>

              <div class="border-t border-gray-200 py-6 px-4">
                <a href="#" class="-m-2 flex items-center p-2">
                  <img src="https://tailwindui.com/img/flags/flag-canada.svg" alt="" class="block h-auto w-5 flex-shrink-0" />
                  <span class="ml-3 block text-base font-medium text-gray-900">CAD</span>
                  <span class="sr-only">, change currency</span>
                </a>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </TransitionRoot>

    <header class="relative bg-white">
      <p class="flex h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">Get free delivery on orders over $100</p>

      <nav aria-label="Top" class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="border-b border-gray-200">
          <div class="flex h-16 items-center">
            <button type="button" class="rounded-md bg-white p-2 text-gray-400 lg:hidden" @click="open = true">
              <span class="sr-only">Open menu</span>
              <Bars3Icon class="h-6 w-6" aria-hidden="true" />
            </button>

            <!-- Logo -->
            <div class="ml-4 flex lg:ml-0">
              <router-link to="/">
                <span class="sr-only">Your Company</span>
                <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
              </router-link>
            </div>

            <!-- Flyout menus -->

            <div class="ml-auto flex items-center">
              <div v-show="!users()" class="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                <span @click="showLoginModal()" class="text-sm font-medium text-gray-700 hover:text-gray-800">Sign in</span>
                <span class="h-6 w-px bg-gray-200" aria-hidden="true" />
                <span class="text-sm font-medium text-gray-700 hover:text-gray-800" @click="showEnrollModal()">Create account</span>
              </div>

              <div class="hidden lg:ml-8 lg:flex">
                <a href="#" class="flex items-center text-gray-700 hover:text-gray-800">
                  <img src="https://tailwindui.com/img/flags/flag-canada.svg" alt="" class="block h-auto w-5 flex-shrink-0" />
                  <span class="ml-3 block text-sm font-medium">CAD</span>
                  <span class="sr-only">, change currency</span>
                </a>
              </div>

              <!-- Search -->
              <div class="flex lg:ml-6">
                <router-link to="/add-free-ad"><button
                    type="button"
                    class="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-black-50 shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
                  Sell
                </button></router-link>
              </div>

              <!-- Cart -->
              <div v-show="users()" class="ml-4 flow-root lg:ml-6">
                <Menu as="div" class="relative inline-block text-left">
                  <div>
                    <MenuButton class="inline-flex w-full justify-center rounded-md bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8">
                        <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd" />
                      </svg>
<!--                      <ChevronDownIcon class="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />-->
                    </MenuButton>
                  </div>

                  <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                    <MenuItems class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
<!--                      <div class="py-1">-->
<!--                        <MenuItem v-slot="{ 'active' }">-->
<!--                          <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Account settings</a>-->
<!--                        </MenuItem>-->
<!--                        <MenuItem v-slot="{ active }">-->
<!--                          <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Support</a>-->
<!--                        </MenuItem>-->
<!--                        <MenuItem v-slot="{ active }">-->
<!--                          <a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">License</a>-->
<!--                        </MenuItem>-->
<!--                        <form method="POST" action="#">-->
<!--                          <MenuItem v-slot="{ active }">-->
<!--                            <button type="submit" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block w-full px-4 py-2 text-left text-sm']">Sign out</button>-->
<!--                          </MenuItem>-->
<!--                        </form>-->
<!--                      </div>-->
                      <div class="py-1">
                        <MenuItem>
                          <h3 class="text-gray-700 block px-4 py-2 text-sm">{{users().name}}</h3>
                        </MenuItem>
                        <MenuItem>
                          <router-link to="/sellerpage" class="text-gray-700 block px-4 py-2 text-sm">Profile</router-link>
                        </MenuItem>
                        <MenuItem>
                          <h3 @click="logout" to="/sellerpage" class="text-gray-700 block px-4 py-2 text-sm">Log out</h3>
                        </MenuItem>
                      </div>
                    </MenuItems>
                  </transition>
                </Menu>

              </div>
            </div>
          </div>
        </div>
      </nav>

    </header>
  </div>
</template>

<script setup>
import {  ref } from 'vue'
import {computed} from "vue";
import storeUtils from "../utils/BaseUtils/storeUtils";
import {
  Dialog,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  TransitionChild,
  TransitionRoot,
  Menu, MenuButton, MenuItem, MenuItems
} from '@headlessui/vue'

import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/vue/24/outline'
const open = ref(false)


function showLoginModal(){ storeUtils.commit(storeUtils.mutations.app.updateAuth, 'signin')}
function showEnrollModal(){
  storeUtils.commit(storeUtils.mutations.app.updateAuth, 'enroll')
  computed(() => console.log(storeUtils.rootGetters(storeUtils.getters.app.getAuth)))
}

function users(){
  return storeUtils.rootGetters(storeUtils.getters.auth.getUser)
}

function logout(){
   storeUtils.dispatch(storeUtils.actions.auth.authLogout)
}

</script>