<script setup>
import nextIcon from "@/assets/landing-page/next.svg"
import previousIcon from "@/assets/landing-page/previous.svg"
import {useSwiper} from "swiper/vue"

const swiper = useSwiper()
</script>

<template>
  <div class="w-full flex justify-end">
    <div class="flex gap-8">
      <span
          class="w-14 h-14 rounded-full border-2 border-[#0267FF] flex items-center justify-center cursor-pointer hover:opacity-75 transition duration-300"
          @click="swiper.slidePrev()"
      >
        <img :src="previousIcon" alt="">
      </span>
      <span
          class="w-14 h-14 rounded-full bg-[#0267FF] flex items-center justify-center cursor-pointer hover:opacity-75 transition duration-300"
          @click="swiper.slideNext()"
      >
        <img :src="nextIcon" alt="">
      </span>
    </div>
  </div>
</template>

<style scoped>

</style>