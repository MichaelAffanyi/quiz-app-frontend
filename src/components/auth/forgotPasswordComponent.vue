<script setup>
import resetImage from "@/assets/auth/forgot-password.png";
import {validateInput, validateOnInput} from "@/utils/validateInput";
import {ref} from "vue";
import {authApi} from "@/utils";

const email = ref('')
const isSuccess = ref('')
const isLoading= ref(false)
const error = ref({
  email: {}
})

const handleSubmit = async () => {
  const isValid = validateInput([
    {name: 'email', value: email}
  ], error)
  if(!isValid) return

  try {
    isLoading.value = true
    const res = await authApi.post('/forgot-password', {email: email.value})
    isSuccess.value = res?.data?.msg
    isLoading.value = false
  } catch (e) {
    isLoading.value = false
  }
}

// const onInput = (event) => {
//   validateOnInput(event)
// }
</script>

<template>
  <div class="flex w-screen h-screen">
    <div class="image">
      <img :src="resetImage" alt="">
    </div>
    <div class="form-container justify-center">
      <form @submit.prevent="handleSubmit" class="form">
        <h1 class="header1">Forgot Password</h1>
        <h2 class="text-[#A6A6A6]">"Oops, I totally forgot my password - time for a quick reset!"</h2>
        <div class="auth-form-control">
          <label for="email">Email</label>
          <input v-model="email" type="text" name="email" id="email" placeholder="Enter your email">
          <p class="error mt-2" v-if="error.email.isError">{{error.email.message}}</p>
          <p class="success mt-2" v-if="!!isSuccess">{{isSuccess}}</p>
        </div>
        <base-button class="mt-4">{{isLoading ? 'Sending reset link...' : 'Next'}}</base-button>
      </form>
    </div>
  </div>
</template>

<style scoped>

</style>