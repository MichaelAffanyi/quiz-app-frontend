<script setup>
import phoneIcon from "@/assets/landing-page/phone.svg"

defineProps(['method'])
</script>

<template>
  <div class="w-[417px] rounded-lg flex items-center gap-8 py-4 px-6 shadow-md">
    <div class="w-[90px] h-[90px] bg-[#CCE1FF] rounded-full flex items-center justify-center">
      <img :src="method.icon" alt="" class="">
    </div>
    <div class="flex flex-col">
      <span class="font-semibold text-xl">{{method.name}}</span>
      <span class="text-[#999999]">{{method.value}}</span>
    </div>
  </div>
</template>

<style scoped>

</style>