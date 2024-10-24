"use client";
import HeroSection from "@/components/landing-page/HeroSection";
import FeaturesSection from "@/components/landing-page/FeatureSection";
import HowItWorksSection from "@/components/landing-page/HowItWorksSection";
import BenefitsSection from "@/components/landing-page/BenefitsSection";
import TestimonialsSection from "@/components/landing-page/TestimonialSection";
import CallToAction from "@/components/landing-page/CallToAction";
import Footer from "@/components/landing-page/Footer";

export default function Home() {
  return (
    <main className="bg-gray-50 text-gray-900 min-h-screen w-screen">
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <BenefitsSection />
      <TestimonialsSection />
      <CallToAction />
      <Footer />
    </main>
  );
}
