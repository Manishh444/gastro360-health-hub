import { ArrowRight, CalendarCheck, Check, ScanLine } from 'lucide-react';
import { clinic } from '@/data/clinic';

const procedures = [
  'Upper GI Endoscopy',
  'Colonoscopy',
  'FibroScan',
  'Esophageal Manometry',
  'Anorectal Manometry',
  'Hydrogen Breath Test',
  'Urea Breath Test',
];

const fibroScanBenefits = [
  'Fatty liver',
  'Diabetes',
  'Obesity',
  'Abnormal liver enzymes',
  'Metabolic risk factors',
  'Suspected liver disease',
];

export default function ServicesSection() {
  return <>
    <section id="procedures" className="py-16 sm:py-24 bg-slate-50 scroll-mt-36">
      <div className="container mx-auto px-4 max-w-6xl">
        <p className="eyebrow">Gastroscope Centre</p>
        <h2 className="section-title">Advanced GI Diagnostic &amp; Therapeutic Procedures</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
          {procedures.map((procedure, index) => <article key={procedure} className={`procedure-card ${index === procedures.length - 1 ? 'sm:col-span-2 lg:col-span-1' : ''}`}>
            <span className="text-xs font-bold tracking-widest text-teal-700">0{index + 1}</span>
            <h3 className="text-lg font-semibold mt-5">{procedure}</h3>
          </article>)}
        </div>
        <div className="mt-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl border border-teal-100 bg-white p-6">
          <div><h3 className="text-xl font-semibold">Looking for a specific procedure?</h3><p className="text-slate-600 mt-1">Our team can help you choose the appropriate next step.</p></div>
          <a href={`tel:${clinic.phone}`} className="inline-flex items-center gap-2 font-semibold text-teal-800 underline underline-offset-4 shrink-0">Talk to our team <ArrowRight size={17} aria-hidden="true"/></a>
        </div>
      </div>
    </section>

    <section id="fibroscan" className="py-16 sm:py-24 bg-teal-950 text-white scroll-mt-36">
      <div className="container mx-auto px-4 max-w-6xl grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 items-center">
        <div>
          <span className="inline-flex size-14 items-center justify-center rounded-2xl bg-teal-300 text-teal-950"><ScanLine size={28} aria-hidden="true"/></span>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-300 mt-7 mb-3">Assess Your Liver Health</p>
          <h2 className="text-4xl sm:text-5xl font-semibold mb-5">FibroScan<sup className="text-xl">®</sup></h2>
          <p className="text-lg text-teal-50/80 leading-8">A non-invasive assessment of liver stiffness and fatty change that can help evaluate liver health.</p>
          <a href={`tel:${clinic.phone}`} className="inline-flex min-h-12 items-center gap-2 rounded-lg bg-teal-300 px-6 py-3 mt-8 font-semibold text-teal-950 hover:bg-teal-200"><CalendarCheck size={19} aria-hidden="true"/>Book a FibroScan</a>
        </div>
        <div className="rounded-3xl border border-white/15 bg-white/10 p-7 sm:p-9">
          <h3 className="text-2xl font-semibold mb-7">Who may benefit?</h3>
          <ul className="grid sm:grid-cols-2 gap-4">{fibroScanBenefits.map(item => <li key={item} className="flex items-start gap-3"><Check className="mt-0.5 size-5 shrink-0 text-teal-300" aria-hidden="true"/><span>{item}</span></li>)}</ul>
        </div>
      </div>
    </section>
  </>;
}
