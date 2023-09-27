<script setup>

import TopContent from "@/components/dashboard/topContent.vue";
</script>

<template>
  <the-header class="shadow-lg"></the-header>
  <base-banner>Profile</base-banner>
  <div class="px-16">
    <top-content></top-content>
    <router-view></router-view>
  </div>
  <the-footer></the-footer>
</template>

<style scoped>

</style>