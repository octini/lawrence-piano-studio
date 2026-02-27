const fs = require('fs');
let content = fs.readFileSync('src/components/widgets/Pricing.astro', 'utf8');

// Change green ribbon to secondary (Coral)
content = content.replace(/bg-green-700/g, 'bg-secondary');
content = content.replace(/before:border-l-green-800/g, 'before:border-l-secondary');
content = content.replace(/before:border-t-green-800/g, 'before:border-t-secondary');
content = content.replace(/after:border-r-green-800/g, 'after:border-r-secondary');
content = content.replace(/after:border-t-green-800/g, 'after:border-t-secondary');

// Let's check the button colors. Pricing might use hasRibbon ? 'btn-primary' : ''
if (content.includes("btn-primary")) {
    // The btn-primary uses the primary color, which is already Cobalt.
    // The user noted the middle box has a colorful "Learn More" button that changes color when hovered.
    // That's likely the standard `btn-primary`. The others might just be `btn`.
}

fs.writeFileSync('src/components/widgets/Pricing.astro', content);
