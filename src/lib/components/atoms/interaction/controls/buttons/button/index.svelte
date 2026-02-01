<script lang="ts">
  import { Loader2 } from 'lucide-svelte';
  import type { HTMLButtonAttributes } from 'svelte/elements';

  import { INTERACTION_TOKENS } from '$stylist/design-system/interaction/tokens';
  import type { Preset } from '$stylist/design-system/interaction/preset';
  import type { ButtonProps } from '$stylist/design-system/interaction/controls/buttons/button';
  import type { ComponentSize } from '$stylist/design-system/tokens/sizes';
  import type { DefaultVariants } from '$stylist/design-system/tokens/variants';
  
  /**
   * Button component - A flexible button component with various styles and states
   *
   * @param variant - Visual style of the button ('primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'ghost' | 'link')
   * @param size - Size of the button ('sm' | 'md' | 'lg')
   * @param disabled - Whether the button is disabled
   * @param loading - Whether the button is in a loading state
   * @param block - Whether the button should span the full width of its container
   * @param content - Snippet content for the button (if not using default text content)
   * @returns An accessible, styled button element
   */  

  const {
    INTERACTIVE_VARIANTS,
    COMPONENT_SIZE_SCALE,
    DEFAULT_FLAGS,
    STATE_CLASSES,
    INTERACTIVE_BASE_CLASS,
    ACCESSIBILITY_CLASSES,
    VARIANT_CLASSES
  } = INTERACTION_TOKENS;

  const BUTTON_PRESET: Preset<DefaultVariants, ComponentSize> & {
  loaderSize: Record<ComponentSize, string>;
} = {
  variants: INTERACTIVE_VARIANTS,
  sizes: COMPONENT_SIZE_SCALE,
  defaults: {
    variant: 'primary',
    size: 'md',
    disabled: DEFAULT_FLAGS.disabled,
    block: false
  },
  classes: {
    base: INTERACTIVE_BASE_CLASS,
    size: {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-6 py-3 text-lg',
      xl: 'px-7 py-3.5 text-xl'
    },
    state: STATE_CLASSES,
    variant: VARIANT_CLASSES,
    focusVisible: ACCESSIBILITY_CLASSES.focusVisible
  },
  loaderSize: {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
    xl: 'w-6 h-6'
  }
};

  let {
    variant = BUTTON_PRESET.defaults.variant,
    size = BUTTON_PRESET.defaults.size,
    ariaLabel = '',
    loadingLabel = 'Loading...',
    disabled = false,
    loading = false,
    block = false,
    class: className = '',
    type = 'button',
    children,
    ...restProps
  }: ButtonProps & HTMLButtonAttributes = $props();

  const computedAriaLabel = $derived(
    ariaLabel ||
      (typeof (restProps as Record<string, unknown>)['aria-label'] === 'string'
        ? (restProps as Record<string, string>)['aria-label']
        : '')
  );

  let classes = $derived(
    [
      BUTTON_PRESET.classes.base,
      variant ? BUTTON_PRESET.classes.variant[variant] : '',
      size ? BUTTON_PRESET.classes.size[size] : '',
      disabled || loading ? BUTTON_PRESET.classes.state.disabled : '',
      block ? BUTTON_PRESET.classes.state.block : '',
      className
    ]
      .filter(Boolean)
      .join(' ')
  );

  let loaderClasses = $derived(`animate-spin ${BUTTON_PRESET.loaderSize[size]}`);
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
  {/if}

  {#if children}
    {@render children()}
  {:else if loading}
    {loadingLabel}
  {/if}
</button>

