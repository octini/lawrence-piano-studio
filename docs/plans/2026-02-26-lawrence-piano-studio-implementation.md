# Lawrence Piano Studio Redesign Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Rebuild the Lawrence Piano Studio website using Astro and the Astrowind theme, featuring a Modern Classic aesthetic, optimized images, and all content ported from the existing WordPress site.

**Architecture:** Static site generation via Astro, styled with Tailwind CSS (Astrowind templates). Content is stored in Markdown/MDX or Astro page files. Images are optimized on the fly using Astro's native `Image` and `Picture` components. Forms are handled via Web3Forms.

**Tech Stack:** Astro, Tailwind CSS, Astrowind theme, Web3Forms.

---

### Task 1: Initialize Astro and Astrowind

**Files:**
- Create: `.` (Current directory)

**Step 1: Clone Astrowind and install dependencies**
Run: `npx create-astro@latest --template arthelokyo/astrowind .` (Choose 'y' to install dependencies, 'y' to TypeScript, 'strict' recommended). If the directory isn't empty, we may need to clone into a temp folder and move files over.
*Alternatively, since we are in an existing directory, we can use:*
`git clone https://github.com/onwidget/astrowind.git temp_astrowind && cp -a temp_astrowind/. . && rm -rf temp_astrowind && npm install`

**Step 2: Configure Astro for the project**
Update `astro.config.mjs` with site URL (`https://lawrencepiano.com`).

**Step 3: Test the dev server**
Run: `npm run build` to ensure the base template compiles successfully.

**Step 4: Commit**
Run: `git add . && git commit -m "chore: initialize astrowind template"`

---

### Task 2: Configure Theme and Aesthetics

**Files:**
- Modify: `src/assets/styles/tailwind.css` (or `tailwind.config.cjs`)
- Modify: `src/components/CustomStyles.astro`

**Step 1: Update Color Palette**
Configure CSS variables in `CustomStyles.astro` for Light and Dark modes:
- Light: White (bg), Navy (text), Cobalt (primary), Coral (secondary), Gold (accents).
- Dark: Deep Navy (bg), White (text), Gold (primary), Coral/Cobalt (accents).

**Step 2: Update Typography**
Configure `tailwind.config.cjs` to use a Serif font (e.g., 'Merriweather', 'Playfair Display') for headers and a Sans Serif ('Inter', 'Open Sans') for sans/body.

**Step 3: Commit**
Run: `git add src/ && git commit -m "style: apply modern classic color palette and typography"`

---

### Task 3: Setup Global Components (Header & Footer)

**Files:**
- Modify: `src/navigation.js`
- Modify: `src/components/widgets/Footer.astro` (if overriding)

**Step 1: Configure Navigation Data**
Update `src/navigation.js` to define the header links: Home, Lessons, Teachers, Info (FAQ, Policies), Posts, Contact.

**Step 2: Configure Footer**
Update `src/navigation.js` (footer data) to include:
- Address (linked to Google Maps)
- Contact Info
- Social Links
- "Leave us a review on Google" prominent link

**Step 3: Commit**
Run: `git add src/navigation.js && git commit -m "feat: configure global navigation and footer"`

---

### Task 4: Scaffold Page Routes and Migrate Media

**Files:**
- Create: `src/assets/images/studio_photos/`
- Delete: Unnecessary Astrowind template pages (`src/pages/homes/`, `src/pages/about.astro`, etc.)

**Step 1: Move images into Astro**
Run: `mkdir -p src/assets/images/studio_photos && cp studio_photos/* src/assets/images/studio_photos/`

**Step 2: Clean up template routes**
Remove demo pages from the `src/pages/` directory to start fresh.

**Step 3: Scaffold target pages**
Create empty `.astro` files for:
- `src/pages/index.astro`
- `src/pages/index-alt.astro` (Version B)
- `src/pages/lessons.astro`
- `src/pages/teachers/index.astro`
- `src/pages/teachers/[teacher].astro` (Dynamic route) or individual pages.
- `src/pages/info/index.astro`
- `src/pages/info/faq.astro`
- `src/pages/info/policies.astro`
- `src/pages/contact.astro`

**Step 4: Commit**
Run: `git add src/ && git commit -m "chore: scaffold page routes and import studio photos"`

---

### Task 5: Build the Homepage (Version A - SaaS Style)

