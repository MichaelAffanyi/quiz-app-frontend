<script setup>
import {ref} from "vue";
import {deleteAccount, submitAnswer} from "@/utils/helpers";
import {useStore} from "vuex";
import {useRouter} from "vue-router";
import gql from "graphql-tag";
import {useQuery} from "@vue/apollo-composable";

const store = useStore()
const router = useRouter()
const isLoading = ref(false)
const isError = ref('')
const isSuccess = ref('')

const props = defineProps({
  quizId: {
    type: String,
    required: false,
    default: ""
  },
  answers: {
    required: false,
    default: []
  },
  header: String,
  message: String,
  cancelBtnText: String,
  confirmBtnText: String,
  type: String
})

const closeModal = (event) => {
  const id = event.target.id
  if(id === 'close') {
    if (props.type === "deleteAccount") store.commit('toggleDeleteModal')
    if (props.type === "submitAnswer") store.commit('toggleSubmitAnswerModal')
  }
}

const handleAction = async () => {
  if(props.type === 'deleteAccount') {
    await deleteAccount({isLoading, isError, isSuccess})
  }
  if (props.type === "submitAnswer") {
    const onResult = await submitAnswer({id: props.quizId, answers: props.answers})
    onResult(result => {
      console.log(result.data.submitAnswers)
      store.commit('setAnswersData', result.data.submitAnswers)
    })
    // console.log("Result:::", result)
    setTimeout(() => {
      router.replace("answers")
      store.commit('toggleSubmitAnswerModal')
    }, 1500)
  }
}

</script>

<template>
  <div @click="closeModal" id="close" class="fixed w-full h-screen bg-[#585858A3] z-30 backdrop-blur overflow-hidden flex justify-center items-center">
    <div class="p-6 bg-white w-max rounded-lg flex flex-col gap-4">
      <span class="font-semibold">{{ header }}</span>
      <p class="max-w-[336px] text-[#414C5E]">{{message}}</p>
      <div class="flex gap-2">
        <button id="close" class="w-full py-1 border border-[#B3B3B3] rounded-lg">{{ cancelBtnText }}</button>
        <button @click="handleAction" class="w-full py-1 border border-[#FF0000] bg-[#FF0000] rounded-lg text-white px-2">{{isLoading ? 'Deleting...' : confirmBtnText}}</button>
      </div>
      <p v-if="!!isSuccess" class="success">{{isSuccess}}</p>
      <p v-if="!!isError" class="error">{{isError}}</p>
    </div>
  </div>
</template>

<style scoped>

</style>