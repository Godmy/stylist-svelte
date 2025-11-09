<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { ChevronLeft, ChevronRight, Plus, MoreHorizontal } from 'lucide-svelte';
  import Button from '../../atoms/controls/buttons/Button.svelte';

  type CalendarEvent = {
    id: string;
    title: string;
    description?: string;
    start: Date;
    end: Date;
    color?: string;
    allDay?: boolean;
    location?: string;
    attendees?: string[];
    category?: string;
  };

  type CalendarDay = {
    date: Date;
    isCurrentMonth: boolean;
    isToday: boolean;
    events: CalendarEvent[];
  };

  type RestProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'>;

  type Props = RestProps & {
    events?: CalendarEvent[];
    initialDate?: Date;
    class?: string;
    dayClass?: string;
    eventClass?: string;
    headerClass?: string;
    showAllDayEvents?: boolean;
    showEventDuration?: boolean;
    onEventClick?: (event: CalendarEvent) => void;
    onEventCreate?: (date: Date) => void;
    onEventEdit?: (event: CalendarEvent) => void;
    onEventDelete?: (event: CalendarEvent) => void;
  };

  let {
    events = [],
    initialDate = new Date(),
    class: hostClass = '',
    dayClass = '',
    eventClass = '',
    headerClass = '',
    showAllDayEvents = true,
    showEventDuration = true,
    onEventClick,
    onEventCreate,
    onEventEdit,
    onEventDelete,
    ...restProps
  }: Props = $props();

  let currentDate = $state(new Date(initialDate));
  let selectedEvent: CalendarEvent | null = $state(null);
  let showEventActions = $state(false);

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
        const eventStart = new Date(event.start);
        eventStart.setHours(0, 0, 0, 0);
        const eventEnd = new Date(event.end);
        eventEnd.setHours(0, 0, 0, 0);

        // Check if event date matches the day
        const eventDate = new Date(event.start);
        eventDate.setHours(0, 0, 0, 0);

        return eventDate.getTime() === date.getTime();
      });

      days.push({
        date,
        isCurrentMonth,
        isToday,
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

  function handleDayClick(date: Date) {
    onEventCreate?.(date);
  }

  function handleEventClick(event: CalendarEvent, e: Event) {
    e.stopPropagation();
    selectedEvent = event;
    showEventActions = true; // Show the modal when an event is clicked
    onEventClick?.(event);
  }

  function handleEventEdit() {
    if (selectedEvent) {
      onEventEdit?.(selectedEvent);
      showEventActions = false;
    }
  }

  function handleEventDelete() {
    if (selectedEvent) {
      onEventDelete?.(selectedEvent);
      showEventActions = false;
      selectedEvent = null;
    }
  }

  // Get days for current month view
  let days = $derived(getDaysInMonth(currentDate));

  // Weekday headers
  let weekdays = $derived(['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']);

  // Month and year for header
  let monthYear = $derived(currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' }));

  function formatDate(date: Date): string {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }
</script>

<div class={`event-calendar border rounded-lg overflow-hidden ${hostClass}`} {...restProps}>
  <!-- Calendar header -->
  <div class={`flex items-center justify-between p-4 border-b ${headerClass}`}>
    <div class="flex items-center">
      <Button variant="ghost" size="sm" onclick={() => navigateMonth(-1)}>
        <ChevronLeft class="h-5 w-5" />
      </Button>
      <Button variant="ghost" size="sm" onclick={navigateToToday} class="mx-2">
        Today
      </Button>
      <Button variant="ghost" size="sm" onclick={() => navigateMonth(1)}>
        <ChevronRight class="h-5 w-5" />
      </Button>
      <h2 class="ml-4 text-xl font-bold text-gray-800">{monthYear}</h2>
    </div>

    <div class="flex space-x-2">
      <Button variant="ghost" size="sm">
        Month
      </Button>
      <Button variant="ghost" size="sm">
        Week
      </Button>
      <Button variant="ghost" size="sm">
        Day
      </Button>
    </div>
  </div>

  <!-- Calendar grid -->
  <div class="grid grid-cols-7">
    {#each weekdays as day}
      <div class={`p-2 text-center text-xs font-medium text-gray-500 ${headerClass}`}>
        {day}
      </div>
    {/each}

    {#each days as day, index}
      <div
        class={`min-h-24 p-1 border-t border-r ${
          day.isToday ? 'bg-blue-50' : ''
        } ${
          !day.isCurrentMonth ? 'bg-gray-50 text-gray-400' : ''
        } ${dayClass}`}
        role="button"
        tabindex="0"
        onclick={() => handleDayClick(day.date)}
        onkeydown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleDayClick(day.date);
          }
        }}
      >
        <div class={`text-right p-1 ${
          day.isToday
            ? 'rounded-full h-6 w-6 flex items-center justify-center bg-blue-500 text-white mx-auto'
            : ''
        }`}>
          {day.date.getDate()}
        </div>

        <div class="mt-1 space-y-1 max-h-24 overflow-y-auto">
          {#if showAllDayEvents}
            {#each day.events as event}
              <div
                class={`text-xs p-1 rounded truncate cursor-pointer ${
                  event.color ? event.color : 'bg-blue-100 text-blue-800'
                } ${eventClass}`}
                role="button"
                tabindex="0"
                onclick={(e) => handleEventClick(event, e)}
                onkeydown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleEventClick(event, e);
                  }
                }}
              >
                {event.title}
                {#if showEventDuration && event.allDay}
                  <span class="text-xs text-gray-500"> (all day)</span>
                {/if}
              </div>
            {/each}
          {/if}
        </div>
      </div>
    {/each}
  </div>

  <!-- Event details modal/overlay -->
  {#if selectedEvent && showEventActions}
    <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white rounded-lg shadow-lg p-4 max-w-md w-full mx-4">
        <div class="flex justify-between items-start mb-2">
          <h3 class="text-lg font-semibold text-gray-800">{selectedEvent.title}</h3>
          <button 
            onclick={() => showEventActions = false}
            class="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>
        
        <div class="py-2">
          <p class="text-sm text-gray-600">{selectedEvent.description}</p>
          <div class="mt-2 text-xs text-gray-500">
            <p>Start: {selectedEvent.start.toLocaleString()}</p>
            <p>End: {selectedEvent.end.toLocaleString()}</p>
            {#if selectedEvent.location}
              <p>Location: {selectedEvent.location}</p>
            {/if}
          </div>
        </div>

        <div class="calendar-footer mt-4">
          <div class="flex space-x-2">
            <Button variant="secondary" size="sm" onclick={handleEventEdit}>
              Edit
            </Button>
            <Button variant="danger" size="sm" onclick={handleEventDelete}>
              Delete
            </Button>
          </div>
        </div>
      </div>
    </div>
  {/if}
</div>