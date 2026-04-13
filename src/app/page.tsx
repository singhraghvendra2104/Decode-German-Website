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
import CTASection from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "Decode German - SPEAK, BELONG, THRIVE",
  description:
    "German language platform bridging the gap between fluency and identity. Transformation for the global citizens.",
  openGraph: {
    title: "Decode German - SPEAK, BELONG, THRIVE",
    description:
      "German language platform bridging the gap between fluency and identity.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Decode German - SPEAK, BELONG, THRIVE",
      },
    ],
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
        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
