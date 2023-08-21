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
    <div style={{ fontFamily: 'Ambit, sans-serif'}}  className="px-16">
      <div className="w-1000 h-screen flex flex-col justify-center items-center px-16 ">
        {/* Line chart */}
        </div>
        <div>
        <h1 className="text-3xl font-semibold mb-4 capitalize text-left px-16">Consistency</h1>
        <div className="px-16  my-4">
          <div className="border border-gray-600 rounded-xl shadow-xl">
            <canvas ref={chartRef} width={800} height={400}></canvas>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Example;
