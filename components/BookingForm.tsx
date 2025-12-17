"use client";

export default function BookingForm() {
  return (
    <section id="booking" className="bg-gradient-to-br from-blue-50 to-sky-50 section-padding">
      <div className="container-custom max-w-4xl mx-auto">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <p className="text-xs sm:text-sm font-semibold text-primary-blue uppercase tracking-wide mb-2">
            BOOK YOUR PLACE
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-text-dark">
            Reserve Your Spot for 2026
          </h2>
          <p className="text-base sm:text-lg text-text-gray max-w-2xl mx-auto px-4">
            Get in touch with us to book your work experience programme. Our team will respond within 24 hours.
          </p>
        </div>

        <div className="bg-white rounded-card shadow-card p-4 sm:p-6 md:p-8 lg:p-12">
          <div className="w-full overflow-hidden rounded-lg">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSefNSFrqXWHv10iGmsbsH-0F5O8gphngcEhym9xPr5X-kFqAA/viewform?embedded=true"
              width="100%"
              height="1806"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              className="w-full min-h-[1806px]"
              title="Booking Form"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
