<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import type { Snippet } from 'svelte';

  import type { IColorSwatchProps } from './types';
  import { ColorSwatchStyleManager } from './styles';

  /**
   * ColorSwatch component - A color sample (square)
   *
   * Following SOLID principles:
   * - Single Responsibility: Only handles color swatch rendering
   * - Open/Closed: Extendable through properties but closed for modification
   * - Liskov Substitution: Can be substituted with other display components
   * - Interface Segregation: Small focused interface
   * - Dependency Inversion: Depends on abstractions (interfaces) rather than concretions
   *
   * @param color - HEX, RGB or color name
   * @param size - Size of the square (in pixels)
   * @param class - Additional CSS classes
   * @param content - Content to overlay on the color swatch
   * @returns A square color sample with border
   */
  type Props = IColorSwatchProps;

  let {
    color = '#0ea5e9', // Default to Indigo 500
    size = 32,
    class: className = '',
    content,
    ...restProps
  }: Props = $props();

  let style = $derived(ColorSwatchStyleManager.getInlineStyle(color, size));
  let baseClasses = $derived(ColorSwatchStyleManager.getBaseClasses(className));
</script>

<div
  class={baseClasses}
  style={style}
  {...restProps}
>
  {#if content}
    <div class="w-full h-full flex items-center justify-center">
      {@render content()}
    </div>
  {/if}
</div>