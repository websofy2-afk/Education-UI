"use client";
import Image from "next/image";
import { featuredInstructors } from "@/app/api/data";
import { RenderStars } from "@/components/Common/Rating";

const FeaturedInstructors = ({ showTitle = true }) => {

  return (
    <>
      <section className="bg-IcyBreeze">
        {showTitle && (
          <h2 className="text-center pb-12">Featured Instructors</h2>
        )}
        <div className="grid lg:grid-cols-5 sm:grid-cols-2 grid-cols-1 items-stretch gap-8 mx-7">
          {featuredInstructors.map((inst, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={`${index * 300}`}
              data-aos-duration="1000"
              className={`col-span-1 group overflow-hidden ${index % 2 === 1 ? "lg:mt-28 mt-0" : ""
                }`}
            >
              {/* Image Wrapper (Required for fill) */}
              <div className="relative w-full h-64 overflow-hidden rounded-lg">
                <Image
                  src={inst.image}
                  alt={`Image of ${inst.name}`}
                  fill
                  quality={100}
                  sizes="100vw"
                  className="object-cover w-full h-full transition-all duration-300 group-hover:scale-110"
                />
              </div>
              <div className="pt-6">
                <h6 className="text-[28px] leading-[2.25rem] font-bold text-secondary dark:text-white">
                  {inst.name}
                </h6>

                <div className="flex flex-col">
                  <span className="text-lg font-normal text-SlateBlueText dark:text-opacity-80">
                    {inst.role}
                  </span>
                  <span className="text-secondary">{inst.courses} Courses</span>

                  <span className="flex gap-1 text-secondary">{RenderStars(inst.rating)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </>
  );
};

export default FeaturedInstructors;
