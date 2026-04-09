<script lang="ts">
  import { Icon as BaseIcon } from '$stylist';
  import type { DateRangePickerComponentProps } from '$stylist/input/interface/component/date-range-picker/other';
  import { createDateRangePickerState } from '$stylist/input/function/state/date-range-picker';
  import { InteractionInputStyleManager } from '$stylist/input/class/style-manager/interaction-input';
  const Calendar = 'calendar';
  const ChevronLeft = 'chevron-left';
  const ChevronRight = 'chevron-right';
  const X = 'x';

  let props: DateRangePickerComponentProps = $props();
  const state = createDateRangePickerState(props);
</script>

<div class={InteractionInputStyleManager.root('c-date-range-picker relative w-full', state.className)}>
  <div class="relative">
    <input
      type="text"
      readonly
      disabled={state.disabled}
      class={InteractionInputStyleManager.input(`w-full py-2 pl-10 pr-16 ${state.inputClass}`)}
      value={state.selectedRange.start ? (state.selectedRange.end ? `${state.fmt(state.selectedRange.start)} - ${state.fmt(state.selectedRange.end)}` : `${state.fmt(state.selectedRange.start)} - ...`) : state.placeholder}
      onclick={state.toggleOpen}
    />
    <BaseIcon name={Calendar} class="h-5 w-5 absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-text-secondary)]" />
    {#if state.selectedRange.start}
      <button type="button" class="absolute right-10 top-1/2 -translate-y-1/2" onclick={state.clear}><BaseIcon name={X} class="h-4 w-4" /></button>
    {/if}
    <button type="button" class={`absolute right-2 top-1/2 -translate-y-1/2 ${state.buttonClass}`} onclick={state.toggleOpen}><BaseIcon name={Calendar} class="h-4 w-4" /></button>
  </div>

  {#if state.isOpen}
    <div class={InteractionInputStyleManager.panel(`absolute z-[var(--z-index-docked)] mt-2 p-3 w-80 ${state.calendarClass}`)}>
      <div class="flex items-center justify-between mb-2">
        <button type="button" onclick={state.previousMonth}><BaseIcon name={ChevronLeft} class="h-4 w-4" /></button>
        <div class="text-sm font-medium">{state.currentDateView.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</div>
        <button type="button" onclick={state.nextMonth}><BaseIcon name={ChevronRight} class="h-4 w-4" /></button>
      </div>
      <div class="grid grid-cols-7 gap-1 text-xs text-center text-[var(--color-text-secondary)] mb-1">{#each ['Su','Mo','Tu','We','Th','Fr','Sa'] as d}<div>{d}</div>{/each}</div>
      <div class="grid grid-cols-7 gap-1">
        {#each state.calendarDates as date}
          {#if date.getMonth() === state.currentDateView.getMonth()}
            <button type="button" class={`h-8 rounded text-xs ${state.inRange(date) ? 'bg-[var(--color-primary-100)]' : 'hover:bg-[var(--color-background-secondary)]'} ${state.selectedRange.start && date.toDateString() === state.selectedRange.start.toDateString() ? 'bg-[var(--color-primary-500)] text-[var(--color-text-inverse)]' : ''} ${state.selectedRange.end && date.toDateString() === state.selectedRange.end.toDateString() ? 'bg-[var(--color-primary-500)] text-[var(--color-text-inverse)]' : ''}`} onclick={() => state.pick(date)}>{date.getDate()}</button>
          {:else}
            <div class="h-8"></div>
          {/if}
        {/each}
      </div>
    </div>
  {/if}
</div>








