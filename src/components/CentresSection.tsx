import { Activity, FlaskConical, HeartPulse, Microscope, ScanLine } from 'lucide-react';

const careOptions = [
  { title: 'Gastroenterology & Hepatology', description: 'For acidity, GERD, abdominal pain, IBS, IBD, fatty liver, liver disease and other digestive disorders.', href: '#gastro-care', cta: 'Explore Gastro Care', icon: HeartPulse },
  { title: 'GI Motility & Functional Disorders', description: 'Through CNFM, specialised evaluation for constipation, difficulty swallowing, pelvic floor disorders and other functional GI conditions.', href: '#cnfm', cta: 'Explore CNFM', icon: Activity },
  { title: 'Obesity & Metabolic Health', description: 'Through COMED, evidence-based weight management, body composition analysis, GI nutrition and metabolic health programs.', href: '#comed', cta: 'Explore COMED', icon: ScanLine },
  { title: 'Diagnostics', description: 'S L G Diagnostics for diagnostic investigations supporting comprehensive patient care.', href: '/diagnostics/', cta: 'Explore Diagnostics', icon: FlaskConical },
  { title: 'Endoscopy & Colonoscopy', description: 'Advanced diagnostic and therapeutic gastrointestinal procedures through the Gastroscope Centre.', href: '#procedures', cta: 'Explore Procedures', icon: Microscope },
];

export default function CentresSection() {
  return <section id="right-care" className="care-finder py-16 sm:py-24"><div className="container mx-auto px-4 max-w-7xl">
    <p className="eyebrow">Specialised Care, One Integrated Centre</p>
    <h2 className="section-title">Find the right care</h2>
    <p className="mx-auto max-w-2xl text-center text-slate-600 mb-12">Choose the area that best matches your needs. Our integrated team will guide you to the appropriate specialist, test or treatment.</p>
    <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-5">{careOptions.map((care, index) => { const Icon = care.icon; return <a key={care.title} href={care.href} className={`care-card ${index === 4 ? 'md:col-span-2 xl:col-span-1' : ''}`}>
      <span className="care-icon"><Icon size={25} aria-hidden="true" /></span>
      <h3 className="text-xl font-semibold mt-6 mb-3 leading-snug">{care.title}</h3>
      <p className="text-sm text-slate-600 leading-6">{care.description}</p>
      <span className="mt-auto pt-7 text-sm font-semibold text-teal-800">{care.cta} <span aria-hidden="true">→</span></span>
    </a>; })}</div>
  </div></section>;
}
