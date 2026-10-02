import CentresSection from "@/components/CentresSection";
import MobileActions from "@/components/MobileActions";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import SpecialisedCareSections from "@/components/SpecialisedCareSections";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation />
      <main id="main-content">
        <HeroSection />
        <CentresSection />
        <SpecialisedCareSections />
        <ServicesSection />
        <AboutSection />
        <TestimonialsSection />
      </main>
      <Footer />
      <MobileActions />
    </div>
  );
};

export default Index;
