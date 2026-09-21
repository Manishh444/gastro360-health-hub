import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';
const sitemap = await readFile('dist/sitemap.xml', 'utf8');
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => new URL(match[1]));
assert.equal(urls.length, 8);
for (const url of urls) {
  const html = await readFile(`dist${url.pathname}index.html`, 'utf8');
  assert.equal((html.match(/<h1[ >]/g) || []).length, 1, `${url.pathname}: single h1`);
  assert.ok(html.includes(`rel="canonical" href="${url.href}"`));
  assert.ok(html.includes('application/ld+json'));
  assert.ok(!html.includes('<!--page-head-->'));
  for (const match of html.matchAll(/(?:href|src)="(\/[^"#]*)(?:#[^"]*)?"/g)) {
    const path = match[1];
    await access(`dist${path}${path.endsWith('/') ? 'index.html' : ''}`);
  }
}
const home = await readFile('dist/index.html', 'utf8');
assert.equal((home.match(/class="centre-card /g) || []).length, 5);
assert.ok(home.includes('https://wa.me/919019374419'));
for (const hash of ['home', 'about', 'centres', 'services', 'doctors', 'testimonials', 'contact']) assert.ok(home.includes(`id="${hash}"`));
assert.ok((await readFile('dist/404.html', 'utf8')).includes('content="noindex"'));
console.log('Static checks passed: eight HTML pages, metadata, five centres, contact actions, anchors and local assets/links.');
