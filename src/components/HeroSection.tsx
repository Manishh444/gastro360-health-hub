import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
  DialogFooter,
} from "@/components/ui/dialog";
import { Calendar, MessageCircle } from "lucide-react";
import HeroSlideshow from "@/components/HeroSlideshow";
import endoscopyIcon from "@/assets/endoscopy-icon.png";
import liverIcon from "@/assets/liver-icon.png";
import safetyIcon from "@/assets/safety-icon.png";

import React, { useState } from "react";

const HeroSection = () => {
  const services = [
    {
      title: "Gastroenterology",
      description: "Your one stop solution for Digestive problems",
      icon: endoscopyIcon,
      color: "bg-medical-green",
    },
    {
      title: "Hepatology",
      description: "Your one stop solution for Liver and Pancreatic problems",
      icon: liverIcon,
      color: "bg-medical-green-light",
    },
    {
      title: "Safe Endoscopy",
      description:
        "Procedures are done with high disinfection to prevent COVID spread",
      icon: safetyIcon,
      color: "bg-medical-accent",
    },
    {
      title: "Body Composition Analysis",
      description:
        "Get detailed insights into your fat, muscle, bone, and water percentages.",
      icon: safetyIcon,
      color: "bg-medical-accent",
    },
  ];

  const [openService, setOpenService] = useState<number | null>(null);

  return (
    <section id="home" className="relative">
      <HeroSlideshow />

      {/* Services Cards Overlay */}
      <div
        className="relative  -mt-42 z-10 backdrop-blur-md"
        style={{ backgroundColor: "rgba(132, 243, 208, 0.2)" }}>
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6 py-8">
            {services.map((service, index) => (
              <React.Fragment key={index}>
                <Card className="p-6 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-full ${service.color}`}>
                      <img
                        src={service.icon}
                        alt={service.title}
                        className="w-8 h-8"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {service.description}
                      </p>
                      <Dialog
                        open={openService === index}
                        onOpenChange={(open) =>
                          setOpenService(open ? index : null)
                        }>
                        <DialogTrigger asChild>
                          <Button
                            variant="link"
                            className="text-medical-green hover:text-medical-green-dark p-0">
                            Read More →
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>{service.title}</DialogTitle>
                            <DialogDescription>
                              {service.description}
                            </DialogDescription>
                          </DialogHeader>
                          {/* You can add more detailed info here for each service if needed */}
                          <DialogFooter>
                            <DialogClose asChild>
                              <Button variant="outline">Close</Button>
                            </DialogClose>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                </Card>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Schedule Appointment CTA */}
      <div className="py-16 bg-medical-green-light/10">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-semibold text-foreground mb-4">
            Call to book your appointment
          </h3>

          <a
            href="tel:+919019374419"
            className="text-sm font-semibold text-medical-green hover:text-medical-green-dark transition-colors">
            <Button
              size="lg"
              className="bg-medical-green hover:bg-medical-green-dark text-white px-8 py-3 text-lg">
              <Calendar className="w-5 h-5 mr-2" />
              Book Appointment
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
