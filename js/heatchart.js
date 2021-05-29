var data = [
  {
    z: [[1, 20, 0, 50], [20, 1, 60, 30], [30, 60, 1, 40], [20, 1, 40, 30]],
    type: 'heatmap'
  }
];
var layout = {
  title: "Fire Intensity",
}

Plotly.newPlot('heatchart', data, layout);