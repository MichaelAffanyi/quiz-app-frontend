<script setup>
import '@/views/authStyles.css'
import signupHeader from "@/components/auth/signupHeader.vue";
import registerImage from "@/assets/auth/register.png";
import googleIcon from "@/assets/auth/google.svg";
import {useStore} from "vuex";
import {ref} from "vue";

const store = useStore()
const name = ref('')
const email = ref('')
const password = ref('')
const handleSubmit = () => {
  const newUser = {
    name: name.value,
    email: email.value,
    password: email.value
  }
  console.log(newUser)
}


</script>

<template>
  <div class="flex w-screen h-screen">
    <div class="image">
      <img :src="registerImage" alt="">
    </div>
    <div class="form-container">
      <signup-header></signup-header>
      <form class="form" @submit.prevent="handleSubmit">
        <h1 class="header1">Create Account</h1>
        <div class="auth-form-control">
          <label for="name">Name</label>
          <input type="text" name="name" id="name" placeholder="Enter your name" v-model="name">
        </div>
        <div class="auth-form-control">
          <label for="email">Email</label>
          <input type="text" name="email" id="email" placeholder="Enter your email" v-model="email">
        </div>
        <div class="auth-form-control">
          <label for="password">Password</label>
          <input type="password" name="password" id="password" placeholder="********" v-model="password">
        </div>
        <base-button class="mt-4" type="submit">Create Account</base-button>
        <span class="w-full border rounded-md flex items-center gap-8 pl-16 py-2 cursor-pointer">
          <img :src="googleIcon" alt="">
          Sign up with Google
        </span>
        <h2 class="text-[#A6A6A6] text-center">
          Already have an account?
          <router-link to="/login" class="font-semibold text-[#0267FF] cursor-pointer">Login</router-link>
        </h2>
      </form>
    </div>
  </div>
</template>

<style scoped>

</style>