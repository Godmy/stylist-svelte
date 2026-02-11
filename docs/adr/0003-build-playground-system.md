# ADR 0003: Build Custom Playground System for Svelte 5

**Status:** Accepted
**Date:** 2025-01-03
**Decision Makers:** Development Team

## Context

We need a tool for developing, testing, and documenting UI components. Options include:

- Storybook
- Histoire
- Custom solution
- No playground (just examples)

## Decision

We will build a **custom Playground system** natively integrated into the component library.

## Rationale

### Why NOT Existing Tools?

#### Storybook

- ❌ Heavy and slow
- ❌ Complex configuration
- ❌ Poor Svelte 5 runes support
- ❌ Large dependency tree
- ❌ Framework-agnostic (not optimized for Svelte)

#### Histoire

- ❌ **No Svelte 5 support**
- ❌ Uses Svelte 4 stores
- ❌ Abandoned/slow development
- ❌ Limited customization

### Why Custom Playground?

1. **Native Svelte 5 Integration**
   - Built with Svelte 5 runes
   - No compatibility issues
   - Optimized for Svelte patterns

2. **Zero Configuration**
   - Works out of the box
   - No complex setup
   - Integrated with SvelteKit

3. **Lightweight**
   - Part of the library
   - No extra dependencies
   - Small bundle size

4. **Full Control**
   - Customizable UI
   - Tailwind CSS styling
   - Match library design system

5. **Modern Features**
   - Interactive controls
   - Code generation
   - Dark mode
   - Responsive previews
   - TypeScript support

## Architecture

### Core Components

```
playground/
├── components/
│   ├── StoryRoot.svelte      # Main layout
│   ├── Navigator.svelte      # Sidebar navigation
│   ├── Canvas.svelte         # Component preview
│   ├── Toolbar.svelte        # Controls toolbar
│   ├── ControlPanel.svelte   # Prop controls
│   ├── CodeViewer.svelte     # Code display
│   └── Story.svelte          # Story container
├── stores/
│   └── playground.svelte.ts  # State management
├── utils/
│   └── code-generator.ts     # Code generation
└── types/
    └── index.ts              # TypeScript types
```

### State Management

Uses Svelte 5 runes for reactive state:

```typescript
class PlaygroundStore {
	state = $state<PlaygroundState>({
		currentStoryId: null,
		darkMode: false,
		sidebarOpen: true,
		viewport: 'desktop',
		showCode: false,
		controlsOpen: true
	});

	stories = $state<Map<string, StoryConfig>>(new Map());
	controlValues = $state<Record<string, any>>({});
}
```

### Usage API

Simple, declarative API:

```svelte
<Story
	id="button"
	title="Button"
	category="Atoms"
	controls={[
		{
			name: 'variant',
			type: 'select',
			defaultValue: 'primary',
			options: ['primary', 'secondary', 'success']
		},
		{
			name: 'disabled',
			type: 'boolean',
			defaultValue: false
		}
	]}
>
	{#snippet children(props)}
		<Button {...props}>Click me</Button>
	{/snippet}
</Story>
```

## Features

### ✅ Implemented

1. **Interactive Controls**
   - Text, number, boolean
   - Select, color, range
   - Live updates

2. **Code Generation**
   - Auto-generate component code
   - Copy to clipboard
   - Include imports

3. **Responsive Viewports**
   - Mobile (375px)
   - Tablet (768px)
   - Desktop (full width)

4. **Dark Mode**
   - Toggle theme
   - Persistent preference
   - Styled with Tailwind

5. **Navigation**
   - Category grouping
   - Search functionality
   - Keyboard navigation

6. **Code Viewer**
   - Display generated code
   - Copy to clipboard
   - Live updates

### 🚧 Future Enhancements

- Syntax highlighting (Shiki/Prism)
- Keyboard shortcuts
- Multiple variants per story
- MDX documentation support
- A11y checker
- Visual regression testing

## Consequences

### Positive

- ✅ Perfect Svelte 5 integration
- ✅ No configuration needed
- ✅ Consistent with library design
- ✅ Full control over features
- ✅ Lightweight and fast
- ✅ Educational value (learning project)

### Negative

- ❌ Initial development effort
- ❌ Need to maintain custom code
- ❌ Missing some advanced features
- ❌ Smaller community (no existing users)

### Mitigation

- Document thoroughly
- Keep architecture simple
- Focus on core features first
- Consider open-sourcing separately

## Comparison with Alternatives

| Feature          | Storybook  | Histoire   | Custom   |
| ---------------- | ---------- | ---------- | -------- |
| Svelte 5 Support | ⚠️ Partial | ❌ No      | ✅ Full  |
| Configuration    | ❌ Complex | ⚠️ Medium  | ✅ Zero  |
| Bundle Size      | ❌ Large   | ⚠️ Medium  | ✅ Small |
| Customization    | ⚠️ Limited | ⚠️ Limited | ✅ Full  |
| TypeScript       | ✅ Yes     | ✅ Yes     | ✅ Yes   |
| Learning Curve   | ❌ Steep   | ✅ Easy    | ✅ Easy  |
| Maintenance      | ✅ Active  | ❌ Slow    | ⚠️ DIY   |

## Implementation Timeline

### Phase 1: Core (Completed ✅)

- StoryRoot layout
- Navigator with search
- Canvas with viewports
- Basic controls (text, boolean, select)
- Code generation

### Phase 2: Enhancements (Future)

- Syntax highlighting
- Keyboard shortcuts
- Advanced controls (object, array)
- Props documentation table

### Phase 3: Advanced (Future)

- MDX support
- Visual regression
- A11y testing
- Performance monitoring

## References

- [Storybook for Svelte](https://storybook.js.org/docs/svelte/get-started/introduction)
- [Histoire](https://histoire.dev/)
- [Svelte 5 Documentation](https://svelte.dev/docs/svelte)

## Related ADRs

- ADR 0001: Use Svelte 5 Runes
- ADR 0002: Use Tailwind CSS
- ADR 0005: Use SvelteKit for Playground Demo
