import { diagnosticServices } from "@/data/diagnostics";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone } from "lucide-react";

const ServicesSection = () => {


  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">Services</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            At S L Gastro & Liver Clinic, endoscopy, sigmoidoscopy, proctoscopy,
            colonoscopy procedures are done in a safe, smooth and efficient way
            after proper high disinfection to avoid cross infection.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            All the procedures are done using latest advanced endoscopy
            equipment which can detect lesions missed by conventional endoscope
            equipment.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Technology like Blue laser imaging (BLI) and Linked color imaging
            (LCI) integrated with Multi LED visualisation helps in viewing and
            acquiring high resolution stomach and colon images.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {diagnosticServices.map((service, index) => (
            <Card
              key={index}
              className="p-6 text-center hover:shadow-lg transition-shadow duration-300 bg-white border border-border">

              <h3 className="text-lg font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <a
            href="tel:+919019374419"
            className="text-sm font-semibold text-medical-green hover:text-medical-green-dark transition-colors">

          <Button
            size="lg"
            className="bg-medical-green hover:bg-medical-green-dark text-white px-8 py-3">
            <Phone className="w-5 h-5 mr-2" />
            BOOK SERVICES
          </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
