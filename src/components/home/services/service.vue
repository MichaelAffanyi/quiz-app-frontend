<script setup>
  defineProps(['service'])
</script>

<template>
  <div class="w-full max-[311px] flex flex-col justify-center items-center gap-8">
    <div class="h-[82px] w-[82px] flex items-center justify-center rounded-full" :class="service.name">
      <img :src="service.icon" alt="icon">
    </div>
    <h2 class="text-lg font-bold text-[#1D2939]">{{service.title}}</h2>
    <h4 class="text-[#808080] text-center">{{service.description}}</h4>
  </div>
</template>

<style scoped>
  .auth {
    background-color: #9F81D7;
  }
  .api {
    background-color: #CCFFCC;
  }
  .database {
    background-color: #FFFF99;
  }
  .payment {
    background-color: #FA7A7A;
  }
  .cdn {
    background-color: #FFC299;
  }
  .backend {
    background-color: #8080FF;
  }
</style>