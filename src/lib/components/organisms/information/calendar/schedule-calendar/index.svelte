<script lang="ts">
  import type { IScheduleCalendarProps, ScheduleEvent, ScheduleTimeSlot, DaySchedule } from '$stylist/design-system/props/information/schedule-calendar';
  import { TimeSlot } from '$stylist/components/atoms/interaction/controls/calendar/time-slot';  import { ScheduleCalendarStyleManager } from '$stylist/design-system/styles/information/schedule-calendar';
  import { ChevronLeft, ChevronRight, Clock, MapPin, Users } from 'lucide-svelte';
  import { Button } from '$stylist/components/atoms';
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';

  type Props = IScheduleCalendarProps & {
    children?: Snippet;
  } & HTMLAttributes<HTMLDivElement>;

  // Destructure props with defaults - using $props() only once
  let {
    events = [],
    startDate = new Date(),
    endDate = new Date(new Date().setDate(startDate.getDate() + 6)), // Next 7 days
    startTime = 8, // 8 AM
    endTime = 20, // 8 PM
    showHeader = true,
    showTimeGutter = true,
    timeSlotHeight = 60, // pixels
    children,
    class: hostClass = '',
    slotClass = '',
    eventClass = '',
    headerClass = '',
    onEventClick,
    onSlotClick
  } = $props() as Props;

  let viewStartDate = $state(new Date(startDate));
  let viewEndDate = $state(new Date(endDate));

  // Derived values for styling
  const wrapperClasses = $derived(ScheduleCalendarStyleManager.getWrapperClasses(hostClass));
  const headerClasses = $derived(ScheduleCalendarStyleManager.getHeaderClasses(headerClass));
  const gridClasses = $derived(ScheduleCalendarStyleManager.getGridClasses());

  // Helper to generate time slots
  function generateTimeSlots(): ScheduleTimeSlot[] {
    const slots: ScheduleTimeSlot[] = [];
    for (let hour = startTime; hour < endTime; hour++) {
      const period = hour >= 12 ? 'PM' : 'AM';
      const displayHour = hour % 12 || 12;
      slots.push({
        time: `${displayHour} ${period}`,
        hour,
        events: []
      });
    }
    return slots;
  }

  // Generate schedule for each day
  function generateSchedule(): DaySchedule[] {
    const schedule: DaySchedule[] = [];
    const daysCount = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));

    for (let i = 0; i <= daysCount; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);

      // Skip if date goes past endDate
      if (date > endDate) break;

      const slots = generateTimeSlots();

      // Place events in the appropriate time slots
      for (const event of events) {
        const eventDay = new Date(event.start);
        eventDay.setHours(0, 0, 0, 0);
        const dateDay = new Date(date);
        dateDay.setHours(0, 0, 0, 0);

        if (eventDay.getTime() === dateDay.getTime()) {
          const hour = event.start.getHours();
          const slotIndex = hour - startTime;

          if (slotIndex >= 0 && slotIndex < slots.length) {
            slots[slotIndex].events.push(event);
          }
        }
      }

      schedule.push({
        date,
        dayOfWeek: date.toLocaleDateString('en-US', { weekday: 'short' }),
        dateStr: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
        slots
      });
    }

    return schedule;
  }

  function handleEventClick(event: ScheduleEvent) {
    onEventClick?.(event);
  }

  function handleSlotClick(date: Date, hour: number) {
    const slotDate = new Date(date);
    slotDate.setHours(hour, 0, 0, 0);
    onSlotClick?.(slotDate);
  }

  function navigateWeek(direction: number) {
    const newStart = new Date(viewStartDate);
    newStart.setDate(viewStartDate.getDate() + direction * 7);
    const newEnd = new Date(viewEndDate);
    newEnd.setDate(viewEndDate.getDate() + direction * 7);

    viewStartDate = newStart;
    viewEndDate = newEnd;
  }

  function navigateToToday() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const start = new Date(today);
    start.setDate(today.getDate() - today.getDay()); // Start from Sunday
    const end = new Date(start);
    end.setDate(start.getDate() + 6); // End on Saturday

    viewStartDate = start;
    viewEndDate = end;
  }

  // Generate the schedule
  let schedule = $derived(generateSchedule());

  // Check if a date is today
  function isToday(date: Date): boolean {
    const today = new Date();
    return date.toDateString() === today.toDateString();
  }

  // Check if a date is weekend (Saturday or Sunday)
  function isWeekend(date: Date): boolean {
    const day = date.getDay();
    return day === 0 || day === 6;
  }
