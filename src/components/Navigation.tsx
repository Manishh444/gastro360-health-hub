import { useRef, useState } from 'react';
import { Menu, X, ChevronDown, MessageCircle } from 'lucide-react';
import { centres, clinic, navigation } from '@/data/clinic';
import GalleryCarousel from '@/components/GalleryCarousel';
import logo from '@/assets/optimized/logo-104.webp';
export default function Navigation() {
  const [mobile, setMobile] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const centreButton = useRef<HTMLButtonElement>(null);
  const menuButton = useRef<HTMLButtonElement>(null);
  const close = () => { setMobile(false); setExpanded(false); };
  return <nav aria-label="Main navigation" className="sticky top-0 z-50 bg-white border-b shadow-sm" onKeyDown={event => {
    if (event.key === 'Escape') { if (expanded) { setExpanded(false); centreButton.current?.focus(); } else { setMobile(false); menuButton.current?.focus(); } }
  }}>
    <div className="container mx-auto px-4">
      <div className="flex items-center justify-between gap-3 py-3">
        <a href="/" className="flex items-center gap-3 min-w-0"><img src={logo} width="52" height="52" alt="" className="shrink-0 rounded-lg"/><span><span className="block font-bold text-base sm:text-xl">S L Gastro & Liver Clinic</span><span className="hidden sm:block text-xs text-muted-foreground mt-1">{clinic.tagline}</span></span></a>
        <div className="hidden xl:flex items-center gap-3 shrink-0">
          {clinic.whatsapp && <a href={`https://wa.me/${clinic.whatsapp}`} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-teal-700 px-5 py-3 font-semibold text-teal-800 hover:bg-teal-50" aria-label="Contact S L Gastro & Liver Clinic on WhatsApp"><MessageCircle size={20} aria-hidden="true" />WhatsApp</a>}
          <a href={`tel:${clinic.phone}`} className="clinic-button">Book Appointment</a>
        </div>
        <button ref={menuButton} className="xl:hidden p-3" aria-label={mobile ? 'Close navigation' : 'Open navigation'} aria-expanded={mobile} aria-controls="main-navigation" onClick={() => setMobile(!mobile)}>{mobile ? <X/> : <Menu/>}</button>
      </div>
      <div id="main-navigation" className={`${mobile ? 'flex' : 'hidden'} xl:flex flex-col xl:flex-row xl:items-center gap-1 pb-3 max-h-[65dvh] overflow-y-auto xl:overflow-visible`}>
        {navigation.map(item => item.label === 'OUR CENTRES' ? <div key={item.label} className="relative" onMouseEnter={() => setExpanded(true)} onMouseLeave={() => setExpanded(false)} onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) setExpanded(false); }}>
          <button ref={centreButton} className="nav-link flex items-center gap-2 w-full" aria-expanded={expanded} aria-controls="centre-links" onClick={() => setExpanded(!expanded)}>OUR CENTRES <ChevronDown size={16}/></button>
          <div id="centre-links" hidden={!expanded} className="xl:absolute xl:top-full xl:left-0 xl:w-80 bg-white rounded-xl border p-2 shadow-lg">{centres.map(centre => <a key={centre.id} href={centre.href} className="nav-link block whitespace-normal" onClick={close}>{centre.name}</a>)}</div>
        </div> : <a key={item.label} href={item.href} className="nav-link" onClick={close}>{item.label}</a>)}
        <GalleryCarousel trigger={<button className="nav-link text-left">GALLERY</button>}/>
      </div>
    </div>
  </nav>;
}
