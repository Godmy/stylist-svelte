# ADR 0002: Use Tailwind CSS for Component Styling

**Status:** Accepted
**Date:** 2025-01-03
**Decision Makers:** Development Team

## Context

We need to choose a styling solution for the UI component library. Options include:

- Tailwind CSS (utility-first)
- CSS Modules
- Styled Components / Emotion
- Plain CSS/SCSS
- CSS-in-JS solutions

## Decision

We will use **Tailwind CSS utility classes** directly in our component implementations, with the expectation that consumers of this library will configure Tailwind CSS separately in their projects.

## Rationale

### Advantages

1. **Utility-First Philosophy**
   - Rapid prototyping
   - Consistent design system
   - No naming conflicts
   - Easy to customize

2. **Developer Experience**
   - IntelliSense support
   - Autocomplete in IDE
   - Predictable class names
   - Fast development cycle

3. **Performance**
   - Automatic purging of unused styles
   - Optimized bundle size
   - JIT compiler for fast builds
   - Small production CSS

4. **Customization**
   - Theme configuration via config file
   - Design tokens (colors, spacing, etc.)
   - Custom utilities and variants
   - Plugin ecosystem

5. **Community & Ecosystem**
   - Large community
   - Well-documented
   - Many plugins (forms, typography, etc.)
   - Active development

### Example

```svelte
<button
	class="
    rounded-md bg-indigo-600 px-4
    py-2 font-medium
    text-white transition-colors
    hover:bg-indigo-700
    focus:ring-2 focus:ring-indigo-500 focus:outline-none
  "
>
	Click me
</button>
```

## Consequences

### Positive

- ✅ Fast development with utility classes
- ✅ Consistent design system out of the box
- ✅ Small production bundle (with JIT/purge)
- ✅ Easy theming and customization
- ✅ Great DX with IDE extensions

### Negative

- ❌ HTML can become verbose with many classes
- ❌ Learning curve for utility-first approach
- ❌ Consumers must configure Tailwind CSS separately
- ❌ Requires build step and configuration in consuming projects

### Mitigation

- Use `@apply` for repeated patterns
- Component props for common variants
- Clear documentation and examples
- Provide default Tailwind config

## Configuration Strategy

### 1. Tailwind Config Export

```javascript
// tailwind.config.js
export default {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/stylist-svelte/**/*.{html,js,svelte,ts}'
	],
	theme: {
		extend: {
			colors: {
				// Custom colors
			}
		}
	}
};
```

### 2. Customization Points

- Theme colors and spacing
- Custom component variants
- Dark mode support
- Responsive breakpoints

## Alternatives Considered

### 1. CSS Modules

**Pros:** Scoped styles, no class conflicts
**Cons:** More boilerplate, harder to theme
**Rejected:** Slower development, less flexible

### 2. Styled Components

**Pros:** CSS-in-JS, dynamic styles
**Cons:** Runtime overhead, larger bundle
**Rejected:** Not ideal for component library

### 3. Plain CSS/SCSS

**Pros:** Simple, no dependencies
**Cons:** No design system, naming complexity
**Rejected:** Harder to maintain consistency

### 4. Vanilla Extract

**Pros:** Zero-runtime CSS-in-JS, type-safe
**Cons:** More complex setup, smaller ecosystem
**Rejected:** Tailwind has better DX

## Design System

Tailwind provides built-in design tokens:

```javascript
// Colors
colors.indigo[500]; // Primary
colors.gray[100]; // Light backgrounds
colors.red[600]; // Danger

// Spacing
spacing[4]; // 1rem
spacing[8]; // 2rem

// Typography
fontSize.sm; // 0.875rem
fontSize.base; // 1rem
```

## Dark Mode Support

```svelte
<div class="bg-white dark:bg-gray-900">
	<h1 class="text-gray-900 dark:text-white">Title</h1>
</div>
```

## References

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Tailwind CSS v4 Changelog](https://tailwindcss.com/blog/tailwindcss-v4)
- [JIT Compiler](https://tailwindcss.com/blog/just-in-time-the-next-generation-of-tailwind-css)

## Related ADRs

- ADR 0001: Use Svelte 5 Runes
- ADR 0004: Component Architecture and Structure
