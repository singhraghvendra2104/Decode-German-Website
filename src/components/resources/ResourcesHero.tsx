import Image from "@/components/ui/ImageWithSkeleton";

export default function ResourcesHero() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 mb-10 md:mb-16 items-end lg:items-start">
      <div className="lg:col-span-7 pt-6 md:pt-8">
        <span className="font-handwriting text-primary text-xl md:text-3xl mb-2 md:mb-4 block">
          Notes from the Journey
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-[var(--font-serif)] italic font-bold leading-[0.9] tracking-tighter mb-4 md:mb-8">
          Beyond <br />
          <span className="pl-6 md:pl-20">the Classes.</span>
        </h1>
        <p className="text-base md:text-xl lg:text-2xl leading-relaxed max-w-xl text-gray-500">
          Language is lived, not just learned. Explore our curated library of
          tips, cultural guides, and deep-dive videos designed to take you from
          textbook German to real-world fluency.
        </p>
      </div>
      <div className="lg:col-span-5 relative">
        <div className="bg-white p-3 md:p-6 shadow-lg rotate-[1.2deg] border-b-[24px] md:border-b-[40px] border-white max-w-sm mx-auto lg:max-w-none">
          <Image
            src="/resources/hero.jpg"
            alt="Beyond the Classroom"
            width={600}
            height={600}
            className="w-full aspect-square object-cover md:grayscale md:hover:grayscale-0 transition-all duration-1000 mb-2 md:mb-4"
          />
          <p className="font-handwriting text-base md:text-xl text-center text-gray-500">
            Street lights in Mitte, 2024
          </p>
        </div>
      </div>
    </section>
  );
}
