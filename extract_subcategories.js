
const fs = require('fs');
const path = require('path');

const productsPath = path.join('e:', 'E-Commerce', 'lib', 'products.ts');

try {
    const content = fs.readFileSync(productsPath, 'utf8');
    const subcategories = new Set();

    const regex = /subcategory: ['"]([^'"]+)['"]/g;
    let match;
    while ((match = regex.exec(content)) !== null) {
        subcategories.add(match[1]);
    }

    console.log(JSON.stringify([...subcategories], null, 2));
} catch (err) {
    console.error(err);
}
