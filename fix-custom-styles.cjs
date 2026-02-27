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
</style>
`;

if (!content.includes('.prose a {')) {
  content = content.replace('</style>', styleBlock);
}

fs.writeFileSync('src/components/CustomStyles.astro', content);
