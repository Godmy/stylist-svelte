# stylist-svelte

A comprehensive Svelte 5 UI component library with **built-in Playground** for interactive development and **full TypeScript support**.

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
Basic building blocks (40+ components):
- **Core UI Elements**: Button, Badge, Tag, Chip, Divider, Toggle
- **Forms**: Input, Textarea, Select, Checkbox, Switch, RangeSlider, Label
- **Feedback**: Alert, ProgressBar, Skeleton, CardSkeleton, TableSkeleton
- **Indicators**: Spinner, ChatStatusIndicator, MessageStatus, MessageTimestamp, StatusIndicator
- **Typography**: Link, CodeBlock, InlineCode, Kbd
- **Media**: Icon, Avatar
- **And more...** (see full list below)

### Molecules
Composite components (70+ components):
- **Forms**: FormFieldGroup, FormSection, InputGroup, ButtonGroup
- **Navigation**: Breadcrumb, BurgerMenu, DropdownMenu, MenuItem
- **Data Display**: DataTable, StatsCard, TableSkeleton, EmptyState
- **Inputs**: SearchBar, CopyButton, FileUpload, TagInput
- **Interactive**: Modal, ConfirmDialog, Pagination, Accordion
- **Special Features**: CanvasToolbar, NumberFlow, GraphNode, KanbanCard
- **And more...** (see full list below)

### Organisms
Complex components (20+ components):
- **Navigation**: Tabs, Accordion, Breadcrumbs, FolderTree
- **Data Tables**: Table, DataTable, ColumnManager
- **Modals & Dialogs**: Modal, ConfirmDialog
- **And more...** (see full list below)

## 🧱 Complete Component List

### Atoms (40+ components)

| Component | Description |
|----------|-------------|
| `Alert` | Component for displaying important messages to the user with different variants (info, success, warning, error) and close capability |
| `Avatar` | Displays a user avatar with status indication and initials support, with various sizes and statuses (online, offline, typing, etc.) |
| `Badge` | Small element for displaying status or count with different variants and sizes |
| `Button` | Universal button with various styles (primary, secondary, success, warning, danger, ghost, link), sizes, and states (loading, disabled) |
| `CardSkeleton` | Skeleton for card used during data loading, with animation for better perception |
| `ChatStatusIndicator` | Chat status indicator (online, offline, typing) showing conversation partner's activity |
| `Checkbox` | Standard checkbox with label, description and error support for selecting one or multiple options |
| `Chip` | Compact element for displaying small pieces of information (e.g., tags) with close capability |
| `CodeBlock` | Block for displaying formatted code with syntax highlighting, supporting various programming languages |
| `Divider` | Horizontal or vertical divider with optional text label |
| `Icon` | Displays an icon from an icon set with various sizes and customizable properties |
| `InlineCode` | Displays a small piece of code within text with appropriate styling |
| `Input` | Text input field for entering text, numbers and other data with label, error support and various input types |
| `Kbd` | Component for displaying keyboard keys in the UI |
| `Label` | Text label for form elements ensuring accessibility and UI clarity |
| `Link` | Link with various styling options (primary, secondary, success, warning, danger, ghost, underline) and sizes |
| `MessageStatus` | Message status indicator (sent, delivered, read) as a check mark |
| `MessageTimestamp` | Displays message timestamp in relative or absolute format (e.g., "10 minutes ago") |
| `ProgressBar` | Progress indicator showing task completion in percentage |
| `RangeSlider` | Slider for selecting a value in a given range with visual indication of current value |
| `Select` | Dropdown list for selecting one of several options with error support and label |
| `Skeleton` | Skeleton with animation used during data loading for better perception |
| `Spinner` | Loading indicator as a spinning element with various sizes and variants |
| `StatusIndicator` | Status indicator with icon and text (default, success, warning, error, info, primary, secondary) |
| `Switch` | Toggle for enabling/disabling an option as a slider |
| `TableSkeleton` | Skeleton for table used during data loading |
| `Tag` | Tag for labeling or categorizing with various variants (neutral, primary, success, warning, error) |
| `Textarea` | Multi-line text input field with label, character count support and error handling |
| `Toggle` | Toggle for enabling/disabling state as a slider |

### Molecules (70+ components)

