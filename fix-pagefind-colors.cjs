const fs = require('fs');
let content = fs.readFileSync('src/components/CustomStyles.astro', 'utf8');

const styleBlock = `
  /* Global aesthetic color pops */
  .prose a {
    text-decoration-color: var(--aw-color-secondary) !important;
    text-decoration-thickness: 2px !important;
    text-underline-offset: 4px;
    transition: text-decoration-color 0.2s ease;
  }
  .prose a:hover {
    text-decoration-color: var(--aw-color-accent) !important;
  }
  
  /* Pagefind Search Colors */
  :root {
    --pagefind-ui-primary: var(--aw-color-secondary);
    --pagefind-ui-text: var(--aw-color-text-default);
    --pagefind-ui-background: var(--aw-color-bg-page);
    --pagefind-ui-border: var(--aw-color-primary);
  }
  .dark {
    --pagefind-ui-primary: var(--aw-color-primary);
    --pagefind-ui-text: var(--aw-color-text-default);
    --pagefind-ui-background: var(--aw-color-bg-page);
    --pagefind-ui-border: var(--aw-color-primary);
  }
</style>
`;

if (content.includes('.prose a {')) {
  // It's already there, replace it
  content = content.replace(/ \/\* Global aesthetic color pops \*\/[\s\S]*?<\/style>/, styleBlock);
} else {
  content = content.replace('</style>', styleBlock);
}

fs.writeFileSync('src/components/CustomStyles.astro', content);
