<script lang="ts">
  import { Calendar, Clock, X } from 'lucide-svelte';
  import type { DateTimeRangePickerProps } from '$stylist/design-system/props/interaction-input';
  import { InteractionInputStyleManager } from '$stylist/design-system/styles/interaction-input';

  let {
    value = { start: null, end: null },
    disabled = false,
    placeholder = 'Select date and time range',
    class: className = '',
    calendarClass = '',
    inputClass = '',
    onInput,
    onChange,
    ...restProps
  }: DateTimeRangePickerProps = $props();

  let selectedRange = $state({ start: value.start ? new Date(value.start) : null, end: value.end ? new Date(value.end) : null });
  let isOpen = $state(false);

  function fmt(date: Date | null): string {
    return date ? date.toLocaleString() : '';
  }

  function changeTime(kind: 'start' | 'end', hh: number, mm: number) {
    const base = selectedRange[kind] ? new Date(selectedRange[kind] as Date) : new Date();
    base.setHours(hh, mm, 0, 0);
    selectedRange = { ...selectedRange, [kind]: base };
    onInput?.(selectedRange);
    onChange?.(selectedRange);
  }
</script>

<div class={InteractionInputStyleManager.root('c-date-time-range-picker relative w-full', className)} {...restProps}>
  <div class="relative">
    <input
      readonly
      disabled={disabled}
      class={InteractionInputStyleManager.input(`w-full py-2 pl-10 pr-10 ${inputClass}`)}
      value={selectedRange.start && selectedRange.end ? `${fmt(selectedRange.start)} - ${fmt(selectedRange.end)}` : placeholder}
      onclick={() => !disabled && (isOpen = !isOpen)}
    />
    <Calendar class="h-5 w-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
    {#if selectedRange.start || selectedRange.end}
      <button type="button" class="absolute right-3 top-1/2 -translate-y-1/2" onclick={() => (selectedRange = { start: null, end: null })}><X class="h-4 w-4" /></button>
    {/if}
  </div>

  {#if isOpen}
    <div class={InteractionInputStyleManager.panel(`absolute z-10 mt-2 p-3 w-96 ${calendarClass}`)}>
      <div class="grid grid-cols-2 gap-4">
        <div>
          <div class="text-sm font-medium mb-2 flex items-center gap-1"><Clock class="h-4 w-4" /> Start</div>
          <input type="date" class="w-full mb-2 border rounded px-2 py-1" onchange={(e) => changeTime('start', (selectedRange.start?.getHours() ?? 0), (selectedRange.start?.getMinutes() ?? 0))} />
          <input type="time" class="w-full border rounded px-2 py-1" onchange={(e) => { const [h,m]=(e.target as HTMLInputElement).value.split(':').map(Number); changeTime('start', h||0, m||0); }} />
        </div>
        <div>
          <div class="text-sm font-medium mb-2 flex items-center gap-1"><Clock class="h-4 w-4" /> End</div>
          <input type="date" class="w-full mb-2 border rounded px-2 py-1" onchange={(e) => changeTime('end', (selectedRange.end?.getHours() ?? 0), (selectedRange.end?.getMinutes() ?? 0))} />
          <input type="time" class="w-full border rounded px-2 py-1" onchange={(e) => { const [h,m]=(e.target as HTMLInputElement).value.split(':').map(Number); changeTime('end', h||0, m||0); }} />
        </div>
      </div>
    </div>
  {/if}
</div>
