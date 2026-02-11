# ADR 0001: Use Svelte 5 Runes for State Management

**Status:** Accepted
**Date:** 2025-01-03
**Decision Makers:** Development Team

## Context

We need to choose a state management approach for the component library. Svelte offers multiple options:

- Svelte 4 stores (writable, readable, derived)
- Svelte 5 runes ($state, $derived, $effect)
- External state management libraries (Zustand, Pinia, etc.)

## Decision

We will use **Svelte 5 runes** as the primary state management solution for both UI components and the Playground system.

## Rationale

### Advantages

1. **Modern and Future-Proof**
   - Svelte 5 is the latest version
   - Runes are the recommended approach going forward
   - Better performance than Svelte 4 stores

2. **Better Developer Experience**
   - More intuitive syntax: `$state()` vs `writable()`
   - Fine-grained reactivity
   - No need for `.subscribe()` or `$` prefix everywhere

3. **Type Safety**
   - Better TypeScript inference
   - Compile-time error checking
   - IDE autocomplete support

4. **Performance**
   - More efficient reactivity system
   - Less overhead than stores
   - Optimized for modern JavaScript engines

5. **Simplicity**
   - No external dependencies
   - Native Svelte solution
   - Easier to understand and maintain

### Example Comparison

**Svelte 4 Stores:**

```typescript
import { writable, derived } from 'svelte/store';

const count = writable(0);
const doubled = derived(count, ($count) => $count * 2);

count.subscribe((value) => console.log(value));
count.update((n) => n + 1);
```

**Svelte 5 Runes:**

```typescript
let count = $state(0);
let doubled = $derived(count * 2);

$effect(() => {
	console.log(count);
});
count++;
```

## Consequences

### Positive

- ✅ Modern codebase aligned with Svelte's future
- ✅ Better performance and developer experience
- ✅ Simpler code, easier onboarding
- ✅ Native TypeScript support

### Negative

- ❌ Breaking change from Svelte 4
- ❌ Requires Svelte 5.x as peer dependency
- ❌ Some tooling may not fully support runes yet
- ❌ Learning curve for developers familiar with stores

### Mitigation

- Provide clear migration guides
- Document all rune patterns
- Include TypeScript examples
- Offer backward compatibility layer if needed

## Alternatives Considered

### 1. Continue with Svelte 4 Stores

**Pros:** Stable, well-documented, wider compatibility
**Cons:** Outdated, worse DX, performance overhead
**Rejected:** Not future-proof

### 2. External State Management (Zustand, etc.)

**Pros:** Framework-agnostic, powerful features
**Cons:** Additional dependency, overkill for component library
**Rejected:** Unnecessary complexity

### 3. Hybrid Approach (Stores + Runes)

**Pros:** Flexibility, gradual migration
**Cons:** Inconsistent codebase, confusing patterns
**Rejected:** Maintenance nightmare

## References

- [Svelte 5 Runes Documentation](https://svelte.dev/docs/svelte/$state)
- [Svelte 5 Migration Guide](https://svelte.dev/docs/svelte/v5-migration-guide)
- [Performance Benchmarks](https://github.com/sveltejs/svelte/pull/9644)

## Related ADRs

- ADR 0002: Choose Tailwind CSS for Styling
- ADR 0003: Build Playground System with Svelte 5
