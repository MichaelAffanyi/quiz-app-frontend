<script setup>

import TopContent from "@/components/dashboard/topContent.vue";
</script>

<template>
  <the-header class="shadow-lg"></the-header>
  <base-banner>Profile</base-banner>
  <top-content></top-content>
  <div class="px-16">
    <router-view></router-view>
  </div>
</template>

<style scoped>

</style>