<script lang="ts">
  import { Story } from '$stylist/playground';
  import type { ControlConfig } from '$stylist/playground';

  import CalendarView from './index.svelte';

  let {
    id = '',
    title = '',
    description = '',
    controls = [
      { name: 'viewMode', type: 'select', options: ['day', 'week', 'month'], defaultValue: 'month' },
      { name: 'showWeekNumbers', type: 'boolean', defaultValue: false }
    ]
  } = $props<{
    id?: string;
    title?: string;
    description?: string;
    controls?: ControlConfig[]
  }>();

  // Sample events data for the CalendarView component
  const sampleEvents = [
    { id: '1', title: 'Meeting', start: new Date(2023, 5, 15, 10, 0), end: new Date(2023, 5, 15, 11, 0) },
    { id: '2', title: 'Lunch', start: new Date(2023, 5, 16, 12, 30), end: new Date(2023, 5, 16, 13, 30) },
    { id: '3', title: 'Conference', start: new Date(2023, 5, 18, 9, 0), end: new Date(2023, 5, 20, 17, 0) }
  ];

  function handleEventClick(event: any) {
    console.log('Event clicked:', event);
  }

  function handleDayClick(date: Date) {
    console.log('Day clicked:', date);
  }
</script>

<Story
  {id}
  {title}
  {description}
  component={CalendarView}
  category="Organisms"
  controls={controls}
>
  {#snippet children(values: any)}
    <section class="sb-organisms-calendar-view grid w-full gap-8 lg:grid-cols-[1fr_1fr]">
      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-primary] p-6 shadow-sm">
        <p class="text-sm font-semibold uppercase tracking-wide text-[--color-text-secondary]">
          Primary Calendar View Example
        </p>
        <p class="mt-1 text-[--color-text-primary]">Interactive calendar view with customizable options.</p>

        <div class="mt-6">
          <CalendarView
            events={sampleEvents}
            viewMode={values.viewMode}
            showWeekNumbers={values.showWeekNumbers}
            onEventClick={handleEventClick}
            onDayClick={handleDayClick}
          />
        </div>
      </div>

      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-secondary] p-6 shadow-sm">
        <h3 class="text-base font-semibold text-[--color-text-primary]">Calendar View Variations</h3>
        <p class="text-sm text-[--color-text-secondary]">
          Different calendar view configurations with various options.
        </p>

        <div class="mt-5 space-y-4">
          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Week View</p>
            <div>
              <CalendarView
                events={sampleEvents}
                viewMode="week"
                showWeekNumbers={true}
                onEventClick={handleEventClick}
                onDayClick={handleDayClick}
              />
            </div>
          </article>

          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Day View</p>
            <div>
              <CalendarView
                events={sampleEvents.slice(0, 1)}
                viewMode="day"
                showWeekNumbers={false}
                onEventClick={handleEventClick}
                onDayClick={handleDayClick}
              />
            </div>
          </article>
        </div>
      </div>
    </section>
  {/snippet}
</Story>

