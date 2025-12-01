"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  FaLaptopCode,
  FaChalkboardTeacher,
  FaBookOpen,
  FaUsers,
  FaGlobe,
} from "react-icons/fa";

const categories = [
  {
    title: "Professional Learning",
    icon: <FaChalkboardTeacher className="text-blue-600 size-10" />,
    aos: "fade-up",
  },
  {
    title: "Web Development",
    icon: <FaLaptopCode className="text-green-600 size-10" />,
    aos: "fade-up",
  },
  {
    title: "Business Studies",
    icon: <FaUsers className="text-purple-600 size-10" />,
    aos: "fade-up",
  },
  {
    title: "Digital Learning",
    icon: <FaGlobe className="text-orange-600 size-10" />,
    aos: "fade-up",
  },
  {
    title: "Study Materials",
    icon: <FaBookOpen className="text-red-600 size-10" />,
    aos: "fade-up",
  },
];

const PopularCategories: React.FC = () => {

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">

        {/* Section Title */}
        <div className="text-center mb-12" data-aos="fade-down">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Popular Categories
          </h2>
          <p className="text-gray-600 mt-2">
            Explore top learning categories selected for your growth
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {categories.map((cat, index) => (
            <div
              key={index}
              data-aos={cat.aos}
              data-aos-delay={index * 120}
              className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center justify-center 
              hover:shadow-xl transition-all cursor-pointer border border-gray-100"
            >
              {cat.icon}
              <h3 className="mt-4 text-gray-900 font-semibold text-center text-sm sm:text-base">
                {cat.title}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PopularCategories;
