import { ChartOptions } from "chart.js";

export const chartOptions: ChartOptions = {
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
    custom: function (tooltipModel) {
      let tooltipEl = document.getElementById("chart-tooltip");

      if (!tooltipEl) {
        tooltipEl = document.createElement("div");
        tooltipEl.id = "chart-tooltip";
        tooltipEl.style.position = "absolute";
        tooltipEl.style.backgroundColor = "#4B40EE";
        tooltipEl.style.color = "white";
        tooltipEl.style.borderRadius = "5px";
        tooltipEl.style.padding = "10px";
        tooltipEl.style.pointerEvents = "none";
        tooltipEl.style.opacity = "1";
        document.body.appendChild(tooltipEl);
      }

      if (tooltipModel.opacity === 0) {
        tooltipEl.style.opacity = "0";
        return;
      }

      const position =this && this._chart.canvas.getBoundingClientRect();
      const x = position.right + 10;
      const y = position.bottom - 150;

      tooltipEl.style.left = `${x}px`;
      tooltipEl.style.top = `${y}px`;
      tooltipEl.style.opacity = "1";

      if (tooltipModel.body) {
        const bodyLines = tooltipModel.body.map((b) => b.lines);
        tooltipEl.innerHTML = bodyLines.join("<br>");
      }
    },
  },
  elements: {
    line: {
      borderWidth: 2,
    },
  },
};
