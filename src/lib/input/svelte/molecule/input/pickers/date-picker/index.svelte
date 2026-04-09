<script lang="ts">
  import type { IDatePickerProps } from '$stylist/input/interface/component/date-picker/other';
  import { createDatePickerState } from '$stylist/input/function/state/date-picker';

  let props: IDatePickerProps = $props();
  const state = createDatePickerState(props);
</script>

<div class="relative inline-block">
  <input
    type="text"
    readonly
    value={state.displayValue}
    placeholder={state.placeholder}
    class="border border-[var(--color-border-primary)] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
    onclick={state.openPicker}
    disabled={state.disabled}
    {...props}
  />
  
  {#if state.isOpen && !state.disabled}
    <input
      type="date"
      bind:value={state.internalValue}
      onchange={state.handleDateChange}
      min={state.minValue}
      max={state.maxValue}
      class="absolute top-full left-0 mt-1 border border-[var(--color-border-primary)] rounded-md p-2 bg-[var(--color-background-primary)] shadow-lg z-[var(--z-index-docked)]"
      style="width: fit-content;"
    />
  {/if}
</div>




