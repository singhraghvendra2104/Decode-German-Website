import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import CourseDetailHero from "@/components/courses/detail/CourseDetailHero";
import CourseCompetencies from "@/components/courses/detail/CourseCompetencies";
import CourseMethod from "@/components/courses/detail/CourseMethod";
import CourseJourney from "@/components/courses/detail/CourseJourney";
import CourseResources from "@/components/courses/detail/CourseResources";
import CourseBeforeAfter from "@/components/courses/detail/CourseBeforeAfter";
import CourseDetailCTA from "@/components/courses/detail/CourseDetailCTA";
import { courseDetailPages } from "@/lib/constants";

type Params = Promise<{ id: string }>;

export async function generateStaticParams() {
  return Object.keys(courseDetailPages).map((id) => ({ id }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { id } = await params;
  const course = courseDetailPages[id];
  if (!course) return {};

  return {
    title: `${course.level}: ${course.title}`,
    description: course.heroDescription,
    openGraph: {
      title: `${course.level}: The ${course.title} | Decode German`,
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
  const course = courseDetailPages[id];

  if (!course) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="pt-16 md:pt-20 lg:pt-24">
        <CourseDetailHero
          level={course.level}
          title={course.title}
          subtitle={course.subtitle}
          description={course.heroDescription}
          image={course.heroImage}
          imageAlt={course.heroImageAlt}
          imageCaption={course.imageCaption}
          stats={course.stats}
        />
        <CourseCompetencies competencies={course.competencies} />
        <CourseMethod steps={course.methodSteps} benefits={course.methodBenefits} />
        <CourseJourney level={course.level} blocks={course.journeyBlocks} />
        <CourseResources resources={course.resources} />
        <CourseBeforeAfter
          beforeText={course.beforeText}
          afterText={course.afterText}
          nextLevel={course.nextLevel}
        />
        <CourseDetailCTA
          level={course.level}
          title={course.title}
          closingQuote={course.closingQuote}
        />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
