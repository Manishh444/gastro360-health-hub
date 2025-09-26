import { Card } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              About Us
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              S L Gastro & Liver Clinic is dedicated to providing comprehensive
              digestive and liver wellness care with state-of-the-art technology
              and expert medical professionals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Our Mission
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We are committed to delivering exceptional gastroenterology and
                hepatology services using the latest medical technology and
                evidence-based practices. Our goal is to provide comprehensive,
                patient-centered care that addresses all aspects of digestive
                health.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our team of experienced specialists ensures that every patient
                receives personalized treatment plans tailored to their specific
                needs, promoting better digestive health and overall well-being.
              </p>
            </div>
            <div className="bg-medical-green/10 p-8 rounded-lg">
              <h4 className="text-xl font-semibold text-medical-green mb-4">
                Our Expertise
              </h4>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Advanced Endoscopy Procedures</li>
                <li>• Liver Disease Management</li>
                <li>• Digestive Disorder Treatment</li>
                <li>• Preventive Gastroenterology</li>
                <li>• Minimally Invasive Procedures</li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center bg-white border border-border">
              <div className="text-3xl mb-4">🏥</div>
              <h4 className="text-lg font-semibold text-foreground mb-3">
                State-of-the-Art Facility
              </h4>
              <p className="text-muted-foreground text-sm">
                Modern clinic equipped with the latest medical technology for
                accurate diagnosis and effective treatment.
              </p>
            </Card>
            <Card className="p-6 text-center bg-white border border-border">
              <div className="text-3xl mb-4">👨‍⚕️</div>
              <h4 className="text-lg font-semibold text-foreground mb-3">
                Expert Team
              </h4>
              <p className="text-muted-foreground text-sm">
                Highly qualified gastroenterologists and hepatologists with
                years of experience in digestive health.
              </p>
            </Card>
            <Card className="p-6 text-center bg-white border border-border">
              <div className="text-3xl mb-4">🤝</div>
              <h4 className="text-lg font-semibold text-foreground mb-3">
                Patient-Centered Care
              </h4>
              <p className="text-muted-foreground text-sm">
                Personalized treatment plans and compassionate care focused on
                each patient's unique needs.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;