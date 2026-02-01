<script lang="ts">
  import type { HTMLButtonAttributes } from 'svelte/elements';
  import { Copy, Check } from 'lucide-svelte';

  import { copyToClipboard } from '$stylist/utils/clipboard/';
  import { INTERACTION_TOKENS } from '$stylist/design-system/interaction/tokens';
  import type { Preset } from '$stylist/design-system/interaction/preset';
  import type { CopyButtonProps } from '$stylist/design-system/interaction/controls/buttons/copy-button';
  import type { ComponentSize } from '$stylist/design-system/tokens/sizes';
  import type { DefaultVariants } from '$stylist/design-system/tokens/variants';


  const {
    INTERACTIVE_VARIANTS,
    COMPONENT_SIZE_SCALE,
    DEFAULT_FLAGS,
    STATE_CLASSES,
    INTERACTIVE_BASE_CLASS,
    ACCESSIBILITY_CLASSES,
    VARIANT_CLASSES
  } = INTERACTION_TOKENS;

  const COPY_BUTTON_PRESET: Preset<DefaultVariants, ComponentSize> = {
    variants: INTERACTIVE_VARIANTS,
    sizes: COMPONENT_SIZE_SCALE,
    defaults: {
      variant: 'ghost',
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

  let {
    text = '',
    label = 'Copy',
    successMessage = 'Copied to clipboard',
    showIcon = true,
    variant = COPY_BUTTON_PRESET.defaults.variant,
    size = COPY_BUTTON_PRESET.defaults.size,
    class: className = '',
    block = false,
    onSuccess,
    onError,
    disabled = false,
    loading = false,
    ariaLabel = '',
    loadingLabel = 'Copying...',
    type = 'button',
    ...restProps
  }: CopyButtonProps & HTMLButtonAttributes = $props();

  let copied = $state(false);

  const computedAriaLabel = $derived(
    ariaLabel ||
      (typeof (restProps as Record<string, unknown>)['aria-label'] === 'string'
        ? (restProps as Record<string, string>)['aria-label']
        : label)
  );

  const variantClasses: Record<DefaultVariants, string> = COPY_BUTTON_PRESET.classes.variant as Record<DefaultVariants, string>;
  const sizeClasses: Record<ComponentSize, string> = COPY_BUTTON_PRESET.classes.size as Record<ComponentSize, string>;

  const classes = $derived(
    [
      COPY_BUTTON_PRESET.classes.base,
      variant ? variantClasses[variant] : '',
      size ? sizeClasses[size] : '',
      disabled || loading ? COPY_BUTTON_PRESET.classes.state.disabled : '',
      block ? COPY_BUTTON_PRESET.classes.state.block : '',
      'copy-button',
      className
    ]
      .filter(Boolean)
      .join(' ')
  );

  async function handleCopy() {
    if (disabled || loading) return;

    const success = await copyToClipboard(text);

    if (success) {
      copied = true;
      onSuccess?.(successMessage);
      setTimeout(() => {
        copied = false;
      }, 2000);
    } else {
      onError?.('Failed to copy to clipboard');
    }
  }

  let iconClasses = $derived(
    `copy-button-icon transition-colors duration-150 ${
      copied ? 'text-[var(--color-success-600,#16a34a)]' : 'text-current'
    }`.trim()
  );
</script>

<button
  {...restProps}
  type={type}
  onclick={handleCopy}
  disabled={disabled || loading}
  aria-busy={loading}
  aria-live={loading ? 'polite' : undefined}
  class={classes}
  aria-label={copied ? 'Copied' : computedAriaLabel || undefined}
>
  {#if showIcon}
    {#if copied}
      <Check class={iconClasses} aria-hidden="true" />
    {:else}
      <Copy class={iconClasses} aria-hidden="true" />
    {/if}
  {/if}
  <span class="ml-2">{copied ? 'Copied!' : label}</span>
</button>

