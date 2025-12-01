"use client";

import React from "react";
import Image from "next/image";
import "aos/dist/aos.css";

interface Course {
  title: string;
  category: string;
  image: string;
  lessons: number;
  students: number;
}

interface Props {
  courses: Course[];
}

const TrendingCourses: React.FC<Props> = ({ courses }) => {

  return (
    <section >
      <div className="container">
        {/* Heading */}
        <div className="md:pb-20 pb-8
        text-center" data-aos="fade-up">
          <h2 className="pb-4">
            Trending Courses
          </h2>
          <p className="text-SlateBlueText font-normal
           dark:text-opacity-80 text-lg max-w-920 m-auto">
            Explore the most popular and in-demand learning tracks
          </p>
        </div>

        {/* Grid */}
        <div
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          data-aos="fade-up"
        >
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-4 cursor-pointer border hover:border-SlateBlueText"
              data-aos="zoom-in"
            >
              {/* Course Image */}
              <div className="relative w-full h-40 mb-3">
                <Image
                  src={`/images${course.image}`}
                  alt={course.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>

              {/* Info */}
              <h3 className="text-lg font-semibold text-secondary">
                {course.title}
              </h3>
              <p className="text-sm text-SlateBlueText mt-1">{course.category}</p>

              {/* Stats */}
              <div className="flex justify-between items-center mt-4 text-sm text-secondary">
                <span>{course.lessons} Lessons</span>
                <span>{course.students} Students</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingCourses;
