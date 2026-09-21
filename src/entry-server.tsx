import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';
import { centres, clinic } from './data/clinic';
export const pages = [
  { path: '/', title: 'S L Gastro & Liver Clinic | Yelahanka, Bengaluru', description: clinic.tagline + ' in Yelahanka, Bengaluru. Explore our five specialised centres and book an appointment.' },
  ...centres.map(centre => ({ path: centre.href, title: `${centre.name} in Yelahanka | S L Gastro & Liver Clinic`, description: `${centre.fullName}. ${centre.description}. Part of S L Gastro & Liver Clinic in Yelahanka, Bengaluru.` })),
  { path: '/diagnostics/', title: 'Diagnostics | S L Gastro & Liver Clinic, Yelahanka', description: 'Explore endoscopy, colonoscopy, FibroScan, breath testing and body composition analysis at S L Gastro & Liver Clinic.' },
  { path: '/conditions/', title: 'Digestive & Liver Conditions | S L Gastro & Liver Clinic', description: 'Explore digestive and liver concerns addressed at S L Gastro & Liver Clinic in Yelahanka, Bengaluru.' },
];
export function render(path: string) { return renderToString(<StaticRouter location={path} future={{ v7_relativeSplatPath: true }}><App/></StaticRouter>); }
export { clinic };

export { heroSlides, heroImageSizes } from './data/heroSlides';