**Files:**
- Modify: `src/pages/index.astro`

**Step 1: Add Hero Widget**
Implement left-aligned text ("Welcome to the Lawrence Piano Studio") and right-aligned image (`enrolling_sign_alternate.png`).

**Step 2: Add Teachers Feature Block**
Implement the "Our Amazing Teachers" section with `gina_group_lesson.png` (left-aligned) and CTA.

**Step 3: Add Info Summary Block**
Implement the "Information, Please" section with `sheet_music_alternate.JPG` (right-aligned) and CTA.

**Step 4: Add "Why Music?" Block with YouTube Embed**
Implement the final section using `https://youtu.be/R0JKCYZ8hng?si=XYgnny9p6elx7Tec`.

**Step 5: Commit**
Run: `git add src/pages/index.astro && git commit -m "feat: build homepage version A"`

---

### Task 6: Build the Homepage (Version B - Traditional)

**Files:**
- Modify: `src/pages/index-alt.astro`

**Step 1: Duplicate Index**
Copy the structure from `index.astro`.

**Step 2: Modify Hero Widget**
Change the hero to center-aligned, full-width text, followed by a wide-aspect ratio placeholder image (from Unsplash). Keep all other blocks the same.

**Step 3: Commit**
Run: `git add src/pages/index-alt.astro && git commit -m "feat: build homepage version B"`

---

### Task 7: Build the Lessons Page

**Files:**
- Modify: `src/pages/lessons.astro`

**Step 1: Add Header Banner**
Use `eric_group_lesson.jpg` or `private_lesson.jpg`.

**Step 2: Add Tabbed/Collapsible Lesson Types**
Use an Accordion or Tab widget for the 3 lesson types (scrape content from live site).

**Step 3: Add Pricing Table**
Implement Astrowind's Pricing widget.

**Step 4: Commit**
Run: `git add src/pages/lessons.astro && git commit -m "feat: build lessons page"`

---

### Task 8: Build the Teachers Directory and Individual Pages

**Files:**
- Modify: `src/pages/teachers/index.astro`
- Create: `src/pages/teachers/eric.astro`, `src/pages/teachers/laura.astro`, etc.

**Step 1: Build Directory Grid**
Create a grid in `index.astro`. Top row: Eric & Laura (Co-owners). Bottom row: Jen, Gina, John. Use Astro `<Image>` to enforce 1:1 aspect ratios on headshots.

**Step 2: Build Individual Pages**
Create pages for each teacher with their headshot, bio (or "More info coming soon" for new teachers), and availability text.

**Step 3: Commit**
Run: `git add src/pages/teachers/ && git commit -m "feat: build teachers directory and profiles"`

---

### Task 9: Build Info Hub, FAQ, and Policies Pages

**Files:**
- Modify: `src/pages/info/index.astro`
- Modify: `src/pages/info/faq.astro`
- Modify: `src/pages/info/policies.astro`

**Step 1: Info Hub**
Create navigation links to FAQ and Policies.

**Step 2: Build Accordion Pages**
Implement Astrowind FAQs widgets for both `faq.astro` and `policies.astro` to make the heavy text collapsible. Insert `piano_keys.jpg` and `student_in_lesson.jpg` between sections. Add "Return to Top" button.

**Step 3: Commit**
Run: `git add src/pages/info/ && git commit -m "feat: build info hub, faq, and policies pages"`

---

### Task 10: Port Blog Posts

**Files:**
- Create: `src/content/post/*.md`

**Step 1: Extract WP Posts**
Run a scraping script or manually extract text/dates from the existing blog.

**Step 2: Create Markdown Files**
Format the content into standard Astrowind Markdown posts with frontmatter. Include placeholder or studio images as thumbnails.

**Step 3: Commit**
Run: `git add src/content/post/ && git commit -m "feat: port blog posts to markdown"`

---

### Task 11: Build Contact Page with Web3Forms

**Files:**
- Modify: `src/pages/contact.astro`

**Step 1: Layout Configuration**
Implement a split-screen layout. Left: Contact info + `now_enrolling_sign.png`. Right: Contact form widget.

**Step 2: Integrate Web3Forms**
Update the form action to submit to Web3Forms using the standard Astrowind forms component (requires API key configuration instructions for the user).

**Step 3: Commit**
Run: `git add src/pages/contact.astro && git commit -m "feat: build contact page with web3forms integration"`
