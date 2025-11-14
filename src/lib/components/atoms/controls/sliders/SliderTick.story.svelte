<script lang="ts">
  import SliderTick from './SliderTick.svelte';
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';

  const tickValues = [0, 25, 50, 75, 100];

  let activeIndex = $state(2);
  let showLabels = $state(true);

  const controls: ControlConfig[] = [
    { name: 'activeIndex', type: 'number', min: 0, max: tickValues.length - 1, step: 1, defaultValue: 2 },
    { name: 'showLabels', type: 'boolean', defaultValue: true }
  ];
</script>

<Story
  id="atoms-slider-tick"
  title="SliderTick"
  component={SliderTick}
  category="Atoms"
  description="Discrete tick indicator used by range sliders."
  tags={['slider', 'tick', 'range']}
  controls={controls}
>
  <div class="space-y-6 p-6">
    <div class="relative h-2 w-full rounded-full bg-gray-200">
      {#each tickValues as value, index}
        <SliderTick
          value={value}
          position={value}
          active={index === activeIndex}
          label={showLabels ? `${value}%` : undefined}
        />
      {/each}
    </div>

    <label class="flex flex-col gap-2 text-sm">
      Active tick ({tickValues[activeIndex]}%)
      <input
        type="range"
        min="0"
        max={tickValues.length - 1}
        step="1"
        bind:value={activeIndex}
      />
    </label>

    <label class="flex items-center gap-2 text-sm">
      <input type="checkbox" bind:checked={showLabels} />
      Show labels
    </label>
  </div>
</Story>