| Component | Description |
|----------|-------------|
| `AttachmentPreview` | Component for previewing attached files |
| `Breadcrumb` | Navigation element showing user location in hierarchy |
| `BurgerMenu` | Hamburger menu button for opening/closing menu with size and color customization |
| `ButtonGroup` | Group of related buttons displayed together for consistent UI |
| `CanvasToolbar` | Toolbar for canvas containing editing tools and interaction elements |
| `ChatHeader` | Chat header displaying conversation partner information and status |
| `CodeWithCopy` | Component for displaying code with copy-to-clipboard capability |
| `ConfirmDialog` | Confirmation dialog for confirming important user actions |
| `CopyButton` | Button for copying text to clipboard with visual feedback |
| `DataTable` | Table component with sorting, filtering, and pagination capabilities |
| `DropdownMenu` | Dropdown menu for displaying options or actions |
| `EmptyState` | Component displaying information when no data or results exist |
| `ExpandableTableRow` | Expandable table row allowing additional information display when needed |
| `FieldHighlighter` | Tool for highlighting form fields to help user focus on needed elements |
| `FileUpload` | File upload component with drag-and-drop support and file type validation |
| `FilterPanel` | Filter panel for configuring data display criteria |
| `FormFieldGroup` | Grouping of related form fields for improved structure and organization |
| `FormSection` | Form section for logical grouping of related fields and controls |
| `GraphEdge` | Graph edge for visualizing relationships between nodes |
| `GraphNode` | Graph node for data visualization |
| `GraphNodeCard` | Graph node card with additional information and actions |
| `GraphvizCluster` | Cluster for grouping nodes in Graphviz visualizations |
| `GraphvizClusterWithTitle` | Cluster with title for grouping nodes in Graphviz visualizations |
| `GraphvizDirectedEdge` | Directed edge for Graphviz visualizations |
| `GraphvizEdge` | Edge for Graphviz visualizations |
| `GraphvizNode` | Node for Graphviz visualizations |
| `GraphvizNodeCard` | Node card for Graphviz visualizations |
| `GraphvizNodeConnection` | Node connection in Graphviz visualizations |
| `GraphvizNodeWithLabel` | Labeled node for Graphviz visualizations |
| `GraphvizSubgraph` | Subgraph for grouping nodes in Graphviz visualizations |
| `GraphvizUndirectedEdge` | Undirected edge for Graphviz visualizations |
| `InputField` | Input field with additional help text and validation integration |
| `InputGroup` | Group of input fields visually and functionally combined |
| `KanbanCard` | Kanban board card with drag-and-drop and editing capabilities |
| `LegendItem` | Legend item explaining symbols and colors on charts |
| `MessageInput` | Message input field with attachment, emoji, and send buttons |
| `MessageMeta` | Message metadata including timestamp and delivery status |
| `MenuItem` | Menu item that can be a link or button with icon |
| `Modal` | Modal window for displaying content over main interface |
| `NumberFlow` | Component for animated display of numeric values |
| `OntologyEdgeComponent` | Edge component for ontology visualizations |
| `OntologyNodeComponent` | Node component for ontology visualizations |
| `OperationsHistory` | Operations history displaying performed actions and status |
| `Pagination` | Component for navigating between data pages |
| `QuickAccessButtons` | Set of buttons for quick access to frequently used functions |
| `RadioGroup` | Group of radio buttons for selecting one of several options |
| `Rating` | Rating component with star selection capability |
| `ResponseViewer` | Component for viewing and formatting responses from API or other sources |
| `SearchBar` | Search panel with query input and results display |
| `SearchInput` | Search input field with autocomplete and suggestions |
| `StatsCard` | Statistics card displaying key metrics and trends |
| `SyntaxHighlightedCode` | Component for displaying code with syntax highlighting |
| `TagInput` | Tag input component with autocomplete |
| `Toolbar` | Toolbar with group of buttons and controls |
| `Tooltip` | Tooltip displayed on element hover |
| `TreeNodeItem` | Tree item with expand/collapse capability for nested nodes |
| `UserStatus` | User status indicator (online, offline, busy, etc.) |
| `VariablesEditor` | Variable editor for configuring and managing system variables |

### Organisms (20+ components)

| Component | Description |
|----------|-------------|
| `Accordion` | Interactive component allowing collapsing and expanding content sections |
| `AccordionHeader` | Accordion section header used for toggling content visibility |
| `AccordionItem` | Individual accordion item containing header and panel |
| `AccordionPanel` | Accordion panel containing content that can be collapsed or expanded |
| `Breadcrumbs` | Navigation component showing user path from root level to current page |
| `ColumnManager` | Tool for managing column visibility and order in tables |
| `DataTable` | Interactive table with sorting, filtering, and pagination capabilities |
| `ExpandableTableRow` | Expandable table row allowing additional information display when needed |
| `FolderTree` | Folder structure with expand/collapse capability for nested items |
| `Modal` | Modal window for displaying content over main interface with close capability |
| `Pagination` | Component for navigating between data pages |
| `Tab` | Tab in tab system containing title and associated content |
| `TabList` | Tab list organizing visual representation of available tabs |
| `TabPanel` | Content panel associated with specific tab |
| `TabPanels` | Container for tab panels managing active panel display |
| `Tabs` | Tab system component organizing content into separate sections |
| `Table` | Basic table with styling and structure customization |
| `TableBody` | Table body containing main data rows |
| `TableCell` | Table cell used for displaying individual values |
| `TableHeader` | Table header containing column titles |
| `TableRow` | Table row containing one or more data cells |

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
- [x] Atoms components (40+) ✅
- [x] Molecules components (70+) ✅
- [x] Organisms components (20+) ✅
- [x] **Playground system** 🆕 ✅
- [x] Full TypeScript support ✅
- [ ] Testing suite 🚧
- [ ] CI/CD pipeline 🚧

**Total: 130+ production-ready components + Interactive Playground**

### Playground Features

- [x] Interactive controls ✅
- [x] Code generation ✅
- [x] Dark mode ✅
- [x] Responsive viewports ✅
- [x] Search & navigation ✅
- [ ] Syntax highlighting 🚧
- [ ] Keyboard shortcuts 🚧

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