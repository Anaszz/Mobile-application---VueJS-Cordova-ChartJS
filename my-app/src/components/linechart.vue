<template>
 <div class="chart">
   <chartjs-line  v-bind:labels="mylabels" v-bind:datasets="mydatasets" v-bind:option="option"></chartjs-line>
 </div>
</template>

<script>

export default {
  name: 'linechart',
 
 data() {
  return {
    mylabels: [ "March", "April", "May", "June", "July", "August"],
  
     mydatasets:[{ 

       label: " téléchargements v3.0",
       data: [65, 59, 80, 481, 56, 155], 

      backgroundColor:  'rgba(255, 99, 132, 0.95)' , 

      borderColor: 'rgb(208, 0, 0)',

       borderWidth: 2, 

       hoverBorderWidth:3,

       labelColor: 'rgba(54, 162, 235, 1)',
},
        { 
          label: "téléchargements v2.0", 

          data: [280, 50, 320, 41, 26, 85],

       backgroundColor:  'rgba(54, 162, 235, 0.95)',

        borderColor: 'rgb(0, 0, 255)', 

        borderWidth: 2, 
        hoverBorderWidth:3,
         },
         { 

       label: " téléchargements v1.0",
       data: [12, 32, 250, 90, 399, 430], 

      backgroundColor:   'rgb(0, 204, 0, 0.5)' , 

      borderColor: 'rgb(1, 106, 0)',

       borderWidth: 2, 

       hoverBorderWidth:3,

       labelColor: 'rgba(54, 162, 235, 1)',
}],
        
    option: {
      responsive: true,
      aspectRatio: 1.4,
      maintainAspectRatio: true,
      title: {
        display:true,
          text:'Version de l\'application téléchargé',
          fontSize:18   
      },
        /*layout:{
          padding:{
            left:200,
            right:200,
            bottom:0,
            top:0
          }
        }, */
        tooltips:{
          enabled:true
        }
         }
 } 
}}
</script>

<style scoped>
.chart{
padding-top: 5px;
padding-bottom: 85px;
}
</style>
