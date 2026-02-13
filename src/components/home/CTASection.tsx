import Link from "next/link";
import { homeCta } from "@/lib/constants";

export default function CTASection() {
  return (
    <section className="py-40 px-6 overflow-hidden relative">
      <div className="absolute inset-0 terracotta-gradient opacity-10 -z-10" />
      <div className="max-w-4xl mx-auto text-center relative">
        {/* Handwriting */}
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 font-[var(--font-handwriting)] text-5xl text-primary opacity-40 -rotate-6 whitespace-nowrap">
          {homeCta.handwriting}
        </div>

        {/* Heading */}
        <h2 className="text-5xl md:text-7xl font-[var(--font-serif)] font-bold mb-10">
          {homeCta.heading.split("\n").map((line, i) => (
            <span key={i}>
              {i > 0 && <br />}
              {line}{" "}
            </span>
          ))}
          <span className="text-primary italic">{homeCta.headingAccent}</span>?
        </h2>

        <p className="text-xl mb-12 text-gray-600 max-w-xl mx-auto">
          {homeCta.body}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link
            href={homeCta.primaryButton.href}
            className="bg-charcoal text-white font-bold py-5 px-14 rounded-full text-lg shadow-xl hover:-translate-y-1 transition-all"
          >
            {homeCta.primaryButton.label}
          </Link>
          <Link
            href={homeCta.secondaryButton.href}
            className="bg-transparent border-2 border-charcoal text-charcoal font-bold py-5 px-14 rounded-full text-lg hover:bg-charcoal hover:text-white transition-all"
          >
            {homeCta.secondaryButton.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
