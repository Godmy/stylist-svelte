# stylist-svelte

A comprehensive Svelte 5 UI component library with **built-in Playground** for interactive development.

## 🌟 Features

### UI Components
- **Svelte 5 Runes** - Built with the latest Svelte 5 syntax
- **TypeScript First** - Full TypeScript support with comprehensive type definitions
- **Tailwind CSS** - Styled with utility-first Tailwind CSS
- **Accessibility** - ARIA attributes and keyboard navigation support
- **Tree-shakeable** - Import only what you need
- **Zero Dependencies** - Only peer dependencies on Svelte and Tailwind CSS
- **Composable** - Components designed to work together seamlessly
- **Customizable** - Easy to customize through props and CSS variables

### 🎨 Playground (NEW!)
- **Interactive Development** - Test components with live prop controls
- **Code Generation** - Auto-generate component code
- **Dark Mode** - Built-in theme switching
- **Responsive Views** - Mobile, tablet, desktop previews
- **Zero Config** - Works out of the box with SvelteKit

## Installation

```bash
yarn add stylist-svelte
```

### Peer Dependencies

`stylist-svelte` requires the following peer dependencies:

```bash
yarn add svelte@^5.0.0 tailwindcss@^3.4.0 autoprefixer@^10.4.0 @tailwindcss/postcss@^4.1.0
```

## Quick Start

### 1. Install

```bash
yarn add stylist-svelte svelte@^5.0.0 tailwindcss@^4.0.0 autoprefixer@^10.4.0 @tailwindcss/postcss@^4.1.0
```

### 2. Configure Tailwind CSS and PostCSS

Ensure you have `tailwind.config.js` and `postcss.config.js` in your project root. If you don't have them, create them.

**`tailwind.config.js`**:
```js
// tailwind.config.js
import { join } from 'path';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,svelte,ts}',
    join(require.resolve('@humansontology/stylist-svelte'), '../**/*.{html,js,svelte,ts}')
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

**`postcss.config.js`**:
```js
// postcss.config.js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

**`vite.config.ts`** (for SvelteKit projects):
Ensure your `vite.config.ts` explicitly enables PostCSS:
```typescript
import { defineConfig } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig({
	plugins: [sveltekit()],
	css: {
		postcss: {},
	},
	// ... other configurations
});
```

### 3. Import Tailwind CSS

Create a `src/lib/tailwind.css` file (or similar) and import it in your main layout or entry file:

**`src/lib/tailwind.css`**:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

**`src/lib/index.ts`** (or your main entry point):
```typescript
import './tailwind.css';
// ... other exports
```

### 4. Import Components

```svelte
<script lang="ts">
  import { Button, Input, Modal } from 'stylist-svelte';

  let showModal = $state(false);
</script>

<Button onclick={() => showModal = true}>
  Open Modal
</Button>

{#if showModal}
  <Modal
    title="Example Modal"
    bind:isOpen={showModal}
    onClose={() => showModal = false}
  >
    <Input id="name" label="Name" placeholder="Enter your name" />
  </Modal>
{/if}
```

## 🎨 Using the Playground

Create an interactive component playground in minutes:

```svelte
<!-- src/lib/components/atoms/Button.story.svelte -->
<script lang="ts">
  import { Story } from 'stylist-svelte/playground';
  import Button from './Button.svelte';

  const controls = [
    {
      name: 'label',
      type: 'text',
      defaultValue: 'Click me'
    },
    {
      name: 'variant',
      type: 'select',
      defaultValue: 'primary',
      options: ['primary', 'secondary', 'success', 'danger']
    },
    {
      name: 'disabled',
      type: 'boolean',
      defaultValue: false
    }
  ];
</script>

<Story
  id="atoms-button"
  title="Button"
  component={Button}
  category="Atoms"
  tags={['action', 'form']}
  controls={controls}
>
  {#snippet children(props)}
    {#snippet label()} {props.label} {/snippet}
    <Button variant={props.variant} disabled={props.disabled} content={label} />
  {/snippet}
</Story>
```

Run `yarn dev` and open the local app – the default route renders `<StoryRoot>` и автоматически подхватывает все `*.story.svelte` из `src/lib/components/**`.

### Что уже покрыто playground

- **Atoms:** Button, Input, Textarea, Select, Checkbox, Avatar, Badge, Spinner, Tooltip
- **Molecules:** SearchBar, CopyButton, EmptyState, FormFieldGroup, FormSection

Каждый файл-история содержит `component`, `tags` и набор `controls`, поэтому кодогенератор, поисковая панель и контролы сразу готовы к работе. Дополнительные детали – в [ADR 0007](./docs/adr/0007-playground-story-architecture.md).

📚 **[Read Playground Documentation](./PLAYGROUND.md)**

## Component Categories

### Atoms
Basic building blocks:
- Button
- Input
- Textarea
- Select
- Checkbox





- Avatar
- Badge
- Spinner
- Tooltip

### Molecules
Composite components:
- SearchBar
- CopyButton
- EmptyState
- FormFieldGroup
- FormSection







### Organisms
Complex components:
- Modal
- Pagination
- Breadcrumbs
- ConfirmDialog
- Table (with TableHeader, TableBody, TableRow, TableCell)
- Tabs (with TabList, Tab, TabPanels, TabPanel)
- Accordion (with AccordionItem, AccordionHeader, AccordionPanel)
- DataTable
- FolderTree

### Feedback
User feedback components:
- Alert
- ProgressBar
- Skeleton
- CardSkeleton
- TableSkeleton

## Development

### Prerequisites

- Node.js 18+
- yarn

### Setup

```bash
# Install dependencies
yarn install

# Start development server
yarn dev

# Build library
yarn build

# Run tests
yarn test

# Lint
yarn lint

# Format code
yarn format
```

## Troubleshooting

### `svelte-check` warnings for `@apply` and unused CSS selectors

If you encounter warnings like `Unknown at rule @apply (css)` or `Unused CSS selector` from `svelte-check`, especially for `.dark` mode classes, these are often false positives. `svelte-check`'s static analysis might not fully integrate with the PostCSS pipeline or correctly track dynamically applied classes (e.g., for dark mode toggling).

As long as your project builds successfully (`yarn build`) and styles are applied correctly in the browser, these warnings can generally be ignored. The underlying PostCSS and Tailwind CSS configuration is likely correct.

## Documentation

For detailed documentation, component API references, and examples, visit our [documentation site](#) (coming soon).

## Project Status

✅ **Production Ready**

### Component Library

- [x] Project setup and configuration ✅
- [x] Type definitions and utilities ✅
- [x] Atoms components (9/9) ✅
- [x] Molecules components (5/5) ✅
- [x] Organisms components (19/19) ✅
- [x] Feedback components (5/5) ✅
- [x] **Playground system** 🆕 ✅
- [ ] Testing suite 🚧
- [ ] CI/CD pipeline 🚧

**Total: 38 production-ready components + Interactive Playground**

### Playground Features

- [x] Interactive controls ✅
- [x] Code generation ✅
- [x] Dark mode ✅
- [x] Responsive viewports ✅
- [x] Search & navigation ✅
- [ ] Syntax highlighting 🚧
- [ ] Keyboard shortcuts 🚧

## Contributing

Contributions are welcome! Please read our contributing guidelines before submitting PRs.

## License

MIT License - see [LICENSE](./LICENSE) for details.

## Credits

Built by the HumansOntology Team as part of the HumansOntology project.
