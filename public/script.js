let ctx = document.getElementById("myChart");
console.log(ctx);
ctx = document.getElementById("myChart").getContext("2d");

const labels = ["01/09", "012/09", "03/09", "04/09", "05/09", "06/09", "07/09"];
const data = {
  labels: labels,
  datasets: [
    {
      label: "eGLD",
      data: [150, 160, 165, 150, 160, 145, 150],
      fill: true,
      borderColor: "#2745bb",
      backgroundColor: "#E9ECF8",
      tension: 0.3
    }
  ]
};

const options = {
  yAxes: [
    {
      ticks: {
        min: 0,
        max: 200
        // stepSize: 20
      }
    }
  ]
};

const myChart = new Chart(ctx, {
  type: "line",
  data: data,
  options: options
});
