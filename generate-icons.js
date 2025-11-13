const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// SVG icon with gradient background and 'C' letter
const svgIcon = `
<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#2563eb;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#9333ea;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="512" height="512" rx="100" fill="url(#grad)"/>
  <text x="256" y="380" font-family="Arial, sans-serif" font-size="350" font-weight="bold" fill="white" text-anchor="middle">C</text>
</svg>
`;

const sizes = [192, 256, 384, 512];
const publicDir = path.join(__dirname, 'public');

async function generateIcons() {
  console.log('🎨 Generating PWA icons...\n');

  for (const size of sizes) {
    const outputPath = path.join(publicDir, `icon-${size}x${size}.png`);
    
    try {
      await sharp(Buffer.from(svgIcon))
        .resize(size, size)
        .png()
        .toFile(outputPath);
      
      console.log(`✅ Generated: icon-${size}x${size}.png`);
    } catch (error) {
      console.error(`❌ Error generating icon-${size}x${size}.png:`, error.message);
    }
  }

  console.log('\n🎉 Icon generation complete!');
  console.log('📱 Your PWA icons are ready in the /public directory.');
}

generateIcons().catch(console.error);
