# Svelte 5 Component Library Code Fix Cookbook (for AI Models)

## Overview

This cookbook provides specific instructions for AI models to identify and fix common code issues in Svelte 5 component libraries. The solutions are based on real code within the project and ensure consistency with current project architecture.

## 1. Slot Syntax Migration to Children Prop

### Problem Identification
Look for deprecated syntax: `{#if $$slots.default}` or `$$slots.default` or `<slot />`

### Fix Implementation
Replace with `children` prop as follows:

**Before:**
```svelte
{#if $$slots.default}
  <slot />
{/if}

<!-- Or -->
{@render $$slots.default()}
```

**After:**
```svelte
<script lang="ts">
  import type { Snippet } from 'svelte';
  
  type Props = {
    children?: Snippet;
    // other props
  }
  
  let { children, ...restProps }: Props = $props();
</script>

{#if children}
  {@render children()}
{/if}
```

### Priority Implementation
Always implement the priority system:
1. If `children` prop is provided, it takes precedence
2. Otherwise, use `content` prop if available
3. Then `label` prop if available
4. Finally, use default text content

Add comment: `<!-- Priority: if children is passed, it will be rendered, otherwise content is used -->`

## 2. Event Handler Syntax Migration

### Problem Identification
Look for deprecated event syntax: `on:click`, `on:change`, `on:input`, etc.

### Fix Implementation
Replace with attribute syntax:

**Before:**
```svelte
<button on:click={handleClick} on:change={handleChange}>
  Click me
</button>

<input 
  type="text"
  on:input={handleInput}
  on:focus={handleFocus}
  on:blur={handleBlur}
/>
```

**After:**
```svelte
<button onclick={handleClick} onchange={handleChange} role="button">
  Click me
</button>

<input 
  type="text"
  oninput={handleInput}
  onfocus={handleFocus}
  onblur={handleBlur}
/>
```

### Comprehensive Mapping
- `on:click` → `onclick`
- `on:change` → `onchange`
- `on:input` → `oninput`
- `on:focus` → `onfocus`
- `on:blur` → `onblur`
- `on:mouseenter` → `onmouseenter`
- `on:mouseleave` → `onmouseleave`
- `on:contextmenu` → `oncontextmenu`
- `on:dragover` → `ondragover`
- `on:drop` → `ondrop`
- `on:wheel` → `onwheel`
- `on:mousedown` → `onmousedown`
- `on:mousemove` → `onmousemove`
- `on:mouseup` → `onmouseup`
- `on:mouseout` → `onmouseout`
- `on:dblclick` → `ondblclick`

## 3. Slot Syntax Migration

### Problem Identification
Look for: `Using '<slot>' to render parent content is deprecated. Use '{@render ...}' tags instead`

### Fix Implementation
Replace `<slot>` usage with `$$slots` API:

**Before:**
```svelte
<div class="container">
  <slot />
</div>

<!-- With fallback -->
<div class="container">
  <slot>Default content</slot>
</div>

<!-- Conditional slot -->
<div class="container">
  {#if condition}
    <slot />
  {/if}
</div>
```

**After:**
```svelte
<div class="container">
  {@render typeof $$slots.default === 'function' ? $$slots.default() : null}
</div>

<!-- With fallback -->
<div class="container">
  {@render typeof $$slots.default === 'function' ? $$slots.default() : 'Default content'}
</div>

<!-- Conditional slot -->
<div class="container">
  {#if condition}
    {@render typeof $$slots.default === 'function' ? $$slots.default() : null}
  {/if}
</div>
```

## 4. Mouse Event Typing Issues

### Problem Identification
Look for: `import { MouseEvent } from 'svelte/elements';` or similar incorrect imports

### Fix Implementation
Remove incorrect imports. MouseEvent is available globally:

**Before:**
```typescript
import { MouseEvent } from 'svelte/elements'; // Incorrect - does not exist

function handleClick(e: MouseEvent) {
  // code
}
```

**After:**
```typescript
// Remove the incorrect import
// MouseEvent is available globally

function handleClick(e: MouseEvent) {
  // code
}
```

## 5. Component Type Definition Issues

### Problem Identification
Look for: Interfaces like `GraphEdge`, `GraphNode` in `$lib/types/components.ts` that are only used in one or two components

### Fix Implementation
Move these types to component files locally:

**Before (in $lib/types/components.ts):**
```typescript
export interface GraphNode {
  id: string;
  name: string;
  // other properties
}
```

**After (in component file):**
```svelte
<script lang="ts">
  // Local definition in component file
  interface GraphNode {
    id: string;
    name: string;
    // other properties
  }
  
  let { node }: { node: GraphNode } = $props();
</script>
```

