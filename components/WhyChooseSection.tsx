import Image from "next/image";

export default function WhyChooseSection() {
  const stats = [
    { value: 1000, suffix: "", label: "Alumni" },
    { value: 50, suffix: "+", label: "Nations represented" },
    { value: 10, suffix: " Years", label: "Of Successful Delivery" },
    { value: 98, suffix: "%", label: "Referral Rate" },
  ];

  return (
    <section id="why-study-mind" className="bg-gradient-to-br from-blue-50 to-sky-50 section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] rounded-2xl overflow-hidden">
            <Image
              src="/why choose us/DW4A3864.JPG"
              alt="Students in professional setting"
              fill
              quality={80}
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <p className="text-xs sm:text-sm font-semibold text-primary-blue uppercase tracking-wide mb-2">
                WHY CHOOSE US?
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
                Work experience programmes
              </h2>
              <p className="text-base sm:text-lg text-text-gray">
                Trusted by 100s of students each year.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white p-4 sm:p-5 md:p-6 rounded-card border border-blue-100"
                >
                  <span className="text-3xl md:text-4xl font-bold text-primary-blue">
                    {stat.value}
                    {stat.suffix}
                  </span>
                  <p className="text-sm text-text-gray mt-2">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

