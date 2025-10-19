import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#009688] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-6">Contact Us</h3>
            <div className="flex items-start space-x-3">
              <Phone className="w-5 h-5 mt-1 text-medical-accent" />
              <div>
                <p className="font-medium">Call Us</p>
                <p className="text-white/80">9019374419</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Mail className="w-5 h-5 mt-1 text-medical-accent" />
              <div>
                <p className="font-medium">Email</p>
                <p className="text-white/80">sreelakshmigastro@gmail.com</p>
              </div>
            </div>
            {/* <div className="flex items-start space-x-3">
              <Clock className="w-5 h-5 mt-1 text-medical-accent" />
              <div>
                <p className="font-medium">Hours</p>
                <p className="text-white/80">Mon-Sat: 9AM-8PM</p>
              </div>
            </div> */}
          </div>

          {/* Locations */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-6">Our Locations</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-1 text-medical-accent" />
                <div>
                  <p className="font-medium">Yelhanka New Town</p>
                  <p className="text-white/80 text-sm">Karnataka, Bengaluru</p>
                </div>
              </div>
              {/* <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-1 text-medical-accent" />
                <div>
                  <p className="font-medium">Madinaguda</p>
                  <p className="text-white/80 text-sm">Hyderabad, Telangana</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-1 text-medical-accent" />
                <div>
                  <p className="font-medium">Kukatpally</p>
                  <p className="text-white/80 text-sm">Hyderabad, Telangana</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-1 text-medical-accent" />
                <div>
                  <p className="font-medium">Manikonda</p>
                  <p className="text-white/80 text-sm">Hyderabad, Telangana</p>
                </div>
              </div> */}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-6">Services</h3>
            <ul className="space-y-2 text-white/80">
              <li>Gastroenterology</li>
              <li>Hepatology</li>
              <li>Upper G.I. Endoscopy</li>
              <li>Colonoscopy</li>
              <li>Fibroscan</li>
              <li>Hydrogen Breath Test</li>
              <li>Urea Breath Test</li>
            </ul>
          </div>

          {/* About */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-6">
              S L Gastro & Liver Clinic
            </h3>
            <p className="text-white/80 text-sm leading-relaxed">
              A comprehensive digestive and liver wellness clinic providing
              expert care with the latest technology and compassionate service.
            </p>
            <div className="pt-4">
              <p className="text-xs text-white/60">
                © 2025 S L Gastro & Liver Clinic. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;