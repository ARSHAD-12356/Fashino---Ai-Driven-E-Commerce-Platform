
const fs = require('fs');
const path = require('path');

const productsPath = path.join('e:', 'E-Commerce', 'lib', 'products.ts');

// Expanded image sets for better variety
const imageSets = {
    "T-Shirts": [
        { color: "Navy Blue", url: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2000&auto=format&fit=crop" },
        { color: "Forest Green", url: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=2000&auto=format&fit=crop" },
        { color: "Maroon", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" },
        { color: "Charcoal", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" },
        { color: "Black", url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2000&auto=format&fit=crop" },
        { color: "White", url: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2000&auto=format&fit=crop" },
        { color: "Grey", url: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=2000&auto=format&fit=crop" },
        { color: "Olive", url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2000&auto=format&fit=crop" }
    ],
    "Shirts": [
        { color: "Sky Blue", url: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=2000&auto=format&fit=crop" },
        { color: "Classic White", url: "https://images.unsplash.com/photo-1620799140408-ed5341cd2458?q=80&w=2000&auto=format&fit=crop" },
        { color: "Black", url: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=2000&auto=format&fit=crop" },
        { color: "Grey", url: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=2000&auto=format&fit=crop" },
        { color: "Blue Striped", url: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=2000&auto=format&fit=crop" },
        { color: "Pink", url: "https://images.unsplash.com/photo-1620799140408-ed5341cd2458?q=80&w=2000&auto=format&fit=crop" },
        { color: "Navy", url: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=2000&auto=format&fit=crop" }
    ],
    "Pants": [
        { color: "Khaki", url: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=2000&auto=format&fit=crop" },
        { color: "Black", url: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=2000&auto=format&fit=crop" },
        { color: "Navy", url: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80&w=2000&auto=format&fit=crop" },
        { color: "Grey", url: "https://images.unsplash.com/photo-1584370848010-d7cc637703ef?q=80&w=2000&auto=format&fit=crop" },
        { color: "Beige", url: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=2000&auto=format&fit=crop" },
        { color: "Olive", url: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80&w=2000&auto=format&fit=crop" }
    ],
    "Sneakers": [
        { color: "White", url: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=2000&auto=format&fit=crop" },
        { color: "Black", url: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=2000&auto=format&fit=crop" },
        { color: "Red", url: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2000&auto=format&fit=crop" },
        { color: "Blue", url: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=2000&auto=format&fit=crop" },
        { color: "Grey", url: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=2000&auto=format&fit=crop" },
        { color: "Multi", url: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2000&auto=format&fit=crop" }
    ],
    "Ethnic Wear": [
        { color: "Red", url: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?q=80&w=2000&auto=format&fit=crop" },
        { color: "Gold", url: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=2000&auto=format&fit=crop" },
        { color: "Blue", url: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?q=80&w=2000&auto=format&fit=crop" },
        { color: "Green", url: "https://images.unsplash.com/photo-1605296867304-6f2b416a6b1f?q=80&w=2000&auto=format&fit=crop" },
        { color: "Pink", url: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?q=80&w=2000&auto=format&fit=crop" },
        { color: "Yellow", url: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=2000&auto=format&fit=crop" }
    ]
};

// Default set if no match
const defaultSet = imageSets["T-Shirts"];

function getRandomSubarray(arr, size) {
    const shuffled = arr.slice(0);
    let i = arr.length;
    let temp, index;
    while (i--) {
        index = Math.floor(Math.random() * (i + 1));
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }
    return shuffled.slice(0, size);
}

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
        } else if (category === 'Ethnic') {
            selectedSet = imageSets["Ethnic Wear"];
        } else if (imageSets[category]) {
            selectedSet = imageSets[category];
        }

        // Extract existing image
        const imageMatch = bodyPart.match(/image: ['"]([^'"]+)['"]/);
        const existingImage = imageMatch ? imageMatch[1] : '';

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

        // 2. Other Variants - Randomly pick 3 others from the set
        // Filter out the one we just used
        const availableForRandom = selectedSet.filter(item => item.color !== firstColorName);
        const randomPicks = getRandomSubarray(availableForRandom, 3);

        for (const item of randomPicks) {
            variants.push(`{ color: "${item.color}", url: "${item.url}" }`);
            colors.push(item.color);
        }

        // Fill if needed (if set is too small)
        let count = variants.length;
        while (count < 4) {
            const item = selectedSet[count % selectedSet.length];
            const name = `${item.color} ${count}`;
            variants.push(`{ color: "${name}", url: "${item.url}" }`);
            colors.push(name);
            count++;
        }

        // Replace colors
        const colorsString = `colors: [${colors.map(c => `"${c}"`).join(', ')}]`;
        if (colorsMatch) {
            bodyPart = bodyPart.replace(/colors: \[[\s\S]*?\]/, colorsString);
        }

        // Replace variantImages
        bodyPart = bodyPart.replace(/,\s*variantImages: \[[\s\S]*?\]\s*/, '');

        const variantsString = `,\n    variantImages: [\n      ${variants.join(',\n      ')}\n    ]`;

        const lastBrace = bodyPart.lastIndexOf('}');
        if (lastBrace !== -1) {
            bodyPart = bodyPart.slice(0, lastBrace) + `${variantsString}\n  ` + bodyPart.slice(lastBrace);
        }

        newArrayContent += idPart + bodyPart;
    }

    const finalContent = content.substring(0, startIndex + startMarker.length) + newArrayContent + content.substring(arrayContentEnd);
    fs.writeFileSync(productsPath, finalContent);
    console.log('Successfully updated products.ts with randomized variants');

} catch (err) {
    console.error('Error:', err);
    process.exit(1);
}
