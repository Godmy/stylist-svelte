<script lang="ts">
  import { INPUT_TOKENS } from '$stylist/design-system/input';
  import type { HTMLInputAttributes } from 'svelte/elements';
  import type { InputProps } from '$stylist/design-system/input';

  /**
   * EmailInput component - displays an email input field
   *
   * @param size - Size of the input ('sm' | 'md' | 'lg')
   * @param disabled - Whether the input is disabled
   * @param error - Whether the input has an error state
   * @returns An accessible, styled email input
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

  const EMAIL_INPUT_PRESET = {
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
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-4 py-2 text-base',
        lg: 'px-6 py-3 text-lg'
      },
      state: STATE_CLASSES,
      variant: INPUT_VARIANT_CLASSES,
      focusVisible: ACCESSIBILITY_CLASSES.focusVisible
    }
  };

  type InputAttributes = Omit<HTMLInputAttributes, 'size'>;
  type EmailInputProps = InputProps & {
    helpText?: string;
    value?: string;
  };

  let {
    variant = EMAIL_INPUT_PRESET.defaults.variant,
    size = EMAIL_INPUT_PRESET.defaults.size,
    disabled = false,
    error = false,
    class: className = '',
    placeholder = 'Enter email',
    required = false,
    helpText,
    value = $bindable<string>(),
    ...restProps
  }: EmailInputProps & InputAttributes = $props();

  let classes = $derived(
    [
      EMAIL_INPUT_PRESET.classes.base,
      EMAIL_INPUT_PRESET.classes.variant[variant],
      EMAIL_INPUT_PRESET.classes.size[size],
      error ? INPUT_ERROR_CLASS : '',
      disabled ? EMAIL_INPUT_PRESET.classes.state.disabled : '',
      className
    ]
      .filter(Boolean)
      .join(' ')
  );

  function handleInput(e: Event) {
    const target = e.target as HTMLInputElement;
    // The $bindable() will handle setting the value prop automatically
  }
</script>

<div>
  <input
    type="email"
    bind:value={value}
    oninput={handleInput}
    placeholder={placeholder}
    disabled={disabled}
    required={required}
    class={classes}
    {...restProps}
  />
  {#if helpText}
    <p class="mt-1 text-sm text-gray-500">
      {helpText}
    </p>
  {/if}
</div>

