import fs from 'fs';

// --- Update navigation.ts ---
let nav = fs.readFileSync('src/navigation.ts', 'utf8');

// Remove emojis
nav = nav.replace(/📞 /g, '');
nav = nav.replace(/✉ /g, '');

// Update email
nav = nav.replace(/info@lawrencepianostudio\.com/g, 'contact@lawrencepiano.com');

// Update Maps URL
nav = nav.replace(
  /https:\/\/maps\.google\.com\/\?q=2512\+W\+6th\+St\+Suite\+B,\+Lawrence,\+KS\+66049/g,
  'https://www.google.com/maps/dir//Lawrence%20Piano%20Studio,%202512%20W%206th%20St.%20Suite%20B,%20Lawrence,%20KS%2066049'
);

// Update Review URL
nav = nav.replace(
  /https:\/\/search\.google\.com\/local\/writereview\?placeid=ChIJ8_z_LgDFuocRkHwB8Xl-b9Q/g,
  'https://search.google.com/local/writereview?placeid=ChIJLavmsyFvv4cRHonyQWOnTdc'
);

fs.writeFileSync('src/navigation.ts', nav);


// --- Update contact.astro ---
let contact = fs.readFileSync('src/pages/contact.astro', 'utf8');

// Update email
contact = contact.replace(/info@lawrencepianostudio\.com/g, 'contact@lawrencepiano.com');

// Make address clickable
const oldAddress = `              <p class="text-white/70 leading-relaxed">
                2512 W 6th St. Suite B<br />
                Lawrence, KS 66049
              </p>`;
const newAddress = `              <a href="https://www.google.com/maps/dir//Lawrence%20Piano%20Studio,%202512%20W%206th%20St.%20Suite%20B,%20Lawrence,%20KS%2066049" target="_blank" rel="noopener noreferrer" class="text-white/70 leading-relaxed hover:text-white transition-colors block">
                2512 W 6th St. Suite B<br />
                Lawrence, KS 66049
              </a>`;
contact = contact.replace(oldAddress, newAddress);

fs.writeFileSync('src/pages/contact.astro', contact);
