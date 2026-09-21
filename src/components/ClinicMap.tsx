import { clinic } from '@/data/clinic';

export default function ClinicMap() {
  // Keep the section hidden until the clinic supplies its exact map location.
  if (!clinic.mapEmbedUrl) return null;

  return (
      <div className="overflow-hidden rounded-xl border border-white/15 bg-slate-800">
        <iframe
          src={clinic.mapEmbedUrl}
          title="Google Maps location of S L Gastro & Liver Clinic"
          width="280"
          height="160"
          className="block h-40 w-full border-0"
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
  );
}
