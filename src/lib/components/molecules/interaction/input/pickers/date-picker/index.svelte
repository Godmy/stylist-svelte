<script lang="ts">
  import type { HTMLInputAttributes } from 'svelte/elements';

  type Props = {
    value?: Date;
    minDate?: Date;
    maxDate?: Date;
    disabled?: boolean;
    placeholder?: string;
    dateFormat?: string; // Could implement custom formatting
  } & HTMLInputAttributes;

  let {
    value,
    minDate,
    maxDate,
    disabled = false,
    placeholder = 'Select date',
    ...restProps
  }: Props = $props();

  let internalValue = $state<string>('');
  let isOpen = $state(false);

  // Update internal value when prop value changes
  $effect(() => {
    if (value) {
      internalValue = value.toISOString().split('T')[0];
    }
  });

  // Handle date change
  function handleDateChange(e: Event) {
    const target = e.target as HTMLInputElement;
    internalValue = target.value;
    
    // Create new date from the value
    if (target.value) {
      const date = new Date(target.value + 'T00:00:00');
      // We'll update the parent's value via an event
      const event = new CustomEvent('dateChange', { detail: { date }});
      dispatchEvent(event);
    } else {
      // We'll update the parent's value via an event
      const event = new CustomEvent('dateChange', { detail: { date: undefined }});
      dispatchEvent(event);
    }
    
    // Close picker after selection
    isOpen = false;
  }

  // Format date for display in the input
  let displayValue = $derived(internalValue 
    ? new Date(internalValue).toLocaleDateString() 
    : '');
</script>

<div class="relative inline-block">
  <input
    type="text"
    readonly
    bind:value={displayValue}
    placeholder={placeholder}
    class="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
    onclick={() => !disabled && (isOpen = true)}
    disabled={disabled}
    {...restProps}
  />
  
  {#if isOpen && !disabled}
    <input
      type="date"
      bind:value={internalValue}
      onchange={handleDateChange}
      min={minDate?.toISOString().split('T')[0]}
      max={maxDate?.toISOString().split('T')[0]}
      class="absolute top-full left-0 mt-1 border border-gray-300 rounded-md p-2 bg-white shadow-lg z-10"
      style="width: fit-content;"
    />
  {/if}
</div>
