import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import CourseHero from "@/components/courses/CourseHero";
import CourseLevel from "@/components/courses/CourseLevel";
import CourseQuoteDivider from "@/components/courses/CourseQuoteDivider";
import CourseCTA from "@/components/courses/CourseCTA";
import { courseLevels } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Courses",
  description:
    "A curated journey through the German language. From A1 foundations to B2 mastery — learn to reclaim your identity through emotional storytelling.",
  openGraph: {
    title: "Courses | Decode German",
    description:
      "A curated journey through the German language — level by level, through the power of emotional storytelling.",
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
        <CourseCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
