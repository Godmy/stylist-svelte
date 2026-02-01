<script lang="ts">
  import { INPUT_TOKENS } from '$stylist/design-system/input';
  import type { HTMLAttributes } from 'svelte/elements';
  import type { InputVariant } from '$stylist/design-system/input';
  import type { CompactSize } from '$stylist/design-system/tokens/sizes';

  /**
   * FormHelperText component - displays helper text for form fields
   *
   * @param variant - Visual variant ('default' | 'info' | 'success' | 'warning' | 'danger')
   * @param text - Helper text content
   * @param content - Snippet content for the helper text
   * @returns Accessible, styled helper text for form fields
   */

  const {
    INPUT_VARIANTS,
    COMPONENT_SIZE_SCALE,
    DEFAULT_FLAGS,
    STATE_CLASSES,
    INPUT_BASE_CLASS,
    ACCESSIBILITY_CLASSES
  } = INPUT_TOKENS;

  const FORM_HELPER_TEXT_PRESET = {
    variants: INPUT_VARIANTS,
    sizes: COMPONENT_SIZE_SCALE,
    defaults: {
      variant: 'default' as const,
      size: 'md' as const,
      disabled: DEFAULT_FLAGS.disabled,
      error: false
    },
    classes: {
      base: 'text-sm mt-1',
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

  type FormHelperTextProps = {
    variant?: InputVariant;
    size?: CompactSize;
    text?: string;
    content?: () => any;
    class?: string | null;
  };

  let {
    variant = 'default',
    size = FORM_HELPER_TEXT_PRESET.defaults.size,
    text = '',
    content,
    class: className = '',
    ...restProps
  }: FormHelperTextProps & HTMLAttributes<HTMLParagraphElement> = $props();

  const variantClasses = FORM_HELPER_TEXT_PRESET.classes.variant;
  const resolvedVariant =
    (variant in variantClasses ? variant : 'default') as keyof typeof variantClasses;

  let classes = $derived(
    [
      FORM_HELPER_TEXT_PRESET.classes.base,
      variantClasses[resolvedVariant],
      className
    ]
      .filter(Boolean)
      .join(' ')
  );
</script>

<p class={classes} {...restProps}>
  {#if content}
    {@render content()}
  {:else}
    {text}
  {/if}
</p>


