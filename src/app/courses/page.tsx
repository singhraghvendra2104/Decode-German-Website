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
import { courseLevels, pageMetadata } from "@/lib/constants";

const meta = pageMetadata.courses;
export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  openGraph: {
    title: meta.ogTitle,
    description: meta.ogDescription,
    images: [{ url: meta.ogImage, width: 1200, height: 630, alt: meta.ogImageAlt }],
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
