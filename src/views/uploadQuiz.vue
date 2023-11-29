<script setup>

import CustomInput from "@/components/ui/customInput.vue";
import imgIcon from "@/assets/img_icon.png";
import {computed, ref, watch} from "vue";
import {quizApi} from "@/utils";
import {useStore} from "vuex";
import {useRouter} from "vue-router";
import {validateFields} from "@/utils/helpers";


const store = useStore()
const router = useRouter()
const fields = ref({
  title: {
    value: '',
    isError: false
  },
  subject: {
    value: '',
    isError: false
  },
  duration: {
    value: '',
    isError: false
  },
  level: {
    value: '',
    isError: false
  },
  coverImage: {
    value: null,
    isError: false
  }
})
const showOptions = ref(false)
const user = store.getters.getUser
const isLoading = ref(false)

const inputFields = ['Title', 'Subject', 'Duration']
const levelOptions = ['100L', '200L', '300L', '400L']

const profileSrc = computed(() => fields.value.coverImage.value ? URL.createObjectURL(fields.value.coverImage.value) : imgIcon)

const emit = defineEmits(['showNotification'])
const handleChange = (event) => {
  fields.value[event.name].isError = event.value === '';
  fields.value[event.name].value = event.value
}

const handleSubmit = async () => {
  const isValid = validateFields(fields)
  if(!isValid) {
    return
  }
  const formData = new FormData()
  Object.keys(fields.value).map((field) => {
    formData.set(field, fields.value[field].value)
  })
  formData.set('author', user.name)
  try {
    isLoading.value = true
    const res = await quizApi().post('/', formData)
    if (res.status === 200) {
      isLoading.value = false
      emit('showNotification', {
        value: true,
        message: 'Quiz created successfully',
        type: 'success'
      })
      setTimeout(() => {
        router.push(`/dashboard/profile/${res?.data?._id}/add-question`)
      }, 3000)
    }
  } catch (e) {
    isLoading.value = false
    emit('showNotification', {
      value: true,
      message: e.response.data.error || 'Something went wrong',
      type: 'error'
    })
  }
}

const handleSelectLevel = (level) => {
  fields.value.level.isError = false
  fields.value.level.value = level.toLowerCase()
  // showOptions.value = false

}

const handleUpdateCoverImage = (event) => {
  fields.value.coverImage.isError = false
  fields.value.coverImage.value = event.target.files[0]
}

</script>

<template>
  <div class="w-full flex justify-center">
  <form @submit.prevent="handleSubmit" class="w-3/6 my-16">
    <h1 class="text-2xl w-full text-center font-semibold mb-6">Enter quiz details below</h1>
    <div class="grid grid-cols-2 gap-x-3 gap-y-6 text-[#9CA3AF]">
      <custom-input
          @update:value="handleChange"
          v-for="field in inputFields"
          type="text"
          :label="field"
          :is-error="fields[field.toLowerCase()].isError"
          :message="fields[field.toLowerCase()].message"
      >

      </custom-input>
      <div @click="showOptions = !showOptions" class="w-full relative flex items-center h-10 px-3 border-2 rounded-lg border-[#9CA3AF] text-[#9CA3AF] cursor-pointer" :class="{
        'border-red-500' : fields.level.isError,
      }">
        <p>
          {{ fields.level.value || 'Level' }}
          <span class="text-red-500">*</span>
        </p>
        <div v-if="showOptions" class="w-full absolute flex flex-col bg-white top-10 left-0 shadow-lg rounded-lg z-20">
          <span v-for="level in levelOptions" @click="handleSelectLevel(level)" class="border-b py-2 cursor-pointer hover:bg-gray-50 rounded-lg pl-4">{{level}}</span>
        </div>
      </div>
      <div class="w-full relative h-32 rounded-lg border-2 border-[#9CA3AF] ml-auto col-span-2 flex flex-col items-center justify-center overflow-hidden" :class="{
        'border-red-500' : fields.coverImage.isError,
      }">
        <label for="coverImage" class="block w-8 h-8 cursor-pointer" :class="{
        'absolute insert-0 w-full h-full': fields.coverImage.value
      }">
          <img :src="profileSrc" alt="" class="w-full h-full object-cover">
        </label>
        <span>Cover Image</span>
        <input @change="handleUpdateCoverImage" type="file" name="coverImage" id="coverImage" hidden="">
      </div>
    </div>
    <button type="submit" class="px-6 py-2 bg-blue-500 text-white rounded-lg mt-6">{{isLoading ? 'Creating...' : 'Create quiz'}}</button>
  </form>
  </div>
</template>

<style scoped>

</style>