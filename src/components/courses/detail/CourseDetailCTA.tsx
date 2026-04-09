import { siteConfig } from "@/lib/constants";

interface CourseDetailCTAProps {
  level: string;
  title: string;
  closingQuote?: string;
}

export default function CourseDetailCTA({
  level,
  title,
  closingQuote,
}: CourseDetailCTAProps) {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber.replace(/\+/g, "")}?text=${encodeURIComponent(
    `Hi, I'm interested in the ${level} course at Decode German.`
  )}`;

  return (
    <section id="enroll" className="py-32 md:py-48 px-4 md:px-6 text-center max-w-5xl mx-auto relative">
      <p className="font-[var(--font-handwriting)] text-4xl md:text-5xl text-primary mb-8">
        Bis bald!
      </p>
      <h2 className="font-[var(--font-serif)] text-5xl md:text-7xl lg:text-9xl leading-tight mb-12 md:mb-16">
        Ready to start your <br />
        <span className="italic font-normal">
          {level} journey?
        </span>
      </h2>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-6 md:gap-8">
        <a
          href="#callback"
          className="bg-charcoal text-ivory px-10 md:px-14 py-5 md:py-7 uppercase text-[11px] md:text-[12px] tracking-[0.3em] md:tracking-[0.4em] font-bold hover:bg-primary transition-all shadow-xl w-full sm:w-auto text-center"
        >
          Request Callback
        </a>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="border border-charcoal/20 bg-white px-10 md:px-14 py-5 md:py-7 uppercase text-[11px] md:text-[12px] tracking-[0.3em] md:tracking-[0.4em] font-bold flex items-center justify-center gap-4 hover:bg-charcoal hover:text-ivory transition-all w-full sm:w-auto"
        >
          WhatsApp Us
        </a>
      </div>
      {closingQuote && (
        <p className="mt-16 text-sm text-stone-gray/60 max-w-md mx-auto italic">
          {closingQuote}
        </p>
      )}
    </section>
  );
}
