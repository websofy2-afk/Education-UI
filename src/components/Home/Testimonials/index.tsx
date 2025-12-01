"use client";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { testimonials } from "@/app/api/data";
import { RenderStars } from "@/components/Common/Rating";

const Testimonials = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  
  return (
    <>
      <section className="bg-IcyBreeze dark:bg-darklight testimonial">
        <div className="container">
          <div className="md:pb-20 pb-8
        text-center" data-aos="fade-up">
            <h2 className="pb-4">
              Student Testimonials
            </h2>
            <p className="text-SlateBlueText font-normal
           dark:text-opacity-80 text-lg max-w-920 m-auto">
              What our students say about learning at Edunexa
            </p>
          </div>
          <Slider {...settings}>
            {
              testimonials.map((item) => (
                <div>
                  <div className="grid md:grid-cols-12 grid-cols-1 items-center">
                    <div className="col-span-4 bg-LightSkyBlue sm:rounded-br-214 rounded-br-182 sm:rounded-tl-214 rounded-tl-182 relative before:content-[''] before:absolute before:bg-[url('/images/testimonials/quotes.png')] before:w-109 before:h-109 before:-right-10 before:top-32 lg:inline-block hidden">
                      <Image
                        src={`/images${item.image}`}
                        alt="testimonials"
                        width={800}
                        height={800}
                        quality={100}
                        sizes="100vh"
                        className="w-full h-full rounded-tl-[13em] rounded-br-[13em] object-cover"
                      />

                    </div>
                    <div className="col-span-8 md:ml-28 ml-0">
                      <h2 className="max-w-72">{item.course}</h2>
                      <p className="text-[22px] leading-[2rem] font-normal text-SlateBlueText dark:text-opacity-80 py-10 max-w-632">
                        {item.review}
                      </p>
                      <div className="flex items-center gap-8">
                        <div>
                          <p className="text-xl font-medium text-secondary dark:text-darktext pb-1">
                            {"- "}{item.name}
                            <span className="flex gap-1 items-center justify-center">
                              {RenderStars(item.rating)}
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }
            {
              testimonials.map((item) => (
                <div>
                  <div className="grid md:grid-cols-12 grid-cols-1 items-center">
                    <div className="col-span-4 bg-LightSkyBlue sm:rounded-br-214 rounded-br-182 sm:rounded-tl-214 rounded-tl-182 relative before:content-[''] before:absolute before:bg-[url('/images/testimonials/quotes.png')] before:w-109 before:h-109 before:-right-10 before:top-32 lg:inline-block hidden">
                      <Image
                        src={`/images${item.image}`}
                        alt="testimonials"
                        width={800}
                        height={800}
                        quality={100}
                        sizes="100vh"
                        className="w-full h-full rounded-tl-[13em] rounded-br-[13em] object-cover"
                      />

                    </div>
                    <div className="col-span-8 md:ml-28 ml-0">
                      <h2 className="max-w-72">{item.course}</h2>
                      <p className="text-[22px] leading-[2rem] font-normal text-SlateBlueText dark:text-opacity-80 py-10 max-w-632">
                        {item.review}
                      </p>
                      <div className="flex items-center gap-8">
                        <div>
                          <p className="text-xl font-medium text-secondary dark:text-darktext pb-1">
                            {"- "}{item.name}
                            <span className="flex gap-1 items-center justify-center">
                              {RenderStars(item.rating)}
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
