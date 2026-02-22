interface CourseTestimonialProps {
  testimonial: {
    quote: string;
    name: string;
    role: string;
  };
}

export default function CourseTestimonial({
  testimonial,
}: CourseTestimonialProps) {
  return (
    <section className="py-20 md:py-32 bg-warm-sand/30">
      <div className="max-w-3xl mx-auto text-center px-4 md:px-8">
        <div className="mb-6 md:mb-8">
          <span className="font-[var(--font-serif-alt)] italic text-5xl md:text-6xl text-primary-alt/20">
            &ldquo;
          </span>
        </div>
        <p className="font-[var(--font-serif-alt)] italic text-2xl md:text-4xl leading-snug text-charcoal mb-8 md:mb-12">
          {testimonial.quote}
        </p>
        <div>
          <p className="font-bold uppercase text-xs tracking-[0.2em]">
            {testimonial.name}
          </p>
          <p className="text-stone-gray text-sm mt-1">{testimonial.role}</p>
        </div>
      </div>
    </section>
  );
}
