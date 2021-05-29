var options = {
  series: [{
  name: 'Series 1',
  data: [80, 50, 30, 40, 100, 20],
}],
  chart: {
  width: '65%',
  type: 'radar',
},
title: {
  text: 'Basic Radar Chart'
},
xaxis: {
  categories: ['January', 'February', 'March', 'April', 'May', 'June']
}
};

var radchart = new ApexCharts(document.querySelector("#radchart"), options);
radchart.render();