import manojMedium from '@/assets/optimized/poster-manoj-720.webp';
import manojTiny from '@/assets/optimized/poster-manoj-320.webp';
import lavanyaMedium from '@/assets/optimized/poster-lavanya-720.webp';
import lavanyaTiny from '@/assets/optimized/poster-lavanya-320.webp';
import manojPoster from '@/assets/optimized/poster-manoj-960.webp';
import manojSmall from '@/assets/optimized/poster-manoj-480.webp';
import manojBackground from '@/assets/optimized/poster-manoj-64.webp';
import lavanyaPoster from '@/assets/optimized/poster-lavanya-960.webp';
import lavanyaSmall from '@/assets/optimized/poster-lavanya-480.webp';
import lavanyaBackground from '@/assets/optimized/poster-lavanya-64.webp';

export const heroImageSizes = '(min-width: 1280px) 600px, (min-width: 1024px) 46vw, (min-width: 640px) 600px, calc(100vw - 32px)';
export const heroSlides = [
  { image: manojPoster, small: manojSmall, tiny: manojTiny, medium: manojMedium, sizes: heroImageSizes, background: manojBackground, name: 'Dr. Manoj Gowda', centre: 'S L Gastro & Liver Clinic', detail: 'Digestive & liver care', href: '/centres/gastro-liver/', width: 960, height: 960 },
  { image: lavanyaPoster, small: lavanyaSmall, tiny: lavanyaTiny, medium: lavanyaMedium, sizes: '(min-width: 1280px) 400px, (min-width: 1024px) 31vw, (min-width: 640px) 400px, calc((100vw - 32px) * 0.6667)', background: lavanyaBackground, name: 'Dr. Lavanya N', centre: 'COMED', detail: 'Nutrition & metabolic health', href: '/centres/comed/', width: 960, height: 1440 },
].map(slide => ({ ...slide, srcSet: `${slide.tiny} 320w, ${slide.small} 480w, ${slide.medium} 720w, ${slide.image} 960w` }));
