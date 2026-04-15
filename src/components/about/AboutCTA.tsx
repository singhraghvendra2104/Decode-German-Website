"use client";

import { aboutCta } from "@/lib/constants";
import { useDisclosure } from "@mantine/hooks";
import ContactFormModal from "@/components/layout/ContactFormModal";

export default function AboutCTA() {
  const [modalOpened, { open: openModal, close: closeModal }] =
    useDisclosure(false);

  return (
    <section className="bg-charcoal text-paper-white py-10 md:py-16 lg:py-24 relative overflow-hidden">
      <div className="max-w-[800px] mx-auto text-center relative z-10 px-4 md:px-8">
        <h2 className="text-3xl sm:text-5xl md:text-7xl font-[var(--font-serif-alt)] italic mb-8 md:mb-12 leading-tight">
          {aboutCta.heading.split("\n").map((line, i) => (
            <span key={i}>
              {i > 0 && <br />}
              {line}
            </span>
          ))}
        </h2>
        <p className="text-base md:text-xl font-light opacity-60 mb-10 md:mb-16 max-w-xl mx-auto leading-relaxed">
          {aboutCta.body}
        </p>
        <div className="flex justify-center">
          <button
            onClick={openModal}
            className="w-full sm:w-auto px-10 md:px-12 py-4 md:py-5 bg-primary text-paper-white font-bold uppercase tracking-[0.2em] text-xs hover:bg-paper-white hover:text-charcoal transition-all duration-300 text-center cursor-pointer"
          >
            {aboutCta.primaryButton.label}
          </button>
        </div>
      </div>
      <ContactFormModal opened={modalOpened} onClose={closeModal} />
    </section>
  );
}
