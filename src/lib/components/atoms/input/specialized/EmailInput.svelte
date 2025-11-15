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
    placeholder = 'Введите email',
    disabled = false,
    required = false,
    error = false,
    helpText,
    ...restProps
  }: Props = $props();

  function handleInput(e: Event) {
    const target = e.target as HTMLInputElement;
    // The $bindable() will handle setting the value prop automatically
  }
</script>

<div class="w-full">
  <input
    type="email"
    bind:value
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