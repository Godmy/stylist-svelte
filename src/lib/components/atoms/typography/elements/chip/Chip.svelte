<script lang="ts">
  import type { Snippet } from 'svelte';
  import { X } from 'lucide-svelte';

  import type { ChipProps } from './types';
  import {
    DEFAULT_CHIP_LABEL,
    DEFAULT_CHIP_VARIANT,
    DEFAULT_CHIP_SIZE,
    DEFAULT_CHIP_CLOSABLE,
    DEFAULT_CHIP_DISABLED
  } from './constant';
  import { ChipStyleManager } from './styles';

  /**
   * Chip component - A compact component for displaying small pieces of information.
   * If `children` is provided, it will be rendered; otherwise, `label` will be used.
   *
   * Following SOLID principles:
   * - Single Responsibility: Only handles component rendering and state.
   * - Open/Closed: Extendable through properties but closed for modification.
   * - Liskov Substitution: Can be substituted with other similar components.
   * - Interface Segregation: Small focused interface.
   * - Dependency Inversion: Depends on abstractions (interfaces) rather than concretions.
   *
   * @param label - Text content for the chip.
   * @param variant - Color scheme variant of the chip.
   * @param size - Size of the chip.
   * @param closable - Whether the chip can be closed.
   * @param disabled - Disabled state of the chip.
   * @param class - Additional CSS classes.
   * @param children - Slot content for the chip (alternative to label).
   * @returns An accessible, styled chip element.
   */
  let {
    label = DEFAULT_CHIP_LABEL,
    variant = DEFAULT_CHIP_VARIANT,
    size = DEFAULT_CHIP_SIZE,
    closable = DEFAULT_CHIP_CLOSABLE,
    disabled = DEFAULT_CHIP_DISABLED,
    children,
    class: className = '',
    ...restProps
  }: ChipProps = $props();

  let chipClasses = $derived(
    ChipStyleManager.getChipClasses(variant, size, disabled, className)
  );
  let closeButtonClasses = $derived(
    ChipStyleManager.getCloseButtonClasses(variant, size, undefined)
  );
  let closeButtonIconClasses = $derived(
    ChipStyleManager.getCloseButtonIconClasses(size)
  );
</script>

<div class={chipClasses} {...restProps}>
  {#if children}
    {@render children()}
  {:else}
    {label}
  {/if}

  {#if closable}
    <button
      class={closeButtonClasses}
      aria-label="Закрыть"
      disabled={disabled}
    >
      <X class={closeButtonIconClasses} />
    </button>
  {/if}
</div>