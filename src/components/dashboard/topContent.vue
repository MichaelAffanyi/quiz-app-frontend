<script setup>
  import arrow from "@/assets/arrow-right.svg"
  import {useRoute} from "vue-router";
  import {computed, ref} from "vue";
  import {useStore} from "vuex";
  const route = useRoute()
  const store = useStore()

  const user = store.getters.getUser

  const paths = computed(() => route.path.split('/').filter(path => path !== ''))
  const pathText = computed(() => (path) => {
    if(path === 'dashboard') return 'Home'
    if(path === 'profile' && paths.value.at(-1) === 'account-settings') return user.name
    return path.split('-')[0]
  })
  const getLink = (path) => {
    if(path === 'dashboard') return '/dashboard'
      return `/dashboard/${path}`
  }
</script>

<template>
  <div class="flex justify-between items-center mt-9">
    <div>
      <ul class="flex text-[#B3B3B3">
        <li v-for="(path, index) in paths" :key="path" class="last:text-[#0267FF]">
          <router-link :to="getLink(path)" class="capitalize">{{pathText(path)}}</router-link>
          <img v-if="index !== (paths.length - 1)" :src="arrow" alt="">
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