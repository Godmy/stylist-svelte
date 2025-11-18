<script lang="ts">
  import { PhoneNumberInputStyleManager } from './styles';
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
   * Dependency Inversion Principle: Component depends on abstractions (styles manager and types) rather than concretions.
   */
  let {
    value = $bindable<string>(),
    placeholder = '+7 (___) ___-__-__',
    disabled = false,
    required = false,
    error = false,
    helpText,
    ...restProps
  }: IPhoneNumberInputProps = $props();

  // Generate the CSS classes using the style manager
  const containerClass = $derived(PhoneNumberInputStyleManager.generateContainerClass());
  const inputClass = $derived(PhoneNumberInputStyleManager.generateInputClass(error));
  const helpTextClass = $derived(PhoneNumberInputStyleManager.generateHelpTextClass(error));

  // We need to maintain a separate internal state to handle formatting
  let internalValue = $state(formatPhoneNumber(value || ''));

  // Update internal value when prop value changes
  $effect(() => {
    internalValue = formatPhoneNumber(value || '');
  });

  function handleInput(e: Event) {
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

    internalValue = formatPhoneNumber(unformattedValue);
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
    bind:value={internalValue}
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