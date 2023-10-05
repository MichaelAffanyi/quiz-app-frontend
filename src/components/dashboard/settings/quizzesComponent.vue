<script setup>
import testImg from "@/assets/dashboard/quizzesImage.png"

</script>

<template>
  <div class="pt-12">
    <div class="flex gap-6 items-center w-[338px] pb-6 border-b border-[#CCCCCC] quiz">
      <div class="w-14 h-14 rounded-lg bg-red-200 overflow-hidden">
        <img :src="testImg" alt="" class="w-full h-full object-cover">
      </div>
      <div class="text-xs">
        <p class="font-semibold">Figma <span class="text-[#999999]">22nd Sept 2023</span></p>
        <p class="mt-2 text-[#999999]">By Sarah Dawson</p>
      </div>
    </div>
    <div class="flex gap-6 items-center w-[338px] pb-6 border-b border-[#CCCCCC] quiz">
      <div class="w-14 h-14 rounded-lg bg-red-200 overflow-hidden">
        <img :src="testImg" alt="" class="w-full h-full object-cover">
      </div>
      <div class="text-xs">
        <p class="font-semibold">Figma <span class="text-[#999999]">22nd Sept 2023</span></p>
        <p class="mt-2 text-[#999999]">By Sarah Dawson</p>
      </div>
    </div>
    <div class="flex gap-6 items-center w-[338px] pb-6 border-b border-[#CCCCCC] quiz">
      <div class="w-14 h-14 rounded-lg bg-red-200 overflow-hidden">
        <img :src="testImg" alt="" class="w-full h-full object-cover">
      </div>
      <div class="text-xs">
        <p class="font-semibold">Figma <span class="text-[#999999]">22nd Sept 2023</span></p>
        <p class="mt-2 text-[#999999]">By Sarah Dawson</p>
      </div>
    </div>
    <p class="font-semibold text-xs text-[#0267FF] cursor-pointer underline text-center mt-4">View more</p>
  </div>
</template>

<style scoped>
  .quiz {
    margin-top: 24px;
  }

  .quiz:first-child {
    margin-top: 0px;
  }

  .quiz:last-child {
    border: none;
  }
</style>