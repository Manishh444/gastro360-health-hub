import { Card } from "@/components/ui/card";
import { MessageCircle, Home, Users } from "lucide-react";

const WhyGastro360 = () => {
  const features = [
    {
      icon: MessageCircle,
      title: "Chat online", 
      description: "Before stepping to the clinic, confirm your appointment and ensure your safety. You can plan your endoscopy as per your convenience",
      color: "text-medical-green"
    },
    {
      icon: Home,
      title: "Friendly Neighbourhood Clinic in the Area",
      description: "We are here for you to experience a smooth, hassle free consultation with our doctor",
      color: "text-medical-green-dark"
    },
    {
      icon: Users,
      title: "Liaison specialities",
      description: "We are connected with Oncologists, Liver Transplant Surgeon, Nutritionist and Psychiatrist to provide a 360 gastro care",
      color: "text-medical-accent"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Why Gastro 360 ?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We provide comprehensive digestive care with modern technology and personalized attention
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-8 text-center hover:shadow-lg transition-shadow duration-300 bg-white border-0">
              <div className={`mx-auto w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-6`}>
                <feature.icon className={`w-8 h-8 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyGastro360;