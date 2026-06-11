# Required Contact Phone Implementation Plan
> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

## Goal

Add a required phone number field to the existing public contact form so visitors must provide a phone number before submitting, while preserving the current Web3Forms submission flow, styling, success/error behavior, spam controls, and page layout.

## Architecture

- Keep the change contained to the existing Astro contact page: `src/pages/contact.astro`.
- Add one native HTML form control to the existing `<form id="contact-form">`.
- Rely on browser-native `required` validation and the existing `new FormData(form)` serialization so the `phone` field is automatically included in the JSON payload sent to Web3Forms.
- Do not add JavaScript, backend/API routes, shared components, custom validation patterns, storage, SMS consent copy, or Web3Forms configuration changes.

## Tech Stack

- Astro page component: `src/pages/contact.astro`
- Tailwind utility classes already used by the contact form
- Browser-native form validation (`required`, `type="tel"`)
- Web3Forms JSON submission through the existing client-side `fetch` handler
- Validation command: `npm run check`

---

## File Structure Map

- `src/pages/contact.astro`
  - Lines 90-177: right-side Web3Forms contact form card.
  - Lines 99-176: existing `<form action="https://api.web3forms.com/submit" method="POST" class="space-y-6" id="contact-form">`.
  - Lines 107-135: existing required identity fields (`name`, `email`).
  - Lines 137-149: optional `subject` field.
  - Lines 151-164: required `message` field.
  - Lines 181-234: existing submit handler; leave unchanged because `FormData(form)` already includes named fields.

Expected implementation scope: modify only `src/pages/contact.astro` unless discovery proves an unexpected coupling. Do not edit any other implementation file for this feature.

## Tasks

- [ ] Update `src/pages/contact.astro` to add the required phone field.
  - Place the field after the Email Address field block and before the Subject field block, around the current line area after line 135 and before line 137.
  - Reuse the existing form field structure, label styling, required asterisk styling, input classes, spacing, and indentation.
  - Add exactly one field with `id="phone"`, `name="phone"`, label text `Phone Number`, `type="tel"`, `required`, and `autocomplete="tel"`.
  - Use placeholder `(785) 555-1234`.
  - Do not add strict `pattern` validation.
  - Do not change hidden `access_key`, hidden `botcheck`, submit button, result messaging, or submit script.
  - Insert this exact snippet:

    ```astro
          <!-- Phone Field -->
          <div>
            <label for="phone" class="block text-sm font-semibold text-[#1a2e5a] dark:text-slate-200 mb-2">
              Phone Number <span class="text-primary dark:text-primary">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              autocomplete="tel"
              placeholder="(785) 555-1234"
              class="w-full px-4 py-3 rounded-lg border-2 border-primary/20 dark:border-white/10 bg-white dark:bg-slate-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors duration-200"
            />
          </div>
    ```

- [ ] Verify the implementation.
  - Confirm the implementation diff changes only `src/pages/contact.astro` for the feature.
  - Run `npm run check` from the repository/worktree root.
  - Manually open the contact page in a browser and confirm the new required phone field renders between Email Address and Subject.
  - Manually verify the field appearance in light and dark modes.
  - Manually submit with an empty phone field and confirm browser-native required-field validation blocks submission.
  - Manually submit with a filled phone field and confirm the existing success/error handling still behaves normally.
  - On a mobile/touch browser, or responsive device emulator where available, focus the phone field and confirm `type="tel"` triggers a telephone keypad and `autocomplete="tel"` is present for phone-number autofill support.
  - If safely testable without sending unwanted production messages, inspect the outgoing Web3Forms request payload and confirm it includes `phone: "<entered value>"` along with the existing form values. If not safe to submit, verify locally that `new FormData(form)` would include the named `phone` control.

- [ ] Commit the implementation.
  - Ensure only intentional implementation files are staged; pre-existing unrelated worktree changes must not be included.
  - Suggested commit message: `feat: require contact phone number`

## Plan Author Self-Review

- Coverage: The plan covers the full approved behavior: add one required phone field to the existing contact form only, preserve existing Web3Forms submission, and verify browser-required validation plus field inclusion in the payload.
- Placeholders: The snippet uses the approved local-format placeholder `(785) 555-1234`.
- Type/property consistency: The snippet uses `type="tel"`, `id="phone"`, `name="phone"`, `required`, and `autocomplete="tel"`; it does not add strict pattern validation.
- Scope: The implementation task is constrained to `src/pages/contact.astro`, with no backend, shared component, or JavaScript changes expected.
- Accessibility: The label is visible and associated with the input via `for="phone"` and `id="phone"`.
