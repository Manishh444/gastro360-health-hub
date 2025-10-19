import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import GalleryCarousel from "@/components/GalleryCarousel";
import logo from "@/assets/Logo2.png";

const getNavButtonClasses = (isActive: boolean) => {
  const baseClasses =
    "rounded-full px-4 py-2 text-sm font-medium transition-all cursor-pointer";

  const activeClasses =
    "bg-medical-green text-white hover:bg-medical-green-dark";
  const inactiveClasses =
    "text-foreground hover:text-medical-green hover:bg-medical-green/10";

  return `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`;
};

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const navItems = [
    { label: "HOME", href: "#home" },
    { label: "ABOUT US", href: "#about" },
    { label: "SERVICES", href: "#services" },
    { label: "TESTIMONIALS", href: "#testimonials" },
  ];

  const scrollToSection = (href: string) => {
    const scrollHome = () => window.scrollTo({ top: 0, behavior: "smooth" });

    const performScroll = () => {
      const element = document.querySelector(href) as HTMLElement | null;
      const navbar = document.querySelector("nav") as HTMLElement | null;
      if (!element) return;
      const navbarHeight = navbar?.offsetHeight ?? 0;
      const y =
        window.scrollY + element.getBoundingClientRect().top - navbarHeight - 8; // small extra spacing
      window.scrollTo({ top: Math.max(y, 0), behavior: "smooth" });
    };

    if (href === "#home") {
      if (isMenuOpen) {
        setIsMenuOpen(false);
        requestAnimationFrame(() => requestAnimationFrame(scrollHome));
      } else {
        scrollHome();
      }
      return;
    }

    if (isMenuOpen) {
      setIsMenuOpen(false);
      requestAnimationFrame(() => requestAnimationFrame(performScroll));
    } else {
      performScroll();
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-teal-100/30 to-green-100/30 backdrop-blur-md border-b border-border">
      {" "}
      <div className="container mx-auto px-4 rounded-lg">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <img
              src={logo}
              alt="S L Gastro & Liver Clinic Logo"
              className="w-16 h-16 rounded-lg object-cover shadow-md"
            />
            <div>
              <h1 className="text-2xl font-bold text-foreground">
                S L Gastro & <span className="text-medical-green">Liver</span>{" "}
                Clinic
              </h1>
              <p
                className="text-sm text-muted-foreground  italic"
                style={{ color: "#000000" }} // greenish-teal
              >
                COMED - centre for obesity and metabolic disorders.
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <div className="flex items-center bg-medical-green-light/50 rounded-full px-2 py-1">
              {navItems.map((item, index) => (
                <Button
                  key={index}
                  variant={index === 0 ? "ghost" : "ghost"}
                  size="sm"
                  onClick={() => {
                    scrollToSection(item.href);
                    setActiveIndex(index); // update active button on click
                  }}
                  className={getNavButtonClasses(activeIndex === index)}>
                  {item.label}
                </Button>
              ))}
              <GalleryCarousel
                trigger={
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-foreground hover:text-medical-green hover:bg-medical-green/10 rounded-full px-4 py-2 text-sm font-medium transition-all cursor-pointer">
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
              onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
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
                  } justify-start cursor-pointer`}>
                  {item.label}
                </Button>
              ))}
              <GalleryCarousel
                trigger={
                  <Button
                    variant="ghost"
                    className="text-foreground hover:text-medical-green hover:bg-medical-green/10 justify-start cursor-pointer">
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
