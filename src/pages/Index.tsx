import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import WhyGastro360 from "@/components/WhyGastro360";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation />
      <main>
        <HeroSection />
        <WhyGastro360 />
        <ServicesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
