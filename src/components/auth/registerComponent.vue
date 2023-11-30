<script setup>
import signupHeader from "@/components/auth/signupHeader.vue";
import registerImage from "@/assets/auth/register.png";
import googleIcon from "@/assets/auth/google.svg";
import {computed, ref, watch} from "vue";
import {authApi} from '@/utils'
import {useRouter} from "vue-router";
import {validateOnInput, validateInput} from "@/utils/validateInput";
import {useStore} from "vuex";
import Cookie from "js-cookie";
import CustomInput from "@/components/ui/customInput.vue";

const router = useRouter()
const name = ref('')
const email = ref('')
const password = ref('')
const role = ref('')
const program = ref('')
const level = ref('')
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
  },
  role: {
    isError: false,
    message: ''
  },
  program: {
    isError: false,
    message: ''
  },
  level: {
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

const fields = [{
  name: 'name',
  value: name,
  placeholder: 'Enter your name'
}, {
  name: 'email',
  value: email,
  placeholder: 'Enter your email'
}, {
  name: 'password',
  value: password,
  placeholder: '********'
}
]

const store = useStore()

const handleSubmit = async () => {
  const isValid = validateInput([
      {name: "name", value: name},
      {name: "email", value: email},
      {name: "password", value: password},
      {name: "role", value: role}
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
      password: password.value,
      role: role.value
    }
    if(role.value === 'student') {
      newUser.program = program.value
      newUser.level = level.value
    }
    const res = await authApi.post('/register', newUser)
    if(res?.status === 200) {
      Cookie.set('accessToken', res?.data?.token)
      isSuccess.value.value = true
      isSuccess.value.message = res?.data?.msg
      store.commit('setIsRegistered', true)
      setTimeout(() => {
        router.replace('/auth/register/add-photo')
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
        <div v-for="field in fields" class="auth-form-control">
          <label for="name" class="capitalize">{{field.name}}</label>
          <input
              :type="field.name === 'password' ? 'password' : 'text'"
              :name="field.name"
              :id="field.name"
              :placeholder="field.placeholder"
              v-model.trim="field.value.value"
              @input="validateOnInput({value: $event.target.value, name: $event.target.name, error})"
              :class="{errorInput: error[field.name].isError}"
          >
          <p class="error" v-if="error[field.name].isError">{{error[field.name].message}}</p>
        </div>
        <div class="auth-form-control">
          <select
              name="role"
              id="role"
              v-model="role"
              @change="validateOnInput({value: $event.target.value, name: $event.target.name, error})"
              :class="{errorInput: error.role.isError}"
          >
            <option value="" disabled selected>Select role</option>
            <option value="student">Student</option>
            <option value="lecturer">Lecturer</option>
          </select>
          <p class="error" v-if="error.role.isError">{{error.role.message}}</p>
        </div>
        <div v-if="role === 'student'" class="grid grid-cols-2 gap-2">
          <input v-model="program" type="text" name="program" id="program" placeholder="Enter your program">
          <select name="level" id="level" class="h-full" v-model="level">
            <option value="" disabled selected>Select level</option>
            <option value="100l">100L</option>
            <option value="200l">200L</option>
            <option value="300l">300L</option>
            <option value="400l">400L</option>
          </select>
        </div>
        <span class="error max-w-[285px]" v-if="isError.value">{{isError.message}}</span>
        <span class="success max-w-[285px]" v-if="isSuccess.value">{{isSuccess.message}}, please wait</span>
        <base-button class="mt-4">
          {{isLoading ? 'Loading...' : 'Create Account'}}
        </base-button>
        <h2 class="text-[#A6A6A6] text-center">
          Already have an account?
          <router-link to="/auth/login" class="font-semibold text-[#0267FF] cursor-pointer">Login</router-link>
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