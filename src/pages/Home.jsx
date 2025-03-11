import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import FloatingElements from "../components/FloatingElements";
import TestimonialsSection from "../components/TestimonialsSection";
import AboutSection from "../components/AboutSection";
import CallToAction from "../components/CallToAction";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start text-center px-4 sm:px-6 bg-gradient-to-b from-blue-50 via-white to-blue-50 pt-24 pb-12 overflow-hidden">
      <HeroSection />
      <FloatingElements />
      <FeaturesSection />
      <TestimonialsSection />
      <AboutSection />
      <CallToAction />
    </div>
  );
}
