<script lang="ts">
  import { TimeSlot as TimeSlotComponent } from '$stylist/components/atoms/interaction/controls/calendar/time-slot';
  import { Clock, MapPin, User, MoreHorizontal, ChevronLeft, ChevronRight } from 'lucide-svelte';
  import { Button } from '$stylist/components/atoms';
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';
  import { TimeSlotStyleManager } from '$stylist/design-system/styles';
  import type { ExtendedTimeSlot, DayTimeGrid, ITimeGridProps, CalendarEvent } from './types';

  type Props = ITimeGridProps & {
    children?: Snippet;
  } & HTMLAttributes<HTMLDivElement>;

  // Destructure props with defaults - using $props() only once
  let {
    events = [],
    startDate = new Date(),
    endDate = new Date(new Date(new Date().setHours(0, 0, 0, 0)).setDate(new Date().getDate() + 6)), // Next 7 days
    startTime = 0, // 00:00
    endTime = 24, // 24:00
    timeStep = 60, // Every hour
    showHeader = true,
    showCurrentTimeIndicator = true,
    showAllDayEvents = true,
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

  // Helper to generate time slots
  function generateTimeSlots(): ExtendedTimeSlot[] {
    const slots: ExtendedTimeSlot[] = [];

    for (let hour = startTime; hour < endTime; hour++) {
      for (let minute = 0; minute < 60; minute += timeStep) {
        if (minute > 0 && timeStep >= 60) break;

        const period = hour >= 12 ? 'PM' : 'AM';
        const displayHour = hour % 12 || 12;
        const displayMinute = minute.toString().padStart(2, '0');
        const timeDisplay = timeStep < 60
          ? `${displayHour}:${displayMinute} ${period}`
          : `${displayHour} ${period}`;

        const start = new Date();
        start.setHours(hour, minute, 0, 0);
        const end = new Date(start);
        end.setMinutes(start.getMinutes() + timeStep);

        slots.push({
          start,
          end,
          timeLabel: timeDisplay, // Changed from 'time' to 'timeLabel' to match ITimeSlot interface
          available: true,
          events: [],
          hour,
          minute,
          time: timeDisplay  // Additional property for internal use
        });
      }
    }

    return slots;
  }

  // Generate grid for each day
  function generateTimeGrid(): DayTimeGrid[] {
    const grid: DayTimeGrid[] = [];
    const start = new Date(startDate);
    start.setHours(0, 0, 0, 0);
    const end = new Date(endDate);
    end.setHours(0, 0, 0, 0);
    const daysCount = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));

    for (let i = 0; i <= daysCount; i++) {
      const date = new Date(start);
      date.setDate(start.getDate() + i);

      // Skip if date goes past endDate
      if (date > endDate) break;

      const slots: ExtendedTimeSlot[] = generateTimeSlots();

      // Place events in the appropriate time slots
      for (const event of events) {
        const eventStart = new Date(event.start);
        const eventEnd = new Date(event.end);

        // Check if event falls on this date
        const eventDay = new Date(eventStart);
        eventDay.setHours(0, 0, 0, 0);
        const dateDay = new Date(date);
        dateDay.setHours(0, 0, 0, 0);

        if (eventDay.getTime() === dateDay.getTime()) {
          // Find slots where event belongs
          for (let j = 0; j < slots.length; j++) {
            const slot = slots[j];
            const slotStart = new Date(date);
            slotStart.setHours(slot.hour, slot.minute);
            slotStart.setSeconds(0);
            slotStart.setMilliseconds(0);

            const slotEnd = new Date(slotStart);
            slotEnd.setMinutes(slotEnd.getMinutes() + timeStep);

            // If event overlaps with slot, add it to the slot
            if (
              (eventStart < slotEnd && eventEnd > slotStart) ||
              (eventStart.getTime() === slotStart.getTime())
            ) {
              const slotEvents = slots[j].events || [];
              if (!slotEvents.find((e: CalendarEvent) => e.id === event.id)) {
                slotEvents.push(event);
                slots[j].events = slotEvents;
              }
            }
          }
        }
      }

      grid.push({
        date,
        dayOfWeek: date.toLocaleDateString('en-US', { weekday: 'short' }),
        dateStr: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
        slots: slots // Keep as ExtendedTimeSlot for internal use
      });
    }

    return grid;
  }

  function handleEventClick(event: CalendarEvent) {
    onEventClick?.(event);
  }

  function handleSlotClick(date: Date, hour: number, minute: number) {
    const slotDate = new Date(date);
    slotDate.setHours(hour, minute, 0, 0);
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

  // Generate the time grid
  let timeGrid = $derived(generateTimeGrid());

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

  // Calculate position for current time indicator
  function getCurrentTimePosition(): number {
    const now = new Date();
    return ((now.getHours() - startTime) * 60 + now.getMinutes()) * (100 / 60);
  }
  
  // Apply CSS classes using design system utilities
  import { cn } from '$stylist/utils';
  import { TimeGridStyleManager } from '$stylist/design-system/styles/time-grid';
  
  // Derived values for styling
  const wrapperClasses = $derived(cn(
    TimeGridStyleManager.getWrapperClasses(),
    hostClass
  ));
  const headerClasses = $derived(cn(
    TimeGridStyleManager.getHeaderClasses(),
    headerClass
  ));
  const timeGridClasses = $derived(TimeGridStyleManager.getTimeGridClasses());
</script>

<!--
This component follows SOLID principles:
- SRP: This component is responsible only for rendering the time grid calendar
- OCP: Easy to extend with new features without modifying existing code
- LSP: Substitutable with other calendar implementations if needed
- ISP: Provides a focused interface with only necessary props
- DIP: Depends on abstractions (types, style manager) rather than concretions
-->
<div class={wrapperClasses}>
  {#if showHeader}
    <!-- Time grid header -->
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
        <Button variant="secondary" size="sm">
          Day
        </Button>
        <Button variant="secondary" size="sm">
          Week
        </Button>
        <Button variant="secondary" size="sm">
          Month
        </Button>
      </div>
    </div>
  {/if}

  <!-- Time grid or custom content through children -->
  {#if children}
    <div class="time-grid-content">
      {@render children()}
    </div>
  {:else}
    <!-- Time grid -->
    <div class={timeGridClasses}>
      {#if showCurrentTimeIndicator}
        <!-- Current time indicator -->
        <div class="relative">
          {#if isToday(viewStartDate)}
            <div
              class={TimeGridStyleManager.getTimeIndicatorClasses()}
              style={`top: ${getCurrentTimePosition()}px;`}
            ></div>
          {/if}
        </div>
      {/if}

      {#each timeGrid as day}
        <div class={cn(TimeGridStyleManager.getDayColumnClasses(isWeekend(day.date)))}>
          <div class={cn(TimeGridStyleManager.getDayHeaderClasses(isToday(day.date)), headerClass)}>
            <div class="font-[--font-weight-semibold]">{day.dayOfWeek}</div>
            <div>{day.dateStr}</div>
          </div>

          <div class="relative" style={`height: ${(endTime - startTime) * 60 * (100 / 60)}px;`}>
            {#each day.slots as slot, slotIndex}
              <div
                class="flex flex-col"
                style={`height: ${timeStep * (100 / 60)}px;`}
                role="button"
                tabindex="0"
                onclick={() => handleSlotClick(day.date, slot.hour, slot.minute)}
                onkeydown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleSlotClick(day.date, slot.hour, slot.minute);
                  }
                }}
              >
                <TimeSlotComponent
                  start={slot.start}
                  end={slot.end}
                  timeLabel={slot.timeLabel}
                  available={slot.available}
                  events={slot.events}
                  class={cn(TimeGridStyleManager.getTimeSlotClasses(), slotClass)}
                  onClick={() => handleSlotClick(day.date, slot.hour, slot.minute)}
                />
              </div>

              {#each slot.events as event}
                {#if event.allDay && showAllDayEvents}
                  <div
                    class={cn(TimeGridStyleManager.getEventClasses(event.color, eventClass))}
                    style={`top: ${slotIndex * timeStep * (100 / 60)}px; height: ${timeStep * (100 / 60)}px;`}
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
                    {#if event.location}
                      <div class="text-[--color-text-secondary] flex items-center text-[--text-size-2xs]">
                        <MapPin class="h-2 w-2 mr-1" />
                        <span class="truncate">{event.location}</span>
                      </div>
                    {/if}
                  </div>
                {/if}
              {/each}
            {/each}
          </div>
        </div>
      {/each}
    </div>
  {/if}
</div>

