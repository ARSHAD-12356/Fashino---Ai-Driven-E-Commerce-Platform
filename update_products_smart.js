
const fs = require('fs');
const path = require('path');

const productsPath = path.join('e:', 'E-Commerce', 'lib', 'products.ts');

// Define image sets for different subcategories
const imageSets = {
    "T-Shirts": [
        { color: "Navy Blue", url: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2000&auto=format&fit=crop" },
        { color: "Forest Green", url: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=2000&auto=format&fit=crop" },
        { color: "Maroon", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" },
        { color: "Charcoal", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" }
    ],
    "Shirts": [
        { color: "Sky Blue", url: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=2000&auto=format&fit=crop" },
        { color: "Classic White", url: "https://images.unsplash.com/photo-1620799140408-ed5341cd2458?q=80&w=2000&auto=format&fit=crop" },
        { color: "Black", url: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=2000&auto=format&fit=crop" },
        { color: "Grey", url: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=2000&auto=format&fit=crop" }
    ],
    "Pants": [
        { color: "Khaki", url: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=2000&auto=format&fit=crop" },
        { color: "Black", url: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=2000&auto=format&fit=crop" }, // Placeholder
        { color: "Navy", url: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80&w=2000&auto=format&fit=crop" },
        { color: "Grey", url: "https://images.unsplash.com/photo-1584370848010-d7cc637703ef?q=80&w=2000&auto=format&fit=crop" }
    ],
    "Dresses": [
        { color: "Red", url: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=2000&auto=format&fit=crop" },
        { color: "Black", url: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&w=2000&auto=format&fit=crop" },
        { color: "Blue", url: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=2000&auto=format&fit=crop" },
        { color: "Floral", url: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=2000&auto=format&fit=crop" }
    ],
    "Sneakers": [
        { color: "White", url: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=2000&auto=format&fit=crop" },
        { color: "Black", url: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=2000&auto=format&fit=crop" },
        { color: "Red", url: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2000&auto=format&fit=crop" },
        { color: "Blue", url: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=2000&auto=format&fit=crop" }
    ],
    "Watches": [
        { color: "Silver", url: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=2000&auto=format&fit=crop" },
        { color: "Black", url: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?q=80&w=2000&auto=format&fit=crop" },
        { color: "Gold", url: "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?q=80&w=2000&auto=format&fit=crop" },
        { color: "Leather", url: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=2000&auto=format&fit=crop" }
    ],
    "Bags": [
        { color: "Brown", url: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=2000&auto=format&fit=crop" },
        { color: "Black", url: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=2000&auto=format&fit=crop" },
        { color: "Tan", url: "https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&w=2000&auto=format&fit=crop" },
        { color: "Red", url: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?q=80&w=2000&auto=format&fit=crop" }
    ],
    "Ethnic Wear": [
        { color: "Red", url: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?q=80&w=2000&auto=format&fit=crop" },
        { color: "Gold", url: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=2000&auto=format&fit=crop" },
        { color: "Blue", url: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?q=80&w=2000&auto=format&fit=crop" },
        { color: "Green", url: "https://images.unsplash.com/photo-1605296867304-6f2b416a6b1f?q=80&w=2000&auto=format&fit=crop" }
    ]
};

// Default set if no match
const defaultSet = imageSets["T-Shirts"];

try {
    let content = fs.readFileSync(productsPath, 'utf8');

    const startMarker = 'const allProducts = [';
    const startIndex = content.indexOf(startMarker);
    const exportIndex = content.indexOf('export const products');
    const arrayContentEnd = content.lastIndexOf(']', exportIndex);

    const arrayContent = content.substring(startIndex + startMarker.length, arrayContentEnd);

    const parts = arrayContent.split(/(\s+id: \d+,)/);
    let newArrayContent = parts[0];

    for (let i = 1; i < parts.length; i += 2) {
        const idPart = parts[i];
        let bodyPart = parts[i + 1];

        // Extract subcategory
        const subMatch = bodyPart.match(/subcategory: ['"]([^'"]+)['"]/);
        const subcategory = subMatch ? subMatch[1] : '';

        // Extract category
        const catMatch = bodyPart.match(/category: ['"]([^'"]+)['"]/);
        const category = catMatch ? catMatch[1] : '';

        // Determine image set
        let selectedSet = defaultSet;
        if (imageSets[subcategory]) {
            selectedSet = imageSets[subcategory];
        } else if (subcategory.includes('Shoe') || subcategory.includes('Boot') || subcategory.includes('Heel')) {
            selectedSet = imageSets["Sneakers"];
        } else if (subcategory.includes('Watch')) {
            selectedSet = imageSets["Watches"];
        } else if (category === 'Ethnic') {
            selectedSet = imageSets["Ethnic Wear"];
        }

        // Extract existing image
        const imageMatch = bodyPart.match(/image: ['"]([^'"]+)['"]/);
        const existingImage = imageMatch ? imageMatch[1] : '';

        // Generate variants
        // We want 4 variants. 
        // 1st: Existing image + existing color (or first from set if not found)
        // 2nd-4th: From selectedSet

        // Extract existing colors to try to preserve the first one's name
        const colorsMatch = bodyPart.match(/colors: \[([\s\S]*?)\]/);
        let firstColorName = selectedSet[0].color;
        if (colorsMatch) {
            const existingColors = colorsMatch[1].split(',').map(s => s.trim().replace(/['"]/g, ''));
            if (existingColors.length > 0) firstColorName = existingColors[0];
        }

        const variants = [];
        const colors = [];

        // 1. Primary Variant
        variants.push(`{ color: "${firstColorName}", url: "${existingImage}" }`);
        colors.push(firstColorName);

        // 2. Other Variants
        let count = 1;
        for (const item of selectedSet) {
            if (count >= 4) break;
            if (item.color !== firstColorName) {
                variants.push(`{ color: "${item.color}", url: "${item.url}" }`);
                colors.push(item.color);
                count++;
            }
        }

        // Fill if needed
        while (count < 4) {
            const item = selectedSet[count % selectedSet.length];
            const name = `${item.color} ${count}`; // unique name
            variants.push(`{ color: "${name}", url: "${item.url}" }`);
            colors.push(name);
            count++;
        }

        // Replace colors
        const colorsString = `colors: [${colors.map(c => `"${c}"`).join(', ')}]`;
        if (colorsMatch) {
            bodyPart = bodyPart.replace(/colors: \[[\s\S]*?\]/, colorsString);
        } else {
            // Insert colors if missing (shouldn't happen usually but good safety)
            // We'll insert it at the end of the object
        }

        // Replace variantImages
        // We remove existing variantImages block if any
        bodyPart = bodyPart.replace(/,\s*variantImages: \[[\s\S]*?\]\s*/, '');

        // Add new variantImages
        const variantsString = `,\n    variantImages: [\n      ${variants.join(',\n      ')}\n    ]`;

        // Insert before closing brace
        const lastBrace = bodyPart.lastIndexOf('}');
        if (lastBrace !== -1) {
            bodyPart = bodyPart.slice(0, lastBrace) + `${variantsString}\n  ` + bodyPart.slice(lastBrace);
        }

        newArrayContent += idPart + bodyPart;
    }

    const finalContent = content.substring(0, startIndex + startMarker.length) + newArrayContent + content.substring(arrayContentEnd);
    fs.writeFileSync(productsPath, finalContent);
    console.log('Successfully updated products.ts with smart variants');

} catch (err) {
    console.error('Error:', err);
    process.exit(1);
}
