<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { Calendar, ChevronLeft, ChevronRight, X } from 'lucide-svelte';

  type DateRange = {
    start: Date | null;
    end: Date | null;
  };

  type Props = {
    value?: DateRange;
    disabled?: boolean;
    placeholder?: string;
    class?: string;
    calendarClass?: string;
    inputClass?: string;
    buttonClass?: string;
    onInput?: (range: DateRange) => void;
    onChange?: (range: DateRange) => void;
  } & HTMLAttributes<HTMLDivElement>;

  let {
    value = { start: null, end: null },
    disabled = false,
    placeholder = 'Select date range',
    class: className = '',
    calendarClass = '',
    inputClass = '',
    buttonClass = '',
    onInput,
    onChange,
    ...restProps
  }: Props = $props();

  let selectedRange = $state<DateRange>({ 
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

  function formatDate(date: Date | null): string {
    if (!date) return '';
    return date.toLocaleDateString();
  }

  function isDateInRange(date: Date): boolean {
    if (!selectedRange.start || !selectedRange.end) return false;
    
    const currentDate = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate()
    );
    const start = new Date(
      selectedRange.start.getFullYear(),
      selectedRange.start.getMonth(),
      selectedRange.start.getDate()
    );
    const end = new Date(
      selectedRange.end.getFullYear(),
      selectedRange.end.getMonth(),
      selectedRange.end.getDate()
    );
    
    return currentDate >= start && currentDate <= end;
  }

  function isStartDate(date: Date): boolean {
    if (!selectedRange.start) return false;
    return (
      date.getDate() === selectedRange.start.getDate() &&
      date.getMonth() === selectedRange.start.getMonth() &&
      date.getFullYear() === selectedRange.start.getFullYear()
    );
  }

  function isEndDate(date: Date): boolean {
    if (!selectedRange.end) return false;
    return (
      date.getDate() === selectedRange.end.getDate() &&
      date.getMonth() === selectedRange.end.getMonth() &&
      date.getFullYear() === selectedRange.end.getFullYear()
    );
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

  function goToPreviousMonth() {
    currentDateView = new Date(
      currentDateView.getFullYear(),
      currentDateView.getMonth() - 1,
      1
    );
  }

  function goToNextMonth() {
    currentDateView = new Date(
      currentDateView.getFullYear(),
      currentDateView.getMonth() + 1,
      1
    );
  }

  function getDaysInMonth(year: number, month: number) {
    return new Date(year, month + 1, 0).getDate();
  }

  function getFirstDayOfMonth(year: number, month: number) {
    return new Date(year, month, 1).getDay();
  }

  function handleCalendarKeyDown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      event.preventDefault();
      isOpen = false;
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
          ? `${formatDate(selectedRange.start)} - ${formatDate(selectedRange.end)}` 
          : selectedRange.start 
            ? `${formatDate(selectedRange.start)} - End date` 
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
      class={`absolute z-10 mt-1 p-4 bg-white border border-gray-200 rounded-md shadow-lg w-80 ${calendarClass}`}
      onclick={(e) => e.stopPropagation()}
      onkeydown={handleCalendarKeyDown}
      role="dialog"
      aria-modal="true"
      tabindex="-1"
    >
      <div class="flex items-center justify-between mb-4">
        <button
          type="button"
          class="p-1 rounded-full hover:bg-gray-100"
          onclick={goToPreviousMonth}
          aria-label="Previous month"
        >
          <ChevronLeft class="h-5 w-5" />
        </button>
        
        <h3 class="text-base font-semibold text-gray-900">
          {currentDateView.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
        </h3>
        
        <button
          type="button"
          class="p-1 rounded-full hover:bg-gray-100"
          onclick={goToNextMonth}
          aria-label="Next month"
        >
          <ChevronRight class="h-5 w-5" />
        </button>
      </div>

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
          date.setDate(i - getFirstDayOfMonth(currentDateView.getFullYear(), currentDateView.getMonth()) + 1);
          return date;
        }) as date, i}
          {#if 
            date.getMonth() === currentDateView.getMonth() ||
            (i === 0 && date.getMonth() === currentDateView.getMonth() - 1 && date.getDate() > 20) ||
            (i >= 35 && date.getMonth() === currentDateView.getMonth() + 1 && date.getDate() < 10)
          }
            <button
              type="button"
              class={`h-8 w-8 text-sm rounded-full ${
                isDateInRange(date)
                  ? 'bg-blue-100'
                  : isStartDate(date) || isEndDate(date)
                    ? 'bg-blue-500 text-white'
                    : date.getDate() === new Date().getDate() &&
                      date.getMonth() === new Date().getMonth() &&
                      date.getFullYear() === new Date().getFullYear()
                      ? 'bg-gray-100 font-bold'
                      : 'hover:bg-gray-100'
              } ${
                date.getMonth() !== currentDateView.getMonth() ? 'text-gray-400' : 'text-gray-700'
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
  {/if}
</div>
