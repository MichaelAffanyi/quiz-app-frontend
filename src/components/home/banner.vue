<script setup>
  import arrowRight from "@/assets/landing-page/arrow_right.svg"
</script>

<template>
  <div class="relative text-white flex flex-col items-center gap-8 h-[850px] w-full overflow-hidden pt-[149px] bg">
    <h1 class="font-bold text-5xl max-w-[860px] text-center">Enjoy a User-Friendly Interface and Interactive Quiz Experience!</h1>
    <h4 class="text-lg max-w-[770px] text-center">Want to expand your knowledge and challenge your brain? Look no further than QuizMaster - the ultimate quiz platform! With a range of quizzes on any topic imaginable, QuizMaster makes learning fun and engaging.</h4>
    <button class=" py-3 px-4 bg-[#0267FF] flex gap-2 font-semibold text-xl rounded-md">
      Get Started
      <img :src="arrowRight" alt=">">
    </button>
  </div>
</template>

<style scoped>
  .bg {
    background-image: url("@/assets/landing-page/bg-image.png");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
</style>