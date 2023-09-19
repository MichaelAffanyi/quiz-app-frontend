<script setup>
import {Swiper, SwiperSlide} from "swiper/vue"
import {Pagination} from "swiper/modules";
import SwiperCard from "@/components/home/review/swiperCard.vue";
import 'swiper/css';
import francisca from "@/assets/landing-page/francisca.png"
import daniel from "@/assets/landing-page/daniel.png"
import nana from "@/assets/landing-page/nana.png"
import SliderPagination from "@/components/home/review/sliderPagination.vue";

const customersReview = [
  {
    name: 'Francisca Amponsah',
    location: 'Takoradi Ghana',
    rating: '4.0',
    review: 'Just aced the quiz on your webapp! It was challenging and fun, and I learned a lot in the process. Can\'t wait for the next quiz! #happyquizzer',
    image: francisca
  },
  {
    name: 'Daniel Huggins',
    location: 'Texas, USA',
    rating: '4.5',
    review: 'I\'ve been using your quiz webapp for a while now and I absolutely love it! The variety of topics and difficulty levels keeps me engaged and motivated to learn.   ',
    image: daniel
  },
  {
    name: 'Nana Kesse',
    location: 'Accra, Ghana',
    rating: '4.9',
    review: 'Your quiz webapp has become my go-to for daily brain exercise. It\'s a great way to challenge my knowledge and keep my mind sharp.',
    image: nana
  },
  {
    name: 'Francisca Amponsah',
    location: 'Takoradi Ghana',
    rating: '4.0',
    review: 'Just aced the quiz on your webapp! It was challenging and fun, and I learned a lot in the process. Can\'t wait for the next quiz! #happyquizzer',
    image: francisca
  },
  {
    name: 'Daniel Huggins',
    location: 'Texas, USA',
    rating: '4.5',
    review: 'I\'ve been using your quiz webapp for a while now and I absolutely love it! The variety of topics and difficulty levels keeps me engaged and motivated to learn.   ',
    image: daniel
  },
  {
    name: 'Nana Kesse',
    location: 'Accra, Ghana',
    rating: '4.9',
    review: 'Your quiz webapp has become my go-to for daily brain exercise. It\'s a great way to challenge my knowledge and keep my mind sharp.',
    image: nana
  },
]

const modules = [Pagination]

</script>

<template>
  <div class="px-20 pb-[151px] flex flex-col items-center gap-16 overflow-visible">
      <h1 class="font-semibold text-4xl text-[#1D2939] max-w-[642px] text-center">Trusted By Thousands of Happy Customers</h1>
    <Swiper
        :modules="modules"
        class="w-full"
        :slides-per-view="3"
        :space-between="30"
        :loop="true"
        :pagination="{ clickable: true }"
    >
      <SwiperSlide v-for="review in customersReview" :key="review" v-slot="{isActive}"><swiper-card :review="review" :isActive="isActive"></swiper-card></SwiperSlide>
      <slider-pagination></slider-pagination>
    </Swiper>
  </div>
</template>

<style scoped>

</style>