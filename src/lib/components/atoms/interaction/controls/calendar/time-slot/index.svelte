<script lang="ts">
  import type { ITimeSlotProps } from '$stylist/design-system/props/time-slot';
  import { TimeSlotStyleManager } from '$stylist/design-system/styles/time-slot';

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

  function handleClick() {
    const slot = {
      start,
      end,
      timeLabel,
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
  aria-label={`Time slot from ${start.toLocaleTimeString()} to ${end.toLocaleTimeString()}, ${available ? 'available' : 'not available'}`}
>
  <div class={TimeSlotStyleManager.getTimeLabelClasses()}>
    {timeLabel}
  </div>
  {#if events && events.length > 0}
    <div class={TimeSlotStyleManager.getEventCountClasses()}>
      {events.length} {events.length === 1 ? 'event' : 'events'}
    </div>
  {/if}
</div>


