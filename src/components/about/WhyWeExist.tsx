export default function WhyWeExist() {
  const reasons = [
    {
      number: "01",
      title: "No Accountability",
      description1: "Large institutes teach in bulk - students are on their own once class ends.",
      description2: "We follow up before class, after class, and between batches. If you fall behind, we reach out first.",
      bgClass: "bg-accent",
    },
    {
      number: "02",
      title: "No Outcome Focus",
      description1: "Students pass levels but can't speak or write confidently in real situations.",
      description2: "We don't measure success by certificates. We measure it by whether you can function in Germany.",
      bgClass: "bg-accent/60",
      offsetY: true,
    },
    {
      number: "03",
      title: "No Individual Tracking",
      description1: "Teachers have no visibility into where each student is actually struggling.",
      description2: "We maintain a personal profile for every student - goals, weak points, learning pace. This is not a database. This is a relationship.",
      bgClass: "bg-accent",
    },
    {
      number: "04",
      title: "No Quality at Enrollment",
      description1: "Most institutes let anyone join any level as long as they pay - regardless of proficiency.",
      description2: "Every student above A1 must pass an entrance test. No one enters a batch unprepared. No batch is held back.",
      bgClass: "bg-accent/60",
      offsetY: true,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-20 lg:py-32">
      <div className="mb-8 md:mb-12 lg:mb-16">
        <h2 className="text-4xl md:text-5xl font-[var(--font-serif)] mb-4">Why We Exist</h2>
        <p className="text-lg md:text-xl text-gray-500 max-w-xl">
          Language learning requires more than <em>just teaching.</em>
        </p>
        <p className="text-base md:text-lg text-gray-500 max-w-2xl mt-4">
          Motivated students invest time and money, hit a wall of impersonal bulk teaching, and either drop out or fail - not because they lacked willingness, but because no one was guiding them personally.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {reasons.map((reason) => (
          <div
            key={reason.number}
            className={`${reason.bgClass} ${reason.offsetY ? "md:translate-y-6" : ""} p-8 md:p-10 flex flex-col justify-between min-h-[300px] md:min-h-[380px]`}
          >
            <span className="text-3xl md:text-4xl font-[var(--font-serif)] text-primary">
              {reason.number}
            </span>
            <div>
              <h3 className="text-xl md:text-2xl font-[var(--font-serif)] mb-3">
                {reason.title}
              </h3>
              <p className="text-sm leading-relaxed opacity-70">{reason.description1}</p>
              <p className="text-sm leading-relaxed opacity-70 mt-2">{reason.description2}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
