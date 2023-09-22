<script setup>
import {ref} from "vue";

const barSeries = [{
  data: [{
    x: 'Html',
    y: 44,
    fillColor: '#BAEDBD'
  }, {
    x: 'CSS',
    y: 55,
    fillColor: '#C6C7F8'
  }, {
    x: 'JS',
    y: 41,
    fillColor: '#1C1C1C'
  },{
    x: 'Figma',
    y: 31,
    fillColor: '#B1E3FF'
  },{
    x: 'Typescript',
    y: 13,
    fillColor: '#95A4FC'
  },{
    x: 'Other',
    y: 26,
    fillColor: '#A1E3CB'
  }],
}]

const barOptions = {
  dataLabels: {
    enabled: false,
  },
  chart: {
    toolbar: {
      show: false
    }
  },
}

const series = ref([44, 55, 41, 17])
const options = ref({
  stroke: {
    show: false
  },
  labels: ['Html', 'Css', 'Javascript', 'Other'],
  colors: ['#BAEDBD', '#C6C7F8', '#1C1C1C', '#95A4FC'],
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: true,
    formatter: function (name, opt) {
      const total = opt.w.globals.initialSeries.reduce((acc, curr) => acc + curr, 0)
      const val = opt.w.globals.initialSeries[opt.seriesIndex]
      const percentage = ((val / total) * 100).toFixed(1)
      return `<div class="flex gap-10">
    <span>${name}</span>
    <span>${percentage}%</span>
</div>`
    }
  },
  plotOptions: {
    pie: {
      customScale: 1
    }
  }
})
</script>

<template>
  <div class="flex w-full gap-20 my-11">
    <div class="w-full rounded-lg shadow-lg flex flex-col justify-between px-14 py-12">
      <h3 class="font-semibold text-xl">Performance Records</h3>
      <div class="flex w-full justify-between">
        <apexchart width="500" height="500" :series="series" type="donut" :options="options"></apexchart>
      </div>
    </div>
    <div class="w-full flex flex-col px-8 py-6 rounded-lg shadow-lg">
      <h3 class="font-semibold text-xl">Popularity Statistics</h3>
      <apexchart :series="barSeries" type="bar" :options="barOptions"></apexchart>
    </div>
  </div>
</template>

<style scoped>

</style>