# Stylist Playground

Modern component playground for Svelte 5 with Tailwind CSS.

## 🚀 Features

- ✅ **Svelte 5 Native** - Built with Svelte 5 runes for reactive state
- 🎨 **Tailwind CSS** - Beautiful, modern UI
- 🎛️ **Interactive Controls** - Dynamic prop manipulation
- 💻 **Code Generation** - Auto-generate component code
- 🌙 **Dark Mode** - Built-in theme switching
- 📱 **Responsive** - Mobile, tablet, desktop viewports
- 🔍 **Search** - Quick component discovery
- 📋 **Copy to Clipboard** - One-click code copying
- 🎯 **TypeScript** - Full type safety

## 📦 Installation

The playground is included in `stylist-svelte`:

```bash
npm install stylist-svelte
```

## 🎯 Quick Start

### Basic Usage

Create a playground in your SvelteKit app:

```svelte
<!-- src/routes/+layout.svelte -->
<script lang="ts">
  import { StoryRoot } from 'stylist-svelte/playground';
</script>

<StoryRoot title="My Component Library">
  <slot />
</StoryRoot>
```

### Creating Stories

Create individual story pages:

```svelte
<!-- src/routes/button/+page.svelte -->
<script lang="ts">
  import { Story } from 'stylist-svelte/playground';
  import { Button } from 'stylist-svelte';
</script>

<Story
  id="button"
  title="Button"
  category="Atoms"
  description="A versatile button component"
  controls={[
    {
      name: 'variant',
      type: 'select',
      defaultValue: 'primary',
      options: ['primary', 'secondary', 'success', 'warning', 'danger', 'ghost', 'link']
    },
    {
      name: 'size',
      type: 'select',
      defaultValue: 'md',
      options: ['sm', 'md', 'lg']
    },
    {
      name: 'disabled',
      type: 'boolean',
      defaultValue: false
    },
    {
      name: 'loading',
      type: 'boolean',
      defaultValue: false
    }
  ]}
>
  {#snippet children(props)}
    <Button {...props}>
      Click me
    </Button>
  {/snippet}
</Story>
```

## 📚 API Reference

### StoryRoot

Main container for the playground.

**Props:**
- `title?: string` - Playground title (default: "Stylist Playground")
- `children?: Snippet` - Child stories

### Story

Container for a component story.

**Props:**
- `id: string` - Unique story identifier
- `title: string` - Story display title
- `component?: any` - Component reference
- `description?: string` - Story description
- `category?: string` - Category for grouping (default: "Components")
- `controls?: ControlConfig[]` - Interactive controls
- `children?: Snippet<[props: Record<string, any>]>` - Render function with props

### Control Types

| Type | Description | Options |
|------|-------------|---------|
| `text` | Text input | - |
| `number` | Number input | `min`, `max`, `step` |
| `boolean` | Checkbox | - |
| `select` | Dropdown | `options: any[]` |
| `color` | Color picker | - |
| `range` | Slider | `min`, `max`, `step` |
| `date` | Date picker | - |

## 🎨 Example Stories

### Input Component

```svelte
<Story
  id="input"
  title="Input"
  category="Atoms"
  controls={[
    {
      name: 'label',
      type: 'text',
      defaultValue: 'Email'
    },
    {
      name: 'placeholder',
      type: 'text',
      defaultValue: 'Enter your email'
    },
    {
      name: 'type',
      type: 'select',
      defaultValue: 'text',
      options: ['text', 'email', 'password', 'number']
    },
    {
      name: 'disabled',
      type: 'boolean',
      defaultValue: false
    },
    {
      name: 'required',
      type: 'boolean',
      defaultValue: false
    }
  ]}
>
  {#snippet children(props)}
    <Input id="demo-input" {...props} />
  {/snippet}
</Story>
```

### Modal Component

```svelte
<script>
  import { Story } from 'stylist-svelte/playground';
  import { Modal, Button } from 'stylist-svelte';

  let isOpen = $state(false);
</script>

<Story
  id="modal"
  title="Modal"
  category="Organisms"
  controls={[
    {
      name: 'size',
      type: 'select',
      defaultValue: 'md',
      options: ['sm', 'md', 'lg', 'xl']
    },
    {
      name: 'closeOnEscape',
      type: 'boolean',
      defaultValue: true
    },
    {
      name: 'closeOnClickOutside',
      type: 'boolean',
      defaultValue: true
    }
  ]}
>
  {#snippet children(props)}
    <Button onclick={() => isOpen = true}>
      Open Modal
    </Button>

    <Modal
      bind:isOpen
      onClose={() => isOpen = false}
      title="Example Modal"
      {...props}
    >
      <p>Modal content goes here</p>
    </Modal>
  {/snippet}
</Story>
```

## 🎛️ Keyboard Shortcuts

- `Cmd/Ctrl + B` - Toggle sidebar
- `Cmd/Ctrl + K` - Toggle dark mode
- `Cmd/Ctrl + D` - Toggle code view
- `Cmd/Ctrl + /` - Search stories

## 🔧 Advanced Usage

### Custom Theme

You can customize the playground theme via Tailwind configuration:

```js
// tailwind.config.js
export default {
  theme: {
    extend: {
      colors: {
        primary: {
          // Your custom colors
        }
      }
    }
  }
};
```

### Programmatic API

```typescript
import { playgroundStore } from 'stylist-svelte/playground';

// Navigate to a story
playgroundStore.setCurrentStory('button');

// Toggle dark mode
playgroundStore.toggleDarkMode();

// Set viewport
playgroundStore.setViewport('mobile');

// Update control value
playgroundStore.updateControl('variant', 'primary');
```

## 🚀 Deployment

The playground works seamlessly with SvelteKit:

```bash
# Build for production
npm run build

# Deploy to Vercel, Netlify, etc.
```

## 📖 Learn More

- [Svelte 5 Documentation](https://svelte.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [SvelteKit](https://kit.svelte.dev/)

## 🤝 Contributing

Contributions are welcome! Please see the main README for guidelines.

## 📄 License

MIT License - see LICENSE file for details.
