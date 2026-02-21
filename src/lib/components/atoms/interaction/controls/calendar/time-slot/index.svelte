<script lang="ts">
  import type { ITimeSlotProps } from '$stylist/design-system/props/interaction/time-slot';
  import { TimeSlotStyleManager } from '$stylist/design-system/styles/interaction/time-slot';

  // Component props
  let props: ITimeSlotProps = $props();

  // Destructure props
  let {
    start,
    end,
    timeLabel,
    available = true,
    selected = false,
    active = false,
    events = [],
    class: hostClass = '',
    onValueInput,
    onValueChange,
    onClick,
    onKeyDown
  } = $state(props);

  // Computed values
  const wrapperClasses = $derived(
    TimeSlotStyleManager.getTimeSlotClasses(available, selected, active, hostClass)
  );
  const safeStart = $derived(
    start instanceof Date ? start : start ? new Date(start as unknown as string | number | Date) : new Date(0)
  );
  const safeEnd = $derived(
    end instanceof Date ? end : end ? new Date(end as unknown as string | number | Date) : new Date(0)
  );
  const startTimeText = $derived(
    Number.isNaN(safeStart.getTime()) ? 'unknown start time' : safeStart.toLocaleTimeString()
  );
  const endTimeText = $derived(
    Number.isNaN(safeEnd.getTime()) ? 'unknown end time' : safeEnd.toLocaleTimeString()
  );
  const displayTimeLabel = $derived(timeLabel ?? `${startTimeText} - ${endTimeText}`);

  function handleClick() {
    const slot = {
      start: safeStart,
      end: safeEnd,
      timeLabel: displayTimeLabel,
      available,
      selected,
      active,
      events,
      class: hostClass
    };
    onValueInput?.(slot);
    onValueChange?.(slot);
    onClick?.(slot);
  }

  function handleKeyDown(e: KeyboardEvent) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick();
    }
    onKeyDown?.(e);
  }
</script>

<!--
Base TimeSlot component that displays a time interval
Can be used by various calendar components
-->
<div
  class={wrapperClasses}
  role="button"
  tabindex="0"
  onclick={handleClick}
  onkeydown={handleKeyDown}
  aria-label={`Time slot from ${startTimeText} to ${endTimeText}, ${available ? 'available' : 'not available'}`}
>
  <div class={TimeSlotStyleManager.getTimeLabelClasses()}>
    {displayTimeLabel}
  </div>
  {#if events && events.length > 0}
    <div class={TimeSlotStyleManager.getEventCountClasses()}>
      {events.length} {events.length === 1 ? 'event' : 'events'}
    </div>
  {/if}
</div>


