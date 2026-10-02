import { ArrowRight, Check, HeartPulse, Scale, Waves } from 'lucide-react';

const cnfmServices = ['Esophageal Manometry', 'High-Resolution Manometry', 'Anorectal Manometry', 'Pelvic Floor Rehabilitation', 'Anal Biofeedback', 'Functional GI Disorder Management', 'Lactose Intolerance Testing', 'Evaluation of Chronic Constipation', 'Evaluation of Difficulty Swallowing', 'Management of Stool Leakage'];
const comedServices = [
  ['Weight Management', 'Personalized programs focused on sustainable lifestyle change.'],
  ['Body Composition Analysis', 'Go beyond the weighing scale with detailed assessment of body composition.'],
  ['GI Nutrition', 'Nutrition support for digestive disorders and individual gastrointestinal needs.'],
  ['Fatty Liver & Metabolic Health', 'Lifestyle-focused management of fatty liver, insulin resistance and metabolic risk.'],
  ['Health Coaching', 'Structured support for sustainable lifestyle transformation.'],
];
const gastrointestinalConditions = ['GERD & Acid Reflux', 'Gastritis', 'Peptic Ulcer Disease', 'IBS', 'Inflammatory Bowel Disease', "Crohn's Disease", 'Ulcerative Colitis', 'Chronic Constipation', 'Chronic Diarrhoea', 'Abdominal Pain', 'Bloating', 'Digestive Disorders'];
const liverConditions = ['Fatty Liver Disease', 'Hepatitis', 'Cirrhosis', 'Abnormal Liver Enzymes', 'Other Liver Disorders'];

function CheckList({ items }: { items: string[] }) {
  return <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3">{items.map(item => <li key={item} className="flex items-start gap-3"><Check className="mt-0.5 size-5 shrink-0 text-teal-700" aria-hidden="true"/><span>{item}</span></li>)}</ul>;
}

export default function SpecialisedCareSections() {
  return <>
    <section id="cnfm" className="py-16 sm:py-24 bg-white scroll-mt-36"><div className="container mx-auto px-4 max-w-6xl grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-16 items-start">
      <div><span className="section-icon"><Waves size={28} aria-hidden="true"/></span><p className="text-sm font-bold tracking-[0.2em] text-teal-800 mt-6 mb-3">CNFM</p><h2 className="text-3xl sm:text-4xl font-semibold leading-tight mb-5">Centre for Neurogastroenterology, Functional GI Disorders &amp; GI Motility</h2><p className="text-lg text-slate-600 leading-8">Specialised evaluation and management of complex gastrointestinal symptoms and motility disorders.</p><a href="/centres/cnfm/" className="inline-flex items-center gap-2 mt-7 font-semibold text-teal-800 underline underline-offset-4">Explore GI Motility Services <ArrowRight size={17} aria-hidden="true"/></a></div>
      <div className="service-panel"><h3 className="text-xl font-semibold mb-6">Services</h3><CheckList items={cnfmServices}/></div>
    </div></section>

    <section id="comed" className="py-16 sm:py-24 bg-slate-50 scroll-mt-36"><div className="container mx-auto px-4 max-w-6xl">
      <div className="max-w-3xl mb-12"><span className="section-icon"><Scale size={28} aria-hidden="true"/></span><p className="text-sm font-bold tracking-[0.2em] text-teal-800 mt-6 mb-3">COMED</p><h2 className="text-3xl sm:text-4xl font-semibold mb-4">Centre for Obesity &amp; Metabolic Disorders</h2><p className="text-lg text-slate-600">Personalized, science-based care for weight, metabolic and digestive health.</p></div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">{comedServices.map(([title, description]) => <article key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"><h3 className="text-lg font-semibold mb-3">{title}</h3><p className="text-sm text-slate-600 leading-6">{description}</p></article>)}<a href="/centres/comed/" className="rounded-2xl bg-teal-800 p-6 text-white flex flex-col justify-between min-h-40 hover:bg-teal-900"><span className="text-lg font-semibold">A healthier path, built around you.</span><span className="font-semibold">Explore COMED <span aria-hidden="true">→</span></span></a></div>
    </div></section>

    <section id="gastro-care" className="py-16 sm:py-24 bg-white scroll-mt-36"><div className="container mx-auto px-4 max-w-6xl">
      <div className="text-center max-w-3xl mx-auto mb-12"><span className="section-icon mx-auto"><HeartPulse size={28} aria-hidden="true"/></span><p className="eyebrow mt-6">Digestive &amp; Liver Health</p><h2 className="section-title">Complete Gastroenterology &amp; Hepatology Care</h2></div>
      <div className="grid lg:grid-cols-2 gap-6"><div className="service-panel"><h3 className="text-2xl font-semibold mb-7">Gastrointestinal Conditions</h3><CheckList items={gastrointestinalConditions}/></div><div className="service-panel"><h3 className="text-2xl font-semibold mb-7">Liver Conditions</h3><CheckList items={liverConditions}/></div></div>
      <div className="text-center mt-10"><a href="/centres/gastro-liver/" className="clinic-button gap-2">Find Your Gastro Care <ArrowRight size={18} aria-hidden="true"/></a></div>
    </div></section>
  </>;
}
