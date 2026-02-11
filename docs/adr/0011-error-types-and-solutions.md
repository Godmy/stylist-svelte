# ADR 0011: Error Types and Solutions for Svelte 5 Migration

**Status:** Accepted  
**Date:** 2025-11-04  
**Team:** stylist-svelte

## Context

During the migration to Svelte 5, the codebase experienced numerous errors that needed systematic fixing. These errors fell into several categories that required standard solutions to ensure consistency across the codebase.

## Decision

We decided to systematically categorize and fix the different error types that emerged during the Svelte 5 migration, creating standard approaches that can be applied consistently across all components.

## Error Types and Solutions

### 1. Svelte 5 Event Syntax Migration

**Error Type:** `on:event` syntax being deprecated in favor of `on{event}` syntax (`on:click` → `onclick`, `on:change` → `onchange`, etc.)

**Solution:** Replace all instances of `on:EVENT` with `onEVENT`:

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

### 2. Svelte 5 Slot Syntax Migration

**Error Type:** Use of `<slot>` for parent content instead of `{@render ...}`

**Solution:** Replace `<slot>{fallback}</slot>` with `{@render typeof $$slots.default === 'function' ? $$slots.default() : fallback}`

### 3. TypeScript Generic Type Issues

**Error Type:** Generic types without type arguments: `HTMLAttributes<T>` requires 1 argument

**Solution:**

- Use `HTMLAttributes<any>` when type isn't critical
- Define specific types like `type SomeSize = 'sm' | 'md' | 'lg'` and use `size as SomeSize` when indexing objects
- Properly define and import types instead of using generic imports

### 4. Module Import Issues

**Error Type:** Missing module dependencies like 'date-fns'

**Solution:**

- Replace external dependencies with native implementations when possible
- Add missing dependencies to package.json if they are critical
- Create utility functions to replace external libraries for basic functionality

### 5. Prop Compatibility Issues

**Error Type:** Component props mismatch (e.g., passing properties that don't exist on component interfaces)

**Solution:**

- Ensure all required props are provided to child components
- Add missing required props to parent components
- Align component interfaces to ensure compatibility

### 6. Accessibility Issues

**Error Type:** Form labels not associated with controls, missing keyboard handlers, etc.

**Solution:**

- Add proper `id` and `label` associations for form controls
- Implement proper ARIA attributes
- Add keyboard event handlers alongside mouse events where appropriate

## Consequences

### Positive

- ✅ Consistent Svelte 5 syntax across the codebase
- ✅ Better type safety and fewer TypeScript errors
- ✅ Improved code maintainability
- ✅ Proper accessibility compliance
- ✅ Clear guidelines for future component development

### Negative

- ❌ Requires updating numerous files across the codebase
- ❌ Learning curve for new syntax patterns
- ❌ Risk of introducing bugs during the migration process

### Mitigation

- Apply changes systematically with thorough testing
- Use automated code review tools to catch errors early
- Create comprehensive documentation and coding guidelines
- Implement proper CI/CD checks to prevent regressions

## References

- [Svelte 5 Migration Guide](https://svelte.dev/docs/svelte/v5-migration-guide)
- [Svelte 5 Runes Documentation](https://svelte.dev/docs/svelte/$state)

## Related ADRs

- ADR 0001: Use Svelte 5 Runes for State Management
- ADR 0002: Use Tailwind CSS for Styling
