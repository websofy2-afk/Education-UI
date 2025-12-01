"use client";
import React from "react";
import Link from "next/link";

const Hero: React.FC = () => {
  

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/videos/hero-video.mp4" // replace with your video path
        autoPlay
        loop
        muted
      />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/30"></div>

      {/* Content */}
      <div className="relative top-14 z-10 flex flex-col items-center justify-center text-center h-full px-6 md:px-12">
        <h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-IcyBreeze mb-6"
          data-aos="fade-down"
        >
          Unlock Your Learning Potential
        </h1>
        <p
          className="text-IcyBreeze text-lg sm:text-xl mb-6 max-w-2xl"
          data-aos="fade-up"
        >
          Join thousands of learners and access high-quality courses anytime, anywhere.
        </p>
        <div className=" justify-center" data-aos="zoom-in">
          <Link
            href="/"
            data-aos="fade-up"
            data-aos-delay="600"
            data-aos-duration="1000"
            className="btn_outline btn-2 hover-outline-slide-down group"
          >
            <span className="!flex !items-center gap-3">
              Learn More
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
              </div>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;

