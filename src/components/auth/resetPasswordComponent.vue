<script setup>

import resetImage from "@/assets/auth/forgot-password.png";
import {useRoute, useRouter} from "vue-router";
import {validateInput, validateOnInput} from "@/utils/validateInput";
import {ref} from "vue";
import {authApi} from "@/utils";

const route = useRoute()
const router = useRouter()

const {token} = route.params
const newPassword = ref('')
const confirmPassword = ref('')
const isSuccess = ref('')
const isError = ref('')
const isLoading = ref(false)
const errors = ref({
  newPassword: {},
  confirmPassword: {}
})

const handleSubmit = async () => {
  const isValid = validateInput([
    {name: 'newPassword', value: newPassword},
    {name: 'confirmPassword', value: confirmPassword}
  ], errors)

  if (!isValid) return

  try {
    isLoading.value = true
    const data = {
      newPassword: newPassword.value,
      confirmPassword: confirmPassword.value,
      token
    }
    const response = await authApi.post('/reset-password', data)
    if (response?.status === 200) {
      isSuccess.value = response.data.msg || "Password reset successfully"

      setTimeout(() => {
        router.replace('/login')
      }, 1500)
    }
    isLoading.value = false
  } catch (e) {
    isLoading.value = false
    isError.value = e?.response?.data?.error
  }
  console.log(isValid)
}

</script>

<template>
  <div class="flex w-screen h-screen">
    <div class="image">
      <img :src="resetImage" alt="">
    </div>
    <div class="form-container justify-center">
      <form @submit.prevent="handleSubmit" class="form">
        <h1 class="header1">Reset Password</h1>
        <h2 class="text-[#A6A6A6]">"Looks like you forgot your password, no worries- hit that reset button and let's get you back in!"</h2>
        <div class="auth-form-control">
          <label for="new-password">New Password</label>
          <input @input="validateOnInput({value: newPassword, name: 'newPassword', error: errors})" type="password" name="new-password" id="new-password" placeholder="********" v-model="newPassword">
          <p v-if="errors.newPassword.isError" class="error">{{errors.newPassword.message}}</p>
        </div>
        <div class="auth-form-control">
          <label for="confirm-password">Confirm Password</label>
          <input @input="validateOnInput({value: confirmPassword, name: 'confirmPassword', error: errors})" type="password" name="confirm-password" id="confirm-password" placeholder="********" v-model="confirmPassword">
          <p v-if="errors.confirmPassword.isError" class="error">{{errors.confirmPassword.message}}</p>
        </div>
        <p class="success" v-if="!!isSuccess">{{isSuccess}}</p>
        <p class="error" v-if="!!isError">{{isError}}</p>
        <base-button class="mt-4">{{isLoading ? 'Resetting...' : 'Reset'}}</base-button>
      </form>
    </div>
  </div>
</template>

<style scoped>

</style>