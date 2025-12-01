"use client"
import { useState } from "react";
import Link from "next/link";
import ThumbnailCarousel from "../ThumbnailCarousel";
import { categories } from "@/app/api/data";

const Categories = () => {
  const [courseTitle, setCourseTitle] = useState(categories[0].title);
  const [courseDes, setCourseDes] = useState(categories[0].description);

  return (
    <>
      <section className="bg-IcyBreeze dark:bg-darklight relative overflow-hidden before:absolute before:content-[''] before:bg-PaleSkyBlu before:dark:bg-secondary before:w-687 before:h-687 before:-bottom-1/2 before:rounded-full before:xl:inline-block before:hidden">
        <div className="container">
          <h2 className="text-center mb-10">Key Knowledge Areas</h2>
          <div className="grid md:grid-cols-2 grid-cols-1 items-center lg:gap-24 gap-5">
            <div
              data-aos="fade-right"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              <ThumbnailCarousel categories={categories} setCourseTitle={setCourseTitle} setCourseDes={setCourseDes} />
            </div>
            <div
              className="md:pt-0 pt-6"
              data-aos="fade-left"
              data-aos-delay="200"
              data-aos-duration="1000">
              <h2>{courseTitle}</h2>
              <p className="text-lg font-normal text-SlateBlueText dark:text-opacity-80 max-w-506 md:pt-9 pt-5 md:pb-14 pb-6">
                {courseDes}
              </p>
              <Link
                href="#"
                className="btn_outline btn-2 hover-outline-slide-down"
              >
                <span className="!flex !items-center gap-3">
                  Enroll Now
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25" />
                    </svg>

                  </div>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Categories;
