<script lang="ts">
  import { INPUT_TOKENS } from '$stylist/design-system/input';
  import type { HTMLInputAttributes } from 'svelte/elements';
  import type { InputProps } from '$stylist/design-system/input';

  /**
   * PinInputDigit component - displays a single digit input for PIN codes
   *
   * @param size - Size of the input ('sm' | 'md' | 'lg')
   * @param focused - Whether the digit is focused
   * @param invalid - Whether the digit is invalid
   * @returns An accessible, styled single digit input
   */

  const {
    INPUT_VARIANTS,
    COMPONENT_SIZE_SCALE,
    DEFAULT_FLAGS,
    STATE_CLASSES,
    INPUT_BASE_CLASS,
    ACCESSIBILITY_CLASSES,
    INPUT_VARIANT_CLASSES,
    INPUT_ERROR_CLASS
  } = INPUT_TOKENS;

  const PIN_INPUT_DIGIT_PRESET = {
    variants: INPUT_VARIANTS,
    sizes: COMPONENT_SIZE_SCALE,
    defaults: {
      variant: 'default' as const,
      size: 'md' as const,
      disabled: DEFAULT_FLAGS.disabled,
      error: false
    },
    classes: {
      base: INPUT_BASE_CLASS,
      size: {
        sm: 'w-8 h-8 text-sm',
        md: 'w-10 h-10 text-base',
        lg: 'w-12 h-12 text-lg'
      },
      state: STATE_CLASSES,
      variant: INPUT_VARIANT_CLASSES,
      focusVisible: ACCESSIBILITY_CLASSES.focusVisible
    }
  };

  type InputAttributes = Omit<HTMLInputAttributes, 'size'>;
  type PinInputDigitProps = InputProps & {
    focused?: boolean;
    invalid?: boolean;
    value?: string;
  };

  let {
    variant = PIN_INPUT_DIGIT_PRESET.defaults.variant,
    size = PIN_INPUT_DIGIT_PRESET.defaults.size,
    focused = false,
    invalid = false,
    class: className = '',
    value = '',
    ...restProps
  }: PinInputDigitProps & InputAttributes = $props();

  let classes = $derived(
    [
      PIN_INPUT_DIGIT_PRESET.classes.base,
      PIN_INPUT_DIGIT_PRESET.classes.variant[variant],
      PIN_INPUT_DIGIT_PRESET.classes.size[size],
      focused ? 'ring-2 ring-blue-500' : '',
      invalid ? INPUT_ERROR_CLASS : '',
      className
    ]
      .filter(Boolean)
      .join(' ')
  );
</script>

<input
  class={classes}
  maxLength={1}
  value={value}
  {...restProps}
/>

