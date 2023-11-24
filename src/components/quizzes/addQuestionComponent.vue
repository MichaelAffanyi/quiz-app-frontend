<script setup>

import CustomInput from "@/components/ui/customInput.vue";
import {ref, watch} from "vue";
import {validateFields} from "@/utils/helpers";

const fields = ref({
  question: {
    value: '',
    isError: false
  },
  'option 1': {
    value: '',
    isError: false
  },
  'option 2': {
    value: '',
    isError: false
  },
  'option 3': {
    value: '',
    isError: false
  },
  'option 4': {
    value: '',
    isError: false
  },
  points: {
    value: '',
    isError: false
  }
})

const inputFields = ['Question', 'Option 1', 'Option 2', 'Option 3', 'Option 4', 'Points']

const handleInput = (event) => {
  fields.value[event.name].isError = event.value === '';
  fields.value[event.name].value = event.value
}

const handleSubmit = () => {
  const isvalid = validateFields(fields)
  if (!isvalid) return
  console.log(isvalid)

}

// watch(fields, (newValue) => {
//   console.log(newValue)
// }, {deep: true})

</script>

<template>
<form @submit.prevent="handleSubmit" class="w-3/6">
  <h1 class="mt-16 mb-6 w-full text-center font-semibold text-2xl" >Enter question details</h1>
  <div class="grid grid-cols-2 gap-6">
<!--    <textarea-->
<!--        name="question" id="question"-->
<!--        class="border-2 border-[#9CA3AF] resize-none w-full h-28 rounded-lg focus:outline-0 overflow-y-auto p-2 col-span-2 focus:border-blue-500"-->
<!--        placeholder="Enter question here"-->
<!--        :class="{-->
<!--          'border-red-500': fields.question.isError,-->
<!--        }"-->
<!--        v-model="fields.question.value"-->
<!--    ></textarea>-->
    <custom-input
        @update:value="handleInput"
        v-for="field in inputFields"
        :label="field"
        type="text"
        :is-error="fields[field.toLowerCase()].isError"
        :large="field === 'Question'"
        :class="{ 'col-span-2': field === 'Question' }"
    ></custom-input>
    <button type="submit" class="px-6 py-2 bg-blue-500 text-white rounded-lg col-span-2 w-max mx-auto mb-6">Add question</button>
  </div>
</form>
</template>

<style scoped>

</style>