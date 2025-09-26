import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import GalleryCarousel from "@/components/GalleryCarousel";
import logo from "@/assets/logo.png";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "HOME", href: "#home" },
    { label: "ABOUT US", href: "#about" }, 
    { label: "SERVICES", href: "#services" },
    { label: "TESTIMONIALS", href: "#testimonials" },
  ];

  const scrollToSection = (href: string) => {
    if (href === "#home") {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(href) as HTMLElement;
      if (element) {
        const navbarHeight = 100; // Approximate navbar height
        const elementPosition = element.offsetTop - navbarHeight;
        window.scrollTo({ 
          top: elementPosition, 
          behavior: 'smooth' 
        });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <img src={logo} alt="Gastro 360 Logo" className="w-16 h-16" />
            <div>
              <h1 className="text-2xl font-bold text-foreground">
                Gastro <span className="text-medical-green">360</span> Clinics
              </h1>
              <p className="text-sm text-muted-foreground italic">
                A Comprehensive Digestive & Liver Wellness Clinic
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <div className="flex items-center bg-medical-green-light/20 rounded-full px-2 py-1">
              {navItems.map((item, index) => (
                <Button
                  key={item.label}
                  variant={index === 0 ? "default" : "ghost"}
                  size="sm"
                  onClick={() => scrollToSection(item.href)}
                  className={`${
                    index === 0 
                      ? "bg-medical-green text-white hover:bg-medical-green-dark" 
                      : "text-foreground hover:text-medical-green hover:bg-medical-green/10"
                  } rounded-full px-4 py-2 text-sm font-medium transition-all cursor-pointer`}
                >
                  {item.label}
                </Button>
              ))}
              <GalleryCarousel 
                trigger={
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-foreground hover:text-medical-green hover:bg-medical-green/10 rounded-full px-4 py-2 text-sm font-medium transition-all cursor-pointer"
                  >
                    GALLERY
                  </Button>
                }
              />
            </div>
          </div>

          {/* Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col space-y-2 mt-4">
              {navItems.map((item, index) => (
                <Button
                  key={item.label}
                  variant={index === 0 ? "default" : "ghost"}
                  onClick={() => scrollToSection(item.href)}
                  className={`${
                    index === 0 
                      ? "bg-medical-green text-white hover:bg-medical-green-dark" 
                      : "text-foreground hover:text-medical-green hover:bg-medical-green/10"
                  } justify-start cursor-pointer`}
                >
                  {item.label}
                </Button>
              ))}
              <GalleryCarousel 
                trigger={
                  <Button
                    variant="ghost"
                    className="text-foreground hover:text-medical-green hover:bg-medical-green/10 justify-start cursor-pointer"
                  >
                    GALLERY
                  </Button>
                }
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;