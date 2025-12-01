<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { Calendar, Clock, X } from 'lucide-svelte';

  type DateTimeRange = {
    start: Date | null;
    end: Date | null;
  };

  type Props = {
    value?: DateTimeRange;
    disabled?: boolean;
    placeholder?: string;
    class?: string;
    calendarClass?: string;
    inputClass?: string;
    buttonClass?: string;
    onInput?: (range: DateTimeRange) => void;
    onChange?: (range: DateTimeRange) => void;
  } & HTMLAttributes<HTMLDivElement>;

  let {
    value = { start: null, end: null },
    disabled = false,
    placeholder = 'Select date & time range',
    class: className = '',
    calendarClass = '',
    inputClass = '',
    buttonClass = '',
    onInput,
    onChange,
    ...restProps
  }: Props = $props();

  let selectedRange = $state<DateTimeRange>({ 
    start: value.start ? new Date(value.start) : null, 
    end: value.end ? new Date(value.end) : null 
  });
  let isOpen = $state(false);
  let currentDateView = $state(new Date());
  let dateInputRef = $state<HTMLInputElement | undefined>();
  let calendarRef = $state<HTMLDivElement | undefined>();

  // Update local state when value prop changes
  $effect(() => {
    if (value.start !== selectedRange.start || value.end !== selectedRange.end) {
      selectedRange = { 
        start: value.start ? new Date(value.start) : null, 
        end: value.end ? new Date(value.end) : null 
      };
    }
  });

  function formatDateTime(date: Date | null): string {
    if (!date) return '';
    return date.toLocaleString();
  }

  function handleDateClick(date: Date) {
    if (disabled) return;

    // If no start date is selected, set it as start
    if (!selectedRange.start) {
      selectedRange = { start: date, end: null };
    } 
    // If start date is selected but no end date, and clicked date is after start
    else if (selectedRange.start && !selectedRange.end) {
      if (date >= selectedRange.start) {
        selectedRange = { ...selectedRange, end: date };
        // Close calendar after selecting end date
        isOpen = false;
        
        if (onChange) {
          onChange({ ...selectedRange, end: date });
        }
      } else {
        // If clicked date is before start, make it the new start
        selectedRange = { start: date, end: null };
      }
    } 
    // If both start and end are selected, reset and start a new range
    else {
      selectedRange = { start: date, end: null };
    }

    if (onInput) {
      onInput({ ...selectedRange });
    }
  }

  function handleTimeChange(isStart: boolean, hours: number, minutes: number) {
    if (disabled) return;
    
    const newRange = { ...selectedRange };
    const dateToModify = isStart ? newRange.start : newRange.end;
    
    if (dateToModify) {
      dateToModify.setHours(hours, minutes, 0, 0);
      
      if (isStart) {
        newRange.start = dateToModify;
      } else {
        newRange.end = dateToModify;
      }
      
      selectedRange = newRange;
      
      if (onInput) {
        onInput({ ...newRange });
      }
    }
  }

  function toggleCalendar() {
    if (!disabled) {
      isOpen = !isOpen;
    }
  }

  function clearSelection() {
    selectedRange = { start: null, end: null };
    
    if (onInput) {
      onInput({ ...selectedRange });
    }
    if (onChange) {
      onChange({ ...selectedRange });
    }
  }

  // Handle clicks outside to close the calendar
  $effect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen && 
        dateInputRef && 
        calendarRef && 
        !dateInputRef.contains(event.target as Node) && 
        !calendarRef.contains(event.target as Node)
      ) {
        isOpen = false;
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  });

  function getHoursOptions() {
    return Array.from({ length: 24 }, (_, i) => i.toString().padStart(2, '0'));
  }

  function getMinutesOptions() {
    return Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, '0'));
  }

  function handleCalendarKeyDown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      event.preventDefault();
      isOpen = false;
    }
  }
</script>

