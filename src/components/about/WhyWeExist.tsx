import { whyWeExistContent } from "@/lib/constants";

export default function WhyWeExist() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-20 lg:py-32">
      <div className="mb-8 md:mb-12 lg:mb-16">
        <h2 className="text-4xl md:text-5xl font-[var(--font-serif)] mb-4">{whyWeExistContent.heading}</h2>
        <p className="text-lg md:text-xl text-gray-500 max-w-2xl">
          {whyWeExistContent.description}
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {whyWeExistContent.reasons.map((reason) => (
          <div
            key={reason.number}
            className={`${reason.bgClass} ${reason.offsetY ? "md:translate-y-6" : ""} p-6 sm:p-8 md:p-10 flex flex-col min-h-[240px] sm:min-h-[280px] md:min-h-[380px]`}
          >
            <span className="text-2xl sm:text-3xl md:text-4xl font-[var(--font-serif)] text-primary">
              {reason.number}
            </span>
            <div className="mt-3 sm:mt-4">
              <h3 className="text-lg sm:text-xl md:text-2xl font-[var(--font-serif)] mb-2 sm:mb-3 leading-snug">
                {reason.title}
              </h3>
              <p className="text-xs sm:text-sm leading-relaxed opacity-70">{reason.description1}</p>
              <p className="text-xs sm:text-sm leading-relaxed opacity-70 mt-1.5 sm:mt-2">{reason.description2}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
