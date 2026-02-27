const fs = require('fs');
let content = fs.readFileSync('src/components/widgets/Header.astro', 'utf8');

// The dropdown links usually have class="... hover:text-link dark:hover:text-white ..."
// We want to change the hover color to secondary/accent and add a background hover.

content = content.replace(
  /class="hover:text-link dark:hover:text-white px-4 py-3 flex items-center whitespace-nowrap"/g,
  'class="hover:text-secondary dark:hover:text-accent hover:bg-secondary/5 dark:hover:bg-accent/10 rounded-md px-4 py-3 flex items-center whitespace-nowrap transition-colors"'
);

// also let's check the top level menu items
content = content.replace(
  /class="hover:text-link dark:hover:text-white px-4 py-3 flex items-center"/g,
  'class="hover:text-secondary dark:hover:text-accent px-4 py-3 flex items-center transition-colors"'
);

fs.writeFileSync('src/components/widgets/Header.astro', content);
