<script setup>

import CustomInput from "@/components/ui/customInput.vue";

const inputFields = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Points']

</script>

<template>
<form class="w-3/6">
  <h1 class="mt-16 mb-6 w-full text-center font-semibold text-2xl">Enter question details</h1>
  <div class="grid grid-cols-2 gap-6">
    <textarea name="question" id="question" class="border-2 border-[#9CA3AF] resize-none w-full h-28 rounded-lg focus:outline-0 overflow-y-auto p-2 col-span-2 focus:border-blue-500" placeholder="Enter question here"></textarea>
    <custom-input v-for="field in inputFields" :label="field" type="text"></custom-input>
<!--    <div class="w-full h-10 border-2 border-[#9CA3AF] rounded-lg">-->

<!--    </div>-->
    <button type="submit" class="px-6 py-2 bg-blue-500 text-white rounded-lg col-span-2 w-max mx-auto">Add question</button>
  </div>
</form>
</template>

<style scoped>

</style>