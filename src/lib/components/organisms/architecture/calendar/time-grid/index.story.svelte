<script context="module">
  export const title = "TimeGrid";
  export const category = "Organisms/Calendar";
</script>

<script lang="ts">
  // @ts-nocheck
  import TimeGrid from "./index.svelte";
  import type { ITimeGridProps, CalendarEvent } from "./types";

  // Sample events data
  const sampleEvents: CalendarEvent[] = [
    {
      id: '1',
      title: 'Team Meeting',
      start: new Date(new Date().setHours(10, 0, 0, 0)),
      end: new Date(new Date().setHours(11, 30, 0, 0)),
      location: 'Conference Room A',
      color: '#3b82f6',
      allDay: false
    },
    {
      id: '2',
      title: 'Design Review',
      start: (() => {
        const date = new Date();
        date.setDate(date.getDate() + 1);
        date.setHours(14, 0, 0, 0);
        return date;
      })(),
      end: (() => {
        const date = new Date();
        date.setDate(date.getDate() + 1);
        date.setHours(15, 30, 0, 0);
        return date;
      })(),
      location: 'Design Studio',
      color: '#10b981',
      allDay: false
    },
    {
      id: '3',
      title: 'Client Call',
      start: (() => {
        const date = new Date();
        date.setDate(date.getDate() + 2);
        date.setHours(9, 0, 0, 0);
        return date;
      })(),
      end: (() => {
        const date = new Date();
        date.setDate(date.getDate() + 2);
        date.setHours(10, 0, 0, 0);
        return date;
      })(),
      location: 'Phone',
      color: '#8b5cf6',
      allDay: false
    },
    {
      id: '4',
      title: 'Full Day Event',
      start: new Date(new Date().setDate(new Date().getDate() + 3)),
      end: new Date(new Date().setDate(new Date().getDate() + 3)),
      location: 'Office',
      color: '#f59e0b',
      allDay: true
    }
  ];

  // State variables
  let showHeader = true;
  let showCurrentTimeIndicator = true;
  let timeStep = 60;

  // Event handlers
  function handleEventClick(event: CalendarEvent) {
    console.log('Event clicked:', event.title);
  }

  function handleSlotClick(date: Date) {
    console.log('Time slot clicked:', date);
  }
</script>

<div class="sb-organisms-time-grid">
  <h2>{title}</h2>
  <p>Interactive time grid with detailed scheduling view.</p>

  <!-- Interactive Demo -->
  <div class="interactive-demo">
    <section class="grid w-full gap-8 lg:grid-cols-[1fr_1fr]">
      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-primary] p-6 shadow-sm">
        <p class="text-sm font-semibold uppercase tracking-wide text-[--color-text-secondary]">
          Primary Time Grid Example
        </p>
        <p class="mt-1 text-[--color-text-primary]">Interactive time grid with detailed scheduling view.</p>

        <div class="mt-6 h-[500px]">
          <TimeGrid
            events={sampleEvents}
            startDate={new Date()}
            endDate={new Date(new Date().setDate(new Date().getDate() + 6))}
            showHeader={showHeader}
            showCurrentTimeIndicator={showCurrentTimeIndicator}
            timeStep={timeStep}
            onEventClick={handleEventClick}
            onSlotClick={handleSlotClick}
          />
        </div>
      </div>

      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-secondary] p-6 shadow-sm">
        <h3 class="text-base font-semibold text-[--color-text-primary]">Time Grid Variations</h3>
        <p class="text-sm text-[--color-text-secondary]">
          Different time grid configurations with various time steps and options.
        </p>

        <div class="mt-5 space-y-4">
          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">30-minute Time Step</p>
            <div class="h-80">
              <TimeGrid
                events={sampleEvents}
                startDate={new Date()}
                endDate={new Date(new Date().setDate(new Date().getDate() + 2))}
                timeStep={30}
                showHeader={true}
                showCurrentTimeIndicator={true}
                onEventClick={handleEventClick}
              />
            </div>
          </article>

          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Without Current Time Indicator</p>
            <div class="h-80">
              <TimeGrid
                events={sampleEvents}
                startDate={new Date()}
                endDate={new Date(new Date().setDate(new Date().getDate() + 2))}
                timeStep={60}
                showHeader={true}
                showCurrentTimeIndicator={false}
                onEventClick={handleEventClick}
              />
            </div>
          </article>

          <article class="rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] p-4">
            <p class="text-sm font-semibold text-[--color-text-primary] mb-2">Without Header</p>
            <div class="h-80">
              <TimeGrid
                events={sampleEvents}
                startDate={new Date()}
                endDate={new Date(new Date().setDate(new Date().getDate() + 2))}
                timeStep={60}
                showHeader={false}
                showCurrentTimeIndicator={true}
                onEventClick={handleEventClick}
              />
            </div>
          </article>
        </div>
      </div>
    </section>
  </div>

  <!-- Controls -->
  <div class="controls-demo">
    <h3>Controls</h3>
    <div class="grid gap-3 sm:grid-cols-2">
      <label class="flex items-center gap-2 text-sm">
        <input type="checkbox" bind:checked={showHeader} />
        Show Header
      </label>
      <label class="flex items-center gap-2 text-sm">
        <input type="checkbox" bind:checked={showCurrentTimeIndicator} />
        Show Current Time Indicator
      </label>
      <label class="flex flex-col gap-1 text-sm">
        Time Step (min):
        <input type="range" min="15" max="120" step="15" bind:value={timeStep} />
        ({timeStep} min)
      </label>
    </div>
  </div>

  <!-- Tags (optional) -->
  <div class="tags">
    <span class="tag">calendar</span>
    <span class="tag">time-grid</span>
    <span class="tag">scheduler</span>
    <span class="tag">events</span>
  </div>
</div>

<style>
  .sb-organisms-time-grid {
    padding: 20px;
    max-width: 100%;
    font-family: sans-serif;
  }

  h2, h3 {
    margin-top: 2rem;
    margin-bottom: 0.5rem;
  }

  .interactive-demo {
    margin: 1.5rem 0;
  }

  .controls-demo {
    margin-top: 2rem;
  }

  .controls-demo .grid {
    display: grid;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .controls-demo label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .tags {
    margin-top: 1rem;
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
  }

  .tag {
    background: #f0f0f0;
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    font-size: 0.875rem;
  }
</style>

