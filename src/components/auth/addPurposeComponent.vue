<script setup>
import purposeIcon from "@/assets/auth/interest1.png"
import SignupHeader from "@/components/auth/signupHeader.vue";
import PurposeCard from "@/components/ui/purposeCard.vue";
import {ref, watch} from "vue";
import {authApi} from "@/utils";
import {useStore} from "vuex";
import {useRouter} from "vue-router";
import {updateUser} from "@/utils/helpers";

const selectedPurposes = ref([])
const isLoading = ref(false)
const store = useStore()
const router = useRouter()

const {id} = store.getters.getUser

const addToSelected = (purpose) => {
  const index = selectedPurposes.value.findIndex(ele => ele === purpose.toLowerCase())
  if(index >= 0) {
    selectedPurposes.value.splice(index, 1)
    return
  }
  selectedPurposes.value.push(purpose.toLowerCase())
}

const handleCLick = async () => {
  if(selectedPurposes.value.length < 1) return
  isLoading.value = true
  const res = await updateUser({url: '/add-purpose', data: {id, purpose: selectedPurposes.value}})

  if(res?.status === 200) {
    isLoading.value = false
    router.replace('/auth/register/add-interest')
  }
  else {
    console.log(res?.data?.error || 'Something went wrong')
  }
  isLoading.value = false
}

</script>

<template>
  <div class="flex w-screen h-screen">
    <div class="image">
      <img :src="purposeIcon" alt="" class="w-full h-full object-cover">
    </div>
    <section class="form-container">
      <signup-header></signup-header>
      <div class="flex flex-col items-center gap-6">
        <h1 class="text-3xl font-semibold">Hey there! What brings you here?</h1>
        <h4>This will help us make great recommendations.</h4>
        <div class="flex flex-col gap-6">
          <purpose-card @add-to-selected="addToSelected" title="Social Interaction"></purpose-card>
          <purpose-card @add-to-selected="addToSelected" title="Personal development"></purpose-card>
          <purpose-card @add-to-selected="addToSelected" title="Entertainment and Fun"></purpose-card>
          <purpose-card @add-to-selected="addToSelected" title="Rewards and recognition"></purpose-card>
        </div>
        <base-button @click="handleCLick" class="mt-20">{{isLoading ? 'Adding...' : 'Continue'}}</base-button>
      </div>
    </section>
  </div>
</template>

<style scoped>

</style>