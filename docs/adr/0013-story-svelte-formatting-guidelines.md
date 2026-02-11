# 0013: Story Svelte Formatting Guidelines

## Status

Accepted

## Context

In the Stylist design system, we use `.svelte` files for component stories displayed in the Playground. To ensure consistency across all stories and facilitate AI-assisted refactoring, we need a standardized format for story files.

Existing stories vary in structure, style, and component organization, leading to maintenance overhead and poor readability.

## Decision

All `story.svelte` files must adhere to the following structure and conventions:

### File Structure

```svelte
<script context="module">
	export const title = 'Component Name';
	export const category = 'Category/Subcategory'; // e.g., "Atoms/Button"
</script>

<script>
	import { MyComponent } from './MyComponent.svelte';
	// Optional: utilities, data, state
</script>

<div class="story-container">
	<h2>{title}</h2>
	<p>Description of the component and its usage.</p>

	<!-- Interactive Demo -->
	<div class="interactive-demo">
		<MyComponent />
	</div>

	<!-- All Variants -->
	<div class="variants-section">
		<h3>All Variants</h3>
		<div class="variant-grid">
			<MyComponent variant="primary" />
			<MyComponent variant="secondary" />
			<!-- ... -->
		</div>
	</div>

	<!-- All Sizes -->
	<div class="sizes-section">
		<h3>All Sizes</h3>
		<div class="size-grid">
			<MyComponent size="small" />
			<MyComponent size="medium" />
			<MyComponent size="large" />
		</div>
	</div>

	<!-- Controls Demo (optional) -->
	<div class="controls-demo">
		<h3>Controls</h3>
		<label>
			Label:
			<input bind:value={labelText} />
		</label>
		<select bind:value={variant}>
			<option value="primary">Primary</option>
			<option value="secondary">Secondary</option>
		</select>
		<MyComponent label={labelText} {variant} />
	</div>
</div>

<style>
	.story-container {
		padding: 20px;
		max-width: 100%;
		font-family: sans-serif;
	}

	h2,
	h3 {
		margin-top: 2rem;
		margin-bottom: 0.5rem;
	}

	.variant-grid,
	.size-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
		gap: 1rem;
		margin-top: 1rem;
	}

	.interactive-demo {
		margin: 1.5rem 0;
	}

	.controls-demo {
		margin-top: 2rem;
	}
</style>
```

### Requirements

- Must include `title` and `category` exports.
- Use semantic class names: `story-container`, `interactive-demo`, `variants-section`, etc.
- Styles must be local (`<style>` inside file).
- Avoid async operations unless necessary.
- Use camelCase for variables, kebab-case for classes.
- Keep comments minimal — code should be self-documenting.

## Consequences

✅ **Positive**:

- Unified appearance across all stories.
- Easier for AI models to parse and refactor.
- Improved maintainability and onboarding.

⚠️ **Negative**:

- May require refactoring existing stories.
- Slight overhead for simple components.

## References

- [ADR 0007: Playground Story Architecture](0007-playground-story-architecture.md)
- [ADR 0004: Component Architecture](0004-component-architecture.md)

---

_Created by Qwen Code on 29 November 2025._
