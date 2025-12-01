<script lang="ts">
  import type { IPhoneNumberInputProps } from './types';

  /**
   * PhoneNumberInput component - displays a phone number input field with formatting
   *
   * SOLID Principles applied:
   *
   * Single Responsibility Principle: This component is responsible only for displaying a phone number input field with formatting.
   * Open/Closed Principle: The component is closed for modification but open for extension via CSS classes.
   * Liskov Substitution Principle: PhoneNumberInput can be substituted with other phone number input components without breaking functionality.
   * Interface Segregation Principle: IPhoneNumberInputProps provides a focused interface for the component.
   * Dependency Inversion Principle: Component depends on abstractions (types) rather than concretions.
   */
  let {
    value = $bindable<string>(),
    placeholder = '+7 (___) ___-__-__',
    disabled = false,
    required = false,
    error = false,
    helpText,
    onInput,
    ...restProps
  }: IPhoneNumberInputProps & { onInput?: (e: Event) => void; } = $props();

  // Generate CSS classes using utility classes
  const containerClass = $derived('relative');
  const inputClass = $derived(`w-full py-2 px-3 border ${error ? 'border-[--color-danger-500]' : 'border-[--color-border-primary]'} rounded-md focus:outline-none focus:ring-2 focus:ring-[--color-primary-500] ${disabled ? 'bg-[--color-background-disabled] cursor-not-allowed' : 'bg-[--color-background-surface]'}`);
  const helpTextClass = $derived(`mt-1 text-sm ${error ? 'text-[--color-danger-500]' : 'text-[--color-text-secondary]'}`);

  function handleInput(e: Event) {
    if (onInput) {
      onInput(e);
    }

    const target = e.target as HTMLInputElement;
    let unformattedValue = target.value.replace(/\D/g, '');

    // Limit to 11 digits for Russian phone numbers (including +7)
    if (unformattedValue.startsWith('8')) {
      unformattedValue = '7' + unformattedValue.substring(1);
    }
    if (unformattedValue.startsWith('+7')) {
      unformattedValue = unformattedValue.substring(2);
    }
    unformattedValue = unformattedValue.substring(0, 11);

    // Update the bindable value
    value = unformattedValue;
  }

  function formatPhoneNumber(value: string): string {
    if (!value) return '';

    const cleaned = value.replace(/\D/g, '');
    let formatted = '+7 (';

    for (let i = 0; i < 11; i++) {
      if (i < cleaned.length) {
        if (i === 0) {
          // Add first 3 digits after +7
          formatted += cleaned[i];
        } else if (i === 3) {
          formatted += ') ' + cleaned[i];
        } else if (i === 6) {
          formatted += '-' + cleaned[i];
        } else if (i === 8) {
          formatted += '-' + cleaned[i];
        } else {
          formatted += cleaned[i];
        }
      } else {
        // Add placeholder
        if (i === 0) {
          formatted += '_';
        } else if (i === 3) {
          formatted += ') ' + '_';
        } else if (i === 6) {
          formatted += '-' + '_';
        } else if (i === 8) {
          formatted += '-' + '_';
        } else {
          formatted += '_';
        }
      }
    }

    return formatted;
  }
</script>

<div class={containerClass}>
  <input
    type="tel"
    value={formatPhoneNumber(value)}
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