import { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, Pause, Play, Phone, ArrowUpRight } from 'lucide-react';
import { clinic } from '@/data/clinic';
import lavanyaPoster from '@/assets/drld.jpeg';
import manojPoster from '@/assets/drmd.jpeg';

const slides = [
  { image: manojPoster, name: 'Dr. Manoj Gowda', centre: 'S L Gastro & Liver Clinic', detail: 'Digestive & liver care', href: '/centres/gastro-liver/', width: 1254, height: 1254 },
  { image: lavanyaPoster, name: 'Dr. Lavanya N', centre: 'COMED', detail: 'Nutrition & metabolic health', href: '/centres/comed/', width: 1024, height: 1536 },
];

export default function HeroSlideshow() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(true);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateMotion = () => setReducedMotion(preference.matches);
    const updateVisibility = () => setVisible(!document.hidden);
    updateMotion();
    updateVisibility();
    preference.addEventListener('change', updateMotion);
    document.addEventListener('visibilitychange', updateVisibility);
    return () => {
      preference.removeEventListener('change', updateMotion);
      document.removeEventListener('visibilitychange', updateVisibility);
    };
  }, []);

  const rotating = !paused && !hovered && !reducedMotion && visible;
  useEffect(() => {
    if (!rotating) return;
    const timer = window.setInterval(() => setActive(value => (value + 1) % slides.length), 8000);
    return () => window.clearInterval(timer);
  }, [rotating]);

  const select = (index: number) => {
    setPaused(true);
    setActive((index + slides.length) % slides.length);
  };
  const slide = slides[active];

  return <div className="hero-showcase" role="region" aria-roledescription="carousel" aria-label="Meet our clinic specialists"
    onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
    onFocusCapture={() => setPaused(true)}>
    <div className="hero-showcase-backdrop" aria-hidden="true">
      {slides.map((item, index) => <div key={item.name} className={`hero-ambient ${active === index ? 'is-active' : ''}`} style={{ backgroundImage: `url(${item.image})` }}/>) }
    </div>
    <div className="container mx-auto px-4 sm:px-6 relative">
      <div className="hero-showcase-grid">
        <div className="hero-showcase-copy">
          <p className="text-xs sm:text-sm uppercase tracking-[0.18em] text-teal-200 font-semibold mb-5">Specialised care · Yelahanka</p>
          <h1 className="text-3xl sm:text-5xl xl:text-6xl font-semibold leading-[1.12] tracking-tight">S L GASTRO &amp;<br/> LIVER CLINIC</h1>
          <p className="text-lg sm:text-2xl leading-relaxed text-slate-100 mt-6 max-w-xl">Digestive • Liver • Functional GI • Metabolic Health</p>
          <p className="text-base sm:text-lg text-slate-300 mt-4 max-w-lg">Specialist care and advanced diagnostics under one roof in Yelahanka.</p>
          <div className="flex flex-wrap gap-3 mt-7">
            <a className="clinic-button bg-teal-700 gap-2" href={`tel:${clinic.phone}`}>Book Appointment <ArrowUpRight size={18} aria-hidden="true"/></a>
            <a className="hero-call" href={`tel:${clinic.phone}`}><Phone size={17} aria-hidden="true"/> Call Now</a>
          </div>
          <div className="mt-8 pt-5 border-t border-white/20">
            <p className="text-xs uppercase tracking-widest text-teal-200 mb-2">Five specialised centres. One clinic.</p>
            <a className="inline-flex items-center gap-2 text-sm py-2 underline underline-offset-4" href="#centres">Explore our centres <ArrowRight size={16} aria-hidden="true"/></a>
          </div>
        </div>
        <div className="hero-poster-column">
          <div className="hero-poster-stage" aria-live={rotating ? 'off' : 'polite'}>
            {slides.map((item, index) => <div key={item.name} role="group" aria-roledescription="slide" aria-label={`${index + 1} of ${slides.length}: ${item.name}`} aria-hidden={index !== active} className={`hero-poster-slide ${index === active ? 'is-active' : ''}`}>
              <img src={item.image} alt={`${item.name} — ${item.centre} profile poster`} width={item.width} height={item.height} loading="eager" decoding="async" className="hero-poster-image"/>
            </div>)}
          </div>
          <div className="hero-slide-footer">
            <div className="min-w-0"><p className="text-xs text-teal-200 mb-1">{slide.detail}</p><a href={slide.href} className="font-semibold underline underline-offset-4">{slide.name}</a></div>
            <div className="flex items-center gap-1" role="group" aria-label="Slideshow controls">
              <button type="button" className="hero-slide-control" aria-label="Previous slide" onClick={() => select(active - 1)}><ArrowLeft size={18}/></button>
              {!reducedMotion && <button type="button" className="hero-slide-control" aria-label={paused ? 'Start automatic slideshow' : 'Pause automatic slideshow'} onClick={() => setPaused(!paused)}>{paused ? <Play size={16}/> : <Pause size={16}/>}</button>}
              <button type="button" className="hero-slide-control" aria-label="Next slide" onClick={() => select(active + 1)}><ArrowRight size={18}/></button>
            </div>
          </div>
          <div className="flex justify-center gap-2 mt-1" role="group" aria-label="Choose a slide">
            {slides.map((item, index) => <button key={item.name} type="button" onClick={() => select(index)} aria-label={`Show ${item.name}`} aria-pressed={index === active} className="hero-slide-dot"><span className={index === active ? 'bg-teal-300 w-8' : 'bg-white/40 w-3'}/></button>)}
          </div>
        </div>
      </div>
    </div>
    <div className="relative border-t border-white/15 bg-slate-950/30"><p className="container mx-auto px-4 py-4 text-center text-xs sm:text-sm leading-6 text-slate-200">Gastroenterology · Hepatology · Endoscopy · GI Motility · Nutrition · Metabolic Health</p></div>
  </div>;
}
