<script setup>
import {computed} from "vue";

const props = defineProps({
  isTimeer: {
    type: Boolean,
    required: false,
    default: false
  }
})

const fill = computed(() => props.isTimeer ? '#FFFFFF' : '#0267FF')
</script>

<template>
  <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" fill="none">
    <path d="M28.8115 3.5H17.5615V7.25H28.8115V3.5ZM21.3115 27.875H25.0615V16.625H21.3115V27.875ZM36.3678 15.4812L39.0303 12.8187C38.224 11.8625 37.3428 10.9625 36.3865 10.175L33.724 12.8375C30.8178 10.5125 27.1615 9.125 23.1865 9.125C13.8678 9.125 6.31152 16.6813 6.31152 26C6.31152 35.3188 13.849 42.875 23.1865 42.875C32.524 42.875 40.0615 35.3188 40.0615 26C40.0615 22.025 38.674 18.3687 36.3678 15.4812ZM23.1865 39.125C15.9303 39.125 10.0615 33.2563 10.0615 26C10.0615 18.7438 15.9303 12.875 23.1865 12.875C30.4428 12.875 36.3115 18.7438 36.3115 26C36.3115 33.2563 30.4428 39.125 23.1865 39.125Z" :fill="fill"/>
  </svg>
</template>

<style scoped>

</style>