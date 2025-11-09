<script lang="ts">
  import type { HTMLInputAttributes } from 'svelte/elements';

  type Props = {
    value?: string;
    placeholder?: string;
    disabled?: boolean;
    clearable?: boolean;
  } & HTMLInputAttributes;

  let {
    value = '',
    placeholder = 'Search...',
    disabled = false,
    clearable = true,
    ...restProps
  }: Props = $props();

  let internalValue = $state(value);

  // Update internal value when prop value changes
  $effect(() => {
    internalValue = value || '';
  });

  // Handle input change
  function handleInput(e: Event) {
    const target = e.target as HTMLInputElement;
    internalValue = target.value;
    // Dispatch event to notify parent of change
    const event = new CustomEvent('valueChange', { detail: { value: target.value } });
    dispatchEvent(event);
  }

  // Clear the input
  function clearInput() {
    internalValue = '';
    // Dispatch event to notify parent of change
    const event = new CustomEvent('valueChange', { detail: { value: '' } });
    dispatchEvent(event);
  }
</script>

<div class="relative">
  <input
    type="text"
    bind:value={internalValue}
    oninput={handleInput}
    placeholder={placeholder}
    disabled={disabled}
    class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
    {...restProps}
  />
  <div class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
    <!-- Using a search icon -->
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
    </svg>
  </div>
  {#if clearable && internalValue && !disabled}
    <button
      type="button"
      class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
      onclick={clearInput}
      aria-label="Clear search"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
      </svg>
    </button>
  {/if}
</div>