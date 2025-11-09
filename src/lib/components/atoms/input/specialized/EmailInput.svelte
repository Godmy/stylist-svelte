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
    value = '',
    placeholder = 'Введите email',
    disabled = false,
    required = false,
    error = false,
    helpText,
    ...restProps
  }: Props = $props();

  let internalValue = $state(value);

  // Update internal value when prop value changes
  $effect(() => {
    internalValue = value || '';
  });

  function handleInput(e: Event) {
    const target = e.target as HTMLInputElement;
    internalValue = target.value;
    // Dispatch event to notify parent of change
    const event = new CustomEvent('valueChange', { detail: { value: target.value } });
    dispatchEvent(event);
  }
</script>

<div class="w-full">
  <input
    type="email"
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