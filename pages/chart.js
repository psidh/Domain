'use client';
import { useEffect, useRef, useState } from 'react';
import { Chart } from 'chart.js';
import AOS from 'aos';
import 'aos/dist/aos.css';

function ChartComponent() {
  const chartRef = useRef(null);

  useEffect(() => {
    AOS.init({
      delay: 100,
      offset: 100,
      duration: 600,
      once: false,
      mirror: true,
      easing: 'ease-in-out',
    });
  }, []);

  useEffect(() => {
    const chartCanvas = chartRef.current;
    const ctx = chartCanvas.getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Dec 2022', 'April 2023', 'August 2023'],
        datasets: [
          {
            data: [70, 200, 500],
            label: 'Contributions',
            borderColor: '#00cc00',
            borderWidth: '4',
            backgroundColor: 'rgba(0, 204, 0, 0.3)',
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
              text: 'Time',
            },
          },
          y: {
            grid: {
              color: 'rgba(255, 255, 255, 0.4)',
            },
            title: {
              display: true,
              text: 'Skills',
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
        animation: {
          duration: 2000,
          onProgress: (animation) => {
            if (animation.animationObject.numSteps === animation.currentStep) {
              myChart.options.animation.onProgress = null;
            }
          },
        },
        responsive: true,
        maintainAspectRatio: false,
      },
    });
  });

  return (
    <div
      className="container mx-auto pt-4 pb-8 px-6 md:px-16 md:py-10"
      data-aos="fade-up"
    >
      <h1 className="md:text-4xl text-3xl font-semibold my-4 text-center md:text-left text-white">
        Consistency
      </h1>
      <div className="my-4">
        <div className="rounded-xl p-4 sm:p-8 ">
          <canvas
            ref={chartRef}
            width={800}
            height={400}
            className="w-full h-auto"
          ></canvas>
        </div>
      </div>
    </div>
  );
}

export default ChartComponent;
