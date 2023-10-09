<script setup>
import {useStore} from "vuex";
import {computed, ref} from "vue";
import {settingsApi} from "@/utils";

const store = useStore()

const isDeleteModalOpen = computed(() => store.getters.isDeleteModalOpen)
const isLoading = ref(false)
const isError = ref('')
const isSuccess = ref('')

const closeModal = (event) => {
  const id = event.target.id
  if(id === 'close') {
    store.commit('toggleDeleteModal')
  }
}

const deleteAccount = async () => {
  try {
    isLoading.value = true
    const res = await settingsApi.delete('/delete-account')
    if(res?.status === 200) {
      isSuccess.value = 'Account deleted successfully'
      isLoading.value = false
      setTimeout(() => {
        location.reload()
      }, 1500)
    }
  } catch (e) {
    isLoading.value = false
    isError.value = e?.response?.data?.error || 'Can\'t delete account now'
  }
}

</script>

<template>
  <div @click="closeModal" id="close" v-if="isDeleteModalOpen" class="fixed w-full h-screen bg-[#585858A3] z-30 backdrop-blur overflow-hidden flex justify-center items-center">
    <div class="p-6 bg-white w-max rounded-lg flex flex-col gap-4">
      <span class="font-semibold">Delete Account</span>
      <p class="max-w-[336px] text-[#414C5E]">Hey, if you're absolutely sure you want to delete your account, we got you covered. This Process cannot be undone</p>
      <div class="flex gap-2">
        <button id="close" class="w-full py-1 border border-[#B3B3B3] rounded-lg">No keep it</button>
        <button @click="deleteAccount" class="w-full py-1 border border-[#FF0000] bg-[#FF0000] rounded-lg text-white px-2">{{isLoading ? 'Deleting...' : 'Yes, Delete Account'}}</button>
      </div>
      <p v-if="!!isSuccess" class="success">{{isSuccess}}</p>
      <p v-if="!!isError" class="error">{{isError}}</p>
    </div>
  </div>
</template>

<style scoped>

</style>