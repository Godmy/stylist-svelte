<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';

  import MiniCalendar from './index.svelte';
  import type { IMiniCalendarProps, CalendarEvent } from './types';

  export let id: string;
  export let title: string;
  export let description: string;
  export let controls: ControlConfig[] = [
    { name: 'compact', type: 'boolean', defaultValue: false },
    { name: 'showToday', type: 'boolean', defaultValue: true }
  ];

  // Sample events data
  const sampleEvents: CalendarEvent[] = [
    {
      id: '1',
      title: 'Meeting',
      start: new Date(new Date().getFullYear(), new Date().getMonth(), 10, 10, 0),
      end: new Date(new Date().getFullYear(), new Date().getMonth(), 10, 11, 0),
      color: '#3b82f6'
    },
    {
      id: '2',
      title: 'Lunch',
      start: new Date(new Date().getFullYear(), new Date().getMonth(), 15, 12, 0),
      end: new Date(new Date().getFullYear(), new Date().getMonth(), 15, 13, 0),
      color: '#10b981'
    },
    {
      id: '3',
      title: 'Deadline',
      start: new Date(new Date().getFullYear(), new Date().getMonth(), 20, 17, 0),
      end: new Date(new Date().getFullYear(), new Date().getMonth(), 20, 18, 0),
      color: '#ef4444'
    },
    {
      id: '4',
      title: 'Conference',
      start: new Date(new Date().getFullYear(), new Date().getMonth(), 25, 14, 0),
      end: new Date(new Date().getFullYear(), new Date().getMonth(), 25, 15, 30),
      color: '#8b5cf6'
    }
  ];

  // Event handlers
  function handleDateSelect(date: Date) {
    console.log('Date selected:', date);
  }

  function handleEventClick(event: CalendarEvent) {
    console.log('Event clicked:', event.title);
  }

  type Props = {
    compact?: boolean;
    showToday?: boolean;
  };
</script>

<Story
  {id}
  {title}
  {description}
  component={MiniCalendar}
  category="Organisms/Interaction/Controls/Calendar"
  controls={controls}
>
  {#snippet children(values: any)}
    <section class="sb-organisms-mini-calendar grid w-full gap-8 lg:grid-cols-[1fr_1fr]">
      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-primary] p-6 shadow-sm">
        <p class="text-sm font-semibold uppercase tracking-wide text-[--color-text-secondary]">
          Primary Mini Calendar Example
        </p>
        <p class="mt-1 text-[--color-text-primary]">Compact calendar with event indicators and date selection.</p>

        <div class="mt-6 flex justify-center">
          <MiniCalendar
            events={sampleEvents}
            initialDate={new Date()}
            compact={values.compact}
            showToday={values.showToday}
            onDateSelect={handleDateSelect}
            onEventClick={handleEventClick}
          />
        </div>
      </div>

      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-secondary] p-6 shadow-sm">
        <h3 class="text-base font-semibold text-[--color-text-primary]">Calendar Variations</h3>
        <p class="text-sm text-[--color-text-secondary]">
          Different mini calendar configurations with various options.
        </p>

        <div class="mt-5 space-y-4">
          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Compact View</p>
            <div class="flex justify-center">
              <MiniCalendar
                events={sampleEvents}
                initialDate={new Date()}
                compact={true}
                showToday={true}
                onDateSelect={handleDateSelect}
              />
            </div>
          </article>

          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Without Today Button</p>
            <div class="flex justify-center">
              <MiniCalendar
                events={sampleEvents}
                initialDate={new Date()}
                compact={false}
                showToday={false}
                onDateSelect={handleDateSelect}
              />
            </div>
          </article>

          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Without Events</p>
            <div class="flex justify-center">
              <MiniCalendar
                events={[]}
                initialDate={new Date()}
                compact={false}
                showToday={true}
                onDateSelect={handleDateSelect}
              />
            </div>
          </article>
        </div>
      </div>
    </section>
  {/snippet}
</Story>


