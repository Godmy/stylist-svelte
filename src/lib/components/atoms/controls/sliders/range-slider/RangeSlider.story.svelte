<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import RangeSlider from './RangeSlider.svelte';

  type RangeSliderStoryProps = {
    label: string;
    min: number;
    max: number;
    step: number;
    showValue: boolean;
    disabled: boolean;
    description: string;
    range: boolean;
  };

  const controls: ControlConfig[] = [
    {
      name: 'label',
      type: 'text',
      defaultValue: 'Volume'
    },
    {
      name: 'min',
      type: 'number',
      defaultValue: 0
    },
    {
      name: 'max',
      type: 'number',
      defaultValue: 100
    },
    {
      name: 'step',
      type: 'number',
      defaultValue: 1
    },
    {
      name: 'showValue',
      type: 'boolean',
      defaultValue: true
    },
    {
      name: 'disabled',
      type: 'boolean',
      defaultValue: false
    },
    {
      name: 'description',
      type: 'text',
      defaultValue: 'Adjust the volume level'
    },
    {
      name: 'range',
      type: 'boolean',
      defaultValue: false
    }
  ];
</script>

<Story
  id="atoms-range-slider"
  title="RangeSlider"
  component={RangeSlider}
  category="Atoms"
  description="Slider with single or dual handles for value selection."
  tags={['input', 'slider', 'range', 'form']}
  controls={controls}
>
  {#snippet children(props: RangeSliderStoryProps)}
    <div class="flex flex-col gap-4">
      <RangeSlider
        id="volume-slider"
        label={props.label}
        value={props.range ? [20, 80] : 50}
        min={props.min}
        max={props.max}
        step={props.step}
        showValue={props.showValue}
        disabled={props.disabled}
        description={props.description}
        range={props.range}
      />
    </div>
  {/snippet}
</Story>