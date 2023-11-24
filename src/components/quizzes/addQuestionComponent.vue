<script setup>

import CustomInput from "@/components/ui/customInput.vue";
import {computed, ref, watch} from "vue";
import {validateFields} from "@/utils/helpers";
import {useRoute, useRouter} from "vue-router";
import {quizApi} from "@/utils";
import Notification from "@/assets/quizzes/notification.vue";

const router = useRouter()
const route = useRoute()
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
  },
  answer: {
    value: '',
    isError: false
  },
  explanation: {
    value: '',
    isError: false
  }
})
const showNotification = ref({
  value: false,
  isError: false,
  message: ''
})

const notificationStyles = computed(() => {
  if(showNotification.value.isError) return 'bg-red-200 text-red-500'
  return 'bg-green-200 text-green-500'
})
const inputFields = ['Question', 'Option 1', 'Option 2', 'Option 3', 'Option 4', 'Points', 'Answer', 'Explanation']

const handleInput = (event) => {
  fields.value[event.name].isError = event.value === '';
  fields.value[event.name].value = event.value
}

const handleSubmit = async () => {
  const id = route.params.quizId
  console.log(id)
  const isValid = validateFields(fields)

  if (!isValid) return

  const newObject = {}
  newObject.question = fields.value.question.value
  newObject.points = Number(fields.value.points.value)
  newObject.answer = fields.value.answer.value
  newObject.explanation = fields.value.explanation.value
  newObject.options = []
  Object.keys(fields.value).map((field) => {
    if (field.includes('option')) {
      newObject.options.push(fields.value[field].value)
    }
  })

  try {
    const res = await quizApi().post(`/${id}/add-question`, newObject)
    console.log(res)
    if (res.status === 200) {
      showNotification.value = true
      setTimeout(() => {
        showNotification.value = false
      }, 3000)
    }
  } catch (e) {
    console.log(e)
  }
  console.log(newObject)

}

</script>

<template>
  <notification :show="showNotification.value" :class="notificationStyles">
    <div class="w-2 h-2 rounded-full" :class="{
      'bg-red-500': showNotification.isError,
      'bg-green-500': !showNotification.isError
    }"></div>
    {{showNotification.message}}
  </notification>
<form @submit.prevent="handleSubmit" class="w-3/6">
  <h1 class="mt-16 mb-6 w-full text-center font-semibold text-2xl" >Enter question details</h1>
  <div class="grid grid-cols-2 gap-6">
    <custom-input
        @update:value="handleInput"
        v-for="field in inputFields"
        :label="field"
        type="text"
        :is-error="fields[field.toLowerCase()].isError"
        :large="field === 'Question'"
        :class="{ 'col-span-2': field === 'Question' || field === 'Explanation' }"
    ></custom-input>
    <button type="submit" class="px-6 py-2 bg-blue-500 text-white rounded-lg col-span-2 w-max mx-auto mb-6">Add question</button>
  </div>
</form>
</template>

<style scoped>

</style>