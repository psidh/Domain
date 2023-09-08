'use client';
import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styled, { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Ambit';
  src: url('/fonts/Ambit/Ambit-Regular.ttf') format('truetype');
}
`;
const BarGraph = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    AOS.init({
      delay: 50,
      offset: 100,
      duration: 500,
      once: true,
      mirror: true,
      easing: 'ease-in-out',
    });

    const chartCanvas = chartRef.current;
    const ctx = chartCanvas.getContext('2d');

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['JavaScript', 'Python', 'C', 'C++', 'Java', 'HTML'],
        datasets: [
          {
            label: 'Programming Languages',
            data: [30, 15, 20, 10, 10, 25, 5],
            backgroundColor: [
              'rgba(110, 238, 14, 1)',
              'rgba(110, 238, 14, 0.9)',
              'rgba(110, 238, 14, 0.8)',
              'rgba(110, 238, 14, 0.7)',
              'rgba(110, 238, 14, 0.6)',
              'rgba(110, 238, 14, 0.5)',
              'rgba(110, 238, 14, 0.4)',
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
              color: 'white',
              font: {
                size: 14,
              },
            },
          },
          y: {
            beginAtZero: true,
            ticks: {
              stepSize: 10,
              color: 'white',
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
    <div
      className="container mx-auto pt-4 pb-8 px-6 md:px-16 md:py-10"
      data-aos="fade-in"
    >
      <h1 className="md:text-4xl text-3xl font-semibold my-4 text-center md:text-left text-white">
        Languages
      </h1>
      <div className="my-4">
        <div className="rounded-xl p-4 sm:p-8 ">
          <canvas
            ref={chartRef}
            width={800}
            height={400}
            className="w-full md:h-auto"
          ></canvas>
        </div>
      </div>
    </div>
  );
};

export default BarGraph;
