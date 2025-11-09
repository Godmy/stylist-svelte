<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { Clock, MapPin, User, MoreHorizontal, ChevronLeft, ChevronRight } from 'lucide-svelte';
  import Button from '../../atoms/controls/buttons/Button.svelte';

  type CalendarEvent = {
    id: string;
    title: string;
    description?: string;
    start: Date;
    end: Date;
    location?: string;
    attendees?: string[];
    color?: string;
    allDay?: boolean;
    recurring?: boolean;
  };

  type TimeSlot = {
    time: string;
    hour: number;
    minute: number;
    events: CalendarEvent[];
  };

  type DayTimeGrid = {
    date: Date;
    dayOfWeek: string;
    dateStr: string;
    slots: TimeSlot[];
  };

  type RestProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'>;

  type Props = RestProps & {
    events?: CalendarEvent[];
    startDate?: Date;
    endDate?: Date;
    startTime?: number;
    endTime?: number;
    timeStep?: number; // In minutes (e.g., 15, 30, 60)
    showHeader?: boolean;
    showCurrentTimeIndicator?: boolean;
    showAllDayEvents?: boolean;
    class?: string;
    slotClass?: string;
    eventClass?: string;
    headerClass?: string;
    onEventClick?: (event: CalendarEvent) => void;
    onSlotClick?: (date: Date) => void;
  };

  let {
    events = [],
    startDate = new Date(),
    endDate = new Date(new Date().setDate(startDate.getDate() + 6)), // Next 7 days
    startTime = 0, // 00:00
    endTime = 24, // 24:00
    timeStep = 60, // Every hour
    showHeader = true,
    showCurrentTimeIndicator = true,
    showAllDayEvents = true,
    class: hostClass = '',
    slotClass = '',
    eventClass = '',
    headerClass = '',
    onEventClick,
    onSlotClick,
    ...restProps
  }: Props = $props();

  let viewStartDate = $state(new Date(startDate));
  let viewEndDate = $state(new Date(endDate));

  // Helper to generate time slots
  function generateTimeSlots(): TimeSlot[] {
    const slots: TimeSlot[] = [];

    for (let hour = startTime; hour < endTime; hour++) {
      for (let minute = 0; minute < 60; minute += timeStep) {
        if (minute > 0 && timeStep >= 60) break;

        const period = hour >= 12 ? 'PM' : 'AM';
        const displayHour = hour % 12 || 12;
        const displayMinute = minute.toString().padStart(2, '0');
        const timeDisplay = timeStep < 60
          ? `${displayHour}:${displayMinute} ${period}`
          : `${displayHour} ${period}`;

        slots.push({
          time: timeDisplay,
          hour,
          minute,
          events: []
        });
      }
    }

    return slots;
  }

  // Generate grid for each day
  function generateTimeGrid(): DayTimeGrid[] {
    const grid: DayTimeGrid[] = [];
    const daysCount = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));

    for (let i = 0; i <= daysCount; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);

      // Skip if date goes past endDate
      if (date > endDate) break;

      const slots = generateTimeSlots();

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
            slotStart.setHours(slot.hour, slot.minute, 0, 0);
            const slotEnd = new Date(slotStart);
            slotEnd.setMinutes(slotEnd.getMinutes() + timeStep);

            // If event overlaps with slot, add it to the slot
            if (
              (eventStart < slotEnd && eventEnd > slotStart) ||
              (eventStart.getTime() === slotStart.getTime())
            ) {
              if (!slots[j].events.find(e => e.id === event.id)) {
                slots[j].events.push(event);
              }
            }
          }
        }
      }

      grid.push({
        date,
        dayOfWeek: date.toLocaleDateString('en-US', { weekday: 'short' }),
        dateStr: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
        slots
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

  // Calculate position for events based on start/end times
  function calculateEventPosition(event: CalendarEvent, day: DayTimeGrid) {
    const start = new Date(event.start);
    const end = new Date(event.end);

    // Calculate the start and end positions in pixels
    const hourDiff = end.getHours() - start.getHours();
    const minuteDiff = end.getMinutes() - start.getMinutes();
    const totalMinutes = hourDiff * 60 + minuteDiff;

    // Calculate top position based on start time
    const startHourOffset = (start.getHours() - startTime) * 60;
    const startMinuteOffset = start.getMinutes();
    const topPosition = (startHourOffset + startMinuteOffset) * (100 / 60); // pixels per minute

    // Calculate height based on event duration
    const height = totalMinutes * (100 / 60); // pixels per minute

    return { top: `${topPosition}px`, height: `${height}px` };
  }
</script>

<div class={`time-grid-calendar border rounded-lg overflow-auto ${hostClass}`} {...restProps}>
  {#if showHeader}
    <!-- Time grid header -->
    <div class={`flex items-center justify-between p-4 border-b ${headerClass}`}>
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
        <h2 class="ml-4 text-lg font-semibold text-gray-800">
          {viewStartDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
        </h2>
      </div>

      <div class="flex space-x-2">
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

  <!-- Time grid -->
  <div class="grid grid-cols-8 min-w-max h-[calc(100vh-200px)]">
    {#if showCurrentTimeIndicator}
      <!-- Current time indicator -->
      <div class="relative">
        {#if new Date().getDate() === viewStartDate.getDate()}
          <div
            class="absolute w-full h-0.5 bg-red-500 z-10"
            style="top: {((new Date().getHours() - startTime) * 60 + new Date().getMinutes()) * (100 / 60)}px;"
          ></div>
        {/if}
      </div>
    {/if}

    {#each timeGrid as day, dayIndex}
      <div class={`border-r ${day.date.getDay() === 0 || day.date.getDay() === 6 ? 'bg-gray-50' : ''}`}>
        <div class={`p-2 text-center text-sm font-medium ${headerClass} ${
          day.date.toDateString() === new Date().toDateString() ? 'bg-blue-100' : ''
        }`}>
          <div class="font-semibold">{day.dayOfWeek}</div>
          <div>{day.dateStr}</div>
        </div>

        <div class="relative" style="height: {(endTime - startTime) * 60 * (100 / 60)}px;">
          {#each day.slots as slot, slotIndex}
            <div
              class={`border-b border-gray-200 relative ${slotClass}`}
              style="height: {timeStep * (100 / 60)}px;"
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
              {#if slotIndex === 0}
                <div class="absolute top-0 right-0 w-full text-right pr-2 pt-1 text-xs text-gray-500">
                  {slot.time}
                </div>
              {/if}

              {#if slotIndex > 0}
                <div class="absolute top-0 right-0 w-full text-right pr-2 pt-1 text-xs text-gray-300">
                  {slot.time}
                </div>
              {/if}
            </div>
            
            {#each slot.events as event}
              {#if event.allDay && showAllDayEvents}
                <div
                  class={`absolute left-1 right-1 p-1 text-xs rounded m-0.5 truncate ${
                    event.color ? event.color : 'bg-blue-100 text-blue-800'
                  } ${eventClass}`}
                  style="top: {slotIndex * timeStep * (100 / 60)}px; height: {timeStep * (100 / 60)}px;"
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
                  <div class="font-medium truncate">{event.title}</div>
                  {#if event.location}
                    <div class="text-gray-600 flex items-center text-[0.6rem]">
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
</div>

<style>
  :global(.time-grid-calendar) {
    --slot-height: 60px;
  }
</style>