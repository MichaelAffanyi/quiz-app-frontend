<script setup>
  import arrow from "@/assets/arrow-right.svg"
</script>

<template>
  <div class="flex justify-between items-center">
    <div>
      <ul class="flex text-[#B3B3B3]">
        <li>
          <span>Home</span>
          <img :src="arrow" alt="">
        </li>
        <li>
          <span>Profile</span>
          <img :src="arrow" alt="">
        </li>
        <li>Quizzes</li>
        <img :src="arrow" alt="">
      </ul>
    </div>
    <div>
      <input type="text"
             name="search"
             id="search"
             class="w-[401px] py-2 border border-[#A6A6A6] rounded-md focus:outline-0 px-2 text-[#1D2939]"
             placeholder="Search quiz by name"
      >
      <base-button class="w-20 h-10">Search</base-button>
    </div>
  </div>
</template>

<style scoped>
  li {
    display: flex;
  }
</style>