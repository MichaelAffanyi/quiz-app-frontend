<script setup>

import TopContent from "@/components/dashboard/topContent.vue";
import {useRoute} from "vue-router";
import {computed} from "vue";

const route = useRoute()
const currentRoute = computed(() => route.path.split('/').at(-1).split('-'))
</script>

<template>
  <the-header class="shadow-lg"></the-header>
  <base-banner class="capitalize">
    <span v-for="route in currentRoute">{{route + ' ' }}</span>
<!--    <span>Hello</span>-->
  </base-banner>
  <div class="px-16">
    <top-content></top-content>
    <router-view></router-view>
  </div>
  <the-footer></the-footer>
</template>

<style scoped>

</style>