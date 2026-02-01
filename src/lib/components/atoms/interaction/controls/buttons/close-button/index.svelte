<script lang="ts">
  import type { HTMLButtonAttributes } from 'svelte/elements';
  import { X, Loader2 } from 'lucide-svelte';

  import { INTERACTION_TOKENS } from '$stylist/design-system/interaction/tokens';
  import type { Preset } from '$stylist/design-system/interaction/preset';
  import type { CloseButtonProps } from '$stylist/design-system/interaction/controls/buttons/close-button';
  import type { ComponentSize } from '$stylist/design-system/tokens/sizes';
  import type { DefaultVariants } from '$stylist/design-system/tokens/variants';

  const {
    INTERACTIVE_VARIANTS,
    COMPONENT_SIZE_SCALE,
    DEFAULT_FLAGS,
    STATE_CLASSES,
    COMPACT_SIZE_SCALE,
    INTERACTIVE_BASE_CLASS,
    ACCESSIBILITY_CLASSES,
    VARIANT_CLASSES
  } = INTERACTION_TOKENS;

// Тип для вариантов закрывающей кнопки
type CloseButtonVariant = 'solid' | 'outline' | 'ghost';

export const CLOSE_BUTTON_PRESET: Preset<CloseButtonVariant, ComponentSize> = {
  variants: ['solid', 'outline', 'ghost'],
  sizes: COMPACT_SIZE_SCALE,
  defaults: {
    variant: 'ghost',
    size: 'md',
    disabled: DEFAULT_FLAGS.disabled
  },
  classes: {
    base: 'flex items-center justify-center transition-colors duration-200 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-primary-500,#3b82f6)]',
    size: {
      sm: 'w-6 h-6 p-1 text-sm',
      md: 'w-8 h-8 p-1.5 text-base',
      lg: 'w-10 h-10 p-2 text-lg',
      xl: 'w-10 h-10 p-2 text-xl'
    },
    variant: {
      'solid': VARIANT_CLASSES['solid'],
      'outline': VARIANT_CLASSES['outline'],
      'ghost': VARIANT_CLASSES['ghost']
    },
    state: STATE_CLASSES
  }
};

  /**
   * CloseButton component - A standardized close button (X icon)
   *
   * @param variant - Visual style of the button
   * @param size - Size of the button
   * @param disabled - Whether the button is disabled
   * @param loading - Whether the button is in a loading state
   * @param ariaLabel - Accessible label (defaults to "Close")
   * @param class - Additional CSS classes
   * @returns A standardized close button with X icon
   */
  let {
    variant = CLOSE_BUTTON_PRESET.defaults.variant,
    size = CLOSE_BUTTON_PRESET.defaults.size,
    disabled = false,
    loading = false,
    ariaLabel = 'Close',
    loadingLabel = 'Closing...',
    block = false,
    class: className = '',
    type = 'button',
    children,
    ...restProps
  }: CloseButtonProps & HTMLButtonAttributes = $props();

  const computedAriaLabel = $derived(
    ariaLabel ||
      (typeof (restProps as Record<string, unknown>)['aria-label'] === 'string'
        ? (restProps as Record<string, string>)['aria-label']
        : 'Close')
  );

  const variantClasses: Record<CloseButtonVariant, string> = CLOSE_BUTTON_PRESET.classes.variant as Record<CloseButtonVariant, string>;
  const sizeClasses: Record<ComponentSize, string> = CLOSE_BUTTON_PRESET.classes.size as Record<ComponentSize, string>;

  const userClass = $derived(`close-button ${className}`.trim());

  let classes = $derived(
    [
      CLOSE_BUTTON_PRESET.classes.base,
      variant ? variantClasses[variant] : '',
      size ? sizeClasses[size] : '',
      disabled || loading ? CLOSE_BUTTON_PRESET.classes.state.disabled : '',
      block ? CLOSE_BUTTON_PRESET.classes.state.block : '',
      userClass
    ]
      .filter(Boolean)
      .join(' ')
  );

  let loaderClasses = $derived(`animate-spin ${size ? CLOSE_BUTTON_PRESET.classes.size[size] : ''}`);  
</script>

<button
  {...restProps}
  type={type}
  class={classes}
  aria-busy={loading}
  aria-live={loading ? 'polite' : undefined}
  aria-label={computedAriaLabel || undefined}
  disabled={disabled || loading}
>
  {#if loading}
    <Loader2 class={loaderClasses} aria-hidden="true" />
    <span class="sr-only">{loadingLabel}</span>
  {:else}
    <X class="w-4 h-4" />
  {/if}
</button>

