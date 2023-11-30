<script setup>
  import bgImage from "@/assets/quizzes/onboardingImage.png"
  import timerIcon from "@/assets/quizzes/timerIcon.vue"
  import returnIcon from "@/assets/quizzes/returnIcon.vue"
  import completeIcon from "@/assets/quizzes/completeIcon.vue"
  import repeatIcon from "@/assets/quizzes/repeatIcon.vue"
  import {computed, ref} from "vue";
  import {useRoute, useRouter} from "vue-router";
  import {useStore} from "vuex";

  const props = defineProps(['duration'])
  const instructions = [
    {
      title: `${props.duration} hour duration`,
      rule: 'You cannot pause after starting',
      icon: timerIcon
    },
    {
      title: 'Select an answer for each question',
      rule: 'An answer must be selected for each question',
      icon: returnIcon
    },
    {
      title: 'Complete all questions',
      rule: 'Complete all questions',
      icon: completeIcon
    },
    {
      title: 'Solve questions in any order',
      rule: 'Feel free to visit untackled questions',
      icon: repeatIcon
    },
  ]

  const route = useRoute()
  const store = useStore()
  const router = useRouter()
  const path = computed(() => `${route.path}/question_1`)
  const quiz = computed(() => store.getters.getSingleQuiz)
  const user = computed(() => store.getters.getUser)

  const moveToQuestion = () => {
    if (user.value.role === 'lecturer') return
    router.replace(path.value)
  }

</script>
<template>
  <div class="w-full h-[334px]">
    <img :src="quiz.coverImage" alt="" class="w-full h-full object-cover">
  </div>
  <div class="w-full flex flex-col items-center mt-16">
    <div class="text-[#1D2939] text-center">
      <h2 class="text-3xl font-semibold">Quiz Instructions</h2>
      <h3 class="text-2xl max-w-[606px] mt-2">To pass the quiz, you must achieve a score of at least 80% on the questions.</h3>
    </div>
    <div class="grid grid-cols-2 gap-x-24 gap-y-11 mt-28">
      <div class="flex gap-6 items-center" v-for="instruction in instructions">
        <div class="w-[82px] h-[82px] rounded-full bg-blue-200 flex items-center justify-center">
          <component :is="instruction.icon"></component>
        </div>
        <div>
          <h3 class="text-2xl font-semibold">{{instruction.title}}</h3>
          <h4 class="text-lg text-[#737373] max-w-[303px]">{{instruction.rule}}</h4>
        </div>
      </div>
    </div>
    <button @click="moveToQuestion" class="w-[181px] h-10 bg-[#0267FF] flex items-center justify-center rounded-lg text-white text-lg mt-16 mb-40">{{user.role === 'lecturer' ? 'Add question' : 'Start'}}</button>
  </div>
</template>

<style scoped>

</style>