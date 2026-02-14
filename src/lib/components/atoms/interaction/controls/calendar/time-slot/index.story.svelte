<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';

  import TimeSlot from './index.svelte';
  import type { ITimeSlot } from '$stylist/design-system/props/time-slot';

  export let id: string;
  export let title: string;
  export let description: string;
  export let primaryScenario: ITimeSlot;
  export let variantScenarios: ITimeSlot[] = [];
  export let controls: ControlConfig[] = [
    { name: 'available', type: 'boolean', defaultValue: true },
    { name: 'selected', type: 'boolean', defaultValue: false },
    { name: 'active', type: 'boolean', defaultValue: false }
  ];

  // Sample time slots for scenarios
  const sampleTimeSlot: ITimeSlot = {
    start: new Date(2023, 0, 1, 9, 0),
    end: new Date(2023, 0, 1, 10, 0),
    timeLabel: '9:00 AM - 10:00 AM',
    available: true,
    selected: false,
    active: false,
    events: []
  };

  const defaultPrimaryScenario: ITimeSlot = {
    start: new Date(2023, 0, 1, 10, 0),
    end: new Date(2023, 0, 1, 11, 0),
    timeLabel: '10:00 AM - 11:00 AM',
    available: true,
    selected: true,
    active: false,
    events: []
  };

  const variantScenariosData: ITimeSlot[] = [
    {
      start: new Date(2023, 0, 1, 8, 0),
      end: new Date(2023, 0, 1, 9, 0),
      timeLabel: '8:00 AM - 9:00 AM',
      available: true,
      selected: false,
      active: true,
      events: []
    },
    {
      start: new Date(2023, 0, 1, 11, 0),
      end: new Date(2023, 0, 1, 12, 0),
      timeLabel: '11:00 AM - 12:00 PM',
      available: true,
      selected: false,
      active: false,
      events: [{ id: 1, title: 'Meeting' }]
    },
    {
      start: new Date(2023, 0, 1, 12, 0),
      end: new Date(2023, 0, 1, 13, 0),
      timeLabel: '12:00 PM - 1:00 PM',
      available: false,
      selected: false,
      active: false,
      events: []
    }
  ];

  // Use the provided scenarios or defaults
  primaryScenario = primaryScenario || defaultPrimaryScenario;
  variantScenarios = variantScenarios.length > 0 ? variantScenarios : variantScenariosData;

  // Handle click for demo purposes
  function handleTimeSlotClick(slot: ITimeSlot) {
    console.log('Time slot clicked:', slot);
  }
</script>

<Story
  {id}
  {title}
  {description}
  component={TimeSlot}
  category="Molecules"
  controls={controls}
>
  {#snippet children(props: { available?: boolean; selected?: boolean; active?: boolean })}
    <section class="grid w-full gap-8 lg:grid-cols-[1fr_1fr]">
      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-primary] p-6 shadow-sm">
        <p class="text-sm font-semibold uppercase tracking-wide text-[--color-text-secondary]">
          Primary Time Slot Example
        </p>
        <p class="mt-1 text-[--color-text-primary]">Interactive time slot with customizable states.</p>

        <div class="mt-6 flex flex-wrap gap-4">
          <TimeSlot
            {...primaryScenario}
            available={props.available ?? primaryScenario.available}
            selected={props.selected ?? primaryScenario.selected}
            active={props.active ?? primaryScenario.active}
            onClick={handleTimeSlotClick}
          />
        </div>
      </div>

      <div class="rounded-[2rem] border border-[--color-border-primary] bg-[--color-background-secondary] p-6 shadow-sm">
        <h3 class="text-base font-semibold text-[--color-text-primary]">Time Slot Variations</h3>
        <p class="text-sm text-[--color-text-secondary]">
          Different states of time slots: available, busy, selected, and current.
        </p>

        <div class="mt-5 space-y-3">
          {#each variantScenarios as scenario}
            <article class="flex items-center justify-between rounded-2xl border border-dashed border-[--color-border-primary] bg-[--color-background-primary] px-4 py-3">
              <div>
                <p class="text-sm font-semibold text-[--color-text-primary]">{scenario.timeLabel}</p>
                <p class="text-xs text-[--color-text-secondary]">Status: {scenario.available ? 'Available' : 'Booked'}</p>
              </div>
              <TimeSlot
                {...scenario}
                onClick={handleTimeSlotClick}
              />
            </article>
          {/each}
        </div>
      </div>
    </section>
  {/snippet}
</Story>




