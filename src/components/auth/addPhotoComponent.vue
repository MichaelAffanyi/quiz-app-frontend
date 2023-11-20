<script setup>
  import addPhotoIcon from "@/assets/auth/addPhoto.png"
  import SignupHeader from "@/components/auth/signupHeader.vue";
  import avatarIcon from "@/assets/auth/avatar.png"
  import {computed, ref, watch} from "vue";
  import {useStore} from "vuex";
  import {authApi} from "@/utils";
  import {useRouter} from "vue-router";

  const profilePhoto = ref(null)
  const profileSrc = computed(() => profilePhoto.value ? URL.createObjectURL(profilePhoto.value) : avatarIcon)
  const isLoading = ref(false)
  const store = useStore()
  const router = useRouter()

  const user = store.getters.getUser
  const handleChange = (event) => {
    profilePhoto.value = event.target.files[0]
  }

  const buttonText = computed(() => {
    if(isLoading.value) return 'Uploading...'
    if(profilePhoto.value) return 'Continue'
    else return 'Upload a photo'
  })

  const uploadProfile = async () => {
    if(!profilePhoto.value) return
    const profilePhotoForm = new FormData()
    profilePhotoForm.set('image', profilePhoto.value)

    try {
      isLoading.value = true
      const res = await authApi.post('/upload-photo', profilePhotoForm)
      if(res?.status === 200) {
        router.replace('/auth/register/add-purpose')
      }
      isLoading.value = false
    } catch (e) {
      isLoading.value = false
      console.log(e)
    }
  }
</script>

<template>
<div class="flex w-screen h-screen">
  <div class="image">
    <img :src="addPhotoIcon" alt="" class="w-full h-full object-cover">
  </div>
  <section class="form-container">
    <signup-header></signup-header>
    <div class="relative flex flex-col items-center gap-2 h-full">
      <h1 class="text-3xl font-semibold">Add photo</h1>
      <h4>Add a photo so other members know who you are</h4>
      <div class="overflow-hidden mt-14 w-[139px] h-[139px] bg-[#B3B3B3] rounded-full flex items-center justify-center">
        <label for="profile" class="w-20 h-20 cursor-pointer" :class="{profile: profilePhoto}">
          <img :src="profileSrc" alt="" class="w-full h-full object-cover">
        </label>
        <input @change="handleChange" hidden="" type="file" name="profile" id="profile">
      </div>
      <div class="absolute bottom-8 flex flex-col gap-2">
        <label :for="!profilePhoto ? 'profile' : ''" @click="uploadProfile" class="bg-[#0267FF] px-14 py-3 text-white rounded-md cursor-pointer">
          {{buttonText}}
        </label>
        <router-link v-if="!profilePhoto" to="/auth/register/add-purpose" class="text-sm text-center mt-3 cursor-pointer">Skip</router-link>
      </div>
    </div>
  </section>
</div>
</template>

<style scoped>
  .profile {
    width: 100%;
    height: 100%;
  }
</style>