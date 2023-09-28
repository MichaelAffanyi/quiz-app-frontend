<script setup>

const filters = [
    {
      name: 'Subject',
      filterBy: ['Web development', 'Design', 'Data Science', 'Marketing', 'Virtual Assistant']
    },
    {
      name: 'Level',
      filterBy: ['Beginner', 'Intermediate', 'Advanced']
    },]

</script>

<template>
  <aside class="w-max h-max border-r border-[#808080] pr-7">
    <h3 class="font-semibold text-2xl border-b border-[#999999] pb-7">Filters</h3>
    <div v-for="filter in filters" class="py-7 border-b border-[#999999] last:border-0">
      <h4 class="mb-7">{{filter.name}}</h4>
      <ul>
        <li v-for="name in filter.filterBy" class="flex items-center gap-3">
          <div class="w-4 h-4 border-2 border-[#000000] rounded-sm"></div>
          <span class="w-max">{{name}}</span>
        </li>
      </ul>
    </div>
  </aside>
</template>

<style scoped>

</style>