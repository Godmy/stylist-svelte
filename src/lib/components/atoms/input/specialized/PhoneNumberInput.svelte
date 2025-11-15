<script lang="ts">
  import type { HTMLInputAttributes } from 'svelte/elements';

  type Props = {
    value?: string;
    placeholder?: string;
    disabled?: boolean;
    required?: boolean;
    error?: boolean;
    helpText?: string;
  } & HTMLInputAttributes;

  let {
    value = $bindable(),
    placeholder = '+7 (___) ___-__-__',
    disabled = false,
    required = false,
    error = false,
    helpText,
    ...restProps
  }: Props = $props();

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

<div class="w-full">
  <input
    type="tel"
    bind:value={internalValue}
    oninput={handleInput}
    placeholder={placeholder}
    disabled={disabled}
    required={required}
    class={`w-full px-3 py-2 border ${
      error
        ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
        : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'
    } rounded-md shadow-sm focus:outline-none focus:ring-2`}
    {...restProps}
  />
  {#if helpText}
    <p class={`mt-2 text-sm ${error ? 'text-red-600' : 'text-gray-500'}`}>
      {helpText}
    </p>
  {/if}
</div>