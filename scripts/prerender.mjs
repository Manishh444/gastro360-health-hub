import { readFile, writeFile, mkdir, rm } from 'node:fs/promises';
import { resolve } from 'node:path';
import { render, pages, clinic, heroSlides, heroImageSizes } from '../.prerender/entry-server.js';
const template = await readFile('dist/index.html', 'utf8');
const escape = value => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
for (const page of [...pages, { path: '/404.html', title: 'Page not found | S L Gastro & Liver Clinic', description: 'The requested page could not be found.' }]) {
  const url = `${clinic.url}${page.path}`;
  const schema = { '@context': 'https://schema.org', '@type': 'MedicalClinic', '@id': `${clinic.url}/#clinic`, name: clinic.name, url: `${clinic.url}/`, telephone: clinic.phone, address: { '@type': 'PostalAddress', addressLocality: 'Yelahanka, Bengaluru', addressRegion: 'Karnataka', addressCountry: 'IN' } };
  const heroPreload = page.path === '/' ? `<link rel="preload" as="image" href="${heroSlides[0].image}" imagesrcset="${heroSlides[0].srcSet}" imagesizes="${heroImageSizes}" fetchpriority="high" />` : '';
  const head = `${heroPreload}<title>${escape(page.title)}</title>
<meta name="description" content="${escape(page.description)}" />
<link rel="canonical" href="${url}" />
<meta property="og:title" content="${escape(page.title)}" />
<meta property="og:description" content="${escape(page.description)}" />
<meta property="og:url" content="${url}" />
<meta property="og:type" content="website" />
<meta name="twitter:card" content="summary" />
${page.path === '/404.html' ? '<meta name="robots" content="noindex" />' : `<script type="application/ld+json">${JSON.stringify(schema).replaceAll('<', '\\u003c')}</script>`}`;
  const html = template.replace('<!--page-head-->', head).replace('<div id="root"></div>', `<div id="root">${render(page.path)}</div>`);
  const output = page.path === '/404.html' ? 'dist/404.html' : resolve('dist', `.${page.path}`, 'index.html');
  await mkdir(resolve(output, '..'), { recursive: true });
  await writeFile(output, html);
}
await writeFile('dist/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${pages.map(page => `<url><loc>${clinic.url}${page.path}</loc></url>`).join('')}</urlset>`);
await rm('.prerender', { recursive: true });
console.log(`Prerendered ${pages.length} pages, a 404 page and sitemap.xml.`);
