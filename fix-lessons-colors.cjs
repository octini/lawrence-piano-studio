const fs = require('fs');
let content = fs.readFileSync('src/pages/lessons.astro', 'utf8');

// Replace Young Beginner (Blue -> Primary)
content = content.replace(/bg-blue-100/g, 'bg-primary/10');
content = content.replace(/dark:bg-blue-900\/40/g, 'dark:bg-primary/20');
content = content.replace(/text-blue-600/g, 'text-primary');
content = content.replace(/dark:text-blue-400/g, 'dark:text-blue-400'); // keep tailwind blue for dark if needed, or change to dark:text-primary
content = content.replace(/text-blue-500/g, 'text-primary');
content = content.replace(/bg-blue-50/g, 'bg-primary/10');
content = content.replace(/dark:bg-blue-900\/30/g, 'dark:bg-primary/10');

// Replace Elementary Group (Purple -> Secondary)
content = content.replace(/bg-purple-100/g, 'bg-secondary/10');
content = content.replace(/dark:bg-purple-900\/40/g, 'dark:bg-secondary/20');
content = content.replace(/text-purple-600/g, 'text-secondary');
content = content.replace(/dark:text-purple-400/g, 'dark:text-secondary');
content = content.replace(/text-purple-500/g, 'text-secondary');
content = content.replace(/bg-purple-50/g, 'bg-secondary/10');
content = content.replace(/dark:bg-purple-900\/30/g, 'dark:bg-secondary/10');

// Replace Private Lessons (Green -> Accent)
content = content.replace(/bg-green-100/g, 'bg-accent/10');
content = content.replace(/dark:bg-green-900\/40/g, 'dark:bg-accent/20');
content = content.replace(/text-green-600/g, 'text-accent');
content = content.replace(/dark:text-green-400/g, 'dark:text-accent');
content = content.replace(/text-green-500/g, 'text-accent');
content = content.replace(/bg-green-50/g, 'bg-accent/10');
content = content.replace(/dark:bg-green-900\/30/g, 'dark:bg-accent/10');

// Fix the "popular" ribbon color. Wait, where is `popular` coming from? It's likely passed to `<Pricing>` component. Let's see.
fs.writeFileSync('src/pages/lessons.astro', content);
