<script lang="ts">
  import type { HTMLInputAttributes } from 'svelte/elements';

  /**
   * Radio component - A single radio button (radio switch)
   * 
   * @param id - Unique identifier for the radio button (required)
   * @param name - Name attribute for grouping radio buttons (required)
   * @param value - Value of the radio button (required)
   * @param checked - Whether the radio button is currently checked
   * @param disabled - Whether the radio button is disabled
   * @param label - Label text to display next to the radio button
   * @param required - Whether the radio button is required in a form
   * @returns A styled radio button with optional label
   */
  export type RadioProps = {
    id: string;
    name: string;
    value: string;
    checked?: boolean;
    disabled?: boolean;
    label?: string;
    required?: boolean;
  } & HTMLInputAttributes;

  let {
    id,
    name,
    value,
    checked = false,
    disabled = false,
    label,
    required = false,
    ...restProps
  }: RadioProps = $props();

  // We'll use a callback to notify parent about changes
  // rather than direct binding since bind:group is required for radio inputs
  function handleChange(e: Event) {
    const target = e.target as HTMLInputElement;
    if (target.checked && restProps.onchange) {
      (restProps.onchange as (e: Event) => void)(e);
    }
  }
</script>

<div class="flex items-center space-x-2">
  <input
    id={id}
    type="radio"
    name={name}
    value={value}
    checked={checked}
    onchange={handleChange}
    disabled={disabled}
    required={required}
    class="
      h-4 w-4
      text-indigo-600
      focus:ring-indigo-500
      border-gray-300
      {disabled ? 'cursor-not-allowed text-gray-400' : 'cursor-pointer'}
    "
    {...restProps}
  />
  {#if label}
    <label
      for={id}
      class="
        block text-sm font-medium
        text-gray-700
        {disabled ? 'cursor-not-allowed text-gray-400' : 'cursor-pointer'}
      "
    >
      {label}
    </label>
  {/if}
</div>