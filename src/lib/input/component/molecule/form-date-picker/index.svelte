<script lang="ts">
  import type { SlotFormDatePicker as IFormDatePickerProps } from '$stylist/input/interface/slot/form-date-picker';
  import { createFormDatePickerState } from '$stylist/input/function/state/form-date-picker';
  import { Icon as BaseIcon } from '$stylist/media';
  const Calendar = 'calendar';

  let props: IFormDatePickerProps = $props();
  const state = createFormDatePickerState(props);
</script>

<div class={`date-picker-container relative ${state.hostClass}`}>
  <label for="date-picker-input" class="block text-sm font-medium text-[var(--color-text-primary)] mb-1">
    {state.label}
  </label>

  <div class="relative">
    <input
      id="date-picker-hidden"
      type="date"
      class={`hidden`}
      value={state.selectedDate}
      min={state.minDate}
      max={state.maxDate}
      oninput={state.handleInput}
      onchange={state.handleChange}
      {...props}
    />

    <input
      id="date-picker-input"
      type="text"
      class={`block w-full pl-3 pr-10 py-2 border border-[var(--color-border-primary)] rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-[var(--color-primary-500)] ${state.inputClass}`}
      placeholder={state.placeholder}
      value={state.selectedDate ? state.formatDate(state.selectedDate) : ''}
      readonly
      onclick={state.toggleCalendar}
      aria-label={state.label || 'Select date'}
    />

    <div class="absolute inset-y-0 right-0 pl-3 flex items-center pointer-events-none">
      <BaseIcon name={Calendar} class="h-5 w-5 text-[var(--color-text-tertiary)]" />
    </div>
  </div>

  {#if state.showCalendar}
    <div class={`absolute z-[var(--z-index-docked)] mt-1 bg-[var(--color-background-primary)] shadow-lg rounded-md p-3 border border-[var(--color-border-primary)] ${state.calendarClass}`}>
      <input
        type="date"
        class="block w-full p-2 border border-[var(--color-border-primary)] rounded-md"
        value={state.selectedDate}
        min={state.minDate}
        max={state.maxDate}
        onchange={(e) => {
          state.handleChange(e);
          state.closeCalendar();
        }}
      />
    </div>
  {/if}

  {#if state.helperText}
    <p class="mt-1 text-xs text-[var(--color-text-secondary)]">{state.helperText}</p>
  {/if}

  {#if state.error}
    <p class="mt-1 text-xs text-[var(--color-danger-600)]">{state.error}</p>
  {/if}
</div>

<style>
  .date-picker-container {
    position: relative;
  }

  .date-picker-container input[type="date"]::-webkit-calendar-picker-indicator {
    background: transparent;
    bottom: 0;
    color: transparent;
    cursor: pointer;
    height: auto;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    width: auto;
  }
</style>






