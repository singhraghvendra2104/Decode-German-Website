"use client";

import { courseCta } from "@/lib/constants";
import { useDisclosure } from "@mantine/hooks";
import ContactFormModal from "@/components/layout/ContactFormModal";

export default function CourseCTA() {
  const [modalOpened, { open: openModal, close: closeModal }] =
    useDisclosure(false);

  return (
    <section className="bg-charcoal text-ivory py-14 md:py-24 lg:py-40 relative overflow-hidden">
      <div className="max-w-[800px] mx-auto text-center relative z-10 px-4 md:px-8">
        <h2 className="text-3xl sm:text-5xl md:text-7xl font-[var(--font-serif-alt)] italic mb-8 md:mb-12 leading-tight">
          {courseCta.heading.split("\n").map((line, i) => (
            <span key={i}>
              {line}
              {i === 0 && <br />}
            </span>
          ))}
        </h2>
        <p className="text-base md:text-xl font-light opacity-60 mb-10 md:mb-16 max-w-xl mx-auto leading-relaxed">
          {courseCta.body}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
          <button
            onClick={openModal}
            className="w-full sm:w-auto px-10 md:px-12 py-4 md:py-5 bg-primary text-ivory font-bold uppercase tracking-[0.2em] text-xs hover:bg-ivory hover:text-charcoal transition-all duration-300 text-center cursor-pointer"
          >
            {courseCta.primaryButton.label}
          </button>
          <a
            href={courseCta.secondaryButton.href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-10 md:px-12 py-4 md:py-5 border border-ivory/30 text-ivory font-bold uppercase tracking-[0.2em] text-xs hover:border-primary transition-all duration-300 text-center"
          >
            {courseCta.secondaryButton.label}
          </a>
        </div>
      </div>

      <ContactFormModal opened={modalOpened} onClose={closeModal} />
    </section>
  );
}
