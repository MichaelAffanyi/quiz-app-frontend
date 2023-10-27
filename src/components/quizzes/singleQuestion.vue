<script setup>
import {useStore} from "vuex";
import {computed, inject, ref, watch} from "vue";
import {useRouter} from "vue-router";
import SelectQuestionComponent from "@/components/quizzes/selectQuestionComponent.vue";

const selectedAnswer = inject('selectedAnswer')
const store = useStore()
const router = useRouter()

const answers = computed(() => store.getters.getAnswers)
const questionData = computed(() => store.getters.getQuestion)
const isChecked = ref(false)
const isLast = computed(() => (questionData.value.number === questionData.value.total) && (answers.value.length === questionData.value.total))
const currentPage = ref(questionData.value.number)

const handleSelect = (answer) => {
  selectedAnswer.value = answer
}
const saveAnswer = async () => {
  if (isLast.value) {
    store.commit('toggleSubmitAnswerModal')
    return
  }
  currentPage.value++
}

const handleClick = (event) => {
  isChecked.value = event.target.checked
}

watch(currentPage, (nextPage) => {
  router.push(`question_${nextPage}`)
})

</script>

<template>
  <select-question-component
      :data="questionData.question"
      @selected-value="handleSelect"
  >
    <template #approval>
      <div v-if="isLast" class="mt-20">
        <h3 class="font-semibold">QuizMaster honor code <span class="text-[#0267FF] font-normal cursor-pointer">Learn more</span></h3>
        <div class="flex gap-2 items-start mt-2">
          <input @click="handleClick" class="w-[24px] h-[24px] cursor-pointer" type="checkbox" name="agreement" id="" :checked="isChecked">
          <h4 class="max-w-[795px]"><span class="font-semibold">I John Doe</span>, understand that submitting work that isn’t my own may result in permanent failure of this quiz or deactivations of my quiz master account.</h4>
        </div>
      </div>
    </template>
  </select-question-component>
  <button
      :disabled="isLast ? !isChecked : !!!selectedAnswer"
      class="w-[181px] h-10 bg-[#0267FF] text-white mb-40 rounded-lg disabled:opacity-25 disabled:cursor-not-allowed transition duration-500 ease-in"
      @click="saveAnswer"
  >{{isLast ? 'Submit' : 'Next'}}</button>
</template>

<style scoped>

</style>