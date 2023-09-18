<script setup>
import logo from '@/assets/logo.svg'
</script>

<template>
  <div class="static flex justify-between items-center py-4 px-16">
    <div class="cursor-pointer">
      <img :src="logo" alt="logo">
    </div>
    <nav class="text-[#0267FF] flex gap-14 items-center">
      <span class="cursor-pointer hover:font-bold">Home</span>
      <span class="cursor-pointer hover:font-bold">Services</span>
      <span class="cursor-pointer hover:font-bold">About Us</span>
      <span class="cursor-pointer hover:font-bold">Contact Us</span>
    </nav>
    <section class="flex gap-8 items-center">
      <span class="text-[#0267FF] cursor-pointer">Login</span>
      <button class="bg-[#0267FF] p-2 text-white rounded-md">Register</button>
    </section>
  </div>
</template>

<style scoped>

</style>