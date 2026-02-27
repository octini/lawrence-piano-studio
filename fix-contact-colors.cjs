const fs = require('fs');
let content = fs.readFileSync('src/pages/contact.astro', 'utf8');

// Contact Info Box (Left side): Change from solid navy in both modes to something lighter in light mode
content = content.replace(
  'class="bg-[#1a2e5a] text-white rounded-2xl p-8 shadow-lg space-y-6"',
  'class="bg-blue-50 dark:bg-[#1a2e5a] text-slate-800 dark:text-white rounded-2xl p-8 shadow-lg space-y-6"'
);

// We also need to change text-white/90 to text-slate-700/90 dark:text-white/90 inside the box
content = content.replace(/text-white\/90/g, 'text-slate-800 dark:text-white/90');
content = content.replace(/text-white\/70/g, 'text-slate-600 dark:text-white/70');

// Form Focus Rings & Asterisks:
content = content.replace(/border-\[#1a2e5a\]\/30/g, 'border-primary/20 dark:border-white/10');
content = content.replace(/focus:border-\[#4a90d9\]/g, 'focus:border-primary');
content = content.replace(/focus:ring-\[#4a90d9\]\/20/g, 'focus:ring-primary/20');
content = content.replace(/text-\[#4a90d9\]/g, 'text-primary dark:text-accent');
content = content.replace(/hover:text-white/g, 'hover:text-primary-dark dark:hover:text-white');

// Submit button: Use semantic colors instead of hardcoded hex
content = content.replace(
  'bg-[#4a90d9] hover:bg-[#2563eb] border-2 border-[#4a90d9] hover:border-[#2563eb] focus:outline-none focus:ring-4 focus:ring-[#4a90d9]/30',
  'btn-primary'
);
content = content.replace(/class="w-full py-3\.5 px-8 rounded-lg font-semibold text-white text-base btn-primary transition-all duration-200 cursor-pointer shadow-md hover:shadow-lg"/g, 'class="btn-primary w-full shadow-md"');

fs.writeFileSync('src/pages/contact.astro', content);
