<script setup>
import logo from '@/assets/logo.svg'
import {useStore} from "vuex";
import {useRouter} from "vue-router";
const store = useStore()
const router = useRouter()
const handleClick = () => {
  store.dispatch('setActive', 'login')
  router.push('/auth')
}
// const accessToken = cookies.get('accessToken')
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
    <section class="flex gap-6 items-center">
      <router-link to="/login" class="text-[#0267FF] cursor-pointer hover:bg-blue-50 p-2 rounded-lg" >Login</router-link>
      <router-link to="/register" class="bg-[#0267FF] p-2 text-white rounded-md hover:opacity-75">Register</router-link>
    </section>
  </div>
</template>

<style scoped>

</style>