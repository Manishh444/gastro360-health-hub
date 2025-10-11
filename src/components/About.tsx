import { Card } from "@/components/ui/card";
import doctorImage from "@/assets/building.jpg";
import dummyDoctor from "@/assets/facility.jpg"; // add a placeholder image

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

          {/* === Doctor Profiles Section === */}
          <div className="space-y-16">
            {/* Dr. Lavanya */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
              <div className="flex-shrink-0">
                <img
                  src={doctorImage}
                  alt="Dr. Lavanya N"
                  className="rounded-lg shadow-lg w-72 h-80 object-cover"
                />
              </div>

              <div className="flex-1">
                <h3 className="text-3xl font-semibold text-foreground mb-2">
                  Dr. Lavanya N
                </h3>
                <p className="text-medical-green font-medium mb-4">
                  Founder & Chief Consultant – COMED
                </p>
                <p className="text-muted-foreground mb-4">
                  Health Coach | Gastrointestinal Nutritionist | Dental Surgeon
                </p>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  Dr. Lavanya is a passionate and dedicated health coach with
                  over 10 years of expertise, committed to helping individuals
                  achieve lasting lifestyle transformation. Her approach
                  combines science-backed nutrition, personalized fitness, and
                  sustainable habit-building with holistic wellness
                  practices—ensuring balance for both body and mind.
                </p>

                <div className="space-y-2 mb-6">
                  <h4 className="text-lg font-semibold text-foreground">
                    Areas of Expertise
                  </h4>
                  <ul className="list-disc list-inside text-muted-foreground">
                    <li>Weight management & body composition improvement</li>
                    <li>Diabetes, prediabetes & metabolic health coaching</li>
                    <li>Gut health & digestive wellness</li>
                    <li>
                      Stress management, mindful eating & lifestyle modification
                    </li>
                    <li>One-on-one coaching sessions</li>
                    <li>Personalized diet & lifestyle plans</li>
                    <li>Fitness & yoga integration for everyday life</li>
                    <li>Online consultations & follow-up</li>
                  </ul>
                </div>

                <Card className="p-6 bg-medical-green/10 border border-border rounded-lg">
                  <p className="italic text-muted-foreground text-sm">
                    “To empower individuals to take control of their health,
                    overcome metabolic challenges, and live a fuller, healthier,
                    and more confident life.”
                  </p>
                </Card>

                <div className="mt-8 space-y-1">
                  <p className="text-sm text-muted-foreground">
                    📍 Avalahalli, Yelahanka, Bangalore
                  </p>
                  <p className="text-sm text-muted-foreground">
                    ✉️ lavanya.n.comed@gmail.com
                  </p>
                  <p className="text-sm text-muted-foreground">
                    📞 +91-8618634569
                  </p>
                </div>
              </div>
            </div>

            {/* === Dummy Doctor === */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
              <div className="flex-shrink-0">
                <img
                  src={dummyDoctor}
                  alt="Dr. John Doe"
                  className="rounded-lg shadow-lg w-72 h-80 object-cover"
                />
              </div>

              <div className="flex-1">
                <h3 className="text-3xl font-semibold text-foreground mb-2">
                  Dr. John Doe
                </h3>
                <p className="text-medical-green font-medium mb-4">
                  Senior Gastroenterologist – S L Gastro & Liver Clinic
                </p>
                <p className="text-muted-foreground mb-4">
                  Specialist in Liver & Digestive Health
                </p>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  Dr. John is an expert gastroenterologist with over 15 years of
                  experience in diagnosing and treating complex liver and
                  digestive disorders. He is known for his patient-first
                  approach and commitment to medical excellence.
                </p>

                <div className="space-y-2 mb-6">
                  <h4 className="text-lg font-semibold text-foreground">
                    Areas of Expertise
                  </h4>
                  <ul className="list-disc list-inside text-muted-foreground">
                    <li>Advanced Endoscopy & Colonoscopy</li>
                    <li>Liver Disease & Hepatitis Management</li>
                    <li>Gastrointestinal Cancer Screening</li>
                    <li>Acid Reflux & Ulcer Treatment</li>
                    <li>Minimally Invasive GI Procedures</li>
                  </ul>
                </div>

                <Card className="p-6 bg-medical-green/10 border border-border rounded-lg">
                  <p className="italic text-muted-foreground text-sm">
                    “Dedicated to providing compassionate and evidence-based
                    care for every patient’s digestive and liver health.”
                  </p>
                </Card>

                <div className="mt-8 space-y-1">
                  <p className="text-sm text-muted-foreground">
                    📍 S L Gastro & Liver Clinic, Bangalore
                  </p>
                  <p className="text-sm text-muted-foreground">
                    ✉️ dr.john@example.com
                  </p>
                  <p className="text-sm text-muted-foreground">
                    📞 +91-9876543210
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* End Doctor Profiles */}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
