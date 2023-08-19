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
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8">Certificates and Achievements</h2>
        <Slider {...settings}>
          {certificatesData.map((certificate, index) => (
            <div key={index} className="px-4">
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="mb-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={certificate.image} alt={certificate.title} className="mx-auto w-80 h-60" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{certificate.title}</h3>
                  <p className="text-gray-700">{certificate.description}</p>
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