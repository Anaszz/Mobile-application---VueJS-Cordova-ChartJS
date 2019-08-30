
export const doughnutdata = {


      
  type: 'doughnut',
  data: {
    labels: [],
    datasets: [
      { 
        data: [],
        backgroundColor: [
          'rgba(54,73,93,.5)', // Blue
          'rgba(54,73,93,.5)',
          'rgba(54,73,93,.5)',
          'rgba(54,73,93,.5)',
          'rgba(54,73,93,.5)',
          'rgba(54,73,93,.5)',
          'rgba(54,73,93,.5)',
          'rgba(54,73,93,.5)'
        ],
        borderColor: [
          '#36495d',
          '#36495d',
          '#36495d',
          '#36495d',
          '#36495d',
          '#36495d',
          '#36495d',
          '#36495d',
        ],
        borderWidth: 2
      }
    ]
  },
  options: {
    responsive: true,
    aspectRatio: 1.4,
    maintainAspectRatio: true,
    title: {
      display:true,
        text:'Version de l\'application téléchargé',
        fontSize:18   
 
  }
}
}

export default doughnutdata

