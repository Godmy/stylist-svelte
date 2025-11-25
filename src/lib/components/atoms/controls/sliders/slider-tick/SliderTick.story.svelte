<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import SliderTick from './SliderTick.svelte';
  import { createRawSnippet } from 'svelte';

  type SliderTickStoryProps = {
    value: number;
    position: number;
    active: boolean;
    label: string;
    withContent: boolean;
  };

  const controls: ControlConfig[] = [
    {
      name: 'value',
      type: 'number',
      defaultValue: 50,
      min: 0,
      max: 100
    },
    {
      name: 'position',
      type: 'number',
      defaultValue: 50,
      min: 0,
      max: 100
    },
    {
      name: 'active',
      type: 'boolean',
      defaultValue: true
    },
    {
      name: 'label',
      type: 'text',
      defaultValue: '50%'
    },
    {
      name: 'withContent',
      type: 'boolean',
      defaultValue: false
    }
  ];

  const milestoneTicks = [
    { value: 0, position: 0, label: '0%' },
    { value: 25, position: 25, label: 'Discovery' },
    { value: 50, position: 50, label: 'Design' },
    { value: 75, position: 75, label: 'Build', active: true },
    { value: 100, position: 100, label: 'Launch', active: true }
  ];

  const contentSnippet = createRawSnippet(() => ({
    render() {
      return `<div class="flex flex-col items-center text-[10px] font-semibold text-[--color-text-primary]">
        <span>📍</span>
        <span>Milestone</span>
      </div>`;
    }
  }));
</script>

<Story
  id="atoms-sliders-slider-tick"
  title="SliderTick"
  component={SliderTick}
  category="Atoms"
  description="Visual marker that annotates specific values along a slider or progress rail."
  tags={['display', 'slider', 'tick', 'range']}
  controls={controls}
>
  {#snippet children(props: SliderTickStoryProps)}
    <section class="space-y-10">
      <div class="rounded-3xl border border-[--color-border-primary] bg-[--color-background-secondary] p-6 shadow-sm">
        <p class="mb-4 text-sm text-[--color-text-secondary]">
          Interactive tick that follows the control panel settings.
        </p>
        <div class="relative h-24">
          <div class="absolute top-1/2 left-0 h-1 w-full -translate-y-1/2 rounded-full bg-[--color-border-primary]"></div>
          <SliderTick
            value={props.value}
            position={props.position}
            active={props.active}
            label={props.label}
            content={props.withContent ? contentSnippet : undefined}
          />
        </div>
      </div>

      <div class="rounded-3xl border border-[--color-border-primary] bg-[--color-background-primary] p-6 shadow-sm">
        <div class="flex items-center justify-between">
          <div>
            <h3 class="text-base font-semibold text-[--color-text-primary]">Delivery timeline</h3>
            <p class="text-sm text-[--color-text-secondary]">
              Combine multiple ticks to build labelled slider rails.
            </p>
          </div>
          <span class="text-xs font-semibold uppercase tracking-wide text-[--color-text-secondary]">
            Sample layout
          </span>
        </div>

        <div class="relative mt-8 h-28">
          <div class="absolute top-1/2 left-0 h-[3px] w-full -translate-y-1/2 rounded-full bg-[--color-border-primary]">
            <div class="h-full rounded-full bg-[--color-primary-500]" style="width: 76%;"></div>
          </div>

          {#each milestoneTicks as tick, index}
            <SliderTick
              value={tick.value}
              position={tick.position}
              active={tick.active ?? tick.position <= 75}
              label={tick.label}
              content={index === milestoneTicks.length - 1
                ? createRawSnippet(() => ({
                  render: () =>
                    `<div class="rounded-full border border-[--color-border-primary] bg-[--color-background-primary] px-3 py-1 text-[10px] font-semibold">${tick.label}</div>`
                }))
                : undefined}
            />
          {/each}
        </div>
      </div>
    </section>
  {/snippet}
</Story>
