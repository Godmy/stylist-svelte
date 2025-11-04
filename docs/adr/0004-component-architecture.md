# ADR 0004: Component Architecture and Structure

**Status:** Accepted
**Date:** 2025-01-03
**Decision Makers:** Development Team

## Context

We need to organize 38+ UI components in a maintainable and scalable way.

## Decision

We will use **Atomic Design methodology** with four tiers:
- **Atoms** - Basic building blocks
- **Molecules** - Simple composite components
- **Organisms** - Complex composite components
- **Feedback** - User feedback components

## Rationale

### Atomic Design Benefits

1. **Clear Hierarchy**
   - Easy to find components
   - Logical organization
   - Scalable structure

2. **Reusability**
   - Atoms are highly reusable
   - Molecules combine atoms
   - Organisms combine molecules

3. **Predictability**
   - Consistent patterns
   - Clear dependencies
   - Easy onboarding

4. **Industry Standard**
   - Well-known methodology
   - Good documentation
   - Community familiarity

## Structure

```
src/lib/components/
├── atoms/              # 9 components
│   ├── Button.svelte
│   ├── Input.svelte
│   ├── Textarea.svelte
│   ├── Select.svelte
│   ├── Checkbox.svelte
│   ├── Avatar.svelte
│   ├── Badge.svelte
│   ├── Spinner.svelte
│   └── Tooltip.svelte
│
├── molecules/          # 5 components
│   ├── SearchBar.svelte
│   ├── CopyButton.svelte
│   ├── EmptyState.svelte
│   ├── FormFieldGroup.svelte
│   └── FormSection.svelte
│
├── organisms/          # 19 components
│   ├── Modal.svelte
│   ├── Pagination.svelte
│   ├── Breadcrumbs.svelte
│   ├── ConfirmDialog.svelte
│   ├── Table.svelte (+ 5 subcomponents)
│   ├── Tabs/ (5 subcomponents)
│   └── Accordion/ (4 subcomponents)
│
└── feedback/           # 5 components
    ├── Alert.svelte
    ├── ProgressBar.svelte
    ├── Skeleton.svelte
    ├── CardSkeleton.svelte
    └── TableSkeleton.svelte
```

## Component Guidelines

### 1. Atoms

**Rules:**
- ✅ No dependencies on other components
- ✅ Single responsibility
- ✅ Highly reusable
- ✅ Minimal props

**Example:**
```svelte
<!-- Button.svelte -->
<script lang="ts">
  type Props = {
    variant?: 'primary' | 'secondary';
    size?: 'sm' | 'md' | 'lg';
    disabled?: boolean;
  };

  let { variant = 'primary', size = 'md', disabled = false }: Props = $props();
</script>

<button class="btn {variant} {size}" {disabled}>
  <slot />
</button>
```

### 2. Molecules

**Rules:**
- ✅ Compose 2-3 atoms
- ✅ Single purpose
- ✅ Some logic allowed
- ✅ Reusable in organisms

**Example:**
```svelte
<!-- SearchBar.svelte -->
<script lang="ts">
  import { Input } from '../atoms';
  import { debounce } from '$lib/utils';

  let { value, onSearch }: Props = $props();
  const debouncedSearch = debounce(onSearch, 300);
</script>

<Input
  bind:value
  oninput={() => debouncedSearch(value)}
  placeholder="Search..."
/>
```

### 3. Organisms

**Rules:**
- ✅ Complex compositions
- ✅ Business logic allowed
- ✅ May have state
- ✅ Feature-complete

**Example:**
```svelte
<!-- Modal.svelte -->
<script lang="ts">
  import { Button } from '../atoms';

  let { isOpen, onClose, title }: Props = $props();
</script>

{#if isOpen}
  <div class="modal-overlay" onclick={onClose}>
    <div class="modal-content">
      <h2>{title}</h2>
      <slot />
      <Button onclick={onClose}>Close</Button>
    </div>
  </div>
{/if}
```

### 4. Feedback

**Rules:**
- ✅ User feedback purpose
- ✅ Visual indicators
- ✅ Can be any complexity
- ✅ Separate category for clarity

**Example:**
```svelte
<!-- Alert.svelte -->
<script lang="ts">
  let { variant = 'info', closable = false }: Props = $props();
  let open = $state(true);
</script>

{#if open}
  <div class="alert {variant}">
    <slot />
    {#if closable}
      <button onclick={() => open = false}>×</button>
    {/if}
  </div>
{/if}
```

## Naming Conventions

### Component Names
- PascalCase: `Button.svelte`
- Descriptive: `ConfirmDialog.svelte`
- Specific: `TableHeader.svelte`, not `Header.svelte`

### Props
- camelCase: `onClick`, `isDisabled`
- Boolean prefix: `is`, `has`, `should`
- Event handlers: `on` prefix

### Files
```
Button.svelte           # Component
Button.test.ts          # Tests
Button.story.svelte     # Playground story
index.ts                # Exports
```

## Props Patterns

### 1. Variant Props
```typescript
type Variant = 'primary' | 'secondary' | 'danger';
variant?: Variant = 'primary';
```

### 2. Size Props
```typescript
type Size = 'sm' | 'md' | 'lg';
size?: Size = 'md';
```

### 3. State Props
```typescript
disabled?: boolean = false;
loading?: boolean = false;
error?: boolean = false;
```

### 4. Event Props
```typescript
onclick?: () => void;
onchange?: (value: string) => void;
```

### 5. Style Props
```typescript
class?: string = '';
style?: string = '';
```

## Export Strategy

### Category Exports
```typescript
// components/atoms/index.ts
export { default as Button } from './Button.svelte';
export { default as Input } from './Input.svelte';
// ... all atoms

// Main lib/index.ts
export * from './components/atoms';
export * from './components/molecules';
export * from './components/organisms';
export * from './components/feedback';
```

### Tree Shaking
Users can import specific categories:
```typescript
// Import all atoms
import { Button, Input } from 'stylist-svelte/components/atoms';

// Or specific components
import { Button } from 'stylist-svelte';
```

## Component Composition

### Good Example
```svelte
<!-- FormSection uses FormFieldGroup -->
<FormSection title="User Info">
  <FormFieldGroup label="Name">
    <Input id="name" />
  </FormFieldGroup>

  <FormFieldGroup label="Email">
    <Input id="email" type="email" />
  </FormFieldGroup>
</FormSection>
```

### Bad Example (Anti-pattern)
```svelte
<!-- Atom depending on Organism - WRONG! -->
<Button>
  <Modal /> <!-- Atoms shouldn't contain Organisms -->
</Button>
```

## Accessibility

All components must:
- ✅ Include ARIA attributes
- ✅ Support keyboard navigation
- ✅ Have proper focus management
- ✅ Include screen reader text

```svelte
<button
  aria-label="Close modal"
  aria-pressed={isOpen}
  onclick={toggle}
>
  <span aria-hidden="true">×</span>
  <span class="sr-only">Close</span>
</button>
```

## References

- [Atomic Design by Brad Frost](https://atomicdesign.bradfrost.com/)
- [Component Driven Development](https://www.componentdriven.org/)

## Related ADRs

- ADR 0001: Use Svelte 5 Runes
- ADR 0002: Use Tailwind CSS
