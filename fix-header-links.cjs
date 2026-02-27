const fs = require('fs');
let content = fs.readFileSync('src/components/widgets/Header.astro', 'utf8');

// Top level links that aren't dropdowns
content = content.replace(
  /'hover:text-link dark:hover:text-white px-4 py-3 flex items-center whitespace-nowrap'/g,
  "'hover:text-secondary dark:hover:text-accent px-4 py-3 flex items-center whitespace-nowrap transition-colors'"
);

// Dropdown sub-items
content = content.replace(
  /'first:rounded-t last:rounded-b md:hover:bg-gray-100 hover:text-link dark:hover:text-white dark:hover:bg-gray-700 py-2 px-5 block whitespace-no-wrap'/g,
  "'first:rounded-t last:rounded-b md:hover:bg-secondary/10 hover:text-secondary dark:hover:text-accent dark:hover:bg-accent/10 py-2 px-5 block whitespace-no-wrap transition-colors'"
);

fs.writeFileSync('src/components/widgets/Header.astro', content);
