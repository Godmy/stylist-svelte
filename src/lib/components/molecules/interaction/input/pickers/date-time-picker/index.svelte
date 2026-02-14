<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import FormDatePicker from '../form-date-picker/index.svelte';
  import { Calendar } from 'lucide-svelte';

  type Props = {
    value?: Date;
    minDate?: Date;
    maxDate?: Date;
    disabled?: boolean;
    class?: string;
    dateClass?: string;
    timeClass?: string;
    dropdownClass?: string;
  } & HTMLAttributes<HTMLInputElement>;

  let {
    value = new Date(),
    minDate = undefined,
    maxDate = undefined,
    disabled = false,
    class: className = '',
    dateClass = '',
    timeClass = '',
    dropdownClass = '',
    ...restProps
  }: Props = $props();

  let isOpen = $state(false);
  let selectedDate = $state<Date>(value);
  let selectedTime = $state<string>(value ? formatTime(value) : '12:00');
  let dateInputRef: HTMLInputElement;
  let datePickerRef = $state<HTMLDivElement>();

  // Initialize time inputs based on current time
  $effect(() => {
    if (selectedDate) {
      selectedTime = formatTime(selectedDate);
    }
  });

  function formatTime(date: Date): string {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
  }

  function handleDateChange(evt: CustomEvent<Date> | Event) {
    if ('detail' in evt) {
      selectedDate = (evt as CustomEvent<Date>).detail;
    } else {
      const target = evt.target as HTMLInputElement;
      if (target.value) {
        selectedDate = new Date(target.value);
      }
    }
    updateDateTime();
  }

  function handleTimeChange(e: Event) {
    const target = e.target as HTMLSelectElement;
    const [hours, minutes] = target.value.split(':').map(Number);
    selectedDate.setHours(hours, minutes, 0, 0);
    selectedTime = formatTime(selectedDate);
    updateDateTime();
  }

  function updateDateTime() {
    // Emit change event with the updated date-time
    const event = new CustomEvent('change', { 
      detail: { date: new Date(selectedDate) },
      bubbles: true
    });
    dateInputRef?.dispatchEvent(event);
  }

  function toggleDropdown() {
    if (!disabled) {
      isOpen = !isOpen;
    }
  }

  // Handle clicks outside to close the dropdown
  $effect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen && 
        dateInputRef && 
        datePickerRef && 
        !dateInputRef.contains(event.target as Node) && 
        !datePickerRef.contains(event.target as Node)
      ) {
        isOpen = false;
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  });
</script>

<div class="relative" class:className>
  <div class="flex items-center">
    <!-- Date Input -->
    <input
      bind:this={dateInputRef}
      type="text"
      class={`w-full p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer ${dateClass} ${
        disabled ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : ''
      }`}
      readonly
      value={selectedDate ? selectedDate.toLocaleDateString() : ''}
      onclick={toggleDropdown}
      disabled={disabled}
      {...restProps}
    />
    
    <!-- Time Input -->
    <select
      class={`p-2 border border-l-0 border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${timeClass} ${
        disabled ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : ''
      }`}
      value={selectedTime}
      onchange={handleTimeChange}
      disabled={disabled}
    >
      {#each [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23] as hour}
        {#each [0, 15, 30, 45] as minute}
          <option value={`${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`}>
            {new Date(0, 0, 0, hour, minute).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </option>
        {/each}
      {/each}
    </select>
    
    <button
      type="button"
      class={`absolute right-0 top-0 h-full px-3 rounded-r-md hover:bg-gray-100 ${disabled ? 'hidden' : 'block'}`}
      onclick={toggleDropdown}
    >
      <Calendar class="w-4 h-4 text-gray-500" />
    </button>
  </div>

  {#if isOpen}
    <div
      bind:this={datePickerRef}
      class={`absolute z-10 mt-1 p-4 bg-white border border-gray-200 rounded-md shadow-lg ${dropdownClass}`}
      onclick={(e) => e.stopPropagation()}
      onkeydown={(e: KeyboardEvent) => e.stopPropagation()}
      role="dialog"
      tabindex={0}
    >
      <FormDatePicker
        value={selectedDate ? selectedDate.toISOString().split('T')[0] : ''}
        onchange={handleDateChange}
        minDate={minDate ? minDate.toISOString().split('T')[0] : undefined}
        maxDate={maxDate ? maxDate.toISOString().split('T')[0] : undefined}
      />
    </div>
  {/if}
</div>
