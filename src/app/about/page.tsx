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
import GlobalCommunity from "@/components/about/GlobalCommunity";
import AboutCTA from "@/components/about/AboutCTA";
import { pageMetadata } from "@/lib/constants";

const meta = pageMetadata.about;
export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  openGraph: {
    title: meta.ogTitle,
    description: meta.ogDescription,
    images: [{ url: meta.ogImage, width: 1200, height: 630, alt: meta.ogImageAlt }],
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
        <GlobalCommunity />
        <AboutCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