## 6. Event Handler Type Conflicts

### Problem Identification
Look for: `onkeydown={(e: KeyboardEvent) => handleClick(e)}` where `handleClick` expects `MouseEvent`

### Fix Implementation
Create appropriate event when needed:

```svelte
onkeydown={(e: KeyboardEvent) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    const mouseEvent = new MouseEvent('click', {
      view: window,
      bubbles: true,
      cancelable: true
    });
    handleClick(mouseEvent);
  }
}}
```

## 7. NumberFlow Component Type Fixes

### Problem Identification
In `NumberFlow.svelte` and `NumberFlow.story.svelte`, look for type mismatches related to `format` prop

### Fix Implementation
**In NumberFlow.story.svelte:**
```svelte
format={getFormatOptions(props.format as string) as Intl.NumberFormatOptions}
```

**In NumberFlow.svelte:**
- Ensure `export type NumberFlowProps` is properly exported
- Keep `export interface TimingConfig` as is

## 8. HTML Attributes Import Fix

### Problem Identification
Look for: `HTMLSVGAttributes`, `HTMLLabelAttributes`, `HTMLPreAttributes`, `HTMLCodeAttributes` imports from 'svelte/elements'

### Fix Implementation
Replace with generic HTMLAttributes:

**Before:**
```typescript
import type { HTMLSVGAttributes } from 'svelte/elements';
import type { HTMLLabelAttributes } from 'svelte/elements';
import type { HTMLPreAttributes } from 'svelte/elements';
import type { HTMLCodeAttributes } from 'svelte/elements';
```

**After:**
```typescript
import type { HTMLAttributes } from 'svelte/elements';
// Then use with the appropriate element type:
// For SVG: HTMLAttributes<SVGSVGElement>
// For Label: HTMLAttributes<HTMLLabelElement>
// For Pre: HTMLAttributes<HTMLPreElement>
// For Code: HTMLAttributes<HTMLElement>
```

## 9. TypeScript Indexing Issues

### Problem Identification
Look for: `Element implicitly has an 'any' type because expression of type 'any' can't be used to index type`

### Fix Implementation
When indexing objects with string literals, define the type explicitly:

**Before:**
```typescript
type Props = {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
};

// This causes the error:
let sizeClasses = $derived({
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-3 py-1 text-sm', 
  lg: 'px-4 py-1.5 text-base'
}[size]); // Error here
```

**After:**
```typescript
type Props = {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
};

// Define the specific type for indexing:
type Size = 'sm' | 'md' | 'lg';

let sizeClasses = $derived({
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-3 py-1 text-sm', 
  lg: 'px-4 py-1.5 text-base'
}[size as Size]); // Fixed
```

### Generic Types Without Type Arguments
**Error message**: `Type 'HTMLAttributes<T>' requires 1 type argument(s)`

**Before:**
```typescript
let props: { 
  label: string;
} & HTMLAttributes = $props();
```

**After:**
```typescript
import type { HTMLAttributes } from 'svelte/elements';

let props: { 
  label: string;
} & HTMLAttributes<HTMLElement> = $props();
```

## 10. Component Conflict Resolution

### Problem Identification
Look for: Components with identical names in different levels (atoms/organisms). Example: TableBody, TableCell, TableHeader, TableRow exist in organisms, not in atoms.

### Fix Implementation
Remove duplicate components from simpler levels (atoms) if they exist in more complex levels (organisms).

## 11. Accessibility Fixes

### Problem: Form labels not associated with controls
**Error message**: `A form label must be associated with a control`

**Before:**
```svelte
<label>Username</label>
<input bind:value={username} id="username-field" />
```

**After:**
```svelte
<label for="username-field">Username</label>
<input bind:value={username} id="username-field" />
```

### Problem: Click events without keyboard equivalents
**Error message**: `Visible, non-interactive elements with a click event must be accompanied by a keyboard event handler`

**Before:**
```svelte
<div class="clickable-area" on:click={handleClick}>
  Clickable area
</div>
```

**After:**
```svelte
<div 
  class="clickable-area" 
  onclick={handleClick}
  role="button"
  tabindex="0"
  onkeydown={(e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick();
    }
  }}
>
  Clickable area
</div>
```

### Problem: Static elements with interactions lacking ARIA roles
**Error message**: `<div>` with a click handler must have an ARIA role

**Before:**
```svelte
<div onclick={handleClick}>
  Interactive element
</div>
```

**After:**
```svelte
<div 
  onclick={handleClick}
  role="button"
  tabindex="0"
>
  Interactive element
</div>
```

## 12. CSS and Styling Issues

### Problem: Unused CSS selectors
**Error message**: `Unused CSS selector ".unused-class"`

