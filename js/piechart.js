var options = {
    series: [44, 55, 13, 43, 22],
    chart: {
    type: 'pie',
    width: '50%'
  },
  labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200
      },
      legend: {
        position: 'bottom'
      }
    }
  }]
  };

  var piechart = new ApexCharts(document.querySelector("#piechart"), options);
  piechart.render();