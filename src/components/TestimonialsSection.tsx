import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Suhas Raj",
      condition: "Liver Disease Treatment",
      rating: 5,
      text: "The clinic was clean and well-equipped, and all tests and procedures were carried out with great care. What truly stood out was the doctor’s genuine concern for my health and willingness to answer all my questions patiently.",
    },
    {
      name: "Ashish Das",
      condition: "fibroscan Procedure",
      rating: 5,
      text: "Dr Manoj Gowda is a genuine doctor, definitely not money minded. I went for fibroscan here last Friday and the scan was done smoothly and the doctor consultation was also done. Doctor was very patient and heard all issues and was very empathetic before prescribing costly liver medicine.Only prescribed one medicine..",
    },
    {
      name: "Jaynath  Mukherjee ",
      condition: "Digestive Issues",
      rating: 5,
      text: "I am Jaynath Mukherjee and I visited the clinic on 22nd July '24 & after reviewing my condition doctor suggested to take a surgeon's opinion. I was confused,so, he referred me to a known surgeon and I am satisfied with his guidance and going for a surgery next week, which is very well guided by him. Thanks sir.",
    },
    {
      name: "Jagadeesan Gopalswamy",
      condition: "Digestive Issues",
      rating: 5,
      text: "One year back I had vomitting problem and consulted Dr Manoj. In just three visits and taking medicines for two months I was completely cured and I didn't get vomitting afterwards. I met him again for another issue of heartburn. I had this problem frequently with symptoms very similar to heart ailment. I consulted him only once and with the medicines prescribed by him I am fully relieved of those symptoms. Thank you Dr. I would recommend Dr Manoj Gowda for any gastro issues.",
    },
    {
      name: "Prof. Md. Manzoor Hussain",
      condition: "Hepatology Consultation",
      rating: 5,
      text: "Dr Manoj is an Excellent, Efficient, Eminent, down to earth and highly qualified Doctor. Dr Chendre Gowda referred me to this clinic for my very Old problem of GERD & Gastritis. Though I have USA Medical Insurance, scheduled to visit USA, I still preferred to get consultation and treatment from Dr Manoj because his expertise and dedication make the Patient comfortable.",
    },
    {
      name: "Ramakrishna Rao P",
      condition: "IBS Treatment",
      rating: 5,
      text: "I stay in Yelahanka and so consulted the Doctor for my wife's frequent stomack ache. The doctor treated her problem with appropriate medication. Now she is not getting the pain and cured. I found the doctor always presently disposed with his patients and treat them with care. Feel happy getting correct treatment from him.",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-medical-green-light/10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              What Our Patients Say
            </h2>
            <p className="text-lg text-muted-foreground">
              Hear from our satisfied patients about their experience at S L
              Gastro & Liver Clinic
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="p-6 bg-white border border-border hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  "{testimonial.text}"
                </p>
                <div className="border-t pt-4">
                  <h4 className="font-semibold text-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.condition}
                  </p>
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
