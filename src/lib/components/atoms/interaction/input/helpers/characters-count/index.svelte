<script lang="ts">
  import { INPUT_TOKENS } from '$stylist/design-system/input';
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

  const {
    INPUT_VARIANTS,
    COMPONENT_SIZE_SCALE,
    DEFAULT_FLAGS,
    STATE_CLASSES,
    INPUT_BASE_CLASS,
    ACCESSIBILITY_CLASSES
  } = INPUT_TOKENS;

  const CHARACTER_COUNT_PRESET = {
    variants: INPUT_VARIANTS,
    sizes: COMPONENT_SIZE_SCALE,
    defaults: {
      variant: 'default',
      size: 'md',
      disabled: DEFAULT_FLAGS.disabled,
      error: false
    },
    classes: {
      base: 'text-xs mt-1',
      size: {
        sm: 'text-xs',
        md: 'text-sm',
        lg: 'text-base'
      },
      state: STATE_CLASSES,
      variant: {
        default: 'text-gray-500',
        info: 'text-blue-500',
        success: 'text-green-500',
        warning: 'text-yellow-500',
        danger: 'text-red-500'
      },
      focusVisible: ACCESSIBILITY_CLASSES.focusVisible
    }
  };

  type CharacterCountProps = {
    current?: number;
    max?: number;
    showPercentage?: boolean;
    content?: () => any;
    class?: string | null;
  };

  let {
    current = 0,
    max = 100,
    showPercentage = false,
    content,
    class: className = '',
    ...restProps
  }: CharacterCountProps & HTMLAttributes<HTMLDivElement> = $props();

  // Calculate derived values
  const percentage = $derived(max > 0 ? Math.min(100, (current / max) * 100) : 0);
  const ratio = $derived(current / max);

  const message = $derived(showPercentage
    ? `${Math.round(percentage)}% (${current}/${max})`
    : `${current}/${max}`
  );

  // Determine color based on ratio
  let colorClass = $derived(() => {
    if (ratio >= 0.9) return 'text-red-500';
    if (ratio >= 0.8) return 'text-yellow-500';
    return 'text-gray-500';
  });

  let classes = $derived(
    [
      CHARACTER_COUNT_PRESET.classes.base,
      colorClass,
      className
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


