import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import CourseHero from "@/components/courses/CourseHero";
import CourseLevel from "@/components/courses/CourseLevel";
import CourseQuoteDivider from "@/components/courses/CourseQuoteDivider";
import CourseCTA from "@/components/courses/CourseCTA";
import CourseTimeline from "@/components/courses/CourseTimeline";
import SpecializedCourses from "@/components/courses/SpecializedCourses";
import CourseFeatures from "@/components/courses/CourseFeatures";
import { courseLevels } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Courses",
  description:
    "A structured journey through the German language. Every course is online, intensive, and taught in small batches. Whether you're starting from zero or preparing for an exam - we have a structured path for you.",
  openGraph: {
    title: "Courses | Decode German",
    description:
      "A structured journey through the German language - level by level, from A1 to B2.",
  },
};

export default function CoursesPage() {
  return (
    <>
      <Header />
      <main>
        <CourseHero />
        <CourseLevel {...courseLevels[0]} />
        <CourseQuoteDivider />
        <CourseLevel {...courseLevels[1]} />
        <CourseLevel {...courseLevels[2]} />
        <CourseLevel {...courseLevels[3]} isLast />
        <CourseTimeline />
        <SpecializedCourses />
        <CourseFeatures />
        <CourseCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
