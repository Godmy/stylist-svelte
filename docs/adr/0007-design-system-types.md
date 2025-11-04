# ADR 0007: Design System Types and Variants

**Status:** Accepted
**Date:** 2025-01-04
**Decision Makers:** Development Team

## Context

We need to define consistent type definitions for our design system across all components to ensure a unified look and feel. This includes common variants, sizes, and other design properties that should be standardized across the library.

## Decision

We will create a set of shared type definitions in a central location (`src/lib/types/components.ts`) with common design system properties.

## Rationale

### Advantages

1. **Consistency**
   - All components use the same variants and sizes
   - Ensures design system uniformity
   - Reduces inconsistencies across components

2. **Maintainability**
   - Changes to design system affect all components
   - Single source of truth for design properties
   - Easier to update design system

3. **Developer Experience**
   - Type safety for design properties
   - Better autocomplete and IDE support
   - Clear documentation of available options

4. **Scalability**
   - Easy to add new variants or sizes
   - Consistent across new and existing components
   - Follows established patterns

### Types Defined

```typescript
// src/lib/types/components.ts
export type Variant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'ghost' | 'link';
export type Size = 'sm' | 'md' | 'lg' | 'xl';
export type Position = 'top' | 'bottom' | 'left' | 'right';
export type Orientation = 'horizontal' | 'vertical';

export interface BaseComponentProps {
  class?: string;
  'data-testid'?: string;
}
```

## Consequences

### Positive

- ✅ Consistent UI across components
- ✅ Better type safety and development experience
- ✅ Easier design system maintenance
- ✅ Clear documentation of available options

### Negative

- ❌ Potential overhead for custom implementations
- ❌ Need to update all components to use these types
- ❌ Limits flexibility in some cases

### Mitigation

- Allow class overrides for custom styling
- Provide escape hatches where needed
- Document how to extend these types

## Alternatives Considered

### 1. Inline Types in Each Component
**Pros:** Component-specific flexibility
**Cons:** Inconsistencies, maintenance overhead
**Rejected:** Would create inconsistencies

### 2. CSS Custom Properties Only
**Pros:** Pure CSS approach
**Cons:** No TypeScript support, harder to maintain
**Rejected:** Would lack type safety

### 3. Separate Files per Type
**Pros:** More granular control
**Cons:** More files to maintain
**Rejected:** Unnecessary complexity for basic types

## References

- [Design System Principles](https://atomicdesign.bradfrost.com/chapter-2/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)

## Related ADRs

- ADR 0002: Use Tailwind CSS for Component Styling
- ADR 0004: Component Architecture and Structure