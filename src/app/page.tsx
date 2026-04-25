import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import HeroSection from "@/components/home/HeroSection";
import NarrativeSection from "@/components/home/NarrativeSection";
import TransformationJourney from "@/components/home/TransformationJourney";
import CoursesSection from "@/components/home/CoursesSection";
import CoreBeliefs from "@/components/home/CoreBeliefs";
import WallOfAchievement from "@/components/home/WallOfAchievement";
import Testimonials from "@/components/home/Testimonials";
import GlobalCommunity from "@/components/about/GlobalCommunity";
import CTASection from "@/components/home/CTASection";
import { pageMetadata } from "@/lib/constants";

const meta = pageMetadata.home;
export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  openGraph: {
    title: meta.ogTitle,
    description: meta.ogDescription,
    images: [{ url: meta.ogImage, width: 1200, height: 630, alt: meta.ogImageAlt }],
  },
};

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <NarrativeSection />
        <TransformationJourney />
        <CoreBeliefs />
        <CoursesSection />
        <WallOfAchievement />
        <Testimonials />
        <GlobalCommunity />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
