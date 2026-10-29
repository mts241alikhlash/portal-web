# portal-web

## 1.5.0

### Minor Changes

- 69ee628: Match admission-web's shell and page styling: upgrade `@mts241alikhlash/ui` to
  1.11 and `web-shared` to 1.3.1, take the shared `theme.css` tokens, move the
  admin layout to the fixed top bar with the app switcher and `NavUser`, use the
  inset sidebar with `SidebarToggle`, apply the flat list wrapper and admission's
  card spacing, and adopt admission's auth and profile screens.

  The public layout is unchanged; only the admin shell follows admission.

  `profileRoutes` is now registered, so `/profile` and `/profile/edit` resolve
  instead of falling through to the 404 page.

  `vite.config.ts` excludes `@mts241alikhlash/ui` from the dependency pre-bundle,
  as the other apps do, so the package is one module instance in development.

## 1.4.4

### Patch Changes

- 02bb75c: Run on Node.js 24.22.1, the release that fixes the October 2026 security issues (Brotli decoder out-of-bounds write, TLS hostname checks, DNS NUL handling). The base image, the CI jobs and the engines range move from 24.21.0 to 24.22.1.

## 1.4.3

### Patch Changes

- a305a60: Ejaan Amerika di kode, komentar, dan nama test (`honours` menjadi `honors`, `enrolment` menjadi `enrollment`, dan sejenisnya).

## 1.4.2

### Patch Changes

- 3603cef: Card, judul, dan isi memakai standar `@mts241alikhlash/ui` 1.8; field profil, alamat, dan login memakai `FloatingField`; aksi baris dengan dua aksi atau lebih memakai `ActionCell items`.

## 1.4.1

### Patch Changes

- 69456c1: The sidebar menu follows permissions only (web-shared 1.2.0), so a visible item always opens, also for the super admin.

## 1.4.0

### Minor Changes

- 103fc91: The profile address editor now selects official administrative regions and saves their codes.

### Patch Changes

- 6252509: The Vite dev server pre-bundles the Unovis `striptags` dependency so pages with charts load in the browser. Development only.

## 1.3.0

### Minor Changes

- f0850ad: Sub-pages go back with `BackButton` from `@mts241alikhlash/ui` 1.3.1, left of the card title and labelled with where it leads, and breadcrumbs name the record a page is about instead of "Detail" or "Ubah"; long crumbs truncate. Another user's profile gets a back button and their name in the breadcrumb. The profile and address tabs use floating labels with every field tied to its label, including the birth date picker. Fixes articles and announcements created from their lists being saved as news: the content form now takes its type from the URL and, when editing, from the loaded content. Agenda, album, page and content forms have a back button and name what they edit.

### Patch Changes

- f0850ad: Badges take `rounded-md` from `@mts241alikhlash/ui` 1.2.1.

## 1.2.0

### Minor Changes

- 6ddf84b: `DataTable`'s built-in search field uses `SearchInput` from `@mts241alikhlash/ui` 1.2.0, the same field every other app shows.

## 1.1.0

### Minor Changes

- 592fe70: Icons come from `@lucide/vue` (replacing the deprecated `lucide-vue-next`), with `@mts241alikhlash/ui` and `web-shared` 1.1.0.

## 1.0.1

### Patch Changes

- 1302ce5: Update @mts241alikhlash/ui to 1.0.1.

## 1.0.0

### Major Changes

- First stable release.
