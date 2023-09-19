<script setup>
import starIcon from "@/assets/landing-page/star.svg"

defineProps(['review', 'isActive'])

</script>

<template>
  <div class="border-2 border-[#999999] px-8 py-4 flex flex-col gap-4 rounded-lg min-h-[230px]" :class="{active: isActive}">
    <div class="flex gap-4 items-center">
      <div class="w-[82px] h-[82px] rounded-full">
        <img :src="review.image" alt="" class="w-full h-full object-cover">
      </div>
      <div class="flex flex-col gap-2 text-[#1D2939]">
        <h4 class="text-lg font-bold w-max">{{review.name}}</h4>
        <p class="text-sm">{{review.location}}</p>
      </div>
      <span class="text-lg font-bold ml-3 flex gap-2">
        {{review.rating}}
        <img :src="starIcon" alt="">
      </span>
    </div>
    <p class="text-[#999999]">"{{review.review}}"</p>
  </div>
</template>

<style scoped>
.active {
  border: 4px solid #0267FF;
}
</style>