**Solution**: Remove unused CSS selectors from your component files.

**Before:**
```svelte
<style>
  .used-class {
    color: red;
  }
  
  .unused-class {  /* This generates a warning */
    color: blue;
  }
</style>

<div class="used-class">Content</div>
```

**After:**
```svelte
<style>
  .used-class {
    color: red;
  }
</style>

<div class="used-class">Content</div>
```

## 13. JS/Svelte Syntax Fixes

### Problem: Missing tokens
**Error message**: `Expected token }`

**Before:**
```svelte
<div class="container">
  <Component {prop={value}}  <!-- Missing closing brace -->
</div>
```

**After:**
```svelte
<div class="container">
  <Component {prop={value}} />
</div>
```

### Problem: Incorrect state usage
**Error message**: `$state(...) can only be used as a variable declaration initializer`

**Before:**
```typescript
let myVar;
myVar = $state(initialValue); // Incorrect
```

**After:**
```typescript
let myVar = $state(initialValue); // Correct
```

## 14. Component Props and Attributes Fixes

### Problem: Missing required properties
**Error message**: `Type '{ value: string; placeholder: string; }' is not assignable to type '{ id: string; label: string; ... }'`

**Before:**
```svelte
<Input value="some value" placeholder="Enter text" />
```

**After:**
```svelte
<Input id="input-id" label="Input Label" value="some value" placeholder="Enter text" />
```

### Problem: Non-bindable properties
**Error message**: `Cannot use 'bind:' with this property. It is declared as non-bindable`

**Solution**: Use regular event handlers or make the property bindable in the component.

**Before:**
```svelte
<Component bind:nonBindableProp={value} />
```

**After:**
```svelte
<!-- In parent component -->
<Component nonBindableProp={value} on:change={(e) => value = e.detail.newValue} />

<!-- Or in child component, make the prop bindable: -->
let { value = $bindable() } = $props();
```

## 15. Nested Elements Issues

### Problem: Invalid element nesting
**Error message**: `'<button>' cannot be a descendant of '<button>'`

**Before:**
```svelte
<button class="outer-button">
  Outer button
  <button class="inner-button">Inner button</button>
</button>
```

**After:**
```svelte
<div class="outer-button-wrapper">
  Outer button
  <button class="inner-button">Inner button</button>
</div>
```

### Problem: Self-closing non-void elements
**Error message**: `Self-closing HTML tags for non-void elements are ambiguous`

**Before:**
```svelte
<div class="content" />
<textarea placeholder="Enter text" />
```

**After:**
```svelte
<div class="content"></div>
<textarea placeholder="Enter text"></textarea>
```

## 16. Testing and Verification Commands

After implementing fixes:

1. Run `yarn check` - ensures type safety
2. Run `yarn build` - ensures successful compilation
3. Both commands must complete successfully without errors

## 17. File Structure Verification

Verify these files after fixes:
- `$lib/components/atoms/index.ts` - updated exports as needed
- `$lib/types/components.ts` - remove component-specific types
- Component files - proper children prop implementation
- Story files - updated type usage

## General Implementation Sequence

1. Find all components in `src/lib/components/atoms/`
2. Add them to appropriate `index.ts` files
3. Apply above fixes to each component
4. Run `yarn check` and fix any errors
5. Run `yarn build` to verify everything compiles correctly
6. Repeat until both commands complete successfully
7. Verify accessibility features still work properly
8. Test components with different props and states
9. Ensure UI remains visually consistent

## Component-Specific Checks

For each component, ensure:
1. Add `import type { Snippet } from 'svelte'`
2. Add `children?: Snippet` to props
3. Replace `$$slots.default` with `children`
4. Add priority comment
5. Update event handlers to new syntax
6. Verify type definitions are correct

## Story File Checks

For each story file:
1. Replace imports like `import('$lib/components/...').TypeName` with specific types
2. Use `props: Record<string, any>` for temporary type solutions
3. Apply explicit type casting when necessary
4. Ensure format conversions use proper casting: `as string` and `as Intl.NumberFormatOptions`

## General Testing Steps

After applying fixes:

1. Run `yarn check` to verify that the specific errors have been resolved
2. Check that components still function as expected
3. Verify that accessibility features still work properly
4. Test different component props and states
5. Make sure nothing is visually broken

## Prevention Tips

1. Use the latest version of Svelte extension in your editor to catch syntax issues early
2. Enable TypeScript strict mode to catch type errors during development
3. Run `yarn check` regularly during development
4. Maintain updated dependencies
5. Follow Svelte 5 runes syntax from the beginning for new components

This cookbook is based on actual code patterns found in the project and verified against real implementation examples.