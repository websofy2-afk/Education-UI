"use client"
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { partners } from "@/app/api/data";
import Image from "next/image";

const BoxSlider = () => {
  var settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // screen width <= 1024px
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // screen width <= 768px
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // screen width <= 480px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings} className="text-center">
        {partners.map((part, index) => (
          <div
            key={index}
            className="bg-IcyBreeze py-5 rounded-lg text-center group hover:bg-primary"
          >
            <div className="w-32 flex flex-col gap-4 items-center justify-center">
              <Image
                src={part.logo}
                alt="profile"
                width={64}
                height={64}
                quality={100}
                sizes="100vh"
                className="!w-16 !h-16 rounded-full object-cover border-2 border-primary/50 group-hover:border-white"
              />
              <p className="text-xs text-center font-medium text-gray-400 group-hover:text-white">
                {part.name}
              </p>
            </div>
          </div>
        ))}
        {partners.map((part, index) => (
          <div
            key={index}
            className="bg-IcyBreeze py-5 rounded-lg text-center group hover:bg-primary"
          >
            <div className="w-32 flex flex-col gap-4 items-center justify-center">
              <Image
                src={part.logo}
                alt="profile"
                width={64}
                height={64}
                quality={100}
                sizes="100vh"
                className="!w-16 !h-16 rounded-full object-cover border-2 border-primary/50 group-hover:border-white"
              />
              <p className="text-xs text-center font-medium text-gray-400 group-hover:text-white">
                {part.name}
              </p>
            </div>
          </div>
        ))}
      </Slider>

    </>
  );
};

export default BoxSlider;
