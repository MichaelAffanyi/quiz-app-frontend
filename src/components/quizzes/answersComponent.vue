<script setup>

  import {useStore} from "vuex";
  import {computed} from "vue";
  import CorrectCheck from "@/assets/quizzes/correctCheck.vue";
  import WrongMark from "@/assets/quizzes/wrongMark.vue";

  const store = useStore()
  const answersData = computed(() => store.getters.getAnswersData)
  const showMark = computed(() => (selectedAnswer, correctAnswer) => selectedAnswer === correctAnswer ? CorrectCheck : WrongMark)
  const statusHeading = computed(() => answersData.percentage >= 80 ? 'Congratulations! You passed!' : 'Sorry! You failed!')
  const statusColor = computed(() => answersData.percentage >= 80 ? 'text-[#33FF33]' : 'text-[#FF3333]')

  console.log(answersData)
</script>

<template>
  <div class="w-full bg-[#F0F2F4] flex justify-between px-10 py-6 items-center">
    <div>
      <h1 class="font-semibold text-4xl">{{statusHeading}}</h1>
      <div class="font-semibold text-2xl">
        <span>Grade received <span :class="statusColor">{{answersData.percentage}}%</span></span>
        <span>To pass 80% or higher</span>
      </div>
    </div>
    <button class="w-max h-max bg-[#0267FF] text-white px-8 py-3 rounded-lg">Next Item</button>
  </div>
  <div class="w-full flex flex-col items-center mb-20">
    <div v-for="answer in answersData.answers" class="mt-28 max-w-[814px]">
      <h4 class="text-2xl mb-5">{{answer.question}}</h4>
      <div class="text-lg grid grid-cols-2 gap-x-[118px] gap-y-[37px]">
        <label v-for="option in answer.options"
               class="border-2 border-[#737373] rounded-lg p-2 flex items-center w-[345px] justify-between"
               :class="option.value === answer.selectedOption && answer.status"
        >
          <span>{{option.tag}}.  {{option.value}}</span>
          <input v-if="option.value !== answer.selectedOption" @click.prevent type="radio" name="option" :id="option.tag" class="" :value="option.value">
          <component v-else :is="showMark(answer.selectedOption, answer.answer)" />
        </label>
      </div>
      <div class="p-4 border border-[#33FF33] rounded-lg bg-[#CCFFCC] mt-14">
        <h3 class="font-semibold">Answer {{answer.answer}}</h3>
        <h4 class="text-[#737373]">{{answer.explanation}}</h4>
      </div>
    </div>
  </div>
  <div class="w-full flex justify-center mb-28">
    <button class="bg-[#0267FF] text-white text-lg px-6 py-2 rounded-md">Try again</button>
  </div>
</template>

<style scoped>
.incorrect {
  border: 2px solid #F33;
  background: #FFE6E6;
  color: #FF3333;
}

.correct {
  border: 2px solid #3F3;
  background: #CFC;
  color: #137A13;
}
</style>