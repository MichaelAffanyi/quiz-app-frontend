<script setup>

// defineProps(['user'])
import {useStore} from "vuex";
import {computed, ref, watch} from "vue";
import {validateInput} from "@/utils/validateInput";
import {authApi, settingsApi} from "@/utils";
import {handleInput} from "@/utils/helpers";

const store = useStore()

const user = computed(() => store.getters.getUser)

const name = ref(user.value?.name)
const email = ref(user.value?.email)
const gender = ref(user.value?.gender)
const contact = ref(user.value?.contact)
const location = ref(user.value?.location)
const uploadError = ref('')
const isLoading = ref(false)
const isUpdating = ref(false)
const isSuccess = ref(false)
const updatingDataError = ref('')
const errors = ref({
  name: {
    isError: false,
    message: ''
  },
  email: {
    isError: false,
    message: ''
  },
})

const handleImageUpload = async (event) => {
  const imageForm = new FormData()
  imageForm.set('image', event.target.files[0])
  try {
    isLoading.value = true
    const res = await authApi.post('/upload-photo', imageForm)
    if(res?.status === 200) {
      store.commit('updateImage', res?.data?.image)
    }
    else {
      uploadError.value = "Can't update profile now. Please try again later"
    }
    isLoading.value = false
  } catch (e) {
    isLoading.value = false
    uploadError.value = e?.response?.data?.error
    console.log(e)
  }
}

const handleSubmit = async () => {
  const isValid = validateInput([
    {name: 'name', value: name},
    {name: 'email', value: email}
  ], errors)

  if(!isValid) return
  const data = {
    name: name.value,
    email: email.value,
    contact: contact.value,
    location: location.value,
    gender: gender.value
  }
  try {
    isUpdating.value = true
    const res = await settingsApi.post('/general', data)
    // console.log(res)
    if (res?.status === 200) {
      store.commit('setUser', res?.data)
      isSuccess.value = true
      setTimeout(() => {
        isSuccess.value = false
      }, 1000)
    }
    else {
      updatingDataError.value = "Can't update details now, try again later"
    }
    isUpdating.value = false
  } catch (e) {
    isUpdating.value = false
    updatingDataError.value = e?.response?.data?.error
  }
}

const onInput = (event) => {
  handleInput(event, errors)
}

</script>

<template>
  <div>
    <div class="flex items-center gap-2">
      <div class="w-[166px] h-[166px] img-container mr-6">
        <img :src="user.profilePhoto" alt="">
      </div>
      <input @change="handleImageUpload" type="file" name="profile" id="profile" hidden>
      <label for="profile" class="btn cursor-pointer">{{isLoading ? 'Updating...' : 'Upload New'}}</label>
      <span>Delete Avatar</span>
    </div>
    <p v-if="!!uploadError" class="error mt-4">{{uploadError}}</p>
    <p v-if="isSuccess" class="success mt-8">Details update successfully</p>
    <p v-if="!isSuccess && !!updatingDataError" class="mt-8">{{updatingDataError}}</p>
    <form @submit.prevent="handleSubmit" action="" class="grid grid-cols-2 gap-x-6 gap-y-10 mt-8">
      <div class="input-container">
        <label for="fullname">Full Name*</label>
        <input @input="onInput" v-model="name" type="text" name="name" id="name" :class="{errorInput: errors.name.isError}">
        <p class="error" v-if="errors.name.isError">{{errors.name.message}}</p>
      </div>
      <div class="input-container">
        <label for="email">Email*</label>
        <input @input="onInput" v-model="email" type="text" name="email" id="email" :class="{errorInput: errors.email.isError}">
        <p class="error" v-if="errors.email.isError">{{errors.email.message}}</p>
      </div>
      <div class="input-container">
        <label for="contact">Contact</label>
        <input v-model="contact" type="text" name="contact" id="contact">
      </div>
      <div class="input-container">
        <label for="location">Location</label>
        <input v-model="location" type="text" name="location" id="location">
      </div>
      <div class="flex flex-col gap-8">
        <div class="flex items-center gap-16">
          <div>
            <input v-model="gender" type="radio" name="gender" id="male" value="male">
            <label for="male" class="ml-2">Male</label>
          </div>
          <div>
            <input v-model="gender" type="radio" name="gender" id="female" value="female">
            <label for="female" class="ml-2">Female</label>
          </div>
        </div>
        <button class="btn">{{isUpdating ? 'Saving...' : 'Save changes'}}</button>
      </div>
    </form>
  </div>
</template>

<style scoped>
.success {
  color: #33FF33;
  font-size: 14px;
}
</style>