<script lang="ts">
  import { Loader2 } from 'lucide-svelte';
  import type { HTMLButtonAttributes } from 'svelte/elements';

  import { INTERACTION_TOKENS } from '$stylist/design-system/interaction/tokens';
  import type { Preset } from '$stylist/design-system/interaction/preset';
  import type { PageButtonProps } from '$stylist/design-system/interaction/controls/buttons/page-button';
  import type { ComponentSize } from '$stylist/design-system/tokens/sizes';
  import type { DefaultVariants } from '$stylist/design-system/tokens/variants';

  type ButtonAttributes = Omit<HTMLButtonAttributes, 'children' | 'class' | 'disabled'>;

  export type IPageButtonProps = PageButtonProps & ButtonAttributes & {
      page: number;
      isActive?: boolean;
  };

  /**
   * PageButton component - A button for pagination
   * Uses the same props as Button for consistency (SOLID - Liskov Substitution)
   */
  let {
    page,
    isActive = false,
    variant = 'secondary',
    size = 'md',
    disabled = false,
    loading = false,
    ariaLabel = '',
    loadingLabel = 'Loading...',
    block = false,
    class: className = '',
    type = 'button',
    children,
    ...restProps
  }: PageButtonProps & ButtonAttributes = $props();

  const {
    INTERACTIVE_VARIANTS,
    COMPONENT_SIZE_SCALE,
    DEFAULT_FLAGS,
    STATE_CLASSES,
    INTERACTIVE_BASE_CLASS,
    ACCESSIBILITY_CLASSES,
    VARIANT_CLASSES
  } = INTERACTION_TOKENS;

  const PAGE_BUTTON_PRESET: Preset<DefaultVariants, ComponentSize> & {
    loaderSize: Record<ComponentSize, string>;
  } = {
    variants: INTERACTIVE_VARIANTS,
    sizes: COMPONENT_SIZE_SCALE,
    defaults: {
      variant: 'secondary',
      size: 'md',
      disabled: DEFAULT_FLAGS.disabled,
      block: false
    },
    classes: {
      base: INTERACTIVE_BASE_CLASS,
      size: {
        sm: 'px-2.5 py-1.5 text-sm',
        md: 'px-3 py-2 text-base',
        lg: 'px-3.5 py-2.5 text-lg',
        xl: 'px-4 py-3 text-xl'
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

  // For active pages, we use primary variant to highlight the current page
  let actualVariant = $derived(isActive ? 'primary' : variant);
  let actualDisabled = $derived(disabled || isActive);

  const computedAriaLabel = $derived(
    ariaLabel ||
      (typeof (restProps as Record<string, unknown>)['aria-label'] === 'string'
        ? (restProps as Record<string, string>)['aria-label']
        : `Page ${page}`)
  );

  const variantClasses: Record<DefaultVariants, string> = PAGE_BUTTON_PRESET.classes.variant as Record<DefaultVariants, string>;
  const sizeClasses: Record<ComponentSize, string> = PAGE_BUTTON_PRESET.classes.size as Record<ComponentSize, string>;
  const loaderSize: Record<ComponentSize, string> = PAGE_BUTTON_PRESET.loaderSize as Record<ComponentSize, string>;

  let classes = $derived(
    [
      PAGE_BUTTON_PRESET.classes.base,
      variantClasses[actualVariant],
      sizeClasses[size],
      actualDisabled || loading ? PAGE_BUTTON_PRESET.classes.state.disabled : '',
      block ? PAGE_BUTTON_PRESET.classes.state.block : '',
      `page-button ${className}`.trim()
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
  aria-current={isActive ? 'page' : undefined}
  disabled={actualDisabled || loading}
>
  {#if loading}
    <Loader2 class={loaderClasses} aria-hidden="true" />
    <span class="sr-only">{loadingLabel}</span>
  {:else if children}
    {@render children()}
  {:else}
    {page}
  {/if}
</button>

