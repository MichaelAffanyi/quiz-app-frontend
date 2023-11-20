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
const isActive = computed(() => (value) => selectedAnswer.value === value)
const alreadySelected = computed(() => (value) => {
  return answers.value.findIndex(ele => ele.value === value) !== -1
})
const user = store.getters.getUser

const handleSelect = (event) => {
  const newAnswerObj = {
    id: questionData.value.question._id,
    value: event.target.value
  }
  store.dispatch('addAnswer', newAnswerObj)
}
const saveAnswer = () => {
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

// watch(answers, (value) => {
//   console.log(value)
// })
</script>

<template>
  <div class="flex gap-[154px]">
    <div class="max-w-[811px] flex flex-col gap-[66px]">
      <h4 class="text-2xl">{{questionData.question.question}}</h4>
      <div class="text-lg grid grid-cols-2 gap-x-[118px] gap-y-[37px]">
        <label v-for="option in questionData.question.options"
               :for="option.tag"
               class="border-2 border-[#737373] rounded-lg p-2 flex items-center w-[345px] justify-between cursor-pointer"
               :class="{active: alreadySelected(option.value) ? true : isActive(option.value)}"
        >
          <span>{{option.tag}}.  {{option.value}}</span>
          <input @click="handleSelect" v-model="selectedAnswer" type="radio" name="option" :id="option.tag" class="" :value="option.value" :checked="alreadySelected(option.value)">
        </label>
      </div>
      <div v-if="isLast" class="mt-20">
        <h3 class="font-semibold">QuizMaster honor code <span class="text-[#0267FF] font-normal cursor-pointer">Learn more</span></h3>
        <div class="flex gap-2 items-start mt-2">
          <input @click="handleClick" class="w-[24px] h-[24px] cursor-pointer" type="checkbox" name="agreement" id="" :checked="isChecked">
          <h4 class="max-w-[795px]"><span class="font-semibold capitalize">I {{user.name}}</span>, understand that submitting work that isn’t my own may result in permanent failure of this quiz or deactivations of my quiz master account.</h4>
        </div>
      </div>
      <button
          :disabled="isLast ? !isChecked : !!!selectedAnswer"
          class="w-[181px] h-10 bg-[#0267FF] text-white mb-40 rounded-lg disabled:opacity-25 disabled:cursor-not-allowed transition duration-500 ease-in self-center"
          @click="saveAnswer"
      >{{isLast ? 'Submit' : 'Next'}}</button>
    </div>
    <span class="text-lg text-[#737373] bg-[#F2F2F2] p-2 rounded-md h-max">{{questionData.question.points
      }} points</span>
  </div>
</template>

<style scoped>
.active {
  background: #D3DCE9;
  color: #0267FF;
  border: 2px solid #0267FF;
  font-weight: 600;
}
</style>