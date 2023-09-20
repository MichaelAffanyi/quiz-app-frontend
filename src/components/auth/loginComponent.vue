<script setup>
import '@/views/authStyles.css'
  import loginImage from "@/assets/auth/login.png"
  import {useStore} from "vuex";
  import {inject} from "vue";

  const store = useStore()
  let comp = inject('comp')
  const handleClick = () => {
    store.commit('setActiveComponent', 'register')
  }

</script>

<template>
  <div class="flex w-screen h-screen">
    <div class="image">
      <img :src="loginImage" alt="">
    </div>
    <div class="form-container justify-center">
      <form class="form">
        <h1 class="header1">Log in</h1>
        <h2 class="text-[#A6A6A6]">
          New member?
          <router-link to="/register" class="font-semibold text-[#0267FF] cursor-pointer" @click="handleClick">Sign up</router-link>
        </h2>
        <div class="auth-form-control">
          <label for="email">Email</label>
          <input type="text" name="email" id="email" placeholder="Enter your email">
        </div>
        <div class="auth-form-control">
          <label for="password">Password</label>
          <input type="password" name="password" id="password" placeholder="********">
        </div>
        <div class="w-full flex gap-4 -mt-4">
          <div>
            <input type="checkbox" name="remember-me" id="remember-me" class="cursor-pointer"/>
          </div>
          <label for="remember-me">Remember Me</label>
          <span class="ml-auto text-[#0267FF] cursor-pointer">Forgot password?</span>
        </div>
        <base-button class="mt-4">Create Account</base-button>
      </form>
    </div>
  </div>
</template>

<style scoped>

</style>