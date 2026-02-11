# ADR 0012: Error Types and Solutions in stylist-svelte Library

**Status:** Accepted  
**Date:** 2025-01-04  
**Team:** Stylist-Svelte Development Team

## Context

During the development and migration to Svelte 5, various error types have been identified in the Stylist-Svelte component library. These errors are affecting code quality, maintainability and accessibility. This ADR documents common error types and standardizes their solutions.

## Error Types and Solutions

### 1. Svelte 5 Syntax and Deprecation Warnings

**Problem**: Svelte 5 introduces new syntax and deprecates older patterns like `on:event` syntax in favor of `on{event}` syntax and `<slot>` in favor of `{@render ...}`.

**Common Examples**:

- `on:click` → `onclick`
- `on:change` → `onchange`
- `on:mouseenter` → `onmouseenter`
- `on:mouseleave` → `onmouseleave`
- `<slot />` → `{@render typeof $$slots.default === 'function' ? $$slots.default() : null}`

**Solution**:

- Replace all deprecated `on:event` syntax with new `on{event}` syntax
- Replace `<slot>` with appropriate `{@render ...}` syntax
- Ensure consistent event handler syntax throughout files

### 2. TypeScript Type Errors

**Problem**: Various TypeScript errors including missing type arguments, implicit 'any' types, and incorrect generic usage.

**Common Examples**:

- Generic types without type arguments (`HTMLAttributes<T>` requires type argument)
- Dynamic object indexing without proper typing
- Missing module dependencies

**Solution**:

- Add required type arguments to generic types
- Explicitly type variables and function parameters
- Define specific types for indexing operations
- Install missing dependencies or properly handle optional imports

### 3. Accessibility Issues

**Problem**: Components lack proper accessibility attributes and keyboard support.

**Common Examples**:

- Form labels not associated with controls
- Interactive elements without keyboard equivalents
- Static elements with interactions missing ARIA roles

**Solution**:

- Add proper `for`/`id` associations for labels and controls
- Add `onkeydown` handlers with Enter/Space for click-equivalent elements
- Add appropriate ARIA roles to interactive elements
- Ensure proper focus management

### 4. CSS and Styling Issues

**Problem**: Unused CSS selectors and Tailwind CSS processing issues.

**Common Examples**:

- Unused CSS selectors causing warnings
- Unknown `@apply` rules
- Empty CSS rulesets

**Solution**:

- Remove truly unused CSS selectors
- Verify that Tailwind configuration is properly set up for `@apply`
- Remove empty CSS rulesets

### 5. JS/Svelte Syntax Errors

**Problem**: Structural and syntax issues in component implementations.

**Common Examples**:

- Missing expected tokens
- Invalid state placements
- Wrong attribute usage

**Solution**:

- Add missing tokens like braces, brackets, etc.
- Use `$state()` only as variable declaration initializers or class field declarations
- Verify component interfaces for proper attribute usage

### 6. Component Props and Attributes Issues

**Problem**: Component usage mismatches between provided and expected properties.

**Common Examples**:

- Missing required properties
- Passing properties that don't exist on component interfaces
- Event binding issues

**Solution**:

- Ensure all required props are provided
- Check component interfaces for expected properties
- Verify event binding syntax and component support

### 7. Nesting and Structure Issues

**Problem**: Invalid HTML structure and element nesting.

**Common Examples**:

- `<button>` inside `<button>`
- Self-closing tags for non-void elements

**Solution**:

- Avoid nesting interactive elements unnecessarily
- Use appropriate non-interactive elements like divs when needed
- Use proper opening and closing tags for non-void elements

## Implementation Approach

1. **Systematic Migration**: Address error types systematically, starting with most common ones
2. **Batch Processing**: Fix similar errors across multiple files to ensure consistency
3. **Testing**: Verify functionality remains intact after fixes
4. **Documentation**: Create documentation for future development

## Consequences

### Positive

- Improved code quality and maintainability
- Better Svelte 5 compliance
- Enhanced accessibility
- Reduced warnings and errors
- Clear guidelines for future development

### Negative

- Significant refactoring effort required
- Potential for introducing new bugs during migration
- Learning curve for new syntax patterns

### Mitigation

- Apply fixes systematically with comprehensive testing
- Use automated tools where possible
- Implement gradual migration approach

## Related Documents

- [Component Architecture ADR](./0004-component-architecture.md)
- [Svelte 5 Migration Guide](./0001-use-svelte-5-runes.md)
- [Error Fix Cookbook](../../cookbooks/error_fixes_cookbook.md)
