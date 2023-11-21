<script setup>

import DashboardComponent from "@/components/dashboard/dashboardComponent.vue";
import {onBeforeRouteUpdate} from "vue-router";
import {useStore} from "vuex";
import {authApi} from "@/utils";
import {getUser} from "@/utils/helpers";

onBeforeRouteUpdate(async (to, from, next) => {
  const store = useStore()
  const token = document.cookie?.split(';').find(ele => ele.split("=")[0].trim() === 'accessToken')?.split("=")[1]
  try {
    const res = await getUser()
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