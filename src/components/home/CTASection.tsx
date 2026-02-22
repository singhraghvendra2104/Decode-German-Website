import Link from "next/link";
import { homeCta } from "@/lib/constants";

export default function CTASection() {
  return (
    <section className="py-24 md:py-40 px-4 md:px-6 overflow-hidden relative">
      <div className="absolute inset-0 terracotta-gradient opacity-10 -z-10" />
      <div className="max-w-4xl mx-auto text-center relative">
        {/* Handwriting */}
        <div className="hidden md:block absolute -top-20 left-1/2 -translate-x-1/2 font-[var(--font-handwriting)] text-5xl text-primary opacity-40 -rotate-6 whitespace-nowrap">
          {homeCta.handwriting}
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-5xl md:text-7xl font-[var(--font-serif)] font-bold mb-8 md:mb-10">
          {homeCta.heading.split("\n").map((line, i) => (
            <span key={i}>
              {i > 0 && <br />}
              {line}{" "}
            </span>
          ))}
          <span className="text-primary italic">{homeCta.headingAccent}</span>?
        </h2>

        <p className="text-base md:text-xl mb-10 md:mb-12 text-gray-600 max-w-xl mx-auto">
          {homeCta.body}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
          <Link
            href={homeCta.primaryButton.href}
            className="bg-charcoal text-white font-bold py-4 px-10 md:py-5 md:px-14 rounded-full text-base md:text-lg shadow-xl hover:-translate-y-1 transition-all text-center"
          >
            {homeCta.primaryButton.label}
          </Link>
          <Link
            href={homeCta.secondaryButton.href}
            className="bg-transparent border-2 border-charcoal text-charcoal font-bold py-4 px-10 md:py-5 md:px-14 rounded-full text-base md:text-lg hover:bg-charcoal hover:text-white transition-all text-center"
          >
            {homeCta.secondaryButton.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
