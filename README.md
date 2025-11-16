# stylist-svelte

[![Version](https://img.shields.io/npm/v/stylist-svelte.svg)](https://www.npmjs.com/package/stylist-svelte)
[![License](https://img.shields.io/github/license/Godmy/stylist-svelte.svg)](https://github.com/Godmy/stylist-svelte/blob/main/LICENSE)
[![Svelte 5](https://img.shields.io/badge/Svelte-5-orange.svg)](https://svelte.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue.svg)](https://www.typescriptlang.org)

A comprehensive Svelte 5 UI component library with **full TypeScript support**.

## About Stylist-svelte

Stylist-svelte is a library of visual components for Svelte 5, built using runes. It is a key part of the infrastructure for the Stylist project, which belongs to the vibe-management conglomerate.

The project's uniqueness lies in the fact that the library is developed by leading LLM models (such as Claude, Codex, Gemini, Qwen), organized according to the vibe-management role model. The author of Stylist-svelte is the collective intelligence Stylist-coder-model—a combined AI model specially trained to write code for Svelte 5 using runes.

## Stylist-svelte mission

Our mission is to create the world's largest library of visual components for Svelte 5 developers. Every release, including the latest version 0.8.0, expands this AI-curated collection of components, patterns, and stories, enabling teams to build consistent user interfaces faster.

Note: This project is part of the Stylist ecosystem. For development and testing, use the dedicated stylist-playground application (in development). For details on the ecosystem architecture and the responsibilities of each project, see the ECOSYSTEM_ARCHITECTURE.md file.

**Note**: This project is part of the Stylist ecosystem. For development and testing, use the dedicated [stylist-playground](../stylist-playground/README.md) application (in development). For details on the ecosystem architecture and the responsibilities of each project, see the [ECOSYSTEM_ARCHITECTURE.md](../../ECOSYSTEM_ARCHITECTURE.md) file.

## 🌟 Features

### UI Components
- **Svelte 5 Runes** - Built with the latest Svelte 5 syntax and runes for reactive programming
- **TypeScript First** - Full TypeScript support with comprehensive type definitions
- **Atomic Design Architecture** - Components organized according to atomic design principles (Atoms, Molecules, Organisms)
- **Tailwind CSS** - Styled with utility-first Tailwind CSS for maximum customization
- **Accessibility** - ARIA attributes and keyboard navigation support
- **Tree-shakeable** - Import only what you need
- **Zero Runtime Dependencies** - Only peer dependencies on Svelte and Tailwind CSS
- **Composable** - Components designed to work together seamlessly
- **Customizable** - Easy to customize through props and CSS variables
- **Interactive Playground** - Built-in component playground with live editing and code generation

### 🎨 Playground (NEW!)
- **Interactive Development** - Test components with live prop controls
- **Code Generation** - Auto-generate component code
- **Syntax Highlighting** - Powered by Shiki for beautiful code rendering
- **Keyboard Shortcuts** - Efficient navigation and editing (Cmd/Ctrl+K, Cmd/Ctrl+B, etc.)
- **Dark Mode** - Built-in theme switching
- **Responsive Views** - Mobile, tablet, desktop previews
- **Zero Config** - Works out of the box with SvelteKit

## 📦 Installation

```bash
yarn add stylist-svelte
# or
npm install stylist-svelte
```

### Peer Dependencies

`stylist-svelte` requires the following peer dependencies:

```bash
yarn add svelte@^5.0.0 tailwindcss@^3.4.0 autoprefixer@^10.4.0 @tailwindcss/postcss@^4.1.0
```

## 🚀 Quick Start

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
    join(require.resolve('stylist-svelte'), '../**/*.{html,js,svelte,ts}')
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
import { defineConfig } from 'vite';
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

Create a `src/app.css` file (or similar) and import it in your main layout or entry file:

**`src/app.css`**:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

**`src/app.html`** (for SvelteKit projects) or main entry point:
```html
<!-- In the <head> section of src/app.html -->
<link rel="stylesheet" href="/src/app.css" />
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

Run `yarn dev` and open the local app – the default route renders `<StoryRoot>` and automatically picks up all `*.story.svelte` files from `src/lib/components/**`.

📚 **[Read Playground Documentation](./docs/ad/PLAYGROUND.md)**

## 🏗️ Component Categories

Based on Atomic Design principles, our library is organized into:

### Atoms
Basic building blocks (100+ components):
- **Core UI Elements**: Buttons, Badges, Tags, Chips, Dividers, Toggles
- **Forms**: Inputs, Textareas, Selects, Checkboxes, Switches, Sliders, Labels
- **Feedback**: Alerts, Progress indicators, Skeletons, Spinners
- **Indicators**: Status indicators, Chat status indicators, Message status indicators
- **Typography**: Links, Code blocks, Inline code, Keyboard elements
- **Media**: Icons, Avatars
- **And more...** (see full list below)

### Molecules
Composite components (30+ components):
- **Forms**: Field groups, Sections, Input groups, Button groups
- **Navigation**: Breadcrumbs, Menus, Menu items
- **Data Display**: Tables, Stats cards, Empty states
- **Inputs**: Search bars, Copy buttons, File uploads
- **Interactive**: Modals, Dialogs, Pagination
- **Special Features**: Toolbars, Number flows, Graph components
- **And more...** (see full list below)

### Organisms
Complex components (10+ components):
- **Navigation**: Tabs, Accordions, Breadcrumbs
- **Data Displays**: Tables with controls, Data grids
- **Modals & Dialogs**: Modals, Confirm dialogs
- **And more...** (see full list below)

## 🧱 Complete Component List

### Atoms (100+ components)
This section lists the most important atom components:

| Component | Description |
|----------|-------------|
| `AccordionIcon` | Icon for accordion elements to indicate expand/collapse state |
| `Abbr` | Abbreviation with tooltip support |
| `Alert` | Component for displaying important messages to the user with different variants and close capability |
| `AspectRatio` | Maintains a specific aspect ratio for content |
| `Avatar` | Displays a user avatar with status indication and initials support |
| `Badge` | Small element for displaying status or count with different variants and sizes |
| `BreadcrumbSeparator` | Separator element in breadcrumb navigation |
| `Button` | Universal button with various styles, sizes, and states |
| `Caption` | Caption text with appropriate styling |
| `Checkbox` | Standard checkbox with label and error support |
| `Chip` | Compact element for displaying small pieces of information |
| `CodeBlock` | Block for displaying formatted code with syntax highlighting |
| `ColorSwatch` | Visual representation of a color |
| `Container` | Responsive container with consistent padding |
| `CountBadge` | Badge with a count value |
| `Counter` | Component for displaying numerical counts |
| `DefinitionDescription` | Description part of a definition list |
| `DefinitionTerm` | Term part of a definition list |
| `Divider` | Horizontal or vertical divider with optional text |
| `Dot` | Small dot indicator for various purposes |
| `Em` | Emphasized text with italic style |
| `Heading` | Heading element with proper semantic and styling |
| `Highlight` | Component for highlighting text |
| `Icon` | Displays an icon from an icon set |
| `Image` | Image component with loading states |
| `InlineCode` | Displays a small piece of code within text |
| `Input` | Text input field with label and validation support |
| `InputAddon` | Addon element for inputs (prefix/suffix) |
| `Kbd` | Component for displaying keyboard keys in the UI |
| `Label` | Text label for form elements ensuring accessibility |
| `Link` | Link with various styling options and sizes |
| `ListItemMarker` | Marker for list items |
| `NumberFlow` | Animated display of numeric values |
| `PageEllipsis` | Ellipsis for pagination |
| `Paragraph` | Paragraph text with appropriate styling |
| `PinInputDigit` | Single digit input for PIN entry |
| `SectionHeading` | Heading for sections |
| `Separator` | Visual separator between elements |
| `Small` | Small text with appropriate styling |
| `Spacer` | Component for adding whitespace |
| `Spinner` | Loading indicator |
| `Stack` | Component for stacking elements with consistent spacing |
| `StatusIndicator` | Status indicator with icon and text |
| `Strikethrough` | Text with strikethrough styling |
| `Strong` | Strong emphasis with bold styling |
| `Subscript` | Subscript text |
| `Superscript` | Superscript text |
| `Textarea` | Multi-line text input field |
| `Text` | Basic text element |
| `Tag` | Tag for labeling or categorizing |

### Molecules (30+ components)
This section lists the most important molecule components:

| Component | Description |
|----------|-------------|
| `AttachmentPreview` | Component for previewing attached files |
| `Breadcrumb` | Navigation element showing user location in hierarchy |
| `BurgerMenu` | Hamburger menu button for mobile navigation |
| `ButtonGroup` | Group of related buttons displayed together |
| `CanvasDrawingSurface` | Surface for canvas-based drawing |
| `ChatHeader` | Chat header displaying conversation information |
| `CodeWithCopy` | Component for displaying code with copy capability |
| `Combobox` | Combobox with text input and dropdown options |
| `ConfirmDialog` | Confirmation dialog for confirming user actions |
| `ControlPanel` | Control panel for UI customization |
| `CopyButton` | Button for copying text to clipboard |
| `DesignTokens` | Component for visualizing design tokens |
| `Dialog` | Modal dialog for displaying content |
| `DropdownMenu` | Dropdown menu for displaying options |
| `EmptyState` | Component displaying information when no data exists |
| `ExportPanel` | Panel for exporting data or settings |
| `FileUpload` | File upload component with drag-and-drop support |
| `FilterBar` | Bar for filtering and searching content |
| `FilterPanel` | Panel for configuring filters |
| `FormSection` | Section for organizing form fields |
| `GraphNode` | Graph node for visualizing relationships |
| `InputField` | Input field with additional help text and validation |
| `MenuItem` | Menu item that can be a link or button |
| `Modal` | Modal window for displaying content over main interface |
| `OperationsHistory` | History of performed operations |
| `Pagination` | Component for navigating between data pages |
| `QuickAccessButtons` | Set of buttons for quick access to functions |
| `RadioGroup` | Group of radio buttons for selecting one option |
| `ResponseViewer` | Component for viewing and formatting responses |
| `SearchBar` | Search panel with query input |
| `SearchInput` | Search input field with autocomplete |
| `StatsCard` | Statistics card displaying key metrics |
| `SyntaxHighlightedCode` | Component for displaying code with syntax highlighting |
| `TagInput` | Input component for creating tags |
| `Toolbar` | Toolbar with group of buttons and controls |
| `Tooltip` | Tooltip displayed on element hover |

### Organisms (10+ components)
This section lists the most important organism components:

| Component | Description |
|----------|-------------|
| `Accordion` | Interactive component allowing collapsing and expanding content sections |
| `Breadcrumbs` | Navigation component showing user path from root level to current page |
| `ColumnManager` | Tool for managing column visibility and order in tables |
| `DataTable` | Interactive table with sorting, filtering, and pagination capabilities |
| `ConfirmDialog` | Confirmation dialog for important user actions |
| `FolderTree` | Folder structure with expand/collapse capability |
| `Modal` | Modal window for displaying content over main interface |
| `Pagination` | Component for navigating between data pages |
| `Tab` | Tab in tab system containing title and associated content |
| `TabList` | Tab list organizing visual representation of available tabs |
| `TabPanel` | Content panel associated with specific tab |
| `TabPanels` | Container for tab panels managing active panel display |
| `Tabs` | Tab system component organizing content into separate sections |
| `Table` | Basic table with styling and structure customization |
| `TreeViewer` | Viewer for tree structures |

## 🛠️ Development

### Prerequisites

- Node.js 18+
- yarn

### Setup

```bash
# Install dependencies
yarn install

# Start development server (with Playground)
yarn dev

# Build library
yarn build

# Run tests
yarn test

# Lint
yarn lint

# Format code
yarn format

# Clean build artifacts
yarn clean
```

### Playground Development

The Playground provides an interactive environment to test and develop components:

1. The Playground automatically detects all `*.story.svelte` files in the components directory
2. Run `yarn dev` to start the Playground server
3. Use keyboard shortcuts for efficient navigation:
   - `Cmd/Ctrl + K` - Search stories
   - `Cmd/Ctrl + B` - Toggle sidebar
   - `Cmd/Ctrl + D` - Toggle dark mode
   - `Cmd/Ctrl + /` - Show help
   - `Esc` - Close modals
4. View syntax-highlighted code with Shiki integration

## 🧪 Playground Development

The built-in Playground allows you to test components interactively:

1. Create a `.story.svelte` file alongside your component
2. Define controls for the props you want to test
3. Use the Story component to render your component with different prop values
4. The Playground automatically detects all story files

## 📖 Advanced Configuration

### Custom Styling
- The library uses Tailwind CSS utility classes
- You can override styles by providing custom CSS classes
- Components support the `class` prop for additional styling

### TypeScript Support
- Full TypeScript support with type definitions
- Components are strongly typed
- IntelliSense support for all props

## 🔧 Troubleshooting

### `svelte-check` warnings for `@apply` and unused CSS selectors

If you encounter warnings like `Unknown at rule @apply (css)` or `Unused CSS selector` from `svelte-check`, especially for `.dark` mode classes, these are often false positives. `svelte-check`'s static analysis might not fully integrate with the PostCSS pipeline or correctly track dynamically applied classes (e.g., for dark mode toggling).

As long as your project builds successfully (`yarn build`) and styles are applied correctly in the browser, these warnings can generally be ignored. The underlying PostCSS and Tailwind CSS configuration is likely correct.

### Common Issues
- If components don't render properly, check that Tailwind CSS is correctly configured
- Make sure you're using Svelte 5 with runes syntax
- Verify that peer dependencies are installed correctly

## 📚 Documentation

For detailed documentation, component API references, and examples, visit:
- [Playground Documentation](./docs/ad/PLAYGROUND.md)
- [Atomic Design Guide](./docs/ad/ATOMIC_DESIGN_GUIDE.md)
- [Cookbook for AI models](./docs/cookbooks/COOKBOOK_AI_EN.md)
- [Cookbook for humans](./docs/cookbooks/COOKBOOK_HUMAN_RU.md)

## 🚧 Project Status

✅ **Production Ready**

### Component Library

- [x] Project setup and configuration ✅
- [x] Type definitions and utilities ✅
- [x] Atoms components (100+) ✅
- [x] Molecules components (30+) ✅
- [x] Organisms components (10+) ✅
- [x] Full TypeScript support ✅
- [x] Cleanup & deduplication of components ✅
- [x] Stories coverage for all components ✅
- [ ] Testing suite 🚧
- [ ] CI/CD pipeline 🚧

**Total: 141+ production-ready components**

### Playground System

The Playground functionality has been separated into a dedicated application: [stylist-playground](../stylist-playground/README.md). This application provides:
- Interactive component testing environment
- Live prop controls
- Code generation capabilities
- Syntax highlighting with Shiki
- Keyboard shortcuts for efficient navigation
- Dark/light theme support

## 🤝 Contributing

Contributions are welcome! Please read our contributing guidelines before submitting PRs.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Add tests if applicable
5. Run `yarn check` and `yarn test` to ensure everything works
6. Commit your changes (`git commit -m 'Add amazing feature'`)
7. Push to the branch (`git push origin feature/amazing-feature`)
8. Open a Pull Request

When adding new components:
1. Follow the Atomic Design principles
2. Add proper TypeScript typing
3. Include accessibility attributes
4. Write component stories for the Playground
5. Add the component to the appropriate index.ts file
6. Update documentation if needed

## 🏷️ Versioning

We use semantic versioning. For the versions available, see the [releases](https://github.com/Godmy/stylist-svelte/releases) on this repository.

## 📄 License

MIT License - see [LICENSE](./LICENSE) for details.

## 👥 Credits

Built by the HumansOntology Team as part of the HumansOntology project.

## 🐛 Support

If you encounter any issues, please file them in the [GitHub Issues](https://github.com/Godmy/stylist-svelte/issues) section of the repository.

## ⭐ Acknowledgments

- Svelte 5 for the powerful runes API
- Tailwind CSS for the utility-first styling approach
- The open-source community for inspiration and contributions
