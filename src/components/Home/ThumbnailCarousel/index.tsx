"use client";
import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { CategoryProps } from "@/types/categories";

const ThumbnailCarousel: React.FC<CategoryProps> = ({ categories, setCourseTitle, setCourseDes }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const mainSliderRef = useRef<Slider | null>(null);
  const navSliderRef = useRef<Slider | null>(null);

  const settingsFor = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: navSliderRef.current as Slider,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          fade: true,
          asNavFor: navSliderRef.current as Slider,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          fade: true,
          asNavFor: navSliderRef.current as Slider,
        },
      },
    ],
  };

  const settingsNav = {
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: mainSliderRef.current as Slider, // Ensure proper typing
    dots: true,
    centerMode: true,
    focusOnSelect: true,
    beforeChange: (oldIndex: number, newIndex: number) =>
      setActiveIndex(newIndex),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: true,
          focusOnSelect: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
          focusOnSelect: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          focusOnSelect: true,
        },
      },
    ],
  };

  useEffect(() => {
    if (mainSliderRef.current) {
      mainSliderRef.current.slickGoTo(activeIndex);
      setCourseTitle(categories[activeIndex].title)
      setCourseDes(categories[activeIndex].description)
    }
  }, [activeIndex]);

  return (
    <>
      <div>
        <Slider {...settingsFor} ref={mainSliderRef} className="pb-3">
          {
            categories.map((item, index) => {
              return (
                <div key={index}>
                  <Image
                    src={`/images${item.image}`}
                    alt={`Image of ${item.title}`}
                    width={600}
                    height={400}
                    quality={100}
                    sizes="100vw"
                    className="rounded-lg cursor-pointer"
                  />
                </div>
              )
            })
          }
        </Slider>

        <Slider {...settingsNav} ref={navSliderRef} className="thumb">
          {
            categories.map((item, index) => {
              return (
                <div key={index}>
                  <Image
                    src={`/images${item.image}`}
                    alt={`Image of ${item.title}`}
                    width={600}
                    height={400}
                    quality={100}
                    sizes="100vw"
                    className="rounded-lg cursor-pointer"
                  />
                </div>
              )
            })
          }
        </Slider>
      </div>
    </>
  );
};

export default ThumbnailCarousel;

