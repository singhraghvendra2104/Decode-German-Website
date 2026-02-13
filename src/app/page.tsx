import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import HeroSection from "@/components/home/HeroSection";
import NarrativeSection from "@/components/home/NarrativeSection";
import TransformationJourney from "@/components/home/TransformationJourney";
import CoreBeliefs from "@/components/home/CoreBeliefs";
import Testimonials from "@/components/home/Testimonials";
import CTASection from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "Decode German - Premium German Language Transformation",
  description:
    "Premium German language platform bridging the gap between fluency and identity. Boutique transformation for the global citizen in Germany.",
  openGraph: {
    title: "Decode German - Premium German Language Transformation",
    description:
      "Premium German language platform bridging the gap between fluency and identity.",
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
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
