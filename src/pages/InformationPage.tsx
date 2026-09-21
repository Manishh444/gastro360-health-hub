import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import MobileActions from '@/components/MobileActions';
import { centres, clinic, laboratoryServices } from '@/data/clinic';
import { diagnosticServices } from '@/data/diagnostics';
export default function InformationPage({ centreId, diagnostics = false }: { centreId?: string; diagnostics?: boolean }) {
  const centre = centres.find(item => item.id === centreId);
  const title = centre?.fullName ?? (diagnostics ? 'Diagnostics' : 'Conditions');
  return <><Header/><Navigation/><main id="main-content" className="container mx-auto px-4 py-16 max-w-5xl">
    <a href="/" className="text-teal-800 underline">Home</a><span aria-hidden="true"> / </span><span>{centre?.name ?? title}</span>
    <p className="text-sm font-semibold text-teal-800 mt-10 mb-4">S L GASTRO &amp; LIVER CLINIC · YELAHANKA</p>
    <h1 className="text-3xl sm:text-5xl font-bold leading-tight mb-6">{title}</h1>
    <p className="text-lg text-muted-foreground mb-8">{centre?.description ?? (diagnostics ? 'Explore the diagnostic services offered at S L Gastro & Liver Clinic.' : 'Digestive and liver concerns addressed in our existing clinic services include:')}</p>
    {centre && <p className="mb-8">One of five specialised centres within S L Gastro &amp; Liver Clinic.</p>}
    {diagnostics && <div className="grid sm:grid-cols-2 gap-6 mb-10">{diagnosticServices.map(service => <article key={service.title} className="rounded-xl border p-6"><h2 className="text-xl font-semibold mb-3">{service.title}</h2><p className="text-muted-foreground">{service.description}</p></article>)}</div>}
    {!centre && !diagnostics && <ul className="list-disc pl-6 space-y-3 mb-10">{['Acid reflux', 'Bloating and abdominal gas', 'Diarrhoea', 'Constipation', 'Irritable bowel syndrome (IBS)', 'Lactose intolerance', 'Liver disorders'].map(condition => <li key={condition}>{condition}</li>)}</ul>}
    {centreId === 'diagnostics' && laboratoryServices.length > 0 && <ul>{laboratoryServices.map(service => <li key={service}>{service}</li>)}</ul>}
    {centre && centreId !== 'diagnostics' && <a href="/diagnostics/" className="block text-teal-800 underline mb-8">Explore clinic diagnostic services</a>}
    <a href={`tel:${clinic.phone}`} className="clinic-button">Book Appointment</a>
    {centreId === 'comed' && <a href="tel:+918618634569" className="block mt-6 underline text-teal-800">Call COMED: 8618634569</a>}
    <div className="mt-16 border-t pt-8"><h2 className="text-2xl font-semibold mb-5">Our Specialised Centres</h2><div className="flex flex-wrap gap-4">{centres.map(item => <a key={item.id} href={item.href} className="underline text-teal-800">{item.name}</a>)}</div></div>
  </main><Footer/><MobileActions/></>;
}
