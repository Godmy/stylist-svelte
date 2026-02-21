<script lang="ts">
  import { Calendar, ChevronLeft, ChevronRight, X } from 'lucide-svelte';
  import type { DateRangePickerProps } from '$stylist/design-system/props/interaction/interaction-input';
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
    <Calendar class="h-5 w-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
    {#if selectedRange.start}
      <button type="button" class="absolute right-10 top-1/2 -translate-y-1/2" onclick={() => (selectedRange = { start: null, end: null })}><X class="h-4 w-4" /></button>
    {/if}
    <button type="button" class={`absolute right-2 top-1/2 -translate-y-1/2 ${buttonClass}`} onclick={() => !disabled && (isOpen = !isOpen)}><Calendar class="h-4 w-4" /></button>
  </div>

  {#if isOpen}
    <div class={InteractionInputStyleManager.panel(`absolute z-10 mt-2 p-3 w-80 ${calendarClass}`)}>
      <div class="flex items-center justify-between mb-2">
        <button type="button" onclick={() => (currentDateView = new Date(currentDateView.getFullYear(), currentDateView.getMonth() - 1, 1))}><ChevronLeft class="h-4 w-4" /></button>
        <div class="text-sm font-medium">{currentDateView.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</div>
        <button type="button" onclick={() => (currentDateView = new Date(currentDateView.getFullYear(), currentDateView.getMonth() + 1, 1))}><ChevronRight class="h-4 w-4" /></button>
      </div>
      <div class="grid grid-cols-7 gap-1 text-xs text-center text-gray-500 mb-1">{#each ['Su','Mo','Tu','We','Th','Fr','Sa'] as d}<div>{d}</div>{/each}</div>
      <div class="grid grid-cols-7 gap-1">
        {#each Array.from({ length: 42 }, (_, i) => {
          const d = new Date(currentDateView.getFullYear(), currentDateView.getMonth(), 1);
          d.setDate(i - new Date(currentDateView.getFullYear(), currentDateView.getMonth(), 1).getDay() + 1);
          return d;
        }) as date}
          {#if date.getMonth() === currentDateView.getMonth()}
            <button type="button" class={`h-8 rounded text-xs ${inRange(date) ? 'bg-blue-100' : 'hover:bg-gray-100'} ${selectedRange.start && date.toDateString() === selectedRange.start.toDateString() ? 'bg-blue-500 text-white' : ''} ${selectedRange.end && date.toDateString() === selectedRange.end.toDateString() ? 'bg-blue-500 text-white' : ''}`} onclick={() => pick(date)}>{date.getDate()}</button>
          {:else}
            <div class="h-8"></div>
          {/if}
        {/each}
      </div>
    </div>
  {/if}
</div>
