interface CourseOverviewProps {
  duration: string;
  batchSize: string;
  schedule: string;
  materials: string;
  price: string;
}

export default function CourseOverview({
  duration,
  batchSize,
  schedule,
  materials,
  price,
}: CourseOverviewProps) {
  const items = [
    { label: "Duration", value: duration },
    { label: "Batch Size", value: batchSize },
    { label: "Schedule", value: schedule },
    { label: "Materials", value: materials },
    { label: "Investment", value: price },
  ];

  return (
    <section className="py-12 md:py-20 bg-warm-sand/30">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 md:gap-4">
          {items.map((item, index) => (
            <div
              key={item.label}
              className={`text-center ${
                index < items.length - 1
                  ? "md:border-r md:border-warm-sand"
                  : ""
              }`}
            >
              <p className="uppercase text-[10px] font-bold tracking-[0.2em] text-stone-gray/60 mb-2 md:mb-3">
                {item.label}
              </p>
              <p className="font-[var(--font-serif-alt)] italic text-base md:text-xl text-charcoal">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
