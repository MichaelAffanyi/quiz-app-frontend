<script setup>

  import {useStore} from "vuex";
  import {computed} from "vue";
  import SelectQuestionComponent from "@/components/quizzes/selectQuestionComponent.vue";

  const store = useStore()
  const answers = computed(() => store.getters.getAnswersData)

  console.log(answers.value)
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
  <select-question-component v-for="answer in answers" :data="answer" is-answer></select-question-component>
</template>

<style scoped>

</style>