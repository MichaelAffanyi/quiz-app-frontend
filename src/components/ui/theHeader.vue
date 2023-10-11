<script setup>
import logo from '@/assets/logo.svg'
import {useStore} from "vuex";
import {useRouter} from "vue-router";
import {computed, ref} from "vue";
import {authApi} from "@/utils";
const store = useStore()
const router = useRouter()
const handleClick = (link) => {
  router.push(link)
  toggleOpen()
}

const handleLogout = async () => {
  // console.dir(document)
  await authApi('/logout')
  location.reload()
}

const toggleOpen = (event) => {
  // console.log(event)
  isOpen.value = !isOpen.value
}

const isOpen = ref(false)

const user = store.getters.getUser
const hasUser = Object.keys(user).length > 0

// const hasUser = Object.keys(user).length > 0
</script>

<template>
  <div class="h-[72px] flex justify-between items-center px-16">
    <router-link to="/" class="cursor-pointer">
      <img :src="logo" alt="logo">
    </router-link>
    <nav class="text-[#0267FF] flex gap-14 items-center">
      <span class="cursor-pointer hover:font-bold">Home</span>
      <span class="cursor-pointer hover:font-bold">Services</span>
      <span class="cursor-pointer hover:font-bold">About Us</span>
      <span class="cursor-pointer hover:font-bold">Contact Us</span>
    </nav>
    <section v-if="hasUser" class="relative flex gap-6 items-center">
      <h3>Hello {{user.name}}</h3>
      <div @click="toggleOpen" class="w-14 h-14 rounded-full bg-red-200 overflow-hidden cursor-pointer">
        <img :src="user?.profilePhoto" alt="" class="w-full h-full object-cover">
      </div>
      <div class="absolute right-0 bottom-0 w-4 h-4 rounded-full bg-green-500 border-2 border-white"></div>
      <div v-if="isOpen" class="absolute min-w-[276px] top-20 right-0 px-6 py-4 bg-white rounded-lg shadow-xl z-30">
        <div class="flex gap-4 items-center mb-6">
          <div class="w-14 h-14 rounded-full bg-red-200 overflow-hidden">
            <img :src="user?.profilePhoto" alt="" class="w-full h-full object-cover">
          </div>
          <span class="w-max">{{user?.name}}</span>
        </div>
        <h4 @click="handleClick('/dashboard/profile')" class="border-b px-2 py-3 cursor-pointer hover:bg-gray-100 hover:rounded-lg">Profile</h4>
        <h4 @click="handleClick('/dashboard/profile/account-settings')" class="border-b px-2 py-3 cursor-pointer hover:bg-gray-100 hover:rounded-lg">Account Settings</h4>
        <h4 @click="handleLogout" class="py-3 px-2 cursor-pointer hover:bg-gray-100 hover:rounded-lg">Logout</h4>
      </div>
    </section>
    <section v-else class="flex gap-6 items-center">
      <router-link to="/login" class="text-[#0267FF] cursor-pointer hover:bg-blue-50 p-2 rounded-lg" >Login</router-link>
      <router-link to="/register" class="bg-[#0267FF] p-2 text-white rounded-md hover:opacity-75">Register</router-link>
    </section>
  </div>
</template>

<style scoped>

</style>