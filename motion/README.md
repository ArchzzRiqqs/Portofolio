# motion/ — komposisi Remotion

Folder ini **terpisah dari aplikasi** (punya `package.json` dan `node_modules` sendiri), sehingga
`npm ci && npm run build` di root dan workflow GitHub Pages tidak terpengaruh. Remotion hanya dipakai
untuk merender satu aset: `public/media/projects-reel.webm` (+ poster `.webp`), yang diputar oleh
`src/components/ReelPlayer.jsx`.

## Komposisi
`ProjectsReel` — 1200×675, 30 fps, 315 frame (10,5 dtk, loop mulus). Tiga adegan (KelanaCoffe, LifeOS, Akademia).
- Teks proyek dibaca dari `../src/content/projects.json` (sumber yang sama dengan situs). Mengubah teks/tag proyek di sana, lalu render ulang.
- Screenshot ada di `motion/public/*.webp` (salinan dari `src/assets/projects/`); ganti bila screenshot di situs berubah.
- Animasi deterministik (`interpolate` + easing yang sama dengan `--ease-out` situs), tanpa `Math.random` / waktu nyata.

## Perintah
```bash
cd motion
npm install

npm run studio        # pratinjau interaktif

# Render aset produksi langsung ke public/ (±280 kB)
npx remotion render src/index.js ProjectsReel ../public/media/projects-reel.webm \
  --codec=vp9 --crf=42 --scale=0.8 --muted

# Poster (frame 70) -> konversi ke webp
npx remotion still src/index.js ProjectsReel out/poster.png --frame=70 --scale=0.8
python3 -c "from PIL import Image; Image.open('out/poster.png').convert('RGB').save('../public/media/projects-reel-poster.webp', quality=80)"
```
Remotion mengunduh Chrome Headless Shell saat render pertama. Jika jaringan membatasi unduhan, tambahkan
`--browser-executable=/path/ke/chrome`.

Setelah render, commit kedua file di `public/media/`.
