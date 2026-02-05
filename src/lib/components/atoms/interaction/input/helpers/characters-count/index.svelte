<script lang="ts">
  import { CHARACTER_COUNT_PRESET } from '$stylist/design-system/presets';
  import { createCharacterCountState } from '../state.svelte';
  import type { HTMLAttributes } from 'svelte/elements';

  /**
   * CharacterCount component - displays current/max character count with color indication
   *
   * @param current - Current character count
   * @param max - Maximum character count
   * @param showPercentage - Whether to show percentage
   * @param content - Snippet content for the character count
   * @returns Accessible, styled character count indicator
   */

  type CharacterCountVariant = (typeof CHARACTER_COUNT_PRESET.variants)[number];

  type CharacterCountProps = {
    current?: number;
    max?: number;
    showPercentage?: boolean;
    content?: () => any;
    class?: string;
  };

  let {
    current = 0,
    max = 100,
    variant = CHARACTER_COUNT_PRESET.defaults.variant,
    size = CHARACTER_COUNT_PRESET.defaults.size,
    showPercentage = false,
    content,
    class: className = '',
    ...restProps
  }: CharacterCountProps & {
    variant?: CharacterCountVariant;
    size?: 'sm' | 'md' | 'lg';
  } & HTMLAttributes<HTMLDivElement> = $props();

  // Calculate derived values
  const percentage = $derived(max > 0 ? Math.min(100, (current / max) * 100) : 0);
  const ratio = $derived(current / max);

  const message = $derived(showPercentage
    ? `${Math.round(percentage)}% (${current}/${max})`
    : `${current}/${max}`
  );

  const state = $derived(createCharacterCountState(ratio, { variant, size, class: className }));
  let colorClass = $derived(state.colorClass);

  let classes = $derived(
    [
      state.classes,
      colorClass,
    ]
      .filter(Boolean)
      .join(' ')
  );
</script>

<div class={classes} {...restProps}>
  {#if content}
    {@render content()}
  {:else}
    {message}
  {/if}
</div>

