<script setup>

import {validateInput, validateOnInput} from "@/utils/validateInput";
import {ref} from "vue";
import {settingsApi} from "@/utils";
import {handleInput} from "@/utils/helpers";
const oldPassword = ref('')
const newPassword = ref('')
const confirmPassword = ref('')
const isLoading = ref(false)
const isSuccess = ref('')
const isError = ref('')
const errors = ref({oldPassword: {}, newPassword: {}, confirmPassword: {}})

const handleSubmit = async () => {
  const isValid = validateInput([
    {name: 'oldPassword', value: oldPassword},
    {name: 'newPassword', value: newPassword},
    {name: 'confirmPassword', value: confirmPassword}
  ], errors)
  if (!isValid) return

  try {
    isLoading.value = true
    const data = {
      oldPassword: oldPassword.value,
      newPassword: newPassword.value,
      confirmPassword: confirmPassword.value
    }
    const res = await settingsApi.post('/change-password', data)
    if(res?.status === 200) {
      isLoading.value = false
      isSuccess.value = "Password updated successfully"
      setTimeout(() => {
        isSuccess.value = ''
        oldPassword.value = ''
        newPassword.value = ''
        confirmPassword.value = ''
      }, 1500)
    }
  } catch (e) {
    console.log(e)
    isLoading.value = false
    isError.value = e?.response?.data?.error
    setTimeout(() => {
      isError.value = ''
    }, 1500)
  }
}
</script>

<template>
  <div>
    <p class="success mb-4" v-if="!!isSuccess">{{isSuccess}}</p>
    <p class="error mb-4" v-if="!!isError">{{isError}}</p>
    <form @submit.prevent="handleSubmit" action="" class="flex flex-col gap-12">
      <div class="input-container">
        <label for="current">Current Password*</label>
        <input @input="validateOnInput({value: $event.target.value, name: $event.target.name, error: errors})" v-model="oldPassword" type="password" name="oldPassword" id="current">
        <p v-if="errors.oldPassword.isError" class="error">{{errors.oldPassword.message}}</p>
      </div>
      <div class="input-container">
        <label for="newPassword">New Password*</label>
        <input @input="validateOnInput({value: $event.target.value, name: $event.target.name, error: errors})" v-model="newPassword" type="password" name="newPassword" id="newPassword">
        <p v-if="errors.newPassword.isError" class="error">{{errors.newPassword.message}}</p>
      </div>
      <div class="input-container">
        <label for="confirm">Confirm New Password*</label>
        <input @input="validateOnInput({value: $event.target.value, name: $event.target.name, error: errors})" v-model="confirmPassword" type="password" name="confirmPassword" id="confirm">
        <p v-if="errors.confirmPassword.isError" class="error">{{errors.confirmPassword.message}}</p>
      </div>
      <button class="btn">{{isLoading ? 'Saving...' : 'Save changes'}}</button>
    </form>
  </div>
</template>

<style scoped>
  .input-container input {
    //padding: 0;
    min-width: 300px;
  }

  .btn {
    margin-left: auto;
  }
</style>