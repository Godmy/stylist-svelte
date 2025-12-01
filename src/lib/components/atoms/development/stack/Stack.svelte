<script lang="ts">
  /**
   * Stack component following SOLID principles
   *
   * Single Responsibility: Manages layout arrangement of child elements
   * Open/Closed: Extensible through props without modifying the component
   * Liskov Substitution: Can be used as a layout container anywhere
   * Interface Segregation: Provides clear interface through well-defined props
   * Dependency Inversion: Depends on abstractions (types and style manager) not concretions
   */
  import { StackStyleManager } from './styles';
  import type { IStackProps } from './types';

  const {
    children,
    direction = 'vertical',
    spacing = '1rem',
    align = 'stretch',
    justify = 'start',
    class: className = ''
  }: IStackProps = $props();

  // Using Svelte 5 runes for derived values
  const gap = $derived(StackStyleManager.getGapValue(spacing));
  const classes = $derived(StackStyleManager.getAllClasses(
    direction,
    align,
    justify,
    className
  ));
</script>

<div
  style:gap
  class={classes}
  role="group"
  aria-label="Stack layout container"
>
  {@render children?.()}
</div>
