import Image from "next/image";

// Hero section images from public folder
const heroImages = [
  "/hero section/DSC03280.JPG",
  "/hero section/DSC03370.JPG",
  "/hero section/DSC03384.JPG",
  "/hero section/DSC03477.JPG",
  "/hero section/DSC05952.JPG",
  "/hero section/DSC06034.JPG",
];

export default function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden w-full">
      {/* Top Hero Section - Deep Blue */}
      <div className="relative bg-gradient-to-br from-primary-blue-dark via-primary-blue to-primary-blue-dark text-white pt-20 pb-12 sm:pt-24 sm:pb-16 md:pt-28 md:pb-20 lg:pt-32 lg:pb-24 w-full overflow-x-hidden">
        {/* Background Geometric Shapes */}
        <div className="absolute left-4 top-16 sm:left-10 sm:top-20 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 opacity-20">
          <svg viewBox="0 0 100 100" className="w-full h-full text-primary-blue-light">
            <polygon points="50,5 90,25 90,75 50,95 10,75 10,25" fill="currentColor" />
          </svg>
        </div>
        <div className="absolute right-4 top-24 sm:right-10 sm:top-32 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 opacity-20">
          <svg viewBox="0 0 100 100" className="w-full h-full text-primary-blue-light">
            <rect x="20" y="20" width="60" height="60" fill="currentColor" />
          </svg>
        </div>
        <div className="absolute left-1/3 top-32 sm:top-40 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 opacity-15">
          <svg viewBox="0 0 100 100" className="w-full h-full text-primary-blue-light">
            <circle cx="50" cy="50" r="40" fill="currentColor" />
          </svg>
        </div>

        <div className="container-custom relative z-10">
          {/* Main Content */}
          <div className="text-center max-w-5xl mx-auto space-y-6 sm:space-y-8">
            {/* Main Heading */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-tight px-2 break-words">
              2026 Work Experience Programmes
              <br />
              Offered by Improve ME Institute in Collaboration with Study Mind UK
            </h1>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 pt-2 sm:pt-4 px-4">
              <a
                href="#booking"
                className="w-full sm:w-auto bg-white text-primary-blue-dark px-8 sm:px-10 md:px-12 py-3 sm:py-3.5 md:py-4 rounded-button font-bold text-base sm:text-lg md:text-xl hover:bg-opacity-95 transition-all shadow-lg hover:shadow-xl text-center"
              >
                Book Now
              </a>
              <a
                href="https://studymind.co.uk/work-experience/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-transparent border-2 border-white text-white px-8 sm:px-10 md:px-12 py-3 sm:py-3.5 md:py-4 rounded-button font-bold text-base sm:text-lg md:text-xl hover:bg-white hover:text-primary-blue-dark transition-all shadow-lg hover:shadow-xl inline-flex justify-center items-center"
              >
                Learn More
              </a>
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 max-w-4xl mx-auto pt-8 sm:pt-10 md:pt-12 px-4 sm:px-0">
              {heroImages.map((image, index) => (
                <div
                  key={index}
                  className="relative aspect-square rounded-lg overflow-hidden shadow-card hover:shadow-card-hover transition-shadow"
                >
                  <Image
                    src={image}
                    alt={`Student experience ${index + 1}`}
                    fill
                    quality={80}
                    sizes="(max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                    className="object-cover"
                    priority={index < 3}
                    style={{ filter: "brightness(0.98) contrast(0.95)" }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
