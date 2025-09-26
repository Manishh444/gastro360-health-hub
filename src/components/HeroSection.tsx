import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-doctor.jpg";
import endoscopyIcon from "@/assets/endoscopy-icon.png";
import liverIcon from "@/assets/liver-icon.png";
import safetyIcon from "@/assets/safety-icon.png";

const HeroSection = () => {
  const services = [
    {
      title: "Gastroenterology",
      description: "Your one stop solution for Digestive problems",
      icon: endoscopyIcon,
      color: "bg-medical-green"
    },
    {
      title: "Hepatology", 
      description: "Your one stop solution for Liver and Pancreatic problems",
      icon: liverIcon,
      color: "bg-medical-green-light"
    },
    {
      title: "Safe Endoscopy",
      description: "Procedures are done with high disinfection to prevent COVID spread", 
      icon: safetyIcon,
      color: "bg-medical-accent"
    }
  ];

  return (
    <section id="home" className="relative">
      {/* Hero Image Background */}
      <div 
        className="relative min-h-[600px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-medical-green/20 to-transparent"></div>
        
        <div className="relative container mx-auto px-4 py-20 flex items-center min-h-[600px]">
          <div className="max-w-2xl text-white">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Expert Care for Your
              <span className="block text-medical-accent">Digestive Health</span>
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Comprehensive gastroenterology and hepatology services with the latest technology and compassionate care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-medical-green hover:bg-medical-green-dark text-white px-8 py-3 text-lg">
                <Calendar className="w-5 h-5 mr-2" />
                Book Appointment
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-medical-green px-8 py-3 text-lg">
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat Online
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Services Cards Overlay */}
      <div className="relative -mt-32 z-10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="p-6 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-full ${service.color}`}>
                    <img src={service.icon} alt={service.title} className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <Button variant="link" className="text-medical-green hover:text-medical-green-dark p-0">
                      Read More →
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Schedule Appointment CTA */}
      <div className="py-16 bg-medical-green-light/10">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-semibold text-foreground mb-4">
            {'>'} Schedule your appointment online
          </h3>
          <Button size="lg" className="bg-medical-green hover:bg-medical-green-dark text-white px-8 py-3">
            <Calendar className="w-5 h-5 mr-2" />
            Book an Appointment
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;