<script setup>
import signupHeader from "@/components/auth/signupHeader.vue";
import registerImage from "@/assets/auth/register.png";
import googleIcon from "@/assets/auth/google.svg";
</script>

<template>
  <div class="flex w-screen h-screen">
    <div class="image">
      <img :src="registerImage" alt="">
    </div>
    <div class="form">
      <signup-header></signup-header>
      <form>
        <h1>Create Account</h1>
        <div class="form-control">
          <label for="name">Name</label>
          <input type="text" name="name" id="name" placeholder="Enter your name">
        </div>
        <div class="form-control">
          <label for="email">Email</label>
          <input type="text" name="email" id="email" placeholder="Enter your email">
        </div>
        <div class="form-control">
          <label for="password">Password</label>
          <input type="password" name="password" id="password" placeholder="********">
        </div>
        <base-button class="mt-4">Create Account</base-button>
        <span class="w-full border rounded-md flex items-center gap-8 pl-16 py-2 cursor-pointer">
          <img :src="googleIcon" alt="">
          Sign up with Google
        </span>
        <h2 class="text-[#A6A6A6] text-center">
          Already have an account?
          <span class="font-semibold text-[#0267FF] cursor-pointer">Login</span>
        </h2>
      </form>
    </div>
  </div>
</template>

<style scoped>

</style>