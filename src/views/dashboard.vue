<script setup>

import DashboardComponent from "@/components/dashboard/dashboardComponent.vue";
import {onBeforeRouteUpdate} from "vue-router";
import {useStore} from "vuex";
import {authApi} from "@/utils";

onBeforeRouteUpdate(async (to, from, next) => {
  const store = useStore()
  try {
    const res = await authApi('/showMe')
    store.commit('setUser', res?.data?.user)
    if(res?.status === 200) {
      next()
    }
  } catch (e) {
    next('/login')
  }
})

</script>

<template>
  <dashboard-component></dashboard-component>
</template>

<style scoped>

</style>