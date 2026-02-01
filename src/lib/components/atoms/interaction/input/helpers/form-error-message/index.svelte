<script lang="ts">
  import { INPUT_TOKENS } from '$stylist/design-system/input';
  import type { HTMLAttributes } from 'svelte/elements';
  import type { InputVariant } from '$stylist/design-system/input';
  import type { CompactSize } from '$stylist/design-system/tokens/sizes';

  /**
   * FormErrorMessage component - displays an error message for form fields
   *
   * @param visible - Whether the error message is visible
   * @param text - Error message text
   * @param content - Snippet content for the error message
   * @returns Accessible, styled error message for form fields
   */

  const {
    INPUT_VARIANTS,
    COMPONENT_SIZE_SCALE,
    DEFAULT_FLAGS,
    STATE_CLASSES,
    INPUT_BASE_CLASS,
    ACCESSIBILITY_CLASSES
  } = INPUT_TOKENS;

  const FORM_ERROR_MESSAGE_PRESET = {
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
        default: 'text-red-500',
        info: 'text-blue-500',
        success: 'text-green-500',
        warning: 'text-yellow-500',
        danger: 'text-red-500'
      },
      focusVisible: ACCESSIBILITY_CLASSES.focusVisible
    }
  };

  type FormErrorMessageProps = {
    variant?: InputVariant;
    size?: CompactSize;
    visible?: boolean;
    text?: string;
    content?: () => any;
    class?: string | null;
  };

  let {
    visible = true,
    text = '',
    content,
    class: className = '',
    ...restProps
  }: FormErrorMessageProps & HTMLAttributes<HTMLParagraphElement> = $props();

  let classes = $derived(
    [
      FORM_ERROR_MESSAGE_PRESET.classes.base,
      FORM_ERROR_MESSAGE_PRESET.classes.variant.danger,
      className
    ]
      .filter(Boolean)
      .join(' ')
  );
</script>

{#if visible}
  <p class={classes} {...restProps}>
    {#if content}
      {@render content()}
    {:else}
      {text}
    {/if}
  </p>
{/if}


