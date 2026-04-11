import Image from "next/image";
import { weightOfSilence } from "@/lib/constants";

export default function WeightOfSilence() {
  return (
    <section className="py-24 md:py-40 bg-paper-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-warm-sand/20 -z-0 hidden md:block" />
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 md:gap-16 items-start">
          {/* Sticky Sidebar */}
          <div className="lg:col-span-4 lg:sticky lg:top-40">
            <h2 className="text-3xl md:text-4xl font-[var(--font-serif-alt)] italic leading-tight mb-6 md:mb-8">
              {weightOfSilence.heading.split("\n").map((line, i) => (
                <span key={i}>
                  {i > 0 && <br />}
                  {line}
                </span>
              ))}
            </h2>
            <div className="h-0.5 w-16 bg-primary-alt/30" />
            <p className="mt-6 md:mt-8 font-handwriting text-xl md:text-2xl text-stone-gray/60 leading-relaxed">
              {weightOfSilence.sidebar}
            </p>
          </div>

          {/* Content */}
          <div className="lg:col-span-7 lg:col-start-6 space-y-12 md:space-y-16">
            <div className="max-w-none">
              <p className="text-lg md:text-xl leading-relaxed text-charcoal drop-cap">
                {weightOfSilence.bodyFirst}
              </p>
            </div>

            {/* Image with Quote */}
            <div className="relative group">
              <div className="aspect-[16/9] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 relative">
                <Image
                  src={weightOfSilence.image}
                  alt={weightOfSilence.imageAlt}
                  fill
                  className="object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
              </div>
              <div className="relative md:absolute md:-right-8 md:-bottom-8 bg-paper-white p-4 md:p-6 border border-warm-sand shadow-lg max-w-xs mt-4 md:mt-0">
                <p className="italic font-[var(--font-serif-alt)] text-base md:text-lg leading-snug">
                  {weightOfSilence.imageQuote}
                </p>
              </div>
            </div>

            <p className="text-base md:text-lg text-stone-gray leading-relaxed pt-6 md:pt-12">
              We focus on the{" "}
              <span className="text-primary-alt italic border-b border-primary-alt/20">
                {weightOfSilence.nuanceHighlight}
              </span>
              &mdash;teaching you how to share your fears, your ambitions, and
              your humor. Because belonging isn&apos;t just about understanding
              others; it&apos;s about making sure others can understand you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
