<script lang="ts">
  import { Icon as BaseIcon } from '$stylist/components/atoms';
const Calendar = 'calendar';
const ChevronLeft = 'chevron-left';
const ChevronRight = 'chevron-right';
const X = 'x';

  import type { DateRangePickerProps } from '$stylist/design-system/contracts/interaction/interaction-input';
  import { InteractionInputStyleManager } from '$stylist/design-system/styles/interaction/interaction-input';

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
  }: DateRangePickerProps = $props();

  let selectedRange = $state({ start: value.start ? new Date(value.start) : null, end: value.end ? new Date(value.end) : null });
  let isOpen = $state(false);
  let currentDateView = $state(new Date());

  function fmt(date: Date | null): string {
    return date ? date.toLocaleDateString() : '';
  }

  function pick(date: Date) {
    if (disabled) return;
    if (!selectedRange.start || (selectedRange.start && selectedRange.end)) {
      selectedRange = { start: date, end: null };
    } else if (date >= selectedRange.start) {
      selectedRange = { ...selectedRange, end: date };
      onChange?.(selectedRange);
      isOpen = false;
    } else {
      selectedRange = { start: date, end: null };
    }
    onInput?.(selectedRange);
  }

  function inRange(date: Date): boolean {
    if (!selectedRange.start || !selectedRange.end) return false;
    return date >= selectedRange.start && date <= selectedRange.end;
  }
</script>

<div class={InteractionInputStyleManager.root('c-date-range-picker relative w-full', className)} {...restProps}>
  <div class="relative">
    <input
      type="text"
      readonly
      disabled={disabled}
      class={InteractionInputStyleManager.input(`w-full py-2 pl-10 pr-16 ${inputClass}`)}
      value={selectedRange.start ? (selectedRange.end ? `${fmt(selectedRange.start)} - ${fmt(selectedRange.end)}` : `${fmt(selectedRange.start)} - ...`) : placeholder}
      onclick={() => !disabled && (isOpen = !isOpen)}
    />
    <BaseIcon name={Calendar} class="h-5 w-5 absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-text-secondary)]" />
    {#if selectedRange.start}
      <button type="button" class="absolute right-10 top-1/2 -translate-y-1/2" onclick={() => (selectedRange = { start: null, end: null })}><BaseIcon name={X} class="h-4 w-4" /></button>
    {/if}
    <button type="button" class={`absolute right-2 top-1/2 -translate-y-1/2 ${buttonClass}`} onclick={() => !disabled && (isOpen = !isOpen)}><BaseIcon name={Calendar} class="h-4 w-4" /></button>
  </div>

  {#if isOpen}
    <div class={InteractionInputStyleManager.panel(`absolute z-[var(--z-index-docked)] mt-2 p-3 w-80 ${calendarClass}`)}>
      <div class="flex items-center justify-between mb-2">
        <button type="button" onclick={() => (currentDateView = new Date(currentDateView.getFullYear(), currentDateView.getMonth() - 1, 1))}><BaseIcon name={ChevronLeft} class="h-4 w-4" /></button>
        <div class="text-sm font-medium">{currentDateView.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</div>
        <button type="button" onclick={() => (currentDateView = new Date(currentDateView.getFullYear(), currentDateView.getMonth() + 1, 1))}><BaseIcon name={ChevronRight} class="h-4 w-4" /></button>
      </div>
      <div class="grid grid-cols-7 gap-1 text-xs text-center text-[var(--color-text-secondary)] mb-1">{#each ['Su','Mo','Tu','We','Th','Fr','Sa'] as d}<div>{d}</div>{/each}</div>
      <div class="grid grid-cols-7 gap-1">
        {#each Array.from({ length: 42 }, (_, i) => {
          const d = new Date(currentDateView.getFullYear(), currentDateView.getMonth(), 1);
          d.setDate(i - new Date(currentDateView.getFullYear(), currentDateView.getMonth(), 1).getDay() + 1);
          return d;
        }) as date}
          {#if date.getMonth() === currentDateView.getMonth()}
            <button type="button" class={`h-8 rounded text-xs ${inRange(date) ? 'bg-[var(--color-primary-100)]' : 'hover:bg-[var(--color-background-secondary)]'} ${selectedRange.start && date.toDateString() === selectedRange.start.toDateString() ? 'bg-[var(--color-primary-500)] text-[var(--color-text-inverse)]' : ''} ${selectedRange.end && date.toDateString() === selectedRange.end.toDateString() ? 'bg-[var(--color-primary-500)] text-[var(--color-text-inverse)]' : ''}`} onclick={() => pick(date)}>{date.getDate()}</button>
          {:else}
            <div class="h-8"></div>
          {/if}
        {/each}
      </div>
    </div>
  {/if}
</div>





