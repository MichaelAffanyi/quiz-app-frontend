<script setup>
import vector from "@/assets/landing-page/Vector.png"
import boyImage from "@/assets/landing-page/boyImage.png"
</script>

<template>
  <div class="relative flex items-center w-full h-[610px] bg-[#F2F2F2] my-20">
    <div class="flex flex-col gap-9 ml-20">
      <h2 class="font-semibold text-4xl text-[#1D2939]">Knowledge at Your Fingertips, Quiz with Confidence!</h2>
        <h4 class="text-[#808080] text-lg max-w-[571px]">Join our quiz app to expand your knowledge and challenge your skills with engaging quizzes anytime, anywhere." Experience fun, excitement, and learning in one place with our user-friendly quiz app that guarantees a confident quiz-taking experience."
      </h4>
      <button class="px-5 py-3 font-semibold text-white bg-[#0267FF] rounded-md w-max">Start your quiz now</button>
    </div>
    <div class="absolute w-[445px] h-[445px] right-[67px] top-[82px]">
      <img :src="vector" alt="" class="w-full h-full object-contain">
    </div><div class="absolute w-[378px] h-[566px] right-[105px] bottom-0">
      <img :src="boyImage" alt="" class="w-full h-full object-contain">
    </div>
  </div>
</template>

<style scoped>

</style>