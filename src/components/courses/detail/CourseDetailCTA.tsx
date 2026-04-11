"use client";

import { siteConfig } from "@/lib/constants";
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
    <section id="enroll" className="py-20 sm:py-28 md:py-48 px-4 sm:px-6 text-center max-w-5xl mx-auto relative">
      <p className="font-handwriting text-3xl sm:text-4xl md:text-5xl text-primary mb-6 sm:mb-8">
        Bis bald!
      </p>
      <h2 className="font-[var(--font-serif)] text-4xl sm:text-5xl md:text-7xl lg:text-9xl leading-tight mb-8 sm:mb-12 md:mb-16">
        Ready to start your <br />
        <span className="italic font-normal">
          {level} journey?
        </span>
      </h2>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 md:gap-8">
        <button
          onClick={openModal}
          className="bg-charcoal text-ivory px-8 sm:px-10 md:px-14 py-4 sm:py-5 md:py-7 uppercase text-[10px] sm:text-[11px] md:text-[12px] tracking-[0.25em] sm:tracking-[0.3em] md:tracking-[0.4em] font-bold hover:bg-primary transition-all shadow-xl w-full sm:w-auto text-center cursor-pointer"
        >
          Get in Touch
        </button>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="border border-charcoal/20 bg-white px-8 sm:px-10 md:px-14 py-4 sm:py-5 md:py-7 uppercase text-[10px] sm:text-[11px] md:text-[12px] tracking-[0.25em] sm:tracking-[0.3em] md:tracking-[0.4em] font-bold flex items-center justify-center gap-4 hover:bg-charcoal hover:text-ivory transition-all w-full sm:w-auto"
        >
          WhatsApp Us
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
