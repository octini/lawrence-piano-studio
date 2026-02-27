const fs = require('fs');
let content = fs.readFileSync('src/components/widgets/Header.astro', 'utf8');

// Add import
if (!content.includes("import Search from 'astro-pagefind/components/Search';")) {
  content = content.replace(
    "import ToggleTheme from '~/components/common/ToggleTheme.astro';",
    "import ToggleTheme from '~/components/common/ToggleTheme.astro';\nimport Search from 'astro-pagefind/components/Search';"
  );
}

// Add search component next to toggle theme
if (!content.includes("<Search")) {
  content = content.replace(
    "{showToggleTheme && <ToggleTheme iconClass=\"w-6 h-6 md:w-5 md:h-5 md:inline-block\" />}",
    "<Search id=\"search\" className=\"pagefind-ui mr-2\" />\n          {showToggleTheme && <ToggleTheme iconClass=\"w-6 h-6 md:w-5 md:h-5 md:inline-block\" />}"
  );
}

fs.writeFileSync('src/components/widgets/Header.astro', content);
