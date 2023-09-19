<script setup>
import logo from '@/assets/logo.svg'
</script>

<template>
  <div class="flex justify-between items-center py-4 px-16">
    <div class="cursor-pointer">
      <img :src="logo" alt="logo">
    </div>
    <nav class="text-[#0267FF] flex gap-14 items-center">
      <span class="cursor-pointer hover:font-bold">Home</span>
      <span class="cursor-pointer hover:font-bold">Services</span>
      <span class="cursor-pointer hover:font-bold">About Us</span>
      <span class="cursor-pointer hover:font-bold">Contact Us</span>
    </nav>
    <section class="flex gap-6 items-center">
      <router-link to="/auth" class="text-[#0267FF] cursor-pointer hover:bg-blue-50 p-2 rounded-lg">Login</router-link>
      <button class="bg-[#0267FF] p-2 text-white rounded-md hover:opacity-75">Register</button>
    </section>
  </div>
</template>

<style scoped>

</style>