import Link from "next/link";
import Image from "next/image";
import { notFoundPage } from "@/lib/constants";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background flex flex-col items-center justify-center px-4 text-center">
      {/* Logo */}
      <Link href="/" className="mb-12">
        <Image
          src="/final-logo.svg"
          alt={notFoundPage.logoAlt}
          width={200}
          height={100}
          className="h-18 md:h-20 w-auto mix-blend-multiply"
        />
      </Link>

      {/* 404 Number */}
      <h1 className="font-[var(--font-serif)] text-[120px] sm:text-[160px] md:text-[200px] leading-none font-bold text-charcoal/5 select-none absolute">
        {notFoundPage.bigNumber}
      </h1>

      <div className="relative z-10">
        <p className="text-primary text-xs font-bold tracking-[0.3em] uppercase mb-4">
          {notFoundPage.tag}
        </p>
        <h2 className="font-[var(--font-serif)] text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal mb-4">
          {notFoundPage.heading} <span className="italic text-primary">{notFoundPage.headingAccent}</span>.
        </h2>
        <p className="text-stone-gray text-base md:text-lg max-w-md mx-auto mb-10 leading-relaxed">
          {notFoundPage.body}
        </p>

        <Link
          href="/"
          className="inline-block bg-charcoal text-ivory px-8 md:px-10 py-4 md:py-5 uppercase text-[11px] tracking-[0.3em] font-bold hover:bg-primary transition-colors shadow-lg"
        >
          {notFoundPage.backButtonLabel}
        </Link>
      </div>
    </main>
  );
}
