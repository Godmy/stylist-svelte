<script lang="ts">
  import { Story } from '$stylist/playground';
  import type { ControlConfig } from '$stylist/playground';

  import * as ScheduleCalendarModule from './index.svelte';
  const ScheduleCalendar: any = ScheduleCalendarModule.default ?? ScheduleCalendarModule;
  import type { IScheduleCalendarProps, ScheduleEvent } from '$stylist/design-system/props/schedule-calendar';

  export let id: string;
  export let title: string;
  export let description: string;
  export let controls: ControlConfig[] = [
    { name: 'showHeader', type: 'boolean', defaultValue: true },
    { name: 'showTimeGutter', type: 'boolean', defaultValue: true }
  ];

  // Sample events data
  const sampleEvents: ScheduleEvent[] = [
    {
      id: '1',
      title: 'Team Meeting',
      start: new Date(new Date().setHours(10, 0, 0, 0)),
      end: new Date(new Date().setHours(11, 30, 0, 0)),
      location: 'Conference Room A',
      color: '#3b82f6',
      priority: 'high'
    },
    {
      id: '2',
      title: 'Design Review',
      start: new Date(new Date().setDate(new Date().getDate() + 1), new Date().setHours(14, 0, 0, 0)),
      end: new Date(new Date().setDate(new Date().getDate() + 1), new Date().setHours(15, 30, 0, 0)),
      location: 'Design Studio',
      color: '#10b981',
      priority: 'medium'
    },
    {
      id: '3',
      title: 'Client Call',
      start: new Date(new Date().setDate(new Date().getDate() + 2), new Date().setHours(9, 0, 0, 0)),
      end: new Date(new Date().setDate(new Date().getDate() + 2), new Date().setHours(10, 0, 0, 0)),
      location: 'Phone',
      color: '#8b5cf6',
      priority: 'high'
    },
    {
      id: '4',
      title: 'Lunch Break',
      start: new Date(new Date().setDate(new Date().getDate() + 3), new Date().setHours(12, 0, 0, 0)),
      end: new Date(new Date().setDate(new Date().getDate() + 3), new Date().setHours(13, 0, 0, 0)),
      location: 'Cafeteria',
      color: '#f59e0b',
      priority: 'low'
    }
  ];

  // Event handlers
  function handleEventClick(event: ScheduleEvent) {
    console.log('Event clicked:', event.title);
  }

  function handleSlotClick(date: Date) {
    console.log('Time slot clicked:', date);
  }
</script>

<Story
  {id}
  {title}
  {description}
  component={ScheduleCalendar}
  category="Organisms"
  controls={controls}
>
  {#snippet children(props: { showHeader?: boolean; showTimeGutter?: boolean })}
    <section class="sb-organisms-schedule-calendar grid w-full gap-8 lg:grid-cols-[1fr_1fr]">
      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-primary] p-6 shadow-sm">
        <p class="text-sm font-semibold uppercase tracking-wide text-[--color-text-secondary]">
          Primary Schedule Calendar Example
        </p>
        <p class="mt-1 text-[--color-text-primary]">Interactive schedule calendar with time-based events.</p>

        <div class="mt-6 h-[500px]">
          <ScheduleCalendar
            events={sampleEvents}
            startDate={new Date()}
            endDate={new Date(new Date().setDate(new Date().getDate() + 6))}
            showHeader={props.showHeader ?? true}
            showTimeGutter={props.showTimeGutter ?? true}
            onEventClick={handleEventClick}
            onSlotClick={handleSlotClick}
          />
        </div>
      </div>

      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-secondary] p-6 shadow-sm">
        <h3 class="text-base font-semibold text-[--color-text-primary]">Schedule Variations</h3>
        <p class="text-sm text-[--color-text-secondary]">
          Different schedule calendar configurations with various options.
        </p>

        <div class="mt-5 space-y-4">
          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Without Header</p>
            <div class="h-80">
              <ScheduleCalendar
                events={sampleEvents}
                startDate={new Date()}
                endDate={new Date(new Date().setDate(new Date().getDate() + 4))}
                showHeader={false}
                showTimeGutter={true}
                onEventClick={handleEventClick}
              />
            </div>
          </article>

          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Without Time Gutter</p>
            <div class="h-80">
              <ScheduleCalendar
                events={sampleEvents}
                startDate={new Date()}
                endDate={new Date(new Date().setDate(new Date().getDate() + 4))}
                showHeader={true}
                showTimeGutter={false}
                onEventClick={handleEventClick}
              />
            </div>
          </article>

          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Limited Time Range</p>
            <div class="h-80">
              <ScheduleCalendar
                events={sampleEvents}
                startDate={new Date()}
                endDate={new Date(new Date().setDate(new Date().getDate() + 3))}
                startTime={9}
                endTime={17}
                showHeader={true}
                showTimeGutter={true}
                onEventClick={handleEventClick}
              />
            </div>
          </article>
        </div>
      </div>
    </section>
  {/snippet}
</Story>

