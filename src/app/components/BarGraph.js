import React, { useRef, useEffect } from "react";
import Chart from "chart.js";

const BarGraph = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartCanvas = chartRef.current;
    const ctx = chartCanvas.getContext("2d");

    new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["JavaScript", "Python", "C", "C++", "Java", "HTML",],
        datasets: [
          {
            label: "Programming Languages",
            data: [30, 15, 20, 10, 10, 25, 5],
            backgroundColor: [
              "rgba(110, 238, 14, 1)",
              "rgba(110, 238, 14, 0.9)",
              "rgba(110, 238, 14, 0.8)",
              "rgba(110, 238, 14, 0.7)",
              "rgba(110, 238, 14, 0.6)",
              "rgba(110, 238, 14, 0.5)",
              "rgba(110, 238, 14, 0.4)",
            ],
          },
        ],
      },
      options: {
        scales: {
          x: {
            grid: {
              display: false,
            },
            ticks: {
              color: "white",
              font: {
                size: 14,
              },
            },
          },
          y: {
            beginAtZero: true,
            ticks: {
              stepSize: 10,
              color: "white",
              font: {
                size: 18,
              },
            },
          },
        },
      },
    });
  }, []);

  return (
    <div className="my-4 container mx-auto pt-4 pb-8 px-6 md:px-16 md:py-10 ">
      <h1 className="md:text-4xl text-3xl font-semibold my-4 text-center md:text-left text-white">Languages</h1>
      <canvas ref={chartRef} width={800} height={400} className="w-full h-auto"></canvas>
    </div>
  );
};

export default BarGraph;
