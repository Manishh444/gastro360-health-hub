import sharp from 'sharp';
import { mkdir, stat } from 'node:fs/promises';
const output = 'src/assets/optimized';
await mkdir(output, { recursive: true });
const images = [
  ['Logo2.png', 'logo', [104], 85],
  ['endoscopy-icon.png', 'endoscopy-icon', [64], 80],
  ['liver-icon.png', 'liver-icon', [64], 80],
  ['safety-icon.png', 'safety-icon', [64], 80],
  ['drManoj.jpeg', 'doctor-manoj', [288, 576], 82],
  ['drLavnya.jpeg', 'doctor-lavanya', [288, 576], 82],
  ['drmd.jpeg', 'poster-manoj', [64, 320, 480, 720, 960], 85],
  ['drld.jpeg', 'poster-lavanya', [64, 320, 480, 720, 960], 85],
];
for (const [source, name, widths, quality] of images) {
  for (const width of widths) {
    const path = `${output}/${name}-${width}.webp`;
    await sharp(`src/assets/${source}`).rotate().resize({ width, withoutEnlargement: true }).webp({ quality, effort: 6 }).toFile(path);
    console.log(`${path}: ${((await stat(path)).size / 1024).toFixed(1)} KiB`);
  }
}

await sharp("src/assets/Logo2.png").resize(48, 48).png().toFile("public/favicon.png");
