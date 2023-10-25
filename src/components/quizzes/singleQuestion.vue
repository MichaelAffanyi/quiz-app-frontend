<script setup>
import {useStore} from "vuex";
import {computed, inject, ref, watch} from "vue";
import {useRoute, useRouter} from "vue-router";
import SelectQuestionComponent from "@/components/quizzes/selectQuestionComponent.vue";

const selectedAnswer = inject('selectedAnswer')
const store = useStore()
const route = useRoute()
const router = useRouter()

const answers = computed(() => store.getters.getAnswers)
const questionData = computed(() => store.getters.getQuestion)
const isActive = computed(() => (value) => selectedAnswer.value === value)
const isChecked = ref(false)
const isLast = computed(() => (questionData.value.number === questionData.value.total) && (answers.value.length === questionData.value.total))
const currentPage = ref(questionData.value.number)

const handleSelect = (event) => {
  const newAnswerObj = {
    id: questionData.value.question._id,
    value: event.target.value
  }
  store.dispatch('addAnswer', newAnswerObj)
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
<!--  <div class="flex gap-[154px] bg-red-200">-->
<!--    <div class="max-w-[811px]">-->
<!--      <h4 class="text-2xl">{{questionData.question.question}}</h4>-->
<!--      <div class="text-lg grid grid-cols-2 gap-x-[118px] gap-y-[37px] mt-[66px]">-->
<!--        <label v-for="option in questionData.question.options"-->
<!--               :for="option.tag"-->
<!--               class="border-2 border-[#737373] rounded-lg p-2 flex items-center w-[345px] justify-between cursor-pointer"-->
<!--               :class="{active: isActive(option.value)}"-->
<!--        >-->
<!--          <span>{{option.tag}}.  {{option.value}}</span>-->
<!--          <input v-model="selectedAnswer" @click="handleSelect" type="radio" name="option" :id="option.tag" class="" :value="option.value">-->
<!--        </label>-->
<!--      </div>-->
<!--      <div v-if="isLast" class="mt-20">-->
<!--        <h3 class="font-semibold">QuizMaster honor code <span class="text-[#0267FF] font-normal cursor-pointer">Learn more</span></h3>-->
<!--        <div class="flex gap-2 items-start mt-2">-->
<!--            <input @click="handleClick" class="w-[24px] h-[24px] cursor-pointer" type="checkbox" name="agreement" id="" :checked="isChecked">-->
<!--          <h4 class="max-w-[795px]"><span class="font-semibold">I John Doe</span>, understand that submitting work that isn’t my own may result in permanent failure of this quiz or deactivations of my quiz master account.</h4>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--    <span class="text-lg text-[#737373] bg-[#F2F2F2] p-2 rounded-md h-max">{{questionData.question.points-->
<!--      }} points</span>-->
<!--  </div>-->
  <select-question-component
      :data="questionData.question"
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