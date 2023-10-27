<script setup>

  import {useStore} from "vuex";
  import {computed} from "vue";
  import SelectQuestionComponent from "@/components/quizzes/selectQuestionComponent.vue";

  const store = useStore()
  const answersData = computed(() => store.getters.getAnswersData)

  console.log(answersData)
</script>

<template>
  <div class="w-full bg-[#F0F2F4] flex justify-between px-10 py-6 items-center">
    <div>
      <h1 class="font-semibold text-4xl">Congratulations! You passed!</h1>
      <div class="font-semibold text-2xl">
        <span>Grade received <span class="text-[#33FF33]">90%</span></span>
        <span>To pass 80% or higher</span>
      </div>
    </div>
    <button class="w-max h-max bg-[#0267FF] text-white px-8 py-3 rounded-lg">Next Item</button>
  </div>
  <div class="w-full flex flex-col items-center">
    <div v-for="answer in answersData.answers" class="mt-28 max-w-[814px]">
      <select-question-component :data="answer" is-answer></select-question-component>
      <div class="p-4 border border-[#33FF33] rounded-lg bg-[#CCFFCC] mt-14">
        <h3 class="font-semibold">Answer {{answer.answer}}</h3>
        <h4 class="text-[#737373]">{{answer.explanation}}</h4>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>