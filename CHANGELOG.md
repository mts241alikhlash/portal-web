# portal-web

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
