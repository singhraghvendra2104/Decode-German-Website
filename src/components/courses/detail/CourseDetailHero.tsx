"use client";

import Image from "next/image";
import { useDisclosure } from "@mantine/hooks";
import ContactFormModal from "@/components/layout/ContactFormModal";

interface Stat {
  value: string;
  label: string;
}

interface CourseDetailHeroProps {
  level: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  imageAlt: string;
  imageCaption?: string;
  stats?: Stat[];
}

export default function CourseDetailHero({
  level,
  title,
  subtitle,
  description,
  image,
  imageAlt,
  imageCaption,
  stats = [],
}: CourseDetailHeroProps) {
  const [modalOpened, { open: openModal, close: closeModal }] =
    useDisclosure(false);

  return (
    <section className="relative px-4 sm:px-6 md:px-12 py-12 sm:py-16 md:py-32 flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-56 lg:gap-80 max-w-[1400px] mx-auto">
      {/* Text Side */}
      <div className="w-full md:w-1/2 space-y-6 sm:space-y-8 md:space-y-10">
        <div className="inline-block">
          <p className="uppercase text-[10px] tracking-[0.4em] text-primary font-bold mb-2">
            {subtitle}
          </p>
          <div className="h-0.5 w-12 bg-primary/30" />
        </div>

        <h1 className="font-[var(--font-serif)] text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-charcoal leading-[0.95]">
          {level}: The <br />
          <span className="italic text-primary">{title}</span>
        </h1>

        <p className="text-base md:text-lg leading-relaxed text-stone-gray max-w-xl">
          {description}
        </p>

        <div className="flex flex-wrap gap-4 sm:gap-6 md:gap-8 items-center pt-2 sm:pt-4">
          <button
            onClick={openModal}
            className="bg-charcoal text-ivory px-6 sm:px-8 md:px-10 py-4 md:py-5 uppercase text-[10px] sm:text-[11px] tracking-[0.25em] sm:tracking-[0.3em] font-bold hover:bg-primary transition-colors shadow-lg cursor-pointer"
          >
            Get in Touch
          </button>
        </div>

        {/* Stats Grid */}
        {stats.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 pt-10 sm:pt-12 md:pt-16 border-t border-stone-gray/20">
            {stats.map((stat) => (
              <div key={stat.label} className="space-y-1">
                <p className="font-[var(--font-serif)] text-3xl sm:text-4xl md:text-5xl text-charcoal italic whitespace-nowrap">
                  {stat.value}
                </p>
                <p className="uppercase text-[9px] tracking-[0.2em] text-stone-gray">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Image Side - Polaroid */}
      <div className="w-full md:w-1/2 relative flex justify-center md:mt-20">
        <div className="bg-white p-3 sm:p-4 pb-16 sm:pb-20 shadow-2xl rotate-[1.5deg] relative z-10 max-w-xs sm:max-w-sm w-full ring-1 ring-black/5">
          <div className="relative w-full aspect-square overflow-hidden">
            <Image
              src={image}
              alt={imageAlt}
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              sizes="(max-width: 768px) 90vw, 50vw"
              priority
            />
          </div>
          {imageCaption && (
            <p className="font-handwriting text-base sm:text-lg absolute bottom-5 sm:bottom-6 left-6 sm:left-8 right-6 sm:right-8 text-charcoal/70">
              {imageCaption}
            </p>
          )}
        </div>
        <div className="absolute -top-12 -right-6 w-32 sm:w-48 h-32 sm:h-48 bg-accent rounded-full mix-blend-multiply opacity-30 blur-2xl z-0" />
        <div className="absolute bottom-10 -left-10 w-24 sm:w-32 h-24 sm:h-32 bg-warm-sand rounded-full mix-blend-multiply opacity-40 blur-xl z-0" />
      </div>

      <ContactFormModal opened={modalOpened} onClose={closeModal} />
    </section>
  );
}
