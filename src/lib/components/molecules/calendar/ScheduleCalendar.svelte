<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { ChevronLeft, ChevronRight, Clock, MapPin, Users } from 'lucide-svelte';
  import Button from '../../atoms/controls/buttons/Button.svelte';

  type ScheduleEvent = {
    id: string;
    title: string;
    description?: string;
    start: Date;
    end: Date;
    location?: string;
    attendees?: string[];
    color?: string;
    priority?: 'low' | 'medium' | 'high';
  };

  type TimeSlot = {
    time: string;
    hour: number;
    events: ScheduleEvent[];
  };

  type DaySchedule = {
    date: Date;
    dayOfWeek: string;
    dateStr: string;
    slots: TimeSlot[];
  };

  type RestProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'>;

  type Props = RestProps & {
    events?: ScheduleEvent[];
    startDate?: Date;
    endDate?: Date;
    startTime?: number;
    endTime?: number;
    showHeader?: boolean;
    showTimeGutter?: boolean;
    timeSlotHeight?: number;
    class?: string;
    slotClass?: string;
    eventClass?: string;
    headerClass?: string;
    onEventClick?: (event: ScheduleEvent) => void;
    onSlotClick?: (date: Date) => void;
  };

  let {
    events = [],
    startDate = new Date(),
    endDate = new Date(new Date().setDate(startDate.getDate() + 6)), // Next 7 days
    startTime = 8, // 8 AM
    endTime = 20, // 8 PM
    showHeader = true,
    showTimeGutter = true,
    timeSlotHeight = 60, // pixels
    class: hostClass = '',
    slotClass = '',
    eventClass = '',
    headerClass = '',
    onEventClick,
    onSlotClick,
    ...restProps
  }: Props = $props();

  let currentDate = $state(new Date(startDate));
  let viewStartDate = $state(new Date(startDate));
  let viewEndDate = $state(new Date(endDate));

  // Helper to generate time slots
  function generateTimeSlots(): TimeSlot[] {
    const slots: TimeSlot[] = [];
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

  // Priority badge class
  function getPriorityClass(priority: string) {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  }
</script>

<div class={`schedule-calendar border rounded-lg overflow-auto ${hostClass}`} {...restProps}>
  {#if showHeader}
    <!-- Schedule header -->
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

  <!-- Schedule grid -->
  <div class="grid grid-cols-8 min-w-max">
    {#if showTimeGutter}
      <!-- Time gutter column -->
      <div class="border-r">
        <div class="h-12"></div>
        {#each generateTimeSlots() as slot}
          <div
            class="p-2 border-b text-right text-xs text-gray-500"
            style="height: {timeSlotHeight}px;"
          >
            {slot.time}
          </div>
        {/each}
      </div>
    {/if}

    {#each schedule as day}
      <div class={`border-r ${day.date.getDay() === 0 || day.date.getDay() === 6 ? 'bg-gray-50' : ''}`}>
        <div class={`p-2 text-center text-sm font-medium ${headerClass} ${
          day.date.toDateString() === new Date().toDateString() ? 'bg-blue-100' : ''
        }`}>
          <div class="font-semibold">{day.dayOfWeek}</div>
          <div>{day.dateStr}</div>
        </div>

        {#each day.slots as slot}
          <div
            class={`p-1 border-b relative ${slotClass}`}
            style="height: {timeSlotHeight}px;"
            role="button"
            tabindex="0"
            onclick={() => handleSlotClick(day.date, slot.hour)}
            onkeydown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleSlotClick(day.date, slot.hour);
              }
            }}
          >
            {#each slot.events as event}
              <div
                class={`text-xs p-1 rounded mb-1 cursor-pointer ${
                  event.color ? event.color : 'bg-blue-100 text-blue-800'
                } truncate ${eventClass}`}
                style="top: {(slot.events.indexOf(event) * 20) + 2}px;"
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
                <div class="text-gray-600 flex items-center">
                  <Clock class="h-3 w-3 mr-1" />
                  {event.start.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
                {#if event.location}
                  <div class="text-gray-600 flex items-center">
                    <MapPin class="h-3 w-3 mr-1" />
                    <span class="truncate">{event.location}</span>
                  </div>
                {/if}
                {#if event.priority}
                  <span class={`inline-flex items-center px-1.5 py-0.5 rounded-full text-[0.5rem] font-medium ${getPriorityClass(event.priority)}`}>
                    {event.priority}
                  </span>
                {/if}
              </div>
            {/each}
          </div>
        {/each}
      </div>
    {/each}
  </div>
</div>