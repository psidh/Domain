"use client";
import { useEffect, useRef , useState} from "react";
import { Chart } from "chart.js";

function Example() {
  const chartRef = useRef(null);
  const [shouldRenderChart, setShouldRenderChart] = useState(false);

  useEffect(() => {
    const chartCanvas = chartRef.current;
    const ctx = chartCanvas.getContext("2d");
    const myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["2022", "2023", "2024", "2025","2026"],
        datasets: [
          {
            data: [86, 123, 200, 140, 300],
            label: "Contributions",
            borderColor: "#00cc00",
            borderWidth: "2",
            backgroundColor: "rgba(0, 204, 0, 0.3)",
            fill: true,
          },
        ],
      },
      options: {
        scales: {
          x: {
            grid: {
              display: false,
            },
            title: {
              display: true,
              text: "Time",
            },
          },
          y: {
            grid: {
              color: "rgba(255, 255, 255, 0.4)",
            },
            title: {
              display: true,
              text: "Skills",
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
        animation: {
          duration: 25000,
          onProgress: (animation) => {
            if (animation.animationObject.numSteps === animation.currentStep) {
              myChart.options.animation.onProgress = null;
            }
          },
        },
        responsive: true,
        maintainAspectRatio: false, // Allow chart to grow on larger screens
      },
    });

    const handleScroll = () => {
    const chartSection = chartCanvas.getBoundingClientRect();
    if (chartSection.top < window.innerHeight * 0.5) {
        setShouldRenderChart(true);
        window.removeEventListener("scroll", handleScroll);
    }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
    window.removeEventListener("scroll", handleScroll);
    };
}, []);

  return (
<div style={{ fontFamily: 'Ambit, sans-serif' }} className="container mx-auto pt-4 pb-8 px-4 sm:px-16 md:py-10 font-ambit">
  <h1 className="text-3xl font-semibold mb-4 capitalize text-left px-8 sm:pl-8">Consistency</h1>
  <div className="my-4">
    <div className="border border-gray-600 rounded-xl shadow-xl p-4 sm:p-8">
      <canvas ref={chartRef} width={800} height={400} className="w-full h-auto"></canvas>
    </div>
  </div>
</div>


  );
}

export default Example;