import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import OurCoursesSection from "@/components/OurCoursesSection";
import BookingForm from "@/components/BookingForm";
import PerfectForAllSection from "@/components/PerfectForAllSection";
import WhereStudentsStudySection from "@/components/WhereStudentsStudySection";
import WhyStudentsLoveUsSection from "@/components/WhyStudentsLoveUsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden max-w-[100vw] w-full">
      <Navbar />
      <HeroSection />
      <WhyChooseSection />
      <OurCoursesSection />
      <PerfectForAllSection />
      <WhereStudentsStudySection />
      <WhyStudentsLoveUsSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <BookingForm />
      <FinalCTASection />
      <Footer />
    </main>
  );
}

