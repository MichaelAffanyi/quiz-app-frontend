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
        <h1 class="header1">Reset Password</h1>
        <h2 class="text-[#A6A6A6]">"Looks like you forgot your password, no worries- hit that reset button and let's get you back in!"</h2>
        <div class="auth-form-control">
          <label for="new-password">New Password</label>
          <input type="password" name="new-password" id="new-password" placeholder="********">
        </div>
        <div class="auth-form-control">
          <label for="confirm-password">Confirm Password</label>
          <input type="password" name="confirm-password" id="confirm-password" placeholder="********">
        </div>
        <base-button class="mt-4">Reset</base-button>
      </form>
    </div>
  </div>
</template>

<style scoped>

</style>