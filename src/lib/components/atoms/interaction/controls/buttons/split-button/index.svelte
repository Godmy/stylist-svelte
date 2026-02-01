<script lang="ts">
  import type { HTMLButtonAttributes } from 'svelte/elements';
  import { ChevronDown } from 'lucide-svelte';

  import { INTERACTION_TOKENS } from '$stylist/design-system/interaction/tokens';
  import type { Preset } from '$stylist/design-system/interaction/preset';
  import type { SplitButtonProps } from '$stylist/design-system/interaction/controls/buttons/split-button';
  import type { ComponentSize } from '$stylist/design-system/tokens/sizes';
  import type { DefaultVariants } from '$stylist/design-system/tokens/variants';

  type ButtonAttributes = Omit<HTMLButtonAttributes, 'children' | 'class' | 'disabled'>;

  export interface ISplitButtonItem {
    label: string;
    onClick: () => void;
    disabled?: boolean;
  }

  export type ISplitButtonProps = SplitButtonProps & ButtonAttributes & {
      items: ISplitButtonItem[];
      primaryAction: () => void;
      primaryLabel?: string;
  };

  const {
    INTERACTIVE_VARIANTS,
    COMPONENT_SIZE_SCALE,
    DEFAULT_FLAGS,
    STATE_CLASSES,
    INTERACTIVE_BASE_CLASS,
    ACCESSIBILITY_CLASSES,
    VARIANT_CLASSES
  } = INTERACTION_TOKENS;

  const SPLIT_BUTTON_PRESET: Preset<DefaultVariants, ComponentSize> = {
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
      variant: VARIANT_CLASSES,
      state: STATE_CLASSES,
      focusVisible: ACCESSIBILITY_CLASSES.focusVisible
    }
  };

  /**
   * SplitButton component - A button with a primary action and a dropdown menu for additional actions
   * Uses the same props as Button for consistency (SOLID - Liskov Substitution)
   *
   * @param variant - Visual style of the button
   * @param size - Size of the button
   * @param disabled - Whether the button is disabled
   * @param loading - Whether the button is in loading state
   * @param items - Array of items for the dropdown menu
   * @param primaryAction - Function to execute when the primary button is clicked
   * @param primaryLabel - Label for the primary button
   * @param class - Additional CSS classes
   * @returns A split button with primary action and dropdown menu
   */
  let {
    variant = SPLIT_BUTTON_PRESET.defaults.variant,
    size = SPLIT_BUTTON_PRESET.defaults.size,
    disabled = false,
    loading = false,
    ariaLabel = '',
    block = false,
    items = [],
    primaryAction,
    primaryLabel = 'Action',
    class: className = '',
    type = 'button',
    children,
    ...restProps
  }: ISplitButtonProps = $props();

  const variantClasses: Record<DefaultVariants, string> = SPLIT_BUTTON_PRESET.classes.variant as Record<DefaultVariants, string>;
  const sizeClasses: Record<ComponentSize, string> = SPLIT_BUTTON_PRESET.classes.size as Record<ComponentSize, string>;

  const baseButtonClasses = $derived(
    [
      SPLIT_BUTTON_PRESET.classes.base,
      variantClasses[variant],
      sizeClasses[size],
      disabled || loading ? SPLIT_BUTTON_PRESET.classes.state.disabled : '',
      block ? SPLIT_BUTTON_PRESET.classes.state.block : '',
      'split-button__button'
    ]
      .filter(Boolean)
      .join(' ')
  );

  const primaryButtonClasses = $derived(`${baseButtonClasses} rounded-r-none border-r-0`.trim());
  const toggleButtonClasses = $derived(`${baseButtonClasses} rounded-l-none border-l-0`.trim());
  const wrapperClasses = $derived(
    `relative inline-flex items-center rounded-md overflow-hidden ${className}`.trim()
  );

  const primaryAriaLabel = $derived(
    ariaLabel ||
      (typeof (restProps as Record<string, unknown>)['aria-label'] === 'string'
        ? (restProps as Record<string, string>)['aria-label']
        : primaryLabel)
  );

  // Extract div-specific attributes to avoid type conflicts
  let divAttributes = $derived.by(() => {
    const { id, class: cls, ...others } = restProps as any;
    return { id, class: cls, ...others };
  });

  let isOpen = $state(false);
  let buttonId = `split-button-${Math.random().toString(36).substr(2, 9)}`;

  // Handle clicks outside to close dropdown
  $effect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: Event) => {
      if (!event.composedPath().some((el) => el instanceof Element && el.id === buttonId)) {
        isOpen = false;
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  });

  const toggleDropdown = () => {
    if (!disabled) {
      isOpen = !isOpen;
    }
  };

  const closeDropdown = () => {
    isOpen = false;
  };

  const menuClasses = $derived(
    [
      'split-button-menu',
      'absolute z-10 mt-1 w-48 rounded-md',
      'border border-[var(--color-border-primary,#e5e7eb)]',
      'bg-[var(--color-surface,#ffffff)] text-[var(--color-text-primary,#111827)]',
      'shadow-[0_10px_15px_-3px_rgba(0,0,0,0.2),0_4px_6px_-2px_rgba(0,0,0,0.12)]',
      'outline-none'
    ].join(' ')
  );

  const menuItemBaseClasses =
    'split-button-menu__item w-full px-4 py-2 text-sm text-left rounded-md bg-transparent text-[inherit] transition-colors duration-150 focus-visible:outline-none hover:bg-[var(--color-secondary-100,#f3f4f6)] focus-visible:bg-[var(--color-secondary-100,#f3f4f6)]';

  const menuItemDisabledClasses =
    'split-button-menu__item--disabled opacity-50 cursor-not-allowed pointer-events-none';
</script>

<div class={wrapperClasses} id={buttonId} {...divAttributes}>
  <button
    type={type}
    disabled={disabled}
    aria-busy={loading}
    aria-live={loading ? 'polite' : undefined}
    class={primaryButtonClasses}
    aria-label={primaryAriaLabel || undefined}
    onclick={primaryAction}
  >
    {#if children}
      {@render children()}
    {:else}
      {primaryLabel}
    {/if}
  </button>
  <button
    type={type}
    disabled={disabled || loading}
    class={toggleButtonClasses}
    onclick={toggleDropdown}
    aria-haspopup="true"
    aria-expanded={isOpen}
    aria-label="Show more options"
  >
    <ChevronDown class="h-4 w-4" aria-hidden="true" />
  </button>

  {#if isOpen}
    <div class={menuClasses} role="menu" aria-orientation="vertical" tabindex="-1">
      <div class="flex flex-col gap-1 p-1" role="none">
        {#each items as item, i}
          <button
            class={`${menuItemBaseClasses} ${item.disabled ? menuItemDisabledClasses : ''}`.trim()}
            onclick={() => {
              item.onClick();
              closeDropdown();
            }}
            disabled={item.disabled}
            role="menuitem"
          >
            {item.label}
          </button>
        {/each}
      </div>
    </div>
  {/if}
</div>
