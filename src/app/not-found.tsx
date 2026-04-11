import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background flex flex-col items-center justify-center px-4 text-center">
      {/* Logo */}
      <Link href="/" className="mb-12">
        <Image
          src="/logo.png"
          alt="Decode German logo"
          width={64}
          height={64}
          className="h-14 md:h-16 w-auto"
        />
      </Link>

      {/* 404 Number */}
      <h1 className="font-[var(--font-serif)] text-[120px] sm:text-[160px] md:text-[200px] leading-none font-bold text-charcoal/5 select-none absolute">
        404
      </h1>

      <div className="relative z-10">
        <p className="text-primary text-xs font-bold tracking-[0.3em] uppercase mb-4">
          Page Not Found
        </p>
        <h2 className="font-[var(--font-serif)] text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal mb-4">
          Seite nicht <span className="italic text-primary">gefunden</span>.
        </h2>
        <p className="text-stone-gray text-base md:text-lg max-w-md mx-auto mb-10 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
        </p>

        <Link
          href="/"
          className="inline-block bg-charcoal text-ivory px-8 md:px-10 py-4 md:py-5 uppercase text-[11px] tracking-[0.3em] font-bold hover:bg-primary transition-colors shadow-lg"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
