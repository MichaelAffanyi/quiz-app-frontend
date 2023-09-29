<script setup>
  import interestImage from "@/assets/auth/interest2.png"
</script>

<template>
<div class="flex w-screen h-screen">
  <div class="image">
    <img :src="interestImage" alt="" class="w-full h-full object-cover">
  </div>
  <section class="form-container">
    <div class="flex flex-col items-center gap-6 max-w-[400px] text-center">
      <h1 class="text-3xl font-semibold">Let’s get started by picking some interests</h1>
      <h4>Alright, let's pick something we're interested in and get started!</h4>
    </div>
  </section>
</div>
</template>

<style scoped>

</style>