const https = require('https');
const fs = require('fs');
const path = require('path');

const fontsDir = path.join(process.cwd(), 'public', 'fonts');

// Create fonts directory if it doesn't exist
if (!fs.existsSync(fontsDir)) {
  fs.mkdirSync(fontsDir, { recursive: true });
}

// Font URLs from Google Fonts CDN
const fonts = [
  {
    name: 'Poppins-Regular.woff2',
    url: 'https://fonts.gstatic.com/s/poppins/v21/pxiEyp8kv8JHgFVrJJfecg.woff2'
  },
  {
    name: 'Poppins-Bold.woff2',
    url: 'https://fonts.gstatic.com/s/poppins/v21/pxiByp8kv8JHgFVrLCz7Z1xlFQ.woff2'
  },
  {
    name: 'GreatVibes-Regular.woff2',
    url: 'https://fonts.gstatic.com/s/greatvibes/v18/RWmMoKWR9v4ksMfaWd_JN9XLiaQ6DQ.woff2'
  }
];

function downloadFont(font) {
  return new Promise((resolve, reject) => {
    const filePath = path.join(fontsDir, font.name);
    const file = fs.createWriteStream(filePath);
    
    https.get(font.url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`✅ Downloaded: ${font.name}`);
          resolve();
        });
      } else {
        file.close();
        fs.unlinkSync(filePath);
        reject(new Error(`Failed to download ${font.name}: ${response.statusCode}`));
      }
    }).on('error', (err) => {
      file.close();
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
      reject(err);
    });
  });
}

async function downloadAllFonts() {
  console.log('📥 Downloading fonts...\n');
  try {
    for (const font of fonts) {
      await downloadFont(font);
    }
    console.log('\n✅ All fonts downloaded successfully!');
  } catch (error) {
    console.error('\n❌ Error downloading fonts:', error.message);
    process.exit(1);
  }
}

downloadAllFonts();

