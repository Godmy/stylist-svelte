<script lang="ts">
  import type { Snippet } from 'svelte';

  import type { DefinitionTermProps } from './types';
  import { DefinitionTermStyleManager } from './styles';

  /**
   * DefinitionTerm component - Represents the term part of a definition list.
   *
   * Following SOLID principles:
   * - Single Responsibility: Only handles component rendering and state.
   * - Open/Closed: Extendable through properties but closed for modification.
   * - Liskov Substitution: Can be substituted with other similar components.
   * - Interface Segregation: Small focused interface.
   * - Dependency Inversion: Depends on abstractions (interfaces) rather than concretions.
   *
   * @param children - The content of the definition term.
   * @param class - Additional CSS classes.
   * @returns An accessible, styled definition term element.
   */
  let {
    children,
    class: className = '',
    ...restProps
  }: DefinitionTermProps = $props();

  let classes: string = $derived(
    DefinitionTermStyleManager.getDefinitionTermClasses(className)
  );
</script>

<dt class={classes} {...restProps}>
  {#if children}
    {@render children()}
  {/if}
</dt>