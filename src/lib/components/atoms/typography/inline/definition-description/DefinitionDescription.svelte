<script lang="ts">
  import type { Snippet } from 'svelte';

  import type { DefinitionDescriptionProps } from './types';
  import { DefinitionDescriptionStyleManager } from './styles';

  /**
   * DefinitionDescription component - Represents the description part of a definition list.
   *
   * Following SOLID principles:
   * - Single Responsibility: Only handles component rendering and state.
   * - Open/Closed: Extendable through properties but closed for modification.
   * - Liskov Substitution: Can be substituted with other similar components.
   * - Interface Segregation: Small focused interface.
   * - Dependency Inversion: Depends on abstractions (interfaces) rather than concretions.
   *
   * @param children - The content of the definition description.
   * @param class - Additional CSS classes.
   * @returns An accessible, styled definition description element.
   */
  let {
    children,
    class: className = '',
    ...restProps
  }: DefinitionDescriptionProps = $props();

  let classes: string = $derived(
    DefinitionDescriptionStyleManager.getDefinitionDescriptionClasses(className)
  );
</script>

<dd class={classes} {...restProps}>
  {#if children}
    {@render children()}
  {/if}
</dd>