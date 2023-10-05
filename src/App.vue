<script setup>
</script>

<template>
  <div class="fixed w-full h-screen bg-[#585858A3] z-30 backdrop-blur overflow-hidden flex justify-center items-center">
    <div class="p-6 bg-white w-max rounded-lg flex flex-col gap-4">
      <span class="font-semibold">Delete Account</span>
      <p class="max-w-[316px] text-[#414C5E]">Hey, if you're absolutely sure you want to delete your account, we got you covered. This Process cannot be undone</p>
      <div class="flex gap-2">
        <button class="w-full py-1 border border-[#B3B3B3] rounded-lg">No keep it</button>
        <button class="w-full py-1 border border-[#FF0000] bg-[#FF0000] rounded-lg text-white px-2">Yes, Delete Account</button>
      </div>
    </div>
  </div>
  <router-view></router-view>
</template>

<style scoped>

</style>
