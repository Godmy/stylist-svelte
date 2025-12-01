<script lang="ts">
  import type { IMiniCalendarProps, CalendarEvent, CalendarDay } from './types';
  import { MiniCalendarStyleManager } from './styles';
  import { ChevronLeft, ChevronRight } from 'lucide-svelte';
  import { Button } from '$lib/components/atoms';

  // Component props with proper typing
  let props: IMiniCalendarProps = $props();

  // Destructure props with defaults
  let {
    events = [],
    initialDate = new Date(),
    compact = false,
    showToday = true,
    showWeekNumbers = false,
    onDateSelect,
    onEventClick,
    class: hostClass = '',
    dayClass = '',
    eventClass = '',
    headerClass = '',
  } = $state(props);

  let currentDate = $state(new Date(initialDate));
  let selectedDate = $state<Date | null>(null);

  // Derived values for styling
  const wrapperClasses = $derived(MiniCalendarStyleManager.getWrapperClasses(compact, hostClass));
  const headerClasses = $derived(MiniCalendarStyleManager.getHeaderClasses(headerClass));
  const weekdayHeaderClasses = $derived(MiniCalendarStyleManager.getWeekdayHeaderClasses(headerClass));
  const gridClasses = $derived(MiniCalendarStyleManager.getGridClasses());

  // Helper functions
  function getDaysInMonth(date: Date): CalendarDay[] {
    const year = date.getFullYear();
    const month = date.getMonth();

    // First day of month
    const firstDay = new Date(year, month, 1);
    // Last day of month
    const lastDay = new Date(year, month + 1, 0);
    // Starting day (Sunday of the week where month starts)
    const startDay = new Date(firstDay);
    startDay.setDate(firstDay.getDate() - firstDay.getDay());
    // Ending day (Saturday of the week where month ends)
    const endDay = new Date(lastDay);
    endDay.setDate(lastDay.getDate() + (6 - lastDay.getDay()));

    const days: CalendarDay[] = [];
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    for (let d = new Date(startDay); d <= endDay; d.setDate(d.getDate() + 1)) {
      const date = new Date(d);
      const isCurrentMonth = date.getMonth() === month;
      const isToday = date.getTime() === today.getTime();

      // Find events for this day
      const dayEvents = events.filter(event => {
        const eventDate = new Date(event.start);
        eventDate.setHours(0, 0, 0, 0);
        return eventDate.getTime() === date.getTime();
      });

      days.push({
        date,
        isCurrentMonth,
        isToday,
        isSelected: selectedDate ? date.getTime() === selectedDate.getTime() : false,
        hasEvent: dayEvents.length > 0,
        events: dayEvents
      });
    }

    return days;
  }

  function navigateMonth(direction: number) {
    currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + direction, 1);
  }

  function navigateToToday() {
    currentDate = new Date();
  }

  function handleDateSelect(date: Date) {
    // Set the selected date to the clicked date (with time cleared)
    selectedDate = new Date(date);
    onDateSelect?.(date);
  }

  function handleEventClick(event: CalendarEvent, e: Event) {
    e.stopPropagation();
    onEventClick?.(event);
  }

  // Get days for current month view
  let days = $derived(getDaysInMonth(currentDate));

  // Weekday headers
  let weekdays = $derived(['S', 'M', 'T', 'W', 'T', 'F', 'S']); // Shortened for mini calendar

  // Month and year for header
  let monthYear = $derived(currentDate.toLocaleDateString('en-US', { month: 'short', year: 'numeric' }));
</script>

<!--
This component follows SOLID principles:
- SRP: This component is responsible only for rendering the mini calendar
- OCP: Easy to extend with new features without modifying existing code
- LSP: Substitutable with other calendar implementations if needed
- ISP: Provides a focused interface with only necessary props
- DIP: Depends on abstractions (types, style manager) rather than concretions
-->
<div class={wrapperClasses}>
  <!-- Calendar header -->
  <div class={headerClasses}>
    <Button variant="ghost" size="sm" onclick={() => navigateMonth(-1)}>
      <ChevronLeft class="h-4 w-4" />
    </Button>

    <div class="font-[--font-weight-medium] text-[--color-text-primary]">
      {monthYear}
    </div>

    <div class="flex items-center space-x-[--spacing-xs]">
      {#if showToday}
        <Button
          variant="ghost"
          size="sm"
          onclick={navigateToToday}
          title="Today"
        >
          <span class="text-[--text-size-xs]">Today</span>
        </Button>
      {/if}
      <Button variant="ghost" size="sm" onclick={() => navigateMonth(1)}>
        <ChevronRight class="h-4 w-4" />
      </Button>
    </div>
  </div>

  <!-- Calendar grid -->
  <div class={gridClasses}>
    {#if showWeekNumbers}
      <div class="p-[--spacing-xs] text-center text-[--color-text-muted]"></div>
    {/if}

    {#each weekdays as day}
      <div class={weekdayHeaderClasses}>
        {day}
      </div>
    {/each}

    {#each days as day}
      <button
        type="button"
        class={MiniCalendarStyleManager.getDayCellClasses(day.isToday, day.isCurrentMonth, day.hasEvent || false, dayClass)}
        onclick={() => handleDateSelect(day.date)}
        aria-label={day.date.toISOString()}
      >
        <div class={MiniCalendarStyleManager.getDateNumberClasses()}>
          <span>{day.date.getDate()}</span>
          {#if day.hasEvent && !compact}
            <div class="flex flex-wrap justify-center gap-[--spacing-0.5] mt-[--spacing-0.5]">
              {#each day.events.slice(0, 2) as event, index}
                <div
                  class={MiniCalendarStyleManager.getEventIndicatorClasses(event.color, eventClass)}
                  role="button"
                  tabindex="0"
                  onclick={(e) => handleEventClick(event, e)}
                  onkeydown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleEventClick(event, e);
                    }
                  }}
                  title={event.title}
                ></div>
              {/each}
              {#if day.events.length > 2}
                <div class="text-[--text-size-2xs] text-[--color-text-muted]">+{day.events.length - 2}</div>
              {/if}
            </div>
          {/if}
        </div>
      </button>
    {/each}
  </div>
</div>
