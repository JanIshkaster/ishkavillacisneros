import sharp from 'sharp'
import fs from 'fs'
import path from 'path'

const inputDir = './src/assets/images/logos'
const outputDir = './src/assets/images/logos' // overwrite in place, or change to a new folder

const files = fs.readdirSync(inputDir).filter(f => f.endsWith('.png') || f.endsWith('.jpg'))

for (const file of files) {
  const inputPath = path.join(inputDir, file)
  const outputPath = path.join(outputDir, file.replace(/\.(png|jpg)$/i, '.webp'))

  await sharp(inputPath)
    .resize({ width: 800, withoutEnlargement: true }) // cap width, don't upscale smaller images
    .webp({ quality: 75 })
    .toFile(outputPath)

  console.log(`✓ ${file} → ${path.basename(outputPath)}`)
}

console.log('Done. Remember to delete the old .png/.jpg files and update content.js extensions.')