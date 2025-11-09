<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { ChevronLeft, ChevronRight } from 'lucide-svelte';
  import Button from '../../atoms/controls/buttons/Button.svelte';

  type CalendarEvent = {
    id: string;
    date: Date;
    title: string;
    color?: string;
  };

  type CalendarDay = {
    date: Date;
    isCurrentMonth: boolean;
    isToday: boolean;
    hasEvent: boolean;
    events: CalendarEvent[];
  };

  type RestProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'>;

  type Props = RestProps & {
    events?: CalendarEvent[];
    initialDate?: Date;
    compact?: boolean;
    showToday?: boolean;
    showWeekNumbers?: boolean;
    onDateSelect?: (date: Date) => void;
    onEventClick?: (event: CalendarEvent) => void;
    class?: string;
    dayClass?: string;
    eventClass?: string;
    headerClass?: string;
  };

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
    ...restProps
  }: Props = $props();

  let currentDate = $state(new Date(initialDate));

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
        const eventDate = new Date(event.date);
        eventDate.setHours(0, 0, 0, 0);
        return eventDate.getTime() === date.getTime();
      });
      
      days.push({
        date,
        isCurrentMonth,
        isToday,
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

<div class={`mini-calendar border rounded-lg overflow-hidden ${compact ? 'text-xs' : 'text-sm'} ${hostClass}`} {...restProps}>
  <!-- Calendar header -->
  <div class={`flex items-center justify-between p-2 border-b ${headerClass}`}>
    <Button variant="ghost" size="sm" onclick={() => navigateMonth(-1)}>
      <ChevronLeft class="h-4 w-4" />
    </Button>
    
    <div class="font-medium text-gray-800">
      {monthYear}
    </div>
    
    <div class="flex items-center space-x-1">
      {#if showToday}
        <Button 
          variant="ghost" 
          size="sm" 
          onclick={navigateToToday}
          title="Today"
        >
          <span class="text-xs">Today</span>
        </Button>
      {/if}
      <Button variant="ghost" size="sm" onclick={() => navigateMonth(1)}>
        <ChevronRight class="h-4 w-4" />
      </Button>
    </div>
  </div>

  <!-- Calendar grid -->
  <div class="grid grid-cols-7">
    {#if showWeekNumbers}
      <div class="p-1 text-center text-gray-500"></div>
    {/if}
    
    {#each weekdays as day}
      <div class={`p-1 text-center font-medium text-gray-500 ${headerClass}`}>
        {day}
      </div>
    {/each}
    
    {#each days as day}
      <button
        type="button"
        class={`min-h-8 p-1 text-center border-t border-r ${
          day.isToday ? 'bg-blue-100 font-bold' : ''
        } ${
          !day.isCurrentMonth ? 'text-gray-400' : 'text-gray-700'
        } ${
          day.hasEvent ? 'text-blue-600' : ''
        } ${dayClass}`}
        onclick={() => handleDateSelect(day.date)}
        aria-label={day.date.toISOString()}
      >
        <div class="flex flex-col items-center justify-center h-full">
          <span>{day.date.getDate()}</span>
          {#if day.hasEvent && !compact}
            <div class="flex flex-wrap justify-center gap-0.5 mt-0.5">
              {#each day.events.slice(0, 2) as event, index}
                <div 
                  class={`w-1.5 h-1.5 rounded-full ${
                    event.color ? event.color : 'bg-blue-500'
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
                  title={event.title}
                ></div>
              {/each}
              {#if day.events.length > 2}
                <div class="text-[0.5rem] text-gray-500">+{day.events.length - 2}</div>
              {/if}
            </div>
          {/if}
        </div>
      </button>
    {/each}
  </div>
</div>
