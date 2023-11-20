<script setup>

import CustomInput from "@/components/ui/customInput.vue";
import {ref, watch} from "vue";
const fields = ref({
  title: {
    value: '',
    error: "",
  },
  subject: {
    value: '',
    error: ""
  },
  level: {
    value: '',
    error: ""
  },
  duration: {
    value: '',
    error: ""
  },
})
const showOptions = ref(false)

const inputFields = ['Title', 'Subject', 'Level', 'Duration']

const handleChange = (event) => {
  const name = event.name
  const value = event.value
  if (value.trim() === '') {
    fields.value[name].error = `${name} is required`
  } else {
    fields.value[name].error = ''
  }
  fields.value[name].value = value
}

watch(fields, (newFields) => {
  // console.log(newFields)
  // inputFields.forEach((field) => {
  //   field.value = newFields[field.name.toLowerCase()].value
  // })
}, {deep: true})

</script>

<template>
  <form @submit.prevent class="w-full my-16">
    <h1 class="text-2xl w-full text-center font-semibold mb-6">Enter quiz details below</h1>
    <div class="grid grid-cols-3 gap-x-3 gap-y-6">
      <custom-input @set-data="handleChange" v-for="field in inputFields" :value="fields[field.toLowerCase()].value"  type="text" :label="field" :is-error="!!fields[field.toLowerCase()].error"></custom-input>
      <div @click="showOptions = !showOptions" class="w-full relative flex items-center h-10 px-3 border-2 rounded-lg border-[#9CA3AF] text-[#9CA3AF]">
        <span>Level</span>
        <div v-if="showOptions" class="w-full absolute flex flex-col top-10 left-0 shadow-lg rounded-lg">
          <span class="border-b py-2 cursor-pointer hover:bg-gray-50 rounded-lg pl-4">Beginner</span>
          <span class="border-b py-2 cursor-pointer hover:bg-gray-50 rounded-lg pl-4">Intermediate</span>
          <span class="border-b py-2 cursor-pointer hover:bg-gray-50 rounded-lg pl-4">Hard</span>
        </div>
      </div>
    </div>
    <button type="submit" @click="console.log(fields)" class="px-6 py-2 bg-blue-500 text-white rounded-lg mt-6">Add question</button>
  </form>
</template>

<style scoped>

</style>