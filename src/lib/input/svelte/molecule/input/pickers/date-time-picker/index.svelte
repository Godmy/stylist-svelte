<script lang="ts">
  import type { IDateTimePickerProps } from '$stylist/input/interface/component/date-time-picker/other';
  import { createDateTimePickerState } from '$stylist/input/function/state/date-time-picker';
  import FormDatePicker from '../form-date-picker/index.svelte';
  import { Icon as BaseIcon } from '$stylist';
  const Calendar = 'calendar';

  let props: IDateTimePickerProps = $props();
  const state = createDateTimePickerState(props);
</script>

<div class={`relative ${state.className}`.trim()}>
  <div class="flex items-center">
    <input
      use:state.dateInputAction
      type="text"
      class={`w-full p-2 border border-[var(--color-border-primary)] rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer ${state.dateClass} ${
        state.disabled ? 'bg-[var(--color-background-secondary)] text-[var(--color-text-tertiary)] cursor-not-allowed' : ''
      }`}
      readonly
      value={state.selectedDate ? state.selectedDate.toLocaleDateString() : ''}
      onclick={state.toggleDropdown}
      disabled={state.disabled}
      {...props}
    />

    <select
      class={`p-2 border border-l-0 border-[var(--color-border-primary)] rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${state.timeClass} ${
        state.disabled ? 'bg-[var(--color-background-secondary)] text-[var(--color-text-tertiary)] cursor-not-allowed' : ''
      }`}
      value={state.selectedTime}
      onchange={state.handleTimeChange}
      disabled={state.disabled}
    >
      {#each state.timeOptions as option}
        <option value={option}>
          {new Date(`1970-01-01T${option}:00`).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </option>
      {/each}
    </select>

    <button
      type="button"
      class={`absolute right-0 top-0 h-full px-3 rounded-r-md hover:bg-[var(--color-background-secondary)] ${state.disabled ? 'hidden' : 'block'}`}
      onclick={state.toggleDropdown}
    >
      <BaseIcon name={Calendar} class="w-4 h-4 text-[var(--color-text-secondary)]" />
    </button>
  </div>

  {#if state.isOpen}
    <div
      use:state.datePickerAction
      class={`absolute z-[var(--z-index-docked)] mt-1 p-4 bg-[var(--color-background-primary)] border border-[var(--color-border-primary)] rounded-md shadow-lg ${state.dropdownClass}`}
      onclick={(e) => e.stopPropagation()}
      onkeydown={(e: KeyboardEvent) => e.stopPropagation()}
      role="dialog"
      tabindex={0}
    >
      <FormDatePicker
        value={state.selectedDate ? state.selectedDate.toISOString().split('T')[0] : ''}
        onchange={state.handleDateChange}
        minDate={state.minDate ? state.minDate.toISOString().split('T')[0] : undefined}
        maxDate={state.maxDate ? state.maxDate.toISOString().split('T')[0] : undefined}
      />
    </div>
  {/if}
</div>





