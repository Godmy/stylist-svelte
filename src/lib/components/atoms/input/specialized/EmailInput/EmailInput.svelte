<script lang="ts">
  import { EmailInputStyleManager } from './styles';
  import type { IEmailInputProps } from './types';

  /**
   * EmailInput component - displays an email input field
   *
   * SOLID Principles applied:
   *
   * Single Responsibility Principle: This component is responsible only for displaying an email input field.
   * Open/Closed Principle: The component is closed for modification but open for extension via CSS classes.
   * Liskov Substitution Principle: EmailInput can be substituted with other email input components without breaking functionality.
   * Interface Segregation Principle: IEmailInputProps provides a focused interface for the component.
   * Dependency Inversion Principle: Component depends on abstractions (styles manager and types) rather than concretions.
   */
  let {
    value = $bindable<string>(),
    placeholder = 'Введите email',
    disabled = false,
    required = false,
    error = false,
    helpText,
    ...restProps
  }: IEmailInputProps = $props();

  // Generate the CSS classes using the style manager
  const containerClass = $derived(EmailInputStyleManager.generateContainerClass());
  const inputClass = $derived(EmailInputStyleManager.generateInputClass(error));
  const helpTextClass = $derived(EmailInputStyleManager.generateHelpTextClass(error));

  function handleInput(e: Event) {
    const target = e.target as HTMLInputElement;
    // The $bindable() will handle setting the value prop automatically
  }
</script>

<div class={containerClass}>
  <input
    type="email"
    bind:value={value}
    oninput={handleInput}
    placeholder={placeholder}
    disabled={disabled}
    required={required}
    class={inputClass}
    {...restProps}
  />
  {#if helpText}
    <p class={helpTextClass}>
      {helpText}
    </p>
  {/if}
</div>