</script>

<!--
This component follows SOLID principles:
- SRP: This component is responsible only for rendering the schedule calendar
- OCP: Easy to extend with new features without modifying existing code
- LSP: Substitutable with other calendar implementations if needed
- ISP: Provides a focused interface with only necessary props
- DIP: Depends on abstractions (types, style manager) rather than concretions
-->
<div class={`c-schedule-calendar ${wrapperClasses}`}>
  {#if showHeader}
    <!-- Schedule header -->
    <div class={headerClasses}>
      <div class="flex items-center">
        <Button variant="ghost" size="sm" onclick={() => navigateWeek(-1)}>
          <ChevronLeft class="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="sm" onclick={navigateToToday} class="mx-2">
          Today
        </Button>
        <Button variant="ghost" size="sm" onclick={() => navigateWeek(1)}>
          <ChevronRight class="h-5 w-5" />
        </Button>
        <h2 class="ml-4 text-[--text-size-lg] font-[--font-weight-semibold] text-[--color-text-primary]">
          {viewStartDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
        </h2>
      </div>

      <div class="flex space-x-[--spacing-sm]">
        <Button variant="ghost" size="sm">
          Day
        </Button>
        <Button variant="ghost" size="sm">
          Week
        </Button>
        <Button variant="ghost" size="sm">
          Month
        </Button>
      </div>
    </div>
  {/if}

  <!-- Schedule grid or custom content through children -->
  {#if children}
    <div class="schedule-content">
      {@render children()}
    </div>
  {:else}
    <!-- Schedule grid -->
    <div class={gridClasses}>
      {#if showTimeGutter}
        <!-- Time gutter column -->
        <div class={ScheduleCalendarStyleManager.getTimeGutterClasses()}>
          <div class="h-[--spacing-xl]"></div>
          {#each generateTimeSlots() as slot}
            <div
              class={ScheduleCalendarStyleManager.getTimeSlotClasses()}
              style={`height: ${timeSlotHeight}px;`}
            >
              {slot.time}
            </div>
          {/each}
        </div>
      {/if}

      {#each schedule as day}
        <div class={ScheduleCalendarStyleManager.getDayColumnClasses(isWeekend(day.date))}>
          <div class={ScheduleCalendarStyleManager.getDayHeaderClasses(isToday(day.date), headerClass)}>
            <div class="font-[--font-weight-semibold]">{day.dayOfWeek}</div>
            <div>{day.dateStr}</div>
          </div>

          {#each day.slots as slot}
            <!-- We need to adapt ScheduleTimeSlot to ITimeSlot for the atomic component -->
            <TimeSlot
              start={new Date(day.date.setHours(slot.hour, 0, 0, 0))}
              end={new Date(day.date.setHours(slot.hour + 1, 0, 0, 0))}
              timeLabel={slot.time}
              available={true}
              events={slot.events}
              class={slotClass}
              onClick={() => handleSlotClick(day.date, slot.hour)}
            />

            {#each slot.events as event}
              <div
                class={ScheduleCalendarStyleManager.getEventClasses(event.color, eventClass)}
                style={`position: absolute; top: ${(slot.events.indexOf(event) * 20) + 2}px;`}
                role="button"
                tabindex="0"
                onclick={(e) => {
                  e.stopPropagation();
                  handleEventClick(event);
                }}
                onkeydown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    e.stopPropagation();
                    handleEventClick(event);
                  }
                }}
              >
                <div class="font-[--font-weight-medium] truncate">{event.title}</div>
                <div class="text-[--color-text-secondary] flex items-center">
                  <Clock class="h-3 w-3 mr-1" />
                  {event.start.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
                {#if event.location}
                  <div class="text-[--color-text-secondary] flex items-center">
                    <MapPin class="h-3 w-3 mr-1" />
                    <span class="truncate">{event.location}</span>
                  </div>
                {/if}
                {#if event.priority}
                  <span class={ScheduleCalendarStyleManager.getPriorityBadgeClasses(event.priority)}>
                    {event.priority}
                  </span>
                {/if}
              </div>
            {/each}
          {/each}
        </div>
      {/each}
    </div>
  {/if}
</div>







