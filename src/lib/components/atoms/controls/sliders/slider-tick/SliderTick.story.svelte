<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import SliderTick from './SliderTick.svelte';

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
      defaultValue: 50
    },
    {
      name: 'position',
      type: 'number',
      defaultValue: 50
    },
    {
      name: 'active',
      type: 'boolean',
      defaultValue: true
    },
    {
      name: 'label',
      type: 'text',
      defaultValue: '50'
    },
    {
      name: 'withContent',
      type: 'boolean',
      defaultValue: false
    }
  ];
</script>

<Story
  id="atoms-slider-tick"
  title="SliderTick"
  component={SliderTick}
  category="Atoms"
  description="Single tick mark on a slider scale."
  tags={['display', 'slider', 'tick', 'range']}
  controls={controls}
>
  {#snippet children(props: SliderTickStoryProps)}
    <div class="relative w-full h-16">
      <!-- Sample slider track for reference -->
      <div class="absolute top-1/2 left-0 w-full h-1 bg-gray-300 transform -translate-y-1/2"></div>
      
      <!-- The slider tick at specified position -->
      <SliderTick
        value={props.value}
        position={props.position}
        active={props.active}
        label={props.label}
        content={props.withContent ? (): any => 'A' : undefined}
      />
    </div>
  {/snippet}
</Story>