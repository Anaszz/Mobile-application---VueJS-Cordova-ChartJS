<template>
  <div id="doughnut">
    <canvas id="doughnutchart"></canvas>
  </div>
</template>

<script>

import Chart from 'chart.js'
import doughnutdata from '@/service/doughnutdata.js';


export default {     // exportation de "app" et de tout ses components 
  name: 'doughnut',

 data() {
  return {
    doughnutdata: doughnutdata,
  }
 },

  methods: {
  createChart(chartId, chartData) {
    const ctx = document.getElementById(chartId);
    const myChart = new Chart(ctx, {
      type: chartData.type,
      data: chartData.data,
      options: chartData.options,
    });
  }
},

async mounted() {

  const response = await this.$axios.get('https://www.appaloosa-store.com/api/v2/8882/mobile_application_updates/365576?api_key=f8p7la35opubc5zzy02euwa6rnd10v')
  //debugger;
  this.doughnutdata.data.datasets[0].data = response.data.mobile_application_update.groups_ids
  this.doughnutdata.data.labels = response.data.mobile_application_update.groups
  this.createChart('doughnutchart', this.doughnutdata)

}

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
