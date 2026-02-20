# ADR 12: Component Library Error Fixes and Migration Solutions

## Status

Accepted

## Context

During the migration to Svelte 5 and the development of the stylist-svelte component library, numerous errors and warnings were identified through static analysis tools. These errors fall into several categories that need systematic solutions to ensure code quality, maintainability, and compliance with Svelte 5 best practices.

## Decision

We will implement systematic fixes for the seven main types of errors identified in the component library and document the solutions for future reference.

## Error Types and Solutions

### Type 1: Svelte 5 Syntax and Deprecation Warnings

**Problem**: Svelte 5 introduces new syntax that deprecates older patterns.

**Common Examples**:

- `on:event` syntax deprecated in favor of `on{event}` syntax (`on:click` → `onclick`, `on:change` → `onchange`, etc.)
- Use of `<slot>` for parent content instead of `{@render ...}`
- Mixed syntax in same file

**Solutions**:

- Replace all `on:event` with `on{event}` syntax (e.g., `on:click` → `onclick`, `on:change` → `onchange`)
- Replace `<slot>{fallback}</slot>` with `{@render typeof $$slots.default === 'function' ? $$slots.default() : fallback}`
- Replace `<slot />` with `{@render $$slots.default?.()}` for empty slots
- Ensure consistent syntax throughout each file

### Type 2: TypeScript Type Errors

**Problem**: Various TypeScript type mismatches and incorrect generic usage.

**Common Examples**:

- Generic types without type arguments: `HTMLAttributes<T>` requires type argument
- Indexing errors: Element implicitly has 'any' type when accessing object properties dynamically
- Type mismatches: String literals not assignable to 'never' type
- Missing module dependencies: Cannot find module like 'date-fns'

**Solutions**:

- Add required type arguments to generic types: `HTMLAttributes<HTMLElement>` instead of `HTMLAttributes`
- Define specific types for indexing operations
- Use type assertions with proper type definitions
- Install missing dependencies if required or remove unused imports

### Type 3: Accessibility Issues

**Problem**: Components lack proper accessibility attributes and keyboard support.

**Common Examples**:

- Form labels not associated with controls
- Visible elements with click events missing keyboard event handlers
- Static elements with interactions missing ARIA roles
- Redundant ARIA roles

**Solutions**:

- Add proper `for`/`id` associations for labels and inputs
- Add `onkeydown` handlers with Enter/Space support for interactive elements
- Add appropriate ARIA roles to interactive elements
- Remove redundant ARIA roles

### Type 4: CSS and Styling Issues

**Problem**: Unused CSS selectors and Tailwind CSS processing issues.

**Common Examples**:

- Unused CSS selectors causing warnings
- Unknown `@apply` rules (often false positives from static analysis)
- Empty CSS rulesets

**Solutions**:

- Remove truly unused CSS selectors
- Consider that `@apply` warnings may be false positives if Tailwind is properly configured
- Remove empty CSS rulesets

### Type 5: JS/Svelte Syntax Errors

**Problem**: Structural and syntax issues in component implementations.

**Common Examples**:

- Missing expected tokens
- Unexpected block closing tags
- Invalid state placements (`$state` in wrong locations)
- Wrong attribute usage (like `bind:` with non-bindable properties)

**Solutions**:

- Add missing tokens like closing braces or parentheses
- Fix incorrect block closing tags
- Use `$state()` only as variable initializers or class field declarations
- Verify bindable properties in component interfaces

### Type 6: Component Props and Attributes Issues

**Problem**: Component usage mismatches between provided and expected properties.

**Common Examples**:

- Missing required properties like 'id' and 'label' for form components
- Passing properties that don't exist on component interfaces
- Issues with event binding

**Solutions**:

- Ensure all required props are provided when using components
- Check component interfaces for accepted properties
- Use correct event binding syntax

### Type 7: Nesting and Structure Issues

**Problem**: Invalid HTML structure and element nesting.

**Common Examples**:

- Invalid nesting like `<button>` inside `<button>`
- Self-closing tags for non-void elements

**Solutions**:

- Avoid placing interactive elements inside other interactive elements
- Use proper opening and closing tags for non-void elements
- Use divs or other appropriate elements when button nesting is needed

## Implementation Guidelines

### For Svelte 5 Syntax Migration:

1. **Event Handler Syntax:**

   ```svelte
   <!-- OLD -->
   <button on:click={handleClick}>Click me</button>

   <!-- NEW -->
   <button onclick={handleClick} role="button">Click me</button>
   ```

2. **Slot Syntax:**

   ```svelte
   <!-- OLD -->
   <div class="wrapper">
     <slot />
   </div>

   <!-- NEW -->
   <div class="wrapper">
     {@render typeof $$slots.default === 'function' ? $$slots.default() : null}
   </div>
   ```

### For TypeScript Fixes:

1. **Generic Type Arguments:**

   ```typescript
   // OLD
   let props: { name: string } & HTMLAttributes = $props();

   // NEW
   let props: { name: string } & HTMLAttributes<HTMLElement> = $props();
   ```

2. **Indexing Fixes:**

   ```typescript
   // OLD
   const sizeClasses = $derived(
   	{
   		small: 'text-sm',
   		medium: 'text-base',
   		large: 'text-lg'
   	}[size]
   ); // Could cause 'any' type error

   // NEW
   type Size = 'small' | 'medium' | 'large';
   const sizeClasses = $derived(
   	{
   		small: 'text-sm',
   		medium: 'text-base',
   		large: 'text-lg'
   	}[size as Size]
   );
   ```

### For Accessibility Fixes:

1. **Label Associations:**

   ```svelte
   <!-- OLD -->
   <label>Name</label>
   <input id="name-input" bind:value={name} />

   <!-- NEW -->
   <label for="name-input">Name</label>
   <input id="name-input" bind:value={name} />
   ```

2. **Interactive Elements:**

   ```svelte
   <!-- OLD -->
   <div class="clickable-area" on:click={handleClick}>Clickable Area</div>

   <!-- NEW -->
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
   	Clickable Area
   </div>
   ```

## Consequences

### Positive

- Improved code quality and maintainability
- Better Svelte 5 compliance
- Enhanced accessibility
- Reduced warnings and errors
- Clear documentation for future development

### Negative

- Requires significant refactoring effort
- Risk of introducing new bugs during the migration process

### Mitigation

- Apply fixes systematically with comprehensive testing
- Use automated tools where possible
- Implement gradual migration approach

## Alternatives Considered

1. **Ignore deprecation warnings**: Would lead to technical debt and make future upgrades harder
2. **Continue using old syntax**: Would prevent adoption of new Svelte 5 features and improvements
3. **Partial fixes**: Would leave inconsistencies in the codebase

## References

- [Svelte 5 Runes Documentation](https://svelte.dev/docs/svelte/runes)
- [Svelte 5 Migration Guide](https://svelte.dev/docs/svelte/v5-migration-guide)
- [Svelte Accessibility Tutorial](https://svelte.dev/tutorial/a11y-intro)

## Related ADRs

- ADR 0001: Use Svelte 5 Runes for State Management
- ADR 0002: Use Tailwind CSS for Styling
- ADR 0004: Component Architecture and Structure
