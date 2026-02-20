<script lang="ts">
  import { Story } from '$stylist/playground';
  import type { ControlConfig } from '$stylist/playground';

  import EventCalendar from './index.svelte';
  import type { CalendarEvent } from '$stylist/design-system/props/event-calendar';

  let {
    id = '',
    title = '',
    description = '',
    controls = [
      { name: 'viewMode', type: 'select', options: ['day', 'week', 'month'], defaultValue: 'month' },
      { name: 'showAllDayEvents', type: 'boolean', defaultValue: true }
    ]
  } = $props<{
    id?: string;
    title?: string;
    description?: string;
    controls?: ControlConfig[]
  }>();

  // Sample events data
  const sampleEvents: CalendarEvent[] = [
    {
      id: '1',
      title: 'Team Meeting',
      start: new Date(new Date().getFullYear(), new Date().getMonth(), 15, 10, 0),
      end: new Date(new Date().getFullYear(), new Date().getMonth(), 15, 11, 30),
      description: 'Weekly team sync',
      color: '#3b82f6'
    },
    {
      id: '2',
      title: 'Lunch with Alex',
      start: new Date(new Date().getFullYear(), new Date().getMonth(), 16, 12, 0),
      end: new Date(new Date().getFullYear(), new Date().getMonth(), 16, 13, 0),
      description: 'Discuss new project',
      color: '#10b981'
    },
    {
      id: '3',
      title: 'Project Deadline',
      start: new Date(new Date().getFullYear(), new Date().getMonth(), 20, 17, 0),
      end: new Date(new Date().getFullYear(), new Date().getMonth(), 20, 18, 0),
      description: 'Submit final project',
      color: '#ef4444'
    },
    {
      id: '4',
      title: 'Conference Call',
      start: new Date(new Date().getFullYear(), new Date().getMonth(), 25, 14, 0),
      end: new Date(new Date().getFullYear(), new Date().getMonth(), 25, 15, 30),
      description: 'International partners',
      color: '#8b5cf6'
    }
  ];

  // Event handlers
  function handleEventClick(event: CalendarEvent) {
    console.log('Event clicked:', event.title);
  }

  function handleEventCreate(date: Date) {
    console.log('Creating event on date:', date);
  }

  function handleEventEdit(event: CalendarEvent) {
    console.log('Editing event:', event.title);
  }

  function handleEventDelete(event: CalendarEvent) {
    console.log('Deleting event:', event.title);
  }
</script>

<Story
  {id}
  {title}
  {description}
  component={EventCalendar}
  category="Organisms"
  controls={controls}
>
  {#snippet children(values: any)}
    <section class="sb-organisms-event-calendar grid w-full gap-8 lg:grid-cols-[1fr_1fr]">
      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-primary] p-6 shadow-sm">
        <p class="text-sm font-semibold uppercase tracking-wide text-[--color-text-secondary]">
          Primary Event Calendar Example
        </p>
        <p class="mt-1 text-[--color-text-primary]">Interactive calendar with event management features.</p>

        <div class="mt-6">
          <EventCalendar
            events={sampleEvents}
            initialDate={new Date()}
            viewMode={values.viewMode}
            showAllDayEvents={values.showAllDayEvents}
            onEventClick={handleEventClick}
            onEventCreate={handleEventCreate}
            onEventEdit={handleEventEdit}
            onEventDelete={handleEventDelete}
          />
        </div>
      </div>

      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-secondary] p-6 shadow-sm">
        <h3 class="text-base font-semibold text-[--color-text-primary]">Calendar Variations</h3>
        <p class="text-sm text-[--color-text-secondary]">
          Different calendar views: day, week, and month with sample events.
        </p>

        <div class="mt-5 space-y-4">
          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Week View</p>
            <div class="h-80">
              <EventCalendar
                events={sampleEvents}
                initialDate={new Date()}
                viewMode="week"
                showAllDayEvents={true}
                onEventClick={handleEventClick}
              />
            </div>
          </article>

          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Day View</p>
            <div class="h-80">
              <EventCalendar
                events={sampleEvents}
                initialDate={new Date()}
                viewMode="day"
                showAllDayEvents={true}
                onEventClick={handleEventClick}
              />
            </div>
          </article>

          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Month View with Limited Events</p>
            <div class="h-80">
              <EventCalendar
                events={sampleEvents.slice(0, 2)}
                initialDate={new Date()}
                viewMode="month"
                showAllDayEvents={true}
                onEventClick={handleEventClick}
              />
            </div>
          </article>
        </div>
      </div>
    </section>
  {/snippet}
</Story>


