# Required Contact Phone Field Design

## Current state

- `src/pages/contact.astro` contains the single public contact form.
- The form submits to Web3Forms through the existing client-side `fetch` handler.
- Required fields today are `name`, `email`, and `message`; `subject` is optional.
- Submission payload is built dynamically from `new FormData(form)`, so any named form field is included automatically.

## Approved approach

- Add one required phone-number field to the existing contact form only.
- Place it near the existing identity fields, preferably after Email Address and before Subject.
- Use existing field styling, label conventions, required asterisk treatment, and spacing.
- Use `id="phone"`, `name="phone"`, and label text `Phone Number`; do not create a second form or new submission path.

## Files/components affected

- Implementation file to change later: `src/pages/contact.astro`.
- No shared component, layout, API route, or backend file is expected to change.
- No implementation files are changed by this design-only spec.

## Behavior

- Visitors must provide a phone number before the form can be submitted.
- Browser-native required-field validation should block empty phone submissions.
- Successful submissions should continue to show the existing success message and reset the form.
- Failed submissions should continue to use the existing Web3Forms error handling.

## Validation

- The phone input should be `type="tel"`, `required`, and have a stable `id`/`name`.
- Add `autocomplete="tel"` to improve usability.
- Do not add strict phone-pattern validation unless a separate requirement defines accepted formats.
- Keep the field accessible with a visible label associated via `for`/`id`.

## Submission/Web3Forms implications

- Because the existing script serializes `FormData(form)`, the new named phone field should be sent to Web3Forms without JavaScript changes.
- Preserve the existing hidden `access_key` and `botcheck` fields.
- Preserve the existing JSON `fetch` submission flow and result messaging.
- Web3Forms email notifications should include the phone field as an additional submitted value.

## Verification plan

- Confirm only `src/pages/contact.astro` changes during later implementation.
- Run the project’s relevant validation command after implementation, such as a build or Astro check if available.
- Manually verify the contact page renders the new required phone field in light and dark modes.
- Manually verify an empty phone field blocks submission and a filled phone field is included in the Web3Forms payload.

## Out of scope

- Adding multiple phone fields, optional phone behavior, or SMS consent copy.
- Changing Web3Forms account configuration, access keys, redirect behavior, or spam controls.
- Reworking the contact page layout, contact information panel, success/error copy, or overall form design.
- Adding custom backend submission handling or storing submitted contact data.