<div class={`relative inline-block w-full ${className}`} {...restProps}>
  <div class="relative">
    <input
      bind:this={dateInputRef}
      type="text"
      class={`w-full p-2 pl-10 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 cursor-pointer ${
        disabled ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-white'
      } ${inputClass}`}
      readonly
      value={
        selectedRange.start && selectedRange.end 
          ? `${formatDateTime(selectedRange.start)} - ${formatDateTime(selectedRange.end)}` 
          : selectedRange.start 
            ? `${formatDateTime(selectedRange.start)} - End time` 
            : placeholder
      }
      onclick={toggleCalendar}
      disabled={disabled}
    />
    
    <div class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
      <Calendar class="h-5 w-5" />
    </div>
    
    {#if selectedRange.start || selectedRange.end}
      <button
        type="button"
        class="absolute right-8 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
        onclick={(e) => { e.stopPropagation(); clearSelection(); }}
        aria-label="Clear selection"
      >
        <X class="h-5 w-5" />
      </button>
    {/if}
    
    <button
      type="button"
      class={`absolute right-0 top-0 h-full px-3 rounded-r-md hover:bg-gray-100 ${buttonClass} ${
        disabled ? 'hidden' : 'block'
      }`}
      onclick={toggleCalendar}
      aria-label="Toggle calendar"
    >
      <Calendar class="h-5 w-5 text-gray-500" />
    </button>
  </div>

  {#if isOpen}
    <div
      bind:this={calendarRef}
      class={`absolute z-10 mt-1 p-4 bg-white border border-gray-200 rounded-md shadow-lg w-96 ${calendarClass}`}
      onclick={(e) => e.stopPropagation()}
      onkeydown={handleCalendarKeyDown}
      role="dialog"
      aria-modal="true"
      tabindex="-1"
    >
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <!-- Date Range Selection -->
        <div>
          <h3 class="text-lg font-semibold text-gray-900 mb-3">Select Dates</h3>
          <div class="border rounded p-3 mb-4">
            <div class="flex justify-between mb-2">
              <span class="text-sm font-medium text-gray-700">Start Date</span>
              <span class="text-sm text-gray-500">
                {selectedRange.start ? selectedRange.start.toLocaleDateString() : 'Not selected'}
              </span>
            </div>
            
            <div class="flex justify-between mb-2">
              <span class="text-sm font-medium text-gray-700">End Date</span>
              <span class="text-sm text-gray-500">
                {selectedRange.end ? selectedRange.end.toLocaleDateString() : 'Not selected'}
              </span>
            </div>
          </div>
        </div>
        
        <!-- Time Selection -->
        <div>
          <h3 class="text-lg font-semibold text-gray-900 mb-3">Select Times</h3>
          
          {#if selectedRange.start}
            <div class="mb-3">
              <label for="startTimeHours" class="block text-sm font-medium text-gray-700 mb-1">Start Time</label>
              <div class="flex space-x-2">
                <select
                  id="startTimeHours"
                  class="flex-1 border border-gray-300 rounded-md p-2"
                  onchange={(e) => handleTimeChange(true, parseInt((e.target as HTMLSelectElement).value), selectedRange.start?.getMinutes() || 0)}
                  value={selectedRange.start?.getHours()}
                >
                  {#each getHoursOptions() as hour}
                    <option value={hour}>{hour}</option>
                  {/each}
                </select>
                
                <span class="self-center">:</span>
                
                <select
                  id="startTimeMinutes"
                  class="flex-1 border border-gray-300 rounded-md p-2"
                  onchange={(e) => handleTimeChange(true, selectedRange.start?.getHours() || 0, parseInt((e.target as HTMLSelectElement).value))}
                  value={selectedRange.start?.getMinutes()}
                >
                  {#each getMinutesOptions() as minute}
                    <option value={minute}>{minute}</option>
                  {/each}
                </select>
              </div>
            </div>
          {/if}
          
          {#if selectedRange.end}
            <div>
              <label for="endTimeHours" class="block text-sm font-medium text-gray-700 mb-1">End Time</label>
              <div class="flex space-x-2">
                <select
                  id="endTimeHours"
                  class="flex-1 border border-gray-300 rounded-md p-2"
                  onchange={(e) => handleTimeChange(false, parseInt((e.target as HTMLSelectElement).value), selectedRange.end?.getMinutes() || 0)}
                  value={selectedRange.end?.getHours()}
                >
                  {#each getHoursOptions() as hour}
                    <option value={hour}>{hour}</option>
                  {/each}
                </select>
                
                <span class="self-center">:</span>
                
                <select
                  id="endTimeMinutes"
                  class="flex-1 border border-gray-300 rounded-md p-2"
                  onchange={(e) => handleTimeChange(false, selectedRange.end?.getHours() || 0, parseInt((e.target as HTMLSelectElement).value))}
                  value={selectedRange.end?.getMinutes()}
                >
                  {#each getMinutesOptions() as minute}
                    <option value={minute}>{minute}</option>
                  {/each}
                </select>
              </div>
            </div>
          {/if}
        </div>
      </div>
      
      <div class="mt-4">
        <h3 class="text-lg font-semibold text-gray-900 mb-3">Select Dates</h3>
        <div class="grid grid-cols-7 gap-1 mb-2">
          {#each ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'] as day}
            <div class="text-center text-xs font-medium text-gray-500 p-1">
              {day}
            </div>
          {/each}
        </div>

        <div class="grid grid-cols-7 gap-1">
          {#each Array.from({ length: 42 }, (_, i) => {
            const date = new Date(currentDateView.getFullYear(), currentDateView.getMonth(), 1);
            date.setDate(i - new Date(currentDateView.getFullYear(), currentDateView.getMonth(), 1).getDay() + 1);
            return date;
          }) as date, i}
            {#if date.getMonth() === currentDateView.getMonth()}
              <button
                type="button"
                class={`h-8 w-8 text-sm rounded-full ${
                  (selectedRange.start && 
                    date.getDate() === selectedRange.start.getDate() &&
                    date.getMonth() === selectedRange.start.getMonth() &&
                    date.getFullYear() === selectedRange.start.getFullYear())
                  || 
                  (selectedRange.end && 
                    date.getDate() === selectedRange.end.getDate() &&
                    date.getMonth() === selectedRange.end.getMonth() &&
                    date.getFullYear() === selectedRange.end.getFullYear())
                  ? 'bg-blue-500 text-white'
                  : (selectedRange.start && selectedRange.end && 
                     date >= selectedRange.start && date <= selectedRange.end)
                    ? 'bg-blue-100'
                    : 'hover:bg-gray-100'
                }`}
                onclick={() => handleDateClick(date)}
              >
                {date.getDate()}
              </button>
            {:else}
              <div class="h-8 w-8"></div>
            {/if}
          {/each}
        </div>
      </div>
    </div>
  {/if}
</div>
