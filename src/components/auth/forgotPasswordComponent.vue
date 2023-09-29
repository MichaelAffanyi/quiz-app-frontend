<script setup>
import resetImage from "@/assets/auth/forgot-password.png";
</script>

<template>
  <div class="flex w-screen h-screen">
    <div class="image">
      <img :src="resetImage" alt="">
    </div>
    <div class="form-container justify-center">
      <form class="form">
        <h1 class="header1">Forgot Password</h1>
        <h2 class="text-[#A6A6A6]">"Oops, I totally forgot my password - time for a quick reset!"</h2>
        <div class="auth-form-control">
          <label for="email">Email</label>
          <input type="text" name="email" id="email" placeholder="Enter your email">
        </div>
        <base-button class="mt-4">Next</base-button>
      </form>
    </div>
  </div>
</template>

<style scoped>

</style>