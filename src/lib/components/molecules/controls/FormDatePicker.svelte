<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { Calendar } from 'lucide-svelte';

  type RestProps = Omit<HTMLAttributes<HTMLInputElement>, 'class' | 'value' | 'on:input' | 'on:change'>;

  type Props = RestProps & {
    value?: string;
    class?: string;
    inputClass?: string;
    calendarClass?: string;
    label?: string;
    helperText?: string;
    error?: string;
    minDate?: string;
    maxDate?: string;
    placeholder?: string;
    onInput?: (value: string, event?: Event) => void;
    onChange?: (value: string, event?: Event) => void;
  };

  let {
    value = '',
    class: hostClass = '',
    inputClass = '',
    calendarClass = '',
    label,
    helperText,
    error,
    minDate,
    maxDate,
    placeholder = 'Select date',
    onInput,
    onChange,
    ...restProps
  }: Props = $props();

  let selectedDate = $state(value);
  let showCalendar = $state(false);

  $effect(() => {
    selectedDate = value;
  });

  function handleInput(event: Event) {
    const target = event.target as HTMLInputElement;
    selectedDate = target.value;
    onInput?.(selectedDate, event);
  }

  function handleChange(event: Event) {
    const target = event.target as HTMLInputElement;
    selectedDate = target.value;
    onChange?.(selectedDate, event);
    showCalendar = false;
  }

  function formatDate(dateString: string): string {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString();
  }

  function toggleCalendar() {
    showCalendar = !showCalendar;
  }

  function closeCalendar() {
    showCalendar = false;
  }
</script>

<div class={`date-picker-container relative ${hostClass}`}>
  <label for="date-picker-input" class="block text-sm font-medium text-gray-700 mb-1">
    {label || 'Date'}
  </label>

  <div class="relative">
    <input
      id="date-picker-hidden"
      type="date"
      class={`hidden`}
      value={selectedDate}
      min={minDate}
      max={maxDate}
      oninput={handleInput}
      onchange={handleChange}
      {...restProps}
    />

    <input
      id="date-picker-input"
      type="text"
      class={`block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${inputClass}`}
      placeholder={placeholder}
      value={selectedDate ? formatDate(selectedDate) : ''}
      readonly
      onclick={toggleCalendar}
      aria-label={label || 'Select date'}
    />

    <div class="absolute inset-y-0 right-0 pl-3 flex items-center pointer-events-none">
      <Calendar class="h-5 w-5 text-gray-400" />
    </div>
  </div>

  {#if showCalendar}
    <div class={`absolute z-10 mt-1 bg-white shadow-lg rounded-md p-3 border border-gray-200 ${calendarClass}`}>
      <input
        type="date"
        class="block w-full p-2 border border-gray-300 rounded-md"
        value={selectedDate}
        min={minDate}
        max={maxDate}
        onchange={(e) => {
          handleChange(e);
          closeCalendar();
        }}
      />
    </div>
  {/if}

  {#if helperText}
    <p class="mt-1 text-xs text-gray-500">{helperText}</p>
  {/if}

  {#if error}
    <p class="mt-1 text-xs text-red-600">{error}</p>
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