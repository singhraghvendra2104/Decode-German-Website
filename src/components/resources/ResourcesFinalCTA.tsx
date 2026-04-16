"use client";

import Image from "@/components/ui/ImageWithSkeleton";
import Link from "next/link";
import { useDisclosure } from "@mantine/hooks";
import ContactFormModal from "@/components/layout/ContactFormModal";

export default function ResourcesFinalCTA() {
  const [modalOpened, { open: openModal, close: closeModal }] =
    useDisclosure(false);

  return (
    <>
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 bg-[#2d2a26] text-white p-6 md:p-10 lg:p-16 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-[var(--font-serif)] italic mb-4 md:mb-6">
            Want structured learning?
          </h2>
          <p className="text-sm md:text-lg opacity-70 mb-8 md:mb-12 max-w-md">
            Our premium courses offer a comprehensive roadmap from A1 to B2 with
            live guidance and certification.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
            <Link
              href="/courses"
              className="bg-primary text-white px-6 md:px-8 py-3 md:py-4 uppercase text-[11px] tracking-widest font-bold text-center hover:bg-primary/90 transition-colors"
            >
              Explore Courses
            </Link>
            <button
              onClick={openModal}
              className="border border-white/30 hover:border-white text-white px-6 md:px-8 py-3 md:py-4 uppercase text-[11px] tracking-widest font-bold transition-colors text-center cursor-pointer"
            >
              Get in Touch
            </button>
          </div>
        </div>
        <div className="hidden lg:block relative">
          <div className="bg-white p-4 shadow-lg rotate-[0.5deg]">
            <Image
              src="/resources/bottom.png"
              alt="Structured learning"
              width={600}
              height={450}
              className="w-full aspect-[4/3] object-cover md:grayscale md:hover:grayscale-0 transition-all duration-1000"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 font-handwriting text-primary text-3xl md:text-4xl rotate-12">
            Bis bald!
          </div>
        </div>
      </section>
      <ContactFormModal opened={modalOpened} onClose={closeModal} />
    </>
  );
}
