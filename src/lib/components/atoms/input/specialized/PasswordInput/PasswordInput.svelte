<script lang="ts">
  import { PasswordInputStyleManager } from './styles';
  import type { IPasswordInputProps } from './types';

  /**
   * PasswordInput component - displays a password input field with visibility toggle
   *
   * SOLID Principles applied:
   *
   * Single Responsibility Principle: This component is responsible only for displaying a password input field with visibility toggle.
   * Open/Closed Principle: The component is closed for modification but open for extension via CSS classes.
   * Liskov Substitution Principle: PasswordInput can be substituted with other password input components without breaking functionality.
   * Interface Segregation Principle: IPasswordInputProps provides a focused interface for the component.
   * Dependency Inversion Principle: Component depends on abstractions (styles manager and types) rather than concretions.
   */
  let {
    value = $bindable<string>(),
    placeholder = 'Введите пароль',
    disabled = false,
    required = false,
    error = false,
    helpText,
    ...restProps
  }: IPasswordInputProps = $props();

  // State for password visibility
  let showPassword = $state(false);

  // Generate the CSS classes using the style manager
  const containerClass = $derived(PasswordInputStyleManager.generateContainerClass());
  const inputClass = $derived(PasswordInputStyleManager.generateInputClass(error));
  const toggleButtonClass = $derived(PasswordInputStyleManager.generateToggleButtonClass());
  const helpTextClass = $derived(PasswordInputStyleManager.generateHelpTextClass(error));

  function handleInput(e: Event) {
    const target = e.target as HTMLInputElement;
    // The $bindable() will handle setting the value prop automatically
  }

  function togglePasswordVisibility() {
    showPassword = !showPassword;
  }
</script>

<div class={containerClass}>
  <input
    type={showPassword ? "text" : "password"}
    bind:value={value}
    oninput={handleInput}
    placeholder={placeholder}
    disabled={disabled}
    required={required}
    class={inputClass}
    {...restProps}
  />
  <button
    type="button"
    class={toggleButtonClass}
    onclick={togglePasswordVisibility}
    aria-label={showPassword ? "Hide password" : "Show password"}
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
    <p class={helpTextClass}>
      {helpText}
    </p>
  {/if}
</div>