# Design Document: Lawrence Piano Studio Redesign

## 1. Aesthetic & Technical Foundation
- **Typography ("Modern Classic"):** Serif font for headings (e.g., Merriweather or Playfair Display) paired with a clean Sans Serif font for body text (e.g., Inter or Open Sans).
- **Color Palette (Light Mode):** Background: White, Text: Navy, Primary Accents: Cobalt, Secondary Accents: Coral, Borders/Subtle: Gold.
- **Color Palette (Dark Mode):** Background: Deep Navy, Text: White/Off-white, Primary Accents: Gold, Secondary Accents: Coral/Cobalt.
- **Framework:** Astro framework using the Astrowind theme (`arthelokyo/astrowind`).
- **Image Pipeline:** Astro native `<Image>` and `<Picture>` components for automatic format conversion (to WebP), cropping, and responsive sizing.
- **Contact Form Backend:** Web3Forms.

## 2. Page Architecture and Layouts

### Homepage (Two Variations)
The homepage will be built with two variations to allow the client to choose the best fit:
1. **Version A (SaaS Style):** Left-aligned title ("Welcome to the Lawrence Piano Studio") and subtitle ("For over 36 years..."), paired with a right-aligned tall image (`enrolling_sign_alternate`).
2. **Version B (Traditional Style):** Full-width title and subtitle, followed by a wide-aspect-ratio placeholder image sourced from the internet.

**Shared Homepage Blocks (in order below Hero):**
- **"Our Amazing Teachers":** Grid/feature layout highlighting the team, paired with `gina_group_lesson.png` (left-aligned) and a "Meet the Teachers" CTA button.
- **"Information, Please":** Summary block with `sheet_music_alternate.JPG` (right-aligned) and a button to the `/info/` section.
- **"Why Music?":** Header text "Why Music?" followed by body text: "When you listen to music, multiple areas of your brain become engaged and active. But when you actually play an instrument, that activity becomes more like a full-body brain workout. What's going on?" Paired with an embedded YouTube video (https://youtu.be/R0JKCYZ8hng?si=XYgnny9p6elx7Tec) next to the text.

### Lessons (`/lessons/`)
- Header/Intro banner image (`eric_group_lesson.jpg` or `private_lesson.jpg`).
- 3 Tabbed/Collapsible sections for lesson types to minimize text overwhelm.
- Tiered pricing table below the tabs.

### Teachers (`/teachers/`)
- Top row: Eric (Founder & Co-Owner) and Laura (Co-Owner).
- Second row: Jen, Gina, and John.
- All headshots forced to a consistent 1:1 square aspect ratio via Astro.
- Dedicated pages for each teacher (`/teachers/[name]/`), featuring full bio ("More information coming soon!" for Gina/John) and noting availability for group and private lessons.

### Info (`/info/`, `/info/faq/`, `/info/policies/`)
- Main Info hub routing to FAQ and Policies.
- Accordion components for major sections/questions on text-heavy pages.
- Interspersed lifestyle images (`piano_keys.jpg`, `student_in_lesson.jpg`).
- "Return to Top" floating button on bottom right.

### Posts (`/posts/`)
- Scraped and imported blog posts from the original WordPress site converted to Markdown/MDX.

### Contact (`/contact/`)
- Split-screen design: `now_enrolling_sign.png` and contact details on the left, Web3Forms integration on the right.

### Global Elements
- **Header:** Sticky navigation, automatic light/dark mode toggle, Site search functionality.
- **Footer:** Social Media icon links, Studio Address with Google Maps hyperlink, "Leave us a review on Google" link.
