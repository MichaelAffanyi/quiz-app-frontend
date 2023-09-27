<script setup>
  import arrow from "@/assets/arrow-right.svg"
  import {useRoute} from "vue-router";
  import {computed, ref} from "vue";
  const route = useRoute()

  const paths = ref(route.path.split('/').filter(path => path !== ''))

  console.log(paths)
  const getLink = computed(() => {
    // if(path === 'das')
  })
</script>

<template>
  <div class="flex justify-between items-center mt-9">
    <div>
      <ul class="flex text-[#B3B3B3]">
        <li v-for="path in paths">
          <router-link :to="getLink" class="capitalize">{{path === 'dashboard' ? 'Home' : path}}</router-link>
          <img :src="arrow" alt="">
        </li>
      </ul>
    </div>
    <div class="flex gap-2">
      <input type="text"
             name="search"
             id="search"
             class="w-[401px] py-2 border border-[#A6A6A6] rounded-md focus:outline-0 px-2 text-[#1D2939]"
             placeholder="Search quiz by name"
      >
      <div class="w-20 h-10 bg-[#0267FF] text-white rounded-lg flex items-center justify-center">Search</div>
    </div>
  </div>
</template>

<style scoped>
  li {
    display: flex;
  }
</style>