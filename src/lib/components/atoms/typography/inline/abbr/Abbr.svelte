<script lang="ts">
  import type { Snippet } from 'svelte';

  import type { AbbrProps } from './types';
  import { DEFAULT_ABBR_TITLE } from './constant';
  import { AbbrStyleManager } from './styles';

  /**
   * Abbr component - Represents an abbreviation or an acronym.
   *
   * Following SOLID principles:
   * - Single Responsibility: Only handles component rendering and state.
   * - Open/Closed: Extendable through properties but closed for modification.
   * - Liskov Substitution: Can be substituted with other similar components.
   * - Interface Segregation: Small focused interface.
   * - Dependency Inversion: Depends on abstractions (interfaces) rather than concretions.
   *
   * @param children - The content of the abbreviation.
   * @param title - The full description of the abbreviation, shown on hover.
   * @param class - Additional CSS classes.
   * @returns An accessible, styled abbreviation element.
   */
  let {
    children,
    title = DEFAULT_ABBR_TITLE,
    class: className = '',
    ...restProps
  }: AbbrProps = $props();

  let classes: string = $derived(
    AbbrStyleManager.getAbbrClasses(className)
  );
</script>

<abbr class={classes} title={title} {...restProps}>
  {#if children}
    {@render children()}
  {/if}
</abbr>