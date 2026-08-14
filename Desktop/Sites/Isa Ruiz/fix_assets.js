import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const baseDir = __dirname;
const assetsDir = path.join(baseDir, 'assets');
const publicDir = path.join(baseDir, 'public');
const srcAssetsDir = path.join(baseDir, 'src', 'assets');

[assetsDir, publicDir, srcAssetsDir].forEach(d => {
  if (!fs.existsSync(d)) {
    fs.mkdirSync(d, { recursive: true });
  }
});

// Find photo & video in assets/ directory
const filesInAssets = fs.readdirSync(assetsDir);
console.log('Files currently in assets:', filesInAssets);

const photoFile = filesInAssets.find(f => f.includes('ChatGPT') || f.includes('Imagem') || f.endsWith('.png') || f.endsWith('.jpg'));
const videoFile = filesInAssets.find(f => f.endsWith('.mp4'));

console.log('Found photo file:', photoFile);
console.log('Found video file:', videoFile);

if (photoFile) {
  const photoSrc = path.join(assetsDir, photoFile);
  [
    path.join(assetsDir, 'isa-ruiz-hero-portrait.png'),
    path.join(publicDir, 'isa-ruiz-hero-portrait.png'),
    path.join(srcAssetsDir, 'isa-ruiz-hero-portrait.png')
  ].forEach(dest => {
    fs.copyFileSync(photoSrc, dest);
    console.log('Copied photo to:', dest);
  });
}

if (videoFile) {
  const videoSrc = path.join(assetsDir, videoFile);
  [
    path.join(assetsDir, 'hero-bg-video.mp4'),
    path.join(publicDir, 'hero-bg-video.mp4'),
    path.join(srcAssetsDir, 'hero-bg-video.mp4')
  ].forEach(dest => {
    fs.copyFileSync(videoSrc, dest);
    console.log('Copied video to:', dest);
  });
}

console.log('Asset organization complete!');
