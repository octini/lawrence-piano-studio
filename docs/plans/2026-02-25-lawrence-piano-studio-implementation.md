# Lawrence Piano Studio Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Scaffolds and customizes an Astrowind-based Astro static site for the Lawrence Piano Studio, providing an elegant and professional web presence.

**Architecture:** Astro SSG using the Astrowind template, which relies on Tailwind CSS for styling and MDX for content.

**Tech Stack:** Astro, Tailwind CSS, Astrowind Theme.

---

### Task 1: Scaffolding and Setup

**Files:**
- Create: Base Astrowind files

**Step 1: Download Astrowind template**
Run: `npx degit onwidget/astrowind temp-site && cp -R temp-site/* . && cp -R temp-site/.* . 2>/dev/null || true && rm -rf temp-site`
Expected: Astrowind files populated in current directory.

**Step 2: Install dependencies**
Run: `npm install`
Expected: node_modules created and packages installed successfully.

**Step 3: Verify build**
Run: `npm run build`
Expected: Build succeeds.

**Step 4: Commit**
```bash
git add .
git commit -m "chore: scaffold astrowind theme"
```

---

### Task 2: Global Configuration and Navigation

**Files:**
- Modify: `src/navigation.ts`
- Modify: `src/site.config.ts` (or equivalent config file)

**Step 1: Update Site Metadata**
Modify `src/site.config.ts` to set the name to "Lawrence Piano Studio" and update descriptions.

**Step 2: Update Navigation**
Modify `src/navigation.ts` to include links for Home, About, Lessons, Blog, and Contact in the header. Update footer with contact info and social links.

**Step 3: Verify changes**
Run: `npm run dev` in background and check local URL.

**Step 4: Commit**
```bash
git add src/navigation.ts src/site.config.ts
git commit -m "chore: configure site metadata and navigation"
```

---

### Task 3: Home Page Implementation

**Files:**
- Modify: `src/pages/index.astro`

**Step 1: Build Hero Section**
Update the Hero component with headline "Elevate Your Musical Journey" and CTA "Start Learning".

**Step 2: Build Value Proposition**
Update Features component with 3 columns: Expert Instruction, All Ages & Levels, Performance Opportunities.

**Step 3: Build Testimonials**
Update Testimonials component with placeholder quotes from students/parents.

**Step 4: Commit**
```bash
git add src/pages/index.astro
git commit -m "feat: implement home page content"
```

---

### Task 4: About Page Implementation

**Files:**
- Modify/Create: `src/pages/about.astro`

**Step 1: Add Instructor Bio**
Include a HeroText or standard Hero component for the bio. Add an Image component for the headshot.

**Step 2: Add Teaching Philosophy**
Include a Content or Features section outlining the teaching approach.

**Step 3: Commit**
```bash
git add src/pages/about.astro
git commit -m "feat: implement about page"
```

---

### Task 5: Lessons & Pricing Implementation

**Files:**
- Create: `src/pages/lessons.astro`

**Step 1: Add Pricing Table**
Use the Prices component from Astrowind to display 30-min, 45-min, and 60-min lesson tiers.

**Step 2: Add Policies Section**
Add a FAQs or Content component detailing cancellation and makeup policies.

**Step 3: Commit**
```bash
git add src/pages/lessons.astro
git commit -m "feat: implement lessons and pricing page"
```

---

### Task 6: Contact Page Implementation

**Files:**
- Modify: `src/pages/contact.astro`

**Step 1: Implement Contact UI**
Use the Contact component. Configure fields for Name, Email, Phone, Message, and a dropdown/text input for Student Age/Level.

**Step 2: Add Direct Contact Info**
Add Features2 or similar component for Email, Phone, and Location.

**Step 3: Commit**
```bash
git add src/pages/contact.astro
git commit -m "feat: implement contact page"
```
