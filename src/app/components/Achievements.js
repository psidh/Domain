"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import certificatesData from "src/app/components/certificates.js";

const Achievements = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-950 py-12 mt-4">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8">Certificates</h2>
        <Slider {...settings}>
          {certificatesData.map((certificate, index) => (
            <div key={index} className="px-4">
              <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 mb-4">
                <div className="mb-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={certificate.image} alt={certificate.title} className="rounded-lg mx-auto w-60 h-50" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{certificate.title}</h3>
                  <p className="dark:text-gray-300 text-gray-700">{certificate.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Achievements;