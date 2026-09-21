import { centres } from '@/data/clinic';
export default function CentresSection() {
  return <section id="centres" className="bg-slate-50 py-16 sm:py-24"><div className="container mx-auto px-4 max-w-6xl">
    <p className="eyebrow">Our Specialised Centres</p>
    <h2 className="section-title">Specialised Care. One Integrated Centre.</h2>
    <p className="mx-auto max-w-2xl text-center text-muted-foreground mb-12">Five specialised centres, working together as part of S L Gastro & Liver Clinic.</p>
    <div className="grid sm:grid-cols-2 gap-6">{centres.map((centre, index) => <a key={centre.id} href={centre.href} className={`centre-card ${index === 4 ? 'sm:col-span-2 sm:w-[calc(50%-0.75rem)] sm:justify-self-center' : ''}`}>
      <span className="text-sm font-semibold text-teal-700">0{index + 1}</span>
      <h3 className="text-2xl font-semibold mt-5 mb-3">{centre.name}</h3>
      {centre.name !== centre.fullName && <p className="text-sm mb-3">{centre.fullName}</p>}
      <p className="text-muted-foreground">{centre.description}</p><span className="mt-auto pt-6 text-sm font-semibold text-teal-800">Explore centre <span aria-hidden="true">→</span></span>
    </a>)}</div>
  </div></section>;
}
