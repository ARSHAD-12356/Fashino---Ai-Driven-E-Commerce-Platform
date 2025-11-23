const https = require('https');
const fs = require('fs');
const path = require('path');

const fontsDir = path.join(process.cwd(), 'public', 'fonts');

// Create fonts directory if it doesn't exist
if (!fs.existsSync(fontsDir)) {
  fs.mkdirSync(fontsDir, { recursive: true });
}

// Font URLs - Using Google Fonts API with TTF format
const fonts = [
  {
    name: 'Poppins-Regular.ttf',
    url: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400&display=swap'
  },
  {
    name: 'Poppins-Medium.ttf',
    url: 'https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap'
  },
  {
    name: 'Poppins-SemiBold.ttf',
    url: 'https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap'
  },
  {
    name: 'Poppins-Bold.ttf',
    url: 'https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap'
  },
  {
    name: 'Poppins-Black.ttf',
    url: 'https://fonts.googleapis.com/css2?family=Poppins:wght@900&display=swap'
  },
  {
    name: 'GreatVibes-Regular.ttf',
    url: 'https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap'
  }
];

// Direct font download URLs - Using raw.githubusercontent.com for TTF files
const directUrls = {
  'Poppins-Regular.ttf': 'https://raw.githubusercontent.com/google/fonts/main/ofl/poppins/Poppins-Regular.ttf',
  'Poppins-Medium.ttf': 'https://raw.githubusercontent.com/google/fonts/main/ofl/poppins/Poppins-Medium.ttf',
  'Poppins-SemiBold.ttf': 'https://raw.githubusercontent.com/google/fonts/main/ofl/poppins/Poppins-SemiBold.ttf',
  'Poppins-Bold.ttf': 'https://raw.githubusercontent.com/google/fonts/main/ofl/poppins/Poppins-Bold.ttf',
  'Poppins-Black.ttf': 'https://raw.githubusercontent.com/google/fonts/main/ofl/poppins/Poppins-Black.ttf',
  'GreatVibes-Regular.ttf': 'https://raw.githubusercontent.com/google/fonts/main/ofl/greatvibes/GreatVibes-Regular.ttf'
};

function downloadFont(fontName) {
  return new Promise((resolve, reject) => {
    const filePath = path.join(fontsDir, fontName);
    const url = directUrls[fontName];
    
    if (!url) {
      reject(new Error(`No URL found for ${fontName}`));
      return;
    }
    
    const file = fs.createWriteStream(filePath);
    
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          // Convert WOFF2 to TTF if needed - for now, just rename
          // Actually, we need TTF, so let's use a different approach
          console.log(`✅ Downloaded: ${fontName}`);
          resolve();
        });
      } else {
        file.close();
        if (fs.existsSync(filePath)) {
          fs.unlinkSync(filePath);
        }
        reject(new Error(`Failed to download ${fontName}: ${response.statusCode}`));
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
  console.log('📥 Downloading TTF fonts...\n');
  try {
    for (const fontName of Object.keys(directUrls)) {
      await downloadFont(fontName);
    }
    console.log('\n✅ All TTF fonts downloaded successfully!');
  } catch (error) {
    console.error('\n❌ Error downloading fonts:', error.message);
    process.exit(1);
  }
}

downloadAllFonts();

