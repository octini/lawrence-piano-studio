const fs = require('fs');
let content = fs.readFileSync('src/components/widgets/Header.astro', 'utf8');

// For top level links with no dropdowns
content = content.replace(
  /'hover:text-link dark:hover:text-white px-4 py-3 flex items-center'/g,
  "'hover:text-secondary dark:hover:text-primary px-4 py-3 flex items-center transition-colors duration-200'"
);

content = content.replace(
  /'hover:text-secondary dark:hover:text-accent px-4 py-3 flex items-center transition-colors'/g,
  "'hover:text-secondary dark:hover:text-primary px-4 py-3 flex items-center transition-colors duration-200'"
);

// For dropdown toggles
content = content.replace(
  /hover:text-secondary dark:hover:text-accent hover:bg-secondary\/5 dark:hover:bg-accent\/10/g,
  "hover:text-secondary dark:hover:text-primary hover:bg-secondary/5 dark:hover:bg-primary/10"
);

// For dropdown items (e.g. Eric, Laura)
content = content.replace(
  /'first:rounded-t last:rounded-b md:hover:bg-gray-100 hover:text-link dark:hover:text-white dark:hover:bg-gray-700 py-2 px-5 block whitespace-no-wrap'/g,
  "'first:rounded-t last:rounded-b md:hover:bg-secondary/10 hover:text-secondary dark:hover:text-primary dark:hover:bg-primary/10 py-2 px-5 block whitespace-no-wrap transition-colors duration-200'"
);
content = content.replace(
  /'first:rounded-t last:rounded-b md:hover:bg-secondary\/10 hover:text-secondary dark:hover:text-accent dark:hover:bg-accent\/10 py-2 px-5 block whitespace-no-wrap transition-colors'/g,
  "'first:rounded-t last:rounded-b md:hover:bg-secondary/10 hover:text-secondary dark:hover:text-primary dark:hover:bg-primary/10 py-2 px-5 block whitespace-no-wrap transition-colors duration-200'"
);

fs.writeFileSync('src/components/widgets/Header.astro', content);
