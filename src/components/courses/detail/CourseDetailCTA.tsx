"use client";

import { siteConfig, courseComponentStrings } from "@/lib/constants";
import { useDisclosure } from "@mantine/hooks";
import ContactFormModal from "@/components/layout/ContactFormModal";

interface CourseDetailCTAProps {
  level: string;
  title: string;
  closingQuote?: string;
}

export default function CourseDetailCTA({
  level,
  title,
  closingQuote,
}: CourseDetailCTAProps) {
  const [modalOpened, { open: openModal, close: closeModal }] =
    useDisclosure(false);

  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber.replace(/\+/g, "")}?text=${encodeURIComponent(
    `Hi, I'm interested in the ${level} course at Decode German.`
  )}`;

  return (
    <section id="enroll" className="py-12 sm:py-20 md:py-32 lg:py-48 px-4 sm:px-6 text-center max-w-5xl mx-auto relative">
      <p className="font-handwriting text-3xl sm:text-4xl md:text-5xl text-primary mb-6 sm:mb-8">
        {courseComponentStrings.detailCTA.handwriting}
      </p>
      <h2 className="font-[var(--font-serif)] text-3xl sm:text-5xl md:text-7xl lg:text-9xl leading-tight mb-8 md:mb-12 lg:mb-16">
        {courseComponentStrings.detailCTA.headingPrefix} <br />
        <span className="italic font-normal">
          {level} {courseComponentStrings.detailCTA.headingSuffix}
        </span>
      </h2>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 md:gap-8">
        <button
          onClick={openModal}
          className="bg-charcoal text-ivory px-8 sm:px-10 md:px-14 py-4 sm:py-5 md:py-7 uppercase text-xs sm:text-sm md:text-base tracking-[0.2em] sm:tracking-[0.25em] font-bold hover:bg-primary transition-all shadow-xl w-full sm:w-auto text-center cursor-pointer"
        >
          {courseComponentStrings.detailCTA.primaryButton}
        </button>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="border border-charcoal/20 bg-white px-8 sm:px-10 md:px-14 py-4 sm:py-5 md:py-7 uppercase text-xs sm:text-sm md:text-base tracking-[0.2em] sm:tracking-[0.25em] font-bold flex items-center justify-center gap-4 hover:bg-charcoal hover:text-ivory transition-all w-full sm:w-auto"
        >
          {courseComponentStrings.detailCTA.whatsappButton}
        </a>
      </div>
      {closingQuote && (
        <p className="mt-12 sm:mt-16 text-xs sm:text-sm text-stone-gray/60 max-w-md mx-auto italic px-4">
          {closingQuote}
        </p>
      )}

      <ContactFormModal opened={modalOpened} onClose={closeModal} />
    </section>
  );
}
