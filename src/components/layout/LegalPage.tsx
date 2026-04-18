import type { ReactNode } from "react";

interface Props {
  eyebrow: string;
  title: string;
  effectiveDate: string;
  intro?: ReactNode;
  children: ReactNode;
}

export default function LegalPage({
  eyebrow,
  title,
  effectiveDate,
  intro,
  children,
}: Props) {
  return (
    <main className="max-w-3xl mx-auto px-4 md:px-8 pt-28 md:pt-40 pb-16 md:pb-24 text-charcoal">
      <header className="mb-10 md:mb-14">
        <p className="text-[11px] uppercase tracking-[0.25em] text-primary font-semibold mb-3">
          {eyebrow}
        </p>
        <h1 className="text-4xl md:text-6xl font-[var(--font-serif)] italic font-bold leading-tight">
          {title}
        </h1>
        <p className="mt-4 text-sm text-gray-500">
          Effective date: {effectiveDate}
        </p>
        {intro && (
          <div className="mt-6 text-base text-gray-700 leading-relaxed">
            {intro}
          </div>
        )}
      </header>
      <div className="space-y-10 text-base leading-relaxed">{children}</div>
    </main>
  );
}

interface SectionProps {
  number: number;
  title: string;
  children: ReactNode;
}

export function LegalSection({ number, title, children }: SectionProps) {
  return (
    <section>
      <h2 className="text-xl md:text-2xl font-bold text-charcoal mb-4">
        {number}. {title}
      </h2>
      <div className="space-y-4 text-gray-700">{children}</div>
    </section>
  );
}

interface GermanBlockProps {
  title: string;
  children: ReactNode;
}

export function GermanBlock({ title, children }: GermanBlockProps) {
  return (
    <div className="mt-6 bg-[#f6f1e8] border-l-4 border-primary px-5 py-4 rounded-r-md">
      <p className="text-[11px] uppercase tracking-[0.2em] text-primary font-semibold mb-3">
        🇩🇪 Deutsche Übersetzung
      </p>
      <h3 className="font-bold text-charcoal mb-3">{title}</h3>
      <div className="space-y-3 text-gray-700">{children}</div>
    </div>
  );
}
