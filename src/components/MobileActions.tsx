import { clinic } from '@/data/clinic';
export default function MobileActions() {
  return <div className="mobile-actions xl:hidden" aria-label="Clinic contact actions">
    <a href={`tel:${clinic.phone}`} aria-label="Call S L Gastro & Liver Clinic">Call</a>
    {clinic.whatsapp && <a href={`https://wa.me/${clinic.whatsapp}`} aria-label="Contact clinic on WhatsApp">WhatsApp</a>}
    <a href={`tel:${clinic.phone}`} aria-label="Call to book an appointment">Book</a>
  </div>;
}
