<script lang="ts">
  import type { HTMLInputAttributes } from 'svelte/elements';

  /**
   * Input component - A styled input field with label and error handling
   * 
   * @param id - Unique identifier for the input field (required)
   * @param label - Label text for the input field (required)
   * @param type - Input type ('text', 'email', 'password', etc.)
   * @param value - Current value of the input (supports two-way binding)
   * @param errors - Array of error messages to display
   * @param required - Whether the field is required
   * @param disabled - Whether the input is disabled
   * @param placeholder - Placeholder text for the input
   * @param min - Minimum value for numeric inputs
   * @param max - Maximum value for numeric inputs
   * @param step - Step increment for numeric inputs
   * @returns A styled input field with label and error display
   */
  export type InputProps = {
    id: string;
    label: string;
    type?: string;
    value?: string;
    errors?: string[];
    required?: boolean;
    disabled?: boolean;
    placeholder?: string;
    min?: number;
    max?: number;
    step?: number;
  } & HTMLInputAttributes;

  let {
    id,
    label,
    type = 'text',
    value = $bindable(),
    errors = [],
    required = false,
    disabled = false,
    placeholder,
    min,
    max,
    step,
    class: className = '',
    ...restProps
  }: InputProps = $props();

  let hasError = $derived(errors.length > 0);
  let errorId = $derived(`${id}-error`);
</script>

<div class="mb-4 {className}">
  <label
    for={id}
    class="block text-sm font-medium text-gray-700 mb-1"
  >
    {label}
    {#if required}
      <span class="text-red-500">*</span>
    {/if}
  </label>

  <input
    id={id}
    type={type}
    bind:value={value}
    class="
      w-full px-3 py-2 border rounded-md shadow-sm
      {hasError
        ? 'border-[--stylist-input-error-border] focus:ring-[--stylist-input-error-focus-ring] focus:border-[--stylist-input-error-focus-border]'
        : 'border-[--stylist-input-border] focus:ring-[--stylist-input-focus-ring] focus:border-[--stylist-input-focus-border]'}
      {disabled ? 'bg-[--stylist-input-disabled-bg] cursor-not-allowed' : ''}
    "
    disabled={disabled}
    placeholder={placeholder}
    required={required}
    min={min}
    max={max}
    step={step}
    aria-describedby={hasError ? errorId : undefined}
    {...restProps}
  />

  {#if hasError}
    <p id={errorId} class="mt-1 text-sm text-red-600">
      {#each errors as error, i}
        {error}{i < errors.length - 1 ? ' ' : ''}
      {/each}
    </p>
  {/if}
</div>
