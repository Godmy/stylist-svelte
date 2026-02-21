<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import type { Snippet } from 'svelte';
  import { ChevronLeft, ChevronRight, Plus } from 'lucide-svelte';
  import { Button } from '$stylist/components/atoms';
  import { CalendarViewStyleManager } from '$stylist/design-system/styles/information/calendar-view';

  type CalendarEvent = {
    id: string;
    title: string;
    start: Date;
    end: Date;
    color?: string;
    allDay?: boolean;
  };

  type CalendarDay = {
    date: Date;
    isCurrentMonth: boolean;
    isToday: boolean;
    events: CalendarEvent[];
  };

  type ViewMode = 'day' | 'week' | 'month';

  type RestProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'>;

  type Props = RestProps & {
    events?: CalendarEvent[];
    initialDate?: Date;
    viewMode?: ViewMode;
    showWeekNumbers?: boolean;
    weekendDays?: number[];
    class?: string;
    dayClass?: string;
    eventClass?: string;
    headerClass?: string;
    onEventClick?: (event: CalendarEvent) => void;
    onDayClick?: (date: Date) => void;
    onEventCreate?: (date: Date) => void;
    children?: Snippet;
  };

  let {
    events = [],
    initialDate = new Date(),
    viewMode = 'month',
    showWeekNumbers = false,
    weekendDays = [0, 6], // Sunday and Saturday
    class: hostClass = '',
    dayClass = '',
    eventClass = '',
    headerClass = '',
    children,
    onEventClick,
    onDayClick,
    onEventCreate,
    ...restProps
  } = $props<{
    events?: CalendarEvent[];
    initialDate?: Date;
    viewMode?: ViewMode;
    showWeekNumbers?: boolean;
    weekendDays?: number[];
    class?: string;
    dayClass?: string;
    eventClass?: string;
    headerClass?: string;
    children?: Snippet;
    onEventClick?: (event: CalendarEvent) => void;
    onDayClick?: (date: Date) => void;
    onEventCreate?: (date: Date) => void;
  } & HTMLAttributes<HTMLDivElement>>();

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
      const dayEvents = events.filter((event: CalendarEvent) => {
        const eventStart = new Date(event.start);
        eventStart.setHours(0, 0, 0, 0);
        return eventStart.getTime() === date.getTime();
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
    onDayClick?.(date);
  }

  function handleEventClick(event: CalendarEvent) {
    onEventClick?.(event);
  }

  function handleAddEvent(date: Date) {
    onEventCreate?.(date);
  }

  // Get days for current month view
  let days = $derived(getDaysInMonth(currentDate));

  // Weekday headers
  let weekdays = $derived(['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']);

  // Month and year for header
  let monthYear = $derived(currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' }));

  // Get CSS classes from style manager
  const wrapperClasses = $derived(`${CalendarViewStyleManager.getWrapperClasses()} ${hostClass}`);
  const headerClasses = $derived(`${CalendarViewStyleManager.getHeaderClasses()} ${headerClass}`);
  const gridClasses = $derived(CalendarViewStyleManager.getGridClasses());
  const weekdayHeaderClasses = $derived(CalendarViewStyleManager.getWeekdayHeaderClasses());
  const todayButtonClasses = $derived(CalendarViewStyleManager.getTodayButtonClasses());
  const navigationButtonClasses = $derived(CalendarViewStyleManager.getNavigationButtonClasses());
  
  function getViewToggleButtonClasses(isActive: boolean) {
    return CalendarViewStyleManager.getViewToggleButtonClasses(isActive);
  }
</script>

<div class={wrapperClasses} {...restProps}>
  <!-- Calendar header -->
  <div class={headerClasses}>
    <div class="flex items-center">
      <Button variant="ghost" size="sm" class={navigationButtonClasses} onclick={() => navigateMonth(-1)}>
        <ChevronLeft class="h-5 w-5" />
      </Button>
      <Button variant="ghost" size="sm" class={todayButtonClasses} onclick={navigateToToday}>
        Today
      </Button>
      <Button variant="ghost" size="sm" class={navigationButtonClasses} onclick={() => navigateMonth(1)}>
        <ChevronRight class="h-5 w-5" />
      </Button>
      <h2 class="ml-4 text-xl font-bold text-[--color-text-primary]">{monthYear}</h2>
    </div>

    <div class="flex space-x-2">
      <Button
        variant={viewMode === 'month' ? 'primary' : 'ghost'}
        size="sm"
        class={getViewToggleButtonClasses(viewMode === 'month')}
        onclick={() => {}}
      >
        Month
      </Button>
      <Button
        variant={viewMode === 'week' ? 'primary' : 'ghost'}
        size="sm"
        class={getViewToggleButtonClasses(viewMode === 'week')}
        onclick={() => {}}
      >
        Week
      </Button>
      <Button
        variant={viewMode === 'day' ? 'primary' : 'ghost'}
        size="sm"
        class={getViewToggleButtonClasses(viewMode === 'day')}
        onclick={() => {}}
      >
        Day
      </Button>
    </div>
  </div>

  <!-- Calendar grid or custom content through render -->
  {#if children}
    <div class="calendar-content">
      {@render children()}
    </div>
  {:else}
    <div class={gridClasses}>
      {#if showWeekNumbers}
        <div class={CalendarViewStyleManager.getWeekNumberClasses()}></div>
      {/if}

      {#each weekdays as day}
        <div class={weekdayHeaderClasses}>
          {day}
        </div>
      {/each}

      {#each days as day, index}
        <div
          class={`${CalendarViewStyleManager.getDayCellClasses(day.isToday, day.isCurrentMonth)} ${dayClass}`}
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
          <div class="flex justify-between">
            <span class={`text-[--text-size-sm] ${CalendarViewStyleManager.getDateNumberClasses(day.isToday)}`}>
              {day.date.getDate()}
            </span>
            <button
              class={CalendarViewStyleManager.getAddEventButtonClasses()}
              onclick={(e) => {
                e.stopPropagation();
                handleAddEvent(day.date);
              }}
            >
              <Plus class="h-4 w-4" />
            </button>
          </div>

          <div class="mt-1 space-y-1 max-h-20 overflow-y-auto">
            {#each day.events as event}
              <div
                class={`${CalendarViewStyleManager.getEventItemClasses(event.color)} ${eventClass}`}
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
                {event.title}
              </div>
            {/each}
          </div>
        </div>

        {#if showWeekNumbers}
          {#if (index + 1) % 7 === 0}
            <div class={CalendarViewStyleManager.getWeekNumberClasses()}></div>
          {/if}
        {/if}
      {/each}
    </div>
  {/if}
</div>

