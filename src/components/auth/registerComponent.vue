<script setup>
import signupHeader from "@/components/auth/signupHeader.vue";
import registerImage from "@/assets/auth/register.png";
import googleIcon from "@/assets/auth/google.svg";
import {ref, watch} from "vue";
import {authApi} from '@/utils'
import {useRouter} from "vue-router";
import {validateOnInput, validateInput} from "@/utils/validateInput";
import {useStore} from "vuex";

const router = useRouter()
const name = ref('')
const email = ref('')
const password = ref('')
const error = ref({
  name: {
    isError: false,
    message: ''
  },
  email: {
    isError: false,
    message: ''
  },
  password: {
    isError: false,
    message: ''
  }
})
const isLoading = ref(false)
const isError = ref({
  value: false,
  message: ''
})
const isSuccess = ref({
  value: false,
  message: ''
})

const store = useStore()
const validateOnBlur = (event) => {
  isError.value.value = false
  isError.value.message = ''
  const value = event.target.value
  const name = event.target.name
  validateOnInput({value, name, error})
}

const handleSubmit = async () => {
  const isValid = validateInput([
      {name: "name", value: name},
      {name: "email", value: email},
      {name: "password", value: password},
    ],
    error)
  if(!isValid) {
    return
  }
  try {
    isLoading.value = true
    const newUser = {
      name: name.value,
      email: email.value,
      password: password.value
    }
    const res = await authApi.post('/register', newUser)
    if(res?.status === 200) {
      isSuccess.value.value = true
      isSuccess.value.message = res?.data?.msg
      store.commit('setIsRegistered', true)
      setTimeout(() => {
        router.replace('/register/add-photo')
      }, 1000)
    }
  } catch (error) {
    isError.value.value = true
    isError.value.message = error.response.data.error
    console.log(error)
  }
  isLoading.value = false
}

</script>

<template>
  <div class="flex w-screen h-screen overflow-hidden">
    <div class="image">
      <img :src="registerImage" alt="">
    </div>
    <div class="form-container">
      <signup-header></signup-header>
      <form class="form" @submit.prevent="handleSubmit">
        <h1 class="header1">Create Account</h1>
        <div class="auth-form-control">
          <label for="name">Name</label>
          <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              v-model.trim="name"
              @input="validateOnBlur"
              :class="{errorInput: error.name.isError}"
          >
          <p class="error" v-if="error.name.isError">{{error.name.message}}</p>
        </div>
        <div class="auth-form-control">
          <label for="email">Email</label>
          <input
              type="text"
              name="email"
              id="email"
              placeholder="Enter your email"
              v-model.trim="email"
              @input="validateOnBlur"
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
              v-model.trim="password"
              @input="validateOnBlur"
              :class="{errorInput: error.password.isError}"
          >
          <p class="error" v-if="error.password.isError">{{error.password.message}}</p>
        </div>
        <span class="error max-w-[285px]" v-if="isError.value">{{isError.message}}</span>
        <span class="success max-w-[285px]" v-if="isSuccess.value">{{isSuccess.message}}, please wait</span>
        <base-button class="mt-4">
          {{isLoading ? 'Loading...' : 'Create Account'}}
        </base-button>
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
.error {
  color: #FF4D4D;
  font-size: 14px;
}

.errorInput {
  border: 1px solid #FF4D4D;
}

.success {
  color: #33FF33;
  font-size: 14px;
}
</style>