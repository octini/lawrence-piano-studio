import fs from 'fs';
let content = fs.readFileSync('src/components/widgets/Header.astro', 'utf8');
content = content.replace(
  /<a href=\{href\} class="hover:text-link dark:hover:text-white px-4 py-3 flex items-center whitespace-nowrap"[\s\S]*?class="hover:text-link dark:hover:text-white px-4 py-3 flex items-center whitespace-nowrap"[\s\S]*?>/g,
  '<a href={href} class="hover:text-link dark:hover:text-white px-4 py-3 flex items-center whitespace-nowrap">'
);
fs.writeFileSync('src/components/widgets/Header.astro', content);
