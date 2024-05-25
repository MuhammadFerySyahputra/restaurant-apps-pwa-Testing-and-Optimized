const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');
const imageminWebp = require('imagemin-webp');

(async () => {
  const files = await imagemin(['src/public/images/hero/*.{jpg,png}'], {
    destination: 'dist/images/hero',
    plugins: [
      imageminMozjpeg({ quality: 75 }),
      imageminPngquant({ quality: [0.6, 0.8] }),
      imageminWebp({ quality: 75 }),
    ],
  });

  console.log(files);
})();
