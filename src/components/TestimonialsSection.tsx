import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      condition: "Liver Disease Treatment",
      rating: 5,
      text: "The care I received at Gastro 360 was exceptional. The doctors were knowledgeable and the treatment was very effective. My liver condition has improved significantly."
    },
    {
      name: "Priya Sharma", 
      condition: "Endoscopy Procedure",
      rating: 5,
      text: "I was nervous about my endoscopy, but the staff made me feel comfortable. The procedure was smooth and painless. Highly recommend this clinic."
    },
    {
      name: "Dr. Anil Patel",
      condition: "Digestive Issues",
      rating: 5,
      text: "Professional service and state-of-the-art equipment. The diagnosis was accurate and the treatment plan was very effective for my digestive problems."
    },
    {
      name: "Meera Joshi",
      condition: "Colonoscopy Screening",
      rating: 5,
      text: "Clean, modern facility with caring staff. The colonoscopy procedure was handled professionally and I felt well-informed throughout the process."
    },
    {
      name: "Vikram Singh",
      condition: "Hepatology Consultation", 
      rating: 5,
      text: "Excellent hepatology services. The doctor explained everything clearly and provided comprehensive treatment for my liver condition."
    },
    {
      name: "Sunita Reddy",
      condition: "IBS Treatment",
      rating: 5,
      text: "After years of suffering from IBS, I finally found relief here. The hydrogen breath test helped identify the root cause and treatment has been life-changing."
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-medical-green-light/10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">What Our Patients Say</h2>
            <p className="text-lg text-muted-foreground">
              Hear from our satisfied patients about their experience at Gastro 360 Clinics
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 bg-white border border-border hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  "{testimonial.text}"
                </p>
                <div className="border-t pt-4">
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-xs text-muted-foreground">{testimonial.condition}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;