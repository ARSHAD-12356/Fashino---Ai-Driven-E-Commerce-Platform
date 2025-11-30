
const fs = require('fs');
const path = require('path');

const productsPath = path.join('e:', 'E-Commerce', 'lib', 'products.ts');

try {
    let content = fs.readFileSync(productsPath, 'utf8');

    // Regex to find the misplaced colors property
    // Matches:
    // 1. Newline and closing brace of previous object + comma: \n\s*\}\,
    // 2. Whitespace/newlines: \s*
    // 3. The colors property: (colors: \[.*?\])
    // 4. Trailing comma: \,

    // We want to replace:
    //   },
    //     colors: [...],
    // with:
    //   ,
    //     colors: [...]
    //   },

    const regex = /\n\s*\}\,\s*\n\s*(colors: \[.*?\])\,/g;

    const newContent = content.replace(regex, (match, colorsGroup) => {
        return `,\n    ${colorsGroup}\n  },`;
    });

    fs.writeFileSync(productsPath, newContent);
    console.log('Successfully repaired products.ts');

} catch (err) {
    console.error('Error:', err);
    process.exit(1);
}
