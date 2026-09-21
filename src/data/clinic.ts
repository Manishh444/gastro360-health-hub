export const clinic = {
  name: 'S L Gastro & Liver Clinic',
  tagline: 'Comprehensive Digestive, Liver, Functional GI & Metabolic Health Care',
  url: 'https://slgastro.com',
  phone: '+919019374419',
  // Set only after the clinic confirms a WhatsApp-enabled number, including country code.
  whatsapp: '919019374419',
  // Paste the src URL from Google Maps > Share > Embed a map (not the whole iframe).
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124354.85932177515!2d77.44528770446776!3d13.093523347481069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae19518dffcafd%3A0x18c7cdc71dd83161!2sS%20L%20Gastro%20%26%20Liver%20Clinic%2C%20COMED-%20Obesity%20Clinic!5e0!3m2!1sen!2sin!4v1790016444176!5m2!1sen!2sin',
};
export const centres = [
  { id: 'gastro-liver', name: clinic.name, fullName: clinic.name, description: 'Gastroenterology • Hepatology • Digestive & Liver Disorders' },
  { id: 'gastroscope', name: 'Gastroscope Centre', fullName: 'Gastroscope Centre', description: 'Advanced Endoscopy • Colonoscopy • Therapeutic Endoscopy' },
  { id: 'cnfm', name: 'CNFM', fullName: 'Centre for Neurogastroenterology, Functional GI Disorders & GI Motility', description: 'GI Motility • Functional GI Disorders' },
  { id: 'comed', name: 'COMED', fullName: 'Centre for Obesity & Metabolic Disorders', description: 'Weight Management • GI Nutrition • Metabolic Health' },
  { id: 'diagnostics', name: 'S L G Diagnostics', fullName: 'S L G Diagnostics', description: 'Advanced Diagnostic & Laboratory Services' },
].map(centre => ({ ...centre, href: `/centres/${centre.id}/` }));
// No laboratory catalogue is verified in the existing repository.
export const laboratoryServices: string[] = [];
export const navigation = [
  { label: 'HOME', href: '/#home' }, { label: 'ABOUT', href: '/#about' },
  { label: 'OUR CENTRES', href: '/#centres' }, { label: 'CONDITIONS', href: '/conditions/' },
  { label: 'DIAGNOSTICS', href: '/diagnostics/' }, { label: 'SERVICES', href: '/#services' },
  { label: 'DOCTORS', href: '/#doctors' }, { label: 'REVIEWS', href: '/#testimonials' },
  { label: 'CONTACT', href: '/#contact' },
];
