
const fs = require('fs');
const path = require('path');

const productsPath = path.join('e:', 'E-Commerce', 'lib', 'products.ts');

try {
  let content = fs.readFileSync(productsPath, 'utf8');

  const startMarker = 'const allProducts = [';
  const startIndex = content.indexOf(startMarker);
  if (startIndex === -1) {
    console.error('Could not find allProducts array start');
    process.exit(1);
  }

  const exportIndex = content.indexOf('export const products');
  const arrayContentEnd = content.lastIndexOf(']', exportIndex);

  if (arrayContentEnd === -1) {
    console.error('Could not find allProducts array end');
    process.exit(1);
  }

  const arrayContent = content.substring(startIndex + startMarker.length, arrayContentEnd);

  // Split by "id:" but keep the delimiter
  const parts = arrayContent.split(/(\s+id: \d+,)/);
  let newArrayContent = parts[0];

  const extraColors = [
    { name: 'Navy Blue', url: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2000&auto=format&fit=crop' },
    { name: 'Forest Green', url: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=2000&auto=format&fit=crop' },
    { name: 'Maroon', url: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop' },
    { name: 'Charcoal', url: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop' }
  ];

  const generateVariants = (existingColors, existingImage) => {
    let variants = [];
    let colors = [...(existingColors || [])];

    // Ensure at least 4 colors
    let i = 0;
    while (colors.length < 4) {
      const extra = extraColors[i % extraColors.length];
      if (!colors.includes(extra.name)) {
        colors.push(extra.name);
      }
      i++;
    }

    // Map colors to images
    variants = colors.map((color, index) => {
      // First color gets the existing/main image
      if (index === 0) return `{ color: "${color}", url: "${existingImage}" }`;

      // Try to find a matching extra color URL
      const extra = extraColors.find(c => c.name === color);
      if (extra) return `{ color: "${color}", url: "${extra.url}" }`;

      // Fallback to rotating images
      return `{ color: "${color}", url: "${extraColors[index % extraColors.length].url}" }`;
    });

    return { colors, variants };
  };

  for (let i = 1; i < parts.length; i += 2) {
    const idPart = parts[i];
    let bodyPart = parts[i + 1];

    // Skip if already has variantImages
    if (bodyPart.includes('variantImages:')) {
      newArrayContent += idPart + bodyPart;
      continue;
    }

    // Extract existing image
    const imageMatch = bodyPart.match(/image: ['"]([^'"]+)['"]/);
    const existingImage = imageMatch ? imageMatch[1] : '';

    // Extract existing colors
    const colorsMatch = bodyPart.match(/colors: \[([\s\S]*?)\]/);
    let existingColors = [];
    if (colorsMatch) {
      existingColors = colorsMatch[1].split(',').map(s => s.trim().replace(/['"]/g, ''));
    }

    // Generate new data
    const { colors, variants } = generateVariants(existingColors, existingImage);

    // Update colors
    const colorsString = `colors: [${colors.map(c => `"${c}"`).join(', ')}]`;
    if (colorsMatch) {
      bodyPart = bodyPart.replace(/colors: \[[\s\S]*?\]/, colorsString);
    } else {
      // Insert colors if missing
      const lastPropMatch = bodyPart.lastIndexOf(',');
      if (lastPropMatch !== -1) {
        bodyPart = bodyPart.slice(0, lastPropMatch + 1) + `\n    ${colorsString},` + bodyPart.slice(lastPropMatch + 1);
      }
    }

    // Add variantImages
    // Find the last closing brace of the object
    const lastBrace = bodyPart.lastIndexOf('}');
    const variantsString = `\n    variantImages: [\n      ${variants.join(',\n      ')}\n    ]`;

    if (lastBrace !== -1) {
      // Check if the property before ends with comma
      const contentBefore = bodyPart.substring(0, lastBrace).trim();
      // Simple check: look backwards from lastBrace for non-whitespace
      let j = lastBrace - 1;
      while (j >= 0 && /\s/.test(bodyPart[j])) j--;

      if (bodyPart[j] === ',') {
        bodyPart = bodyPart.slice(0, lastBrace) + `${variantsString}\n  ` + bodyPart.slice(lastBrace);
      } else {
        bodyPart = bodyPart.slice(0, lastBrace) + `,${variantsString}\n  ` + bodyPart.slice(lastBrace);
      }
    }

    newArrayContent += idPart + bodyPart;
  }

  const finalContent = content.substring(0, startIndex + startMarker.length) + newArrayContent + content.substring(arrayContentEnd);
  fs.writeFileSync(productsPath, finalContent);
  console.log('Successfully updated products.ts');

} catch (err) {
  console.error('Error:', err);
  process.exit(1);
}
