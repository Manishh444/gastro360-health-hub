import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import facilty from "@/assets/facility.jpg"; // Placeholder images
import office from "@/assets/office.jpg"; // Placeholder images
import machine from "@/assets/machine.jpg"; // Placeholder images

const GalleryCarousel = ({ trigger }: { trigger: React.ReactNode }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  // Sample medical facility images - in a real app these would be actual clinic photos
  const images = [
    {
      src: facilty,
      alt: "Modern Endoscopy Suite",
      title: "State-of-the-Art Endoscopy Suite"
    },
    {
      src: machine, 
      alt: "Reception Area",
      title: "Welcoming Reception Area"
    },
    {
      src: office,
      alt: "Consultation Room",
      title: "Private Consultation Rooms"
    },
    {
      src: "/api/placeholder/800/600",
      alt: "Advanced Medical Equipment",
      title: "Latest Medical Technology"
    },
    {
      src: "/api/placeholder/800/600",
      alt: "Recovery Room",
      title: "Comfortable Recovery Areas"
    },
    {
      src: "/api/placeholder/800/600",
      alt: "Laboratory",
      title: "On-site Laboratory Facilities"
    }
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="max-w-4xl w-full h-[80vh] p-0">
        <div className="relative w-full h-full bg-black rounded-lg overflow-hidden">
          <Button
            variant="ghost"
            size="sm"
            className="absolute top-4 right-4 z-10 text-white hover:bg-white/20"
            onClick={() => setIsOpen(false)}
          >
            <X className="w-4 h-4" />
          </Button>
          
          <div className="relative w-full h-full">
            <img
              src={images[currentImage].src}
              alt={images[currentImage].alt}
              className="w-full h-full object-cover"
            />
            
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <h3 className="text-white text-xl font-semibold mb-2">
                {images[currentImage].title}
              </h3>
              <div className="flex items-center justify-between">
                <span className="text-white/80 text-sm">
                  {currentImage + 1} of {images.length}
                </span>
                <div className="flex space-x-2">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentImage ? "bg-white" : "bg-white/40"
                      }`}
                      onClick={() => setCurrentImage(index)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Button
            variant="ghost"
            size="sm"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20"
            onClick={prevImage}
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>

          <Button
            variant="ghost"
            size="sm"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20"
            onClick={nextImage}
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default GalleryCarousel;