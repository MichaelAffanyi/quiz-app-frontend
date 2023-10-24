<script setup>
import {useStore} from "vuex";
import {computed, ref} from "vue";
import {settingsApi} from "@/utils";

const store = useStore()

const isLoading = ref(false)

</script>

<template>
  <base-modal
      header="Delete Account"
      message="Hey, if you're absolutely sure you want to delete your account, we got you covered. This Process cannot be undone"
      cancel-btn-text="No keep it"
      confirm-btn-text="Yes, Delete Account"
      type="deleteAccount"></base-modal>
</template>

<style scoped>

</style>