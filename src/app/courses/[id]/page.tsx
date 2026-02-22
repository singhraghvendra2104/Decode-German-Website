import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import CourseDetailHero from "@/components/courses/detail/CourseDetailHero";
import CourseOverview from "@/components/courses/detail/CourseOverview";
import CourseModules from "@/components/courses/detail/CourseModules";
import CourseOutcomes from "@/components/courses/detail/CourseOutcomes";
import CourseTestimonial from "@/components/courses/detail/CourseTestimonial";
import CourseDetailCTA from "@/components/courses/detail/CourseDetailCTA";
import { courseDetails } from "@/lib/constants";

type Params = Promise<{ id: string }>;

export async function generateStaticParams() {
  return Object.keys(courseDetails).map((id) => ({ id }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { id } = await params;
  const course = courseDetails[id];
  if (!course) return {};

  return {
    title: `${course.level} — ${course.title}`,
    description: course.heroDescription,
    openGraph: {
      title: `${course.level} ${course.title} | Decode German`,
      description: course.heroDescription,
    },
  };
}

export default async function CourseDetailPage({
  params,
}: {
  params: Params;
}) {
  const { id } = await params;
  const course = courseDetails[id];

  if (!course) {
    notFound();
  }

  return (
    <>
      <Header />
      <main>
        <CourseDetailHero
          level={course.level}
          title={course.title}
          subtitle={course.subtitle}
          description={course.heroDescription}
          image={course.heroImage}
          imageAlt={course.heroImageAlt}
        />
        <CourseOverview
          duration={course.duration}
          batchSize={course.batchSize}
          schedule={course.schedule}
          materials={course.materials}
          price={course.price}
        />
        <CourseModules modules={course.modules} level={course.level} />
        <CourseOutcomes outcomes={course.outcomes} level={course.level} />
        <CourseTestimonial testimonial={course.testimonial} />
        <CourseDetailCTA
          level={course.level}
          nextLevel={course.nextLevel}
        />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
