<script lang="ts">
  import type { HTMLButtonAttributes } from 'svelte/elements';
  import { Loader2 } from 'lucide-svelte';

  import { INTERACTION_TOKENS } from '$stylist/design-system/interaction/tokens';
  import type { Preset } from '$stylist/design-system/interaction/preset';
  import type { IconButtonProps } from '$stylist/design-system/interaction/controls/buttons/icon-button';
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

export const ICON_BUTTON_PRESET: Preset<DefaultVariants, ComponentSize> = {
  variants: INTERACTIVE_VARIANTS,
  sizes: COMPACT_SIZE_SCALE,
  defaults: {
    variant: 'ghost',
    size: 'md',
    disabled: DEFAULT_FLAGS.disabled
  },
  classes: {
    base: INTERACTIVE_BASE_CLASS,
    size: {
      sm: 'px-2 py-1 text-sm',
      md: 'px-3 py-1.5 text-base',
      lg: 'px-4 py-2 text-lg',
      xl: 'px-5 py-2.5 text-xl'
    },
    variant: VARIANT_CLASSES,
    state: STATE_CLASSES,
    focusVisible: ACCESSIBILITY_CLASSES.focusVisible
  }
};


  /**
   * IconButton component - A button that primarily displays an icon
   * Uses the same props as Button for consistency (SOLID - Liskov Substitution)
   *
   * @param variant - Visual style of the button
   * @param size - Size of the button
   * @param disabled - Whether the button is disabled
   * @param loading - Whether the button is in a loading state
   * @param icon - The icon component to display in the button
   * @param ariaLabel - Accessible label for the button
   * @param class - Additional CSS classes
   * @returns An accessible, styled icon button element
   */
  let {
    variant = ICON_BUTTON_PRESET.defaults.variant,
    size = ICON_BUTTON_PRESET.defaults.size,
    disabled = false,
    loading = false,
    icon = undefined,
    ariaLabel = '',
    loadingLabel = 'Loading...',
    block = false,
    class: className = '',
    type = 'button',
    children,
    ...restProps
  }: IconButtonProps & HTMLButtonAttributes = $props();

  const computedAriaLabel = $derived(
    ariaLabel ||
      (typeof (restProps as Record<string, unknown>)['aria-label'] === 'string'
        ? (restProps as Record<string, string>)['aria-label']
        : '')
  );

  const variantClasses: Record<DefaultVariants, string> = ICON_BUTTON_PRESET.classes.variant as Record<DefaultVariants, string>;
  const sizeClasses: Record<ComponentSize, string> = ICON_BUTTON_PRESET.classes.size as Record<ComponentSize, string>;
  const loaderSize: Record<ComponentSize, string> = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
    xl: 'w-6 h-6'
  } as Record<ComponentSize, string>;

  const userClass = $derived(`icon-button ${className}`.trim());

  let classes = $derived(
    [
      ICON_BUTTON_PRESET.classes.base,
      variantClasses[variant],
      sizeClasses[size],
      disabled || loading ? ICON_BUTTON_PRESET.classes.state.disabled : '',
      block ? ICON_BUTTON_PRESET.classes.state.block : '',
      userClass
    ]
      .filter(Boolean)
      .join(' ')
  );

  let loaderClasses = $derived(`animate-spin ${loaderSize[size]}`);
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
  {:else if icon !== undefined && icon !== null}  
    {@const Icon = icon}
    <Icon />
  {:else if children}
    {@render children()}
  {/if}
</button>

