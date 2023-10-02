<script setup>
 import doneIcon from "@/assets/auth/done.svg"
 import {computed, ref} from "vue";

 const added = ref(false)

 const props = defineProps(['title'])
 const emit = defineEmits(['addToSelected'])

 const handleAdd = () => {
   added.value = !added.value
   emit('addToSelected', props.title)
 }

 const getText = computed(() => added.value ? 'Added' : 'Add')

</script>

<template>
    <div class="w-[172px] h-[168px] bg-opacity-40 rounded-lg py-6 pl-6 text-left flex flex-col justify-between" :class="title.toLowerCase()">
    <span class="font-semibold text-xl">{{title}}</span>
    <span @click="handleAdd" class="px-4 py-1 border border-[#B3B3B3] rounded-md w-max flex gap-2 cursor-pointer">
      {{getText}}
      <img v-if="added" :src="doneIcon" alt="">
    </span>
  </div>
</template>

<style scoped>

.gaming {
  background: rgba(223, 155, 224, 0.4);
}

.fashion {
  background: rgba(204, 255, 204, 0.4);
}

.music {
  background: rgba(255, 194, 153, 0.4);
}

.reading {
  background: rgba(37, 117, 209, 0.4);
}

</style>