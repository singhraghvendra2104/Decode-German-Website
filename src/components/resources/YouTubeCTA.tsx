import Image from "@/components/ui/ImageWithSkeleton";

const YOUTUBE_URL = "https://www.youtube.com/channel/UCrWQrQOWzRSt86XrS6C-D2Q";

export default function YouTubeCTA() {
  return (
    <section className="mb-10 md:mb-16 relative h-[280px] md:h-[380px] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/resources/youtube1.png"
          alt=""
          fill
          className="object-cover grayscale opacity-30 hidden md:block"
        />
        <Image
          src="/resources/youtube2.png"
          alt=""
          fill
          className="object-cover grayscale opacity-30 md:hidden"
        />
        <div className="absolute inset-0 bg-primary/10" />
      </div>
      <div className="relative z-10 max-w-2xl px-6 md:px-12 lg:px-16">
        <h2 className="text-3xl sm:text-4xl md:text-7xl font-[var(--font-serif)] italic font-bold mb-4 md:mb-8">
          Watch &amp; Learn on YouTube
        </h2>
        <p className="text-sm md:text-xl mb-6 md:mb-12 opacity-80 font-handwriting text-black md:text-white">
          Weekly videos exploring language nuances, exam preparation, and German
          culture through a curated lens.
        </p>
        <a
          href={YOUTUBE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-[#2d2a26] text-white px-6 md:px-10 py-3 md:py-5 uppercase text-[10px] md:text-[11px] tracking-[0.2em] md:tracking-[0.3em] font-bold hover:scale-105 transition-transform"
        >
          Subscribe to Channel
          <svg className="w-4 md:w-5 h-4 md:h-5 ml-3 md:ml-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
          </svg>
        </a>
      </div>
    </section>
  );
}
