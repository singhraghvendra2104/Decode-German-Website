import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import AboutHero from "@/components/about/AboutHero";
import FoundersNote from "@/components/about/FoundersNote";
import WhyWeExist from "@/components/about/WhyWeExist";
import HowStudentsJoin from "@/components/about/HowStudentsJoin";
import TheTeam from "@/components/about/TheTeam";
import OurJourney from "@/components/about/OurJourney";
import AboutCTA from "@/components/about/AboutCTA";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "The story of Decode German - a boutique German language platform crafted for seekers, thinkers, and those brave enough to rebuild their lives in a new tongue.",
  openGraph: {
    title: "Our Story | Decode German",
    description:
      "The story of Decode German - bridging the gap between grammar rules and genuine emotional connection.",
  },
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <AboutHero />
        <FoundersNote />
        <WhyWeExist />
        <HowStudentsJoin />
        <TheTeam />
        <OurJourney />
        <AboutCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
