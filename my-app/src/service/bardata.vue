<template>
 <div class="chart">
   <chartjs-bar  v-bind:labels="mylabels" v-bind:datasets="mydatasets" v-bind:option="option"></chartjs-bar>
 </div>
</template>

<script>

export default {
  name: 'bar',
 
 data() {
  return {
    mylabels: [ "March", "April", "May", "June", "July", "August"],
  
     mydatasets:[{ 

       label: " téléchargements v3.0",
       data: [65, 59, 80, 481, 56, 155], 

      backgroundColor:  'rgba(255, 99, 132)' , 

      borderColor: 'rgba(255,99,132,1)',

       borderWidth: 1, 

       hoverBorderWidth:2,

       labelColor: 'rgba(54, 162, 235, 1)',
},
        { 
          label: "téléchargements v2.0", 

          data: [280, 50, 320, 41, 26, 85],

       backgroundColor:  'rgba(54, 162, 235)',

        borderColor: 'rgba(54, 162, 235, 1)', 

        borderWidth: 1, 
        hoverBorderWidth:2,
         },
         { 

       label: " téléchargements v1.0",
       data: [12, 32, 250, 90, 399, 430], 

      backgroundColor:   'rgba(255, 159, 64)' , 

      borderColor: 'rgba(255, 159, 64, 1)',

       borderWidth: 1, 

       hoverBorderWidth:2,

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
padding-top: 65px;
padding-bottom: 85px;
}
</style>
