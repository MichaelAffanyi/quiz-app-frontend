<script setup>

import CustomInput from "@/components/ui/customInput.vue";
import {computed, ref, watch, provide} from "vue";
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
const resetFields = ref(false)
const isLoading = ref(false)

const inputFields = ['Question', 'Option 1', 'Option 2', 'Option 3', 'Option 4', 'Points', 'Answer', 'Explanation']

const emits = defineEmits(['showNotification'])
const handleInput = (event) => {
  fields.value[event.name].isError = event.value === '';
  fields.value[event.name].value = event.value
}

const handleSubmit = async () => {
  const id = route.params.quizId
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
    isLoading.value = true
    const res = await quizApi().post(`/${id}/add-question`, newObject)
    if (res.status === 200) {
      emits('showNotification', {
        value: true,
        isError: false,
        message: 'Question added successfully'
      })
      setTimeout(() => {
        resetFields.value = true
      }, 3000)
    }
  } catch (e) {
    // fields.value.question.isError = false
    resetFields.value = true
    await emits('showNotification', {
      value: true,
      isError: true,
      message: e.response.data.error || 'Something went wrong'
    })
  }
  isLoading.value = false

}

</script>

<template>
  <div class="w-full flex justify-center">
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
        <button type="submit" class="px-6 py-2 bg-blue-500 text-white rounded-lg col-span-2 w-max mx-auto mb-6">{{isLoading ? 'Adding...' : 'Add question'}}</button>
      </div>
    </form>
  </div>
</template>

<style scoped>

</style>