<script setup>

import {computed, inject} from "vue";
import checkIcon from "@/assets/check.svg"

const filters = [
    {
      name: 'Subject',
      filterBy: ['Web development', 'Design', 'Data Science', 'Marketing', 'Virtual Assistant']
    },
    {
      name: 'Level',
      filterBy: ['100L', '200L', '300L', '400L']
    },]

const selectedFilters = inject('selectedFilters')

const isSelected = computed(() => ({name, filter}) => selectedFilters.value[name.toLowerCase()].includes(filter.toLowerCase()))

</script>

<template>
  <aside class="w-max h-max border-r border-[#808080] pr-7">
    <h3 class="font-semibold text-2xl border-b border-[#999999] pb-7">Filters</h3>
    <div v-for="filter in filters" class="py-7 border-b border-[#999999] last:border-0">
      <h4 class="mb-7">{{filter.name}}</h4>
      <ul>
        <li v-for="name in filter.filterBy"
            class="flex items-center gap-3 cursor-pointer" @click="$emit('addToSelected', [filter.name,name])"
        >
          <div
              class="w-4 h-4 border border-[#000000] rounded-sm flex items-center justify-center"
              :class="{selected: isSelected({name: filter.name, filter: name})}"
          >
            <img v-if="isSelected({name: filter.name, filter: name})" :src="checkIcon" alt="">
          </div>
          <span class="w-max">{{name}}</span>
        </li>
      </ul>
    </div>
  </aside>
</template>

<style scoped>
.selected {
  background: #0267FF;
  border: 1px solid #0267FF;
}
</style>