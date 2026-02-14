<script lang="ts">
  import type { IPhoneNumberInputProps } from '$stylist/design-system/props/phone-number-input';
  import {
    createPhoneNumberInputState,
    formatPhoneNumber,
    normalizePhoneInputValue
  } from '$stylist/design-system/models/phone-number-input.svelte';

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
    onValueInput,
    onValueChange,
    onInput,
    ...restProps
  }: IPhoneNumberInputProps = $props();

  const phoneInputState = $derived(createPhoneNumberInputState({ error, disabled }));

  function handleInput(e: Event) {
    onInput?.(e);
    const target = e.target as HTMLInputElement;
    value = normalizePhoneInputValue(target.value);
    onValueInput?.(value, e);
    onValueChange?.(value);
  }
</script>

<div class={phoneInputState.containerClass}>
  <input
    type="tel"
    value={formatPhoneNumber(value)}
    oninput={handleInput}
    placeholder={placeholder}
    disabled={disabled}
    required={required}
    class={phoneInputState.inputClass}
    {...restProps}
  />
  {#if helpText}
    <p class={phoneInputState.helpTextClass}>
      {helpText}
    </p>
  {/if}
</div>



