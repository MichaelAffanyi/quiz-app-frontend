<script setup>
import {computed} from "vue";

const props = defineProps({
  show: {
    type: Boolean,
    required: true,
  }
})
const toggleShowStyle = computed(() => props.show ? 'translate-y-full' : 'translate-y-[-100px]')

</script>

<template>
  <div
      class="fixed w-max left-0 right-0 mx-auto px-8 py-2 rounded-full font-semibold flex items-center gap-4 transition transform duration-700 ease-in-out"
      :class="toggleShowStyle"
  >
    <slot></slot>
  </div>
</template>

<style scoped>

</style>