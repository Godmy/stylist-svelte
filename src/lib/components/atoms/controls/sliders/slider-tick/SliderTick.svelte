<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import type { Snippet } from 'svelte';

  import type { ISliderTickProps } from './types';
  import { SliderTickStyleManager } from './styles';

  /**
   * SliderTick component - A single tick mark on a RangeSlider scale
   *
   * Following SOLID principles:
   * - Single Responsibility: Only handles slider tick rendering
   * - Open/Closed: Extendable through properties but closed for modification
   * - Liskov Substitution: Can be substituted with other display components
   * - Interface Segregation: Small focused interface
   * - Dependency Inversion: Depends on abstractions (interfaces) rather than concretions
   *
   * @param value - The tick value
   * @param position - Percentage position on the scale
   * @param active - Whether the tick is active (in range)
   * @param label - Label text (optional)
   * @param class - Additional CSS classes
   * @param content - Custom content to display
   * @returns A tick mark on a slider scale
   */
  type Props = ISliderTickProps;

  let {
    value = 0,
    position = 0,
    active = false,
    label,
    class: className = '',
    content,
    ...restProps
  }: Props = $props();

  let style = $derived(SliderTickStyleManager.getStyle(position));
  let classes = $derived(SliderTickStyleManager.getBaseClasses(active, className));
  let labelContainerClasses = $derived(SliderTickStyleManager.getLabelContainerClasses());
</script>

<div
  class={classes}
  style={style}
  {...restProps}
>
  {#if label || content}
    <div class={labelContainerClasses}>
      {#if content}
        {@render content()}
      {:else}
        {label || value}
      {/if}
    </div>
  {/if}
</div>