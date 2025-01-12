import { ChartOptions } from "chart.js";


export const chartOptions:ChartOptions = {
  legend: { display: false },
  maintainAspectRatio: false,
  scales: {
    xAxes: [
      {
        gridLines: {
          display: false, 
        },
        ticks: {
          display: false, 
          maxTicksLimit: 6, 
          autoSkip: true, 
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          display: false, 
          drawBorder: true, 
        },
        ticks: {
          display: false, 
        },
      },
    ],
  },
  tooltips: {
    mode: "index",
    intersect: false,
    backgroundColor: "#4B40EE",
    bodyFontColor: "rgba(255,255,255,0.6)",
    displayColors: false,
    callbacks: {
      label: (tooltipItem: any, data: any) => {
        const label = data.datasets[tooltipItem.datasetIndex].label || "";
        const value = tooltipItem.yLabel || "";
        return ` ${label} ${value} ${data.datasets[
          tooltipItem.datasetIndex
        ].vsCurrency.toUpperCase()}`;
      },
    },
  },
  elements: {
    line: {
      borderWidth: 2,
    },
  },
};
