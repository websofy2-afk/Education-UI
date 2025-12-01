import { Metadata } from "next";
import Testimonials from '@/components/Home/Testimonials';
import Hero from '@/components/Home/Hero';
import TopInstructor from '@/components/Home/TopInstructor';
import TrendingCourses from '@/components/Home/TrendingCourses';
import { trendingCourses } from './api/data';
import Categories from '@/components/Home/Categories';
import FeaturedInstructors from '@/components/Home/FeaturedInstructors';
import Partners from "@/components/Home/Partners";
import YearHighlight from "@/components/Home/YearHighlight/page";

export const metadata: Metadata = {
  title: "Edunexa | Learn And Grow",
  icons: {
    icon: "/images/logo/favicon.png",
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <TopInstructor />
      <Categories />
      <TrendingCourses courses={trendingCourses} />
      <FeaturedInstructors />
      <YearHighlight />
      <Testimonials />
      <Partners />
    </main>
  )
}
