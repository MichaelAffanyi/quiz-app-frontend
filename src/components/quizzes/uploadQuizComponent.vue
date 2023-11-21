<script setup>

import CustomInput from "@/components/ui/customInput.vue";
import {ref, watch} from "vue";
const fields = ref({
  title: {
    value: '',
    isError: false,
    message: ''
  },
  subject: {
    value: '',
    isError: false,
    message: ''
  },
  duration: {
    value: '',
    isError: false,
    message: ''
  },
  level: {
    value: '',
    isError: false,
    message: ''
  },
  coverImage: {
    value: '',
    isError: false,
    message: ''
  }
})
const showOptions = ref(false)

const inputFields = ['Title', 'Subject', 'Duration']

const handleChange = (event) => {
  fields.value[event.name] = event.value
}

const validateFields = () => {
  let isValid = true
  inputFields.forEach((field) => {
    if(fields.value[field.toLowerCase()].value.trim() === '') {
      isValid = false
      fields.value[field.toLowerCase()].isError = true
      fields.value[field.toLowerCase()].message = `${field} can't be empty`
    }
  })
  return isValid
}

const handleSubmit = () => {
  const isValid = validateFields()
}

watch(fields, (newFields) => {
  console.log(newFields)
  // inputFields.forEach((field) => {
  //   field.value = newFields[field.name.toLowerCase()].value
  // })
}, {deep: true})

</script>

<template>
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
      <div @click="showOptions = !showOptions" class="w-full relative flex items-center h-10 px-3 border-2 rounded-lg border-[#9CA3AF] text-[#9CA3AF]">
        <span>Level</span>
        <div v-if="showOptions" class="w-full absolute flex flex-col bg-white top-10 left-0 shadow-lg rounded-lg z-20">
          <span class="border-b py-2 cursor-pointer hover:bg-gray-50 rounded-lg pl-4">Beginner</span>
          <span class="border-b py-2 cursor-pointer hover:bg-gray-50 rounded-lg pl-4">Intermediate</span>
          <span class="border-b py-2 cursor-pointer hover:bg-gray-50 rounded-lg pl-4">Hard</span>
        </div>
      </div>
    <div class="w-full h-32 rounded-lg border-2 border-[#9CA3AF] ml-auto col-span-2 pl-2 pt-2">
      <span>Cover Image</span>
    </div>
    </div>
    <button type="submit" class="px-6 py-2 bg-blue-500 text-white rounded-lg mt-6">Add question</button>
  </form>
</template>

<style scoped>

</style>