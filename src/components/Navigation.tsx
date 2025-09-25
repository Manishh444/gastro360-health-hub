import { useState } from "react";
import { Menu, X, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    "HOME",
    "ABOUT US", 
    "GALLERY",
    "TESTIMONIALS",
    "SAFE ENDOSCOPY",
    "GASTROENTEROLOGY",
    "HEPATOLOGY",
    "More"
  ];

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
                  key={item}
                  variant={index === 0 ? "default" : "ghost"}
                  size="sm"
                  className={`${
                    index === 0 
                      ? "bg-medical-green text-white hover:bg-medical-green-dark" 
                      : "text-foreground hover:text-medical-green hover:bg-medical-green/10"
                  } rounded-full px-4 py-2 text-sm font-medium transition-all`}
                >
                  {item}
                </Button>
              ))}
            </div>
          </div>

          {/* Login Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button variant="outline" className="hidden md:flex items-center gap-2 border-medical-green text-medical-green hover:bg-medical-green hover:text-white">
              <User className="w-4 h-4" />
              Log In
            </Button>
            
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
                  key={item}
                  variant={index === 0 ? "default" : "ghost"}
                  className={`${
                    index === 0 
                      ? "bg-medical-green text-white hover:bg-medical-green-dark" 
                      : "text-foreground hover:text-medical-green hover:bg-medical-green/10"
                  } justify-start`}
                >
                  {item}
                </Button>
              ))}
              <Button variant="outline" className="flex items-center gap-2 justify-start border-medical-green text-medical-green hover:bg-medical-green hover:text-white mt-4">
                <User className="w-4 h-4" />
                Log In
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;