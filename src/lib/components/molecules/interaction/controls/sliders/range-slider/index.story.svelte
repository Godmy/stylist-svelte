<script lang="ts">
  import Story from '$stylist/design-system/playground/Story.svelte';
  import RangeSlider from './index.svelte';
  import type { ControlType } from '$stylist/design-system/tokens/controls';

  const controls = [
    {
      name: 'label',
      type: 'text' as ControlType,
      defaultValue: 'Volume',
      description: 'Label for the slider'
    },
    {
      name: 'min',
      type: 'number' as ControlType,
      defaultValue: 0,
      description: 'Minimum value'
    },
    {
      name: 'max',
      type: 'number' as ControlType,
      defaultValue: 100,
      description: 'Maximum value'
    },
    {
      name: 'step',
      type: 'number' as ControlType,
      defaultValue: 1,
      description: 'Step increment'
    },
    {
      name: 'showValue',
      type: 'boolean' as ControlType,
      defaultValue: true,
      description: 'Whether to show the current value'
    },
    {
      name: 'disabled',
      type: 'boolean' as ControlType,
      defaultValue: false,
      description: 'Whether the slider is disabled'
    },
    {
      name: 'range',
      type: 'boolean' as ControlType,
      defaultValue: false,
      description: 'Whether to use range mode'
    },
    {
      name: 'description',
      type: 'text' as ControlType,
      defaultValue: 'Adjust the volume level',
      description: 'Description for the slider'
    }
  ];

  let sliderValue: number | [number, number] = 50;

  function handleValueChange(newValue: number | [number, number]) {
    console.log('Slider value changed:', newValue);
    sliderValue = newValue;
  }
</script>

<Story
  {controls}
  title="RangeSlider Component"
  description="A slider component for selecting values or ranges"
 
>
  {#snippet children(controlValues: any)}
  <RangeSlider
    id="volume-slider"
    label={controlValues.label}
    value={sliderValue}
    min={controlValues.min}
    max={controlValues.max}
    step={controlValues.step}
    showValue={controlValues.showValue}
    disabled={controlValues.disabled}
    range={controlValues.range}
    description={controlValues.description}
  />

  {/snippet}
</Story>