<script lang="ts">
  import { INPUT_TOKENS } from '$stylist/design-system/input';
  import type { HTMLInputAttributes } from 'svelte/elements';
  import type { InputProps } from '$stylist/design-system/input';

  /**
   * PasswordInput component - displays a password input field with visibility toggle
   *
   * @param size - Size of the input ('sm' | 'md' | 'lg')
   * @param disabled - Whether the input is disabled
   * @param error - Whether the input has an error state
   * @param showPassword - Whether to show the password in plain text
   * @param onTogglePassword - Callback function when password visibility is toggled
   * @returns An accessible, styled password input with visibility toggle
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

  const PASSWORD_INPUT_PRESET = {
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
  type PasswordInputProps = InputProps & {
    showPassword?: boolean;
    onTogglePassword?: () => void;
    helpText?: string;
    value?: string;
  };

  let {
    variant = PASSWORD_INPUT_PRESET.defaults.variant,
    size = PASSWORD_INPUT_PRESET.defaults.size,
    disabled = false,
    error = false,
    showPassword = false,
    onTogglePassword,
    class: className = '',
    placeholder = 'Enter password',
    required = false,
    helpText,
    value = $bindable<string>(),
    ...restProps
  }: PasswordInputProps & InputAttributes = $props();

  let classes = $derived(
    [
      PASSWORD_INPUT_PRESET.classes.base,
      PASSWORD_INPUT_PRESET.classes.variant[variant],
      PASSWORD_INPUT_PRESET.classes.size[size],
      error ? INPUT_ERROR_CLASS : '',
      disabled ? PASSWORD_INPUT_PRESET.classes.state.disabled : '',
      className
    ]
      .filter(Boolean)
      .join(' ')
  );

  function handleInput(e: Event) {
    const target = e.target as HTMLInputElement;
    // The $bindable() will handle setting the value prop automatically
  }

  function togglePasswordVisibility() {
    if (onTogglePassword) {
      onTogglePassword();
    }
  }
</script>

<div class="relative">
  <input
    type={showPassword ? "text" : "password"}
    bind:value={value}
    oninput={handleInput}
    placeholder={placeholder}
    disabled={disabled}
    required={required}
    class={classes}
    {...restProps}
  />
  <button
    type="button"
    class="absolute right-3 top-1/2 transform -translate-y-1/2"
    onclick={togglePasswordVisibility}
    aria-label={showPassword ? "Hide password" : "Show password"}
    disabled={disabled}
  >
    {#if showPassword}
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
        <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" />
      </svg>
    {:else}
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.267-1.112a1 1 0 00-1.414 1.414c1.473 1.473 3.556 2.111 5.638 2.111a7.489 7.489 0 013.62 1.074l-1.78 1.781A3 3 0 007.974 5.385z" clip-rule="evenodd" />
        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    {/if}
  </button>
  {#if helpText}
    <p class="mt-1 text-sm text-gray-500">
      {helpText}
    </p>
  {/if}
</div>

