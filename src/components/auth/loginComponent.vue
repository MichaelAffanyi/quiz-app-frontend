<script setup>
  import loginImage from "@/assets/auth/login.png"
  import {useStore} from "vuex";
  import {inject, ref} from "vue";
  import {authApi} from "@/utils";
  import {validateInput, validateOnInput} from "@/utils/validateInput";
  import {useRouter} from "vue-router";
  import Cookie from 'js-cookie'
  import axios from "axios";

  const store = useStore()
  const router = useRouter()
  const email = ref('')
  const password = ref('')
  const rememberMe = ref(false)
  const error = ref({
    email: {
      isError: false,
      message: ''
    },
    password: {
      isError: false,
      message: ''
    },
  })
  const isError = ref(false)
  const isLoading = ref(false)

  const handleSubmit = async () => {
    isLoading.value = true
    const isValid = validateInput(
    [
        {name: 'email', value: email},
        {name: 'password', value: password}],
      error)

    if(!isValid) {
      return
    }
    try {
      const user = {
        email: email.value,
        password: password.value,
        rememberMe: rememberMe.value
      }
      const res = await authApi.post('/login', user)
      // console.log(res.headers)
      if(res?.status === 200) {
        isLoading.value = false
        const cookie = res.data.token
        Cookie.set('accessToken', cookie, {expires: 1})
        router.push('/dashboard/profile')
      }
    } catch (e) {
      isError.value = true
      isLoading.value = false
      console.log(e)
    }
  }

</script>

<template>
  <div class="flex w-screen h-screen overflow-hidden">
    <div class="image">
      <img :src="loginImage" alt="">
    </div>
    <div class="form-container justify-center">
      <form class="form" @submit.prevent="handleSubmit">
        <h1 class="header1">Log in</h1>
        <h2 class="text-[#A6A6A6]">
          New member?
          <router-link to="/auth/register" class="font-semibold text-[#0267FF] cursor-pointer">Sign up</router-link>
        </h2>
        <div class="auth-form-control">
          <label for="email">Email</label>
          <input
              type="text"
              name="email" id="email"
              placeholder="Enter your email"
              v-model="email"
              @input="validateOnInput({value: $event.target.value, name: $event.target.name, error})"
              :class="{errorInput: error.email.isError}"
          >
          <p class="error" v-if="error.email.isError">{{error.email.message}}</p>
        </div>
        <div class="auth-form-control">
          <label for="password">Password</label>
          <input
              type="password"
              name="password"
              id="password"
              placeholder="********"
              v-model="password"
              @input="validateOnInput({value: $event.target.value, name: $event.target.name, error})"
              :class="{errorInput: error.password.isError}"
          >
          <p class="error" v-if="error.password.isError">{{error.password.message}}</p>
        </div>
        <div class="w-full flex gap-4 -mt-4">
          <div>
            <input
                type="checkbox"
                name="remember-me"
                id="remember-me"
                class="cursor-pointer"
                v-model="rememberMe"
            />
          </div>
          <label for="remember-me">Remember Me</label>
          <router-link to="/auth/reset-password" class="ml-auto text-[#0267FF] cursor-pointer">Forgot password?</router-link>
        </div>
        <p v-if="isError" class="error max-w-[285px]">Oops! Your email or password appears to be incorrect. Please double-check your login details and try again.</p>
        <base-button class="mt-4">{{isLoading ? 'Loading...' : 'Log in'}}</base-button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.error {
  color: #FF4D4D;
  font-size: 14px;
}
.errorInput {
  border: 1px solid #FF4D4D;
}
</style>