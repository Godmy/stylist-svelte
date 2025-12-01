<script lang="ts">
  import type { IDateRangePickerProps, IDateRange } from './types';
  import { DateRangePickerStyleManager } from './styles';
  import { Calendar, ChevronLeft, ChevronRight, X } from 'lucide-svelte';

  /**
   * Компонент DateRangePicker - выбор диапазона дат с календарем
   *
   * Следует принципам SOLID:
   * - Принцип единственной ответственности (SRP): компонент отвечает только за выбор диапазона дат
   * - Принцип открытости/закрытости (OCP): легко расширяем через пропсы и стили
   * - Принцип подстановки Лисков (LSP): можно использовать как замену стандартному полю ввода даты
   * - Принцип разделения интерфейса (ISP): четко определенный интерфейс пропсов
   * - Принцип инверсии зависимостей (DIP): зависит от абстракций (стилей через DateRangePickerStyleManager)
   */

  const props: IDateRangePickerProps = $props();

  let {
    value = { start: null, end: null },
    disabled = false,
    placeholder = 'Select date range',
    class: className = '',
    calendarClass = '',
    inputClass = '',
    buttonClass = '',
    variant = 'default',
    onInput,
    onChange,
    ...restProps
  } = props;

  let selectedRange = $state<IDateRange>({
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

  // Вычисляем стили с использованием DateRangePickerStyleManager
  const containerClasses = $derived(
    DateRangePickerStyleManager.getContainerClasses(className)
  );
  const inputContainerClasses = $derived(
    DateRangePickerStyleManager.getInputContainerClasses()
  );
  const inputClasses = $derived(
    DateRangePickerStyleManager.getInputClasses(disabled, inputClass)
  );
  const calendarIconClasses = $derived(
    DateRangePickerStyleManager.getCalendarIconClasses()
  );
  const clearButtonClasses = $derived(
    DateRangePickerStyleManager.getClearButtonClasses()
  );
  const calendarButtonClasses = $derived(
    DateRangePickerStyleManager.getCalendarButtonClasses(disabled, buttonClass)
  );
  const calendarClasses = $derived(
    DateRangePickerStyleManager.getCalendarClasses(calendarClass)
  );
  const calendarHeaderClasses = $derived(
    DateRangePickerStyleManager.getCalendarHeaderClasses()
  );
  const navigationButtonClasses = $derived(
    DateRangePickerStyleManager.getNavigationButtonClasses()
  );
  const monthHeaderClasses = $derived(
    DateRangePickerStyleManager.getMonthHeaderClasses()
  );
  const weekdayHeaderClasses = $derived(
    DateRangePickerStyleManager.getWeekdayHeaderClasses()
  );
  const daysGridClasses = $derived(
    DateRangePickerStyleManager.getDaysGridClasses()
  );
  const emptyDateCellClasses = $derived(
    DateRangePickerStyleManager.getEmptyDateCellClasses()
  );
</script>

<div class={containerClasses} {...restProps}>
  <div class={inputContainerClasses}>
    <input
      bind:this={dateInputRef}
      type="text"
      class={inputClasses}
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

    <div class={calendarIconClasses}>
      <Calendar class="h-5 w-5" />
    </div>

    {#if selectedRange.start || selectedRange.end}
      <button
        type="button"
        class={clearButtonClasses}
        onclick={(e) => { e.stopPropagation(); clearSelection(); }}
        aria-label="Clear selection"
      >
        <X class="h-5 w-5" />
      </button>
    {/if}

    <button
      type="button"
      class={calendarButtonClasses}
      onclick={toggleCalendar}
      aria-label="Toggle calendar"
    >
      <Calendar class="h-5 w-5 text-[--color-text-secondary]" />
    </button>
  </div>

  {#if isOpen}
    <div
      bind:this={calendarRef}
      class={calendarClasses}
      onclick={(e) => e.stopPropagation()}
      onkeydown={handleCalendarKeyDown}
      role="dialog"
      aria-modal="true"
      tabindex="-1"
    >
      <div class={calendarHeaderClasses}>
        <button
          type="button"
          class={navigationButtonClasses}
          onclick={goToPreviousMonth}
          aria-label="Previous month"
        >
          <ChevronLeft class="h-5 w-5" />
        </button>

        <h3 class={monthHeaderClasses}>
          {currentDateView.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
        </h3>

        <button
          type="button"
          class={navigationButtonClasses}
          onclick={goToNextMonth}
          aria-label="Next month"
        >
          <ChevronRight class="h-5 w-5" />
        </button>
      </div>

      <div class={daysGridClasses + ' mb-2'}>
        {#each ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'] as day}
          <div class={weekdayHeaderClasses}>
            {day}
          </div>
        {/each}
      </div>

      <div class={daysGridClasses}>
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
              class={DateRangePickerStyleManager.getDateButtonClasses(
                isDateInRange(date),
                isStartDate(date) || isEndDate(date),
                date.getDate() === new Date().getDate() &&
                date.getMonth() === new Date().getMonth() &&
                date.getFullYear() === new Date().getFullYear(),
                date.getMonth() === currentDateView.getMonth()
              )}
              onclick={() => handleDateClick(date)}
            >
              {date.getDate()}
            </button>
          {:else}
            <div class={emptyDateCellClasses}></div>
          {/if}
        {/each}
      </div>
    </div>
  {/if}
</div>
