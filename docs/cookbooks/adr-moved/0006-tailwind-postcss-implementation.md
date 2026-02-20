# ADR 0006: Implementation of Tailwind CSS and PostCSS Setup

## Context

The `stylist-svelte` library requires Tailwind CSS for styling and PostCSS for processing CSS. Initial attempts to configure these led to `svelte-check` errors and warnings, specifically "Cannot apply unknown utility class" and "Unknown at rule @apply (css)".

The project uses:

- SvelteKit
- Vite
- Tailwind CSS
- PostCSS

The primary challenge was ensuring that `svelte-check`, Vite, and SvelteKit's preprocessor (`vitePreprocess`) correctly recognized and processed Tailwind CSS directives, especially `@apply`.

## Decision

The following configuration decisions were made to correctly integrate Tailwind CSS and PostCSS:

1.  **`postcss.config.js`**:
    - The file was created in the root of the `packages/stylist-svelte` directory.
    - It was configured to use the standard object-based plugin configuration, explicitly listing `tailwindcss` and `autoprefixer` as PostCSS plugins:
      ```javascript
      export default {
      	plugins: {
      		tailwindcss: {},
      		autoprefixer: {}
      	}
      };
      ```
    - This ensures that PostCSS correctly loads and applies the Tailwind CSS plugin.

2.  **`vite.config.ts`**:
    - The `css.postcss` option was explicitly set to an empty object (`postcss: {}`) within the `defineConfig` function.
    - This instructs Vite to look for and use the `postcss.config.js` file in the project root for PostCSS processing.

3.  **`svelte.config.js`**:
    - The `preprocess` option was set to `vitePreprocess()`.
    - Any explicit PostCSS configuration within `vitePreprocess()` was removed to avoid conflicts, allowing Vite to handle PostCSS based on `vite.config.ts` and `postcss.config.js`.

4.  **`tailwind.config.js`**:
    - The `content` array was configured to scan Svelte files (`./src/**/*.{html,js,svelte,ts}`).
    - This ensures Tailwind CSS correctly purges unused styles and includes necessary classes.

5.  **`src/lib/tailwind.css`**:
    - A main Tailwind CSS file was created with `@tailwind base; @tailwind components; @tailwind utilities;`.
    - This file is imported in `src/lib/index.ts` to ensure Tailwind's base styles are included.

## Consequences

- **Positive**:
  - All build errors related to "Cannot apply unknown utility class" were resolved.
  - The project now builds successfully with Tailwind CSS correctly processed.
  - The development server (Vite) correctly applies Tailwind styles.
- **Negative**:
  - `svelte-check` still reports "Unknown at rule @apply (css)" warnings. These are considered false positives due to `svelte-check`'s static analysis limitations and do not affect the build or runtime.
  - `svelte-check` also reports "Unused CSS selector" warnings for dark mode classes. These are also considered false positives as dark mode classes are dynamically applied and are not truly unused.
- **Neutral**:
  - The configuration is now aligned with recommended practices for SvelteKit, Vite, and Tailwind CSS integration.
