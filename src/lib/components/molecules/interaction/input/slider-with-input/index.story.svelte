<script lang="ts">
  import Story from '$stylist/design-system/playground/Story.svelte';
  import SliderWithInput from './index.svelte';
  import type { ControlType } from '$stylist/design-system/tokens/controls';

  const controls = [
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
      name: 'value',
      type: 'number' as ControlType,
      defaultValue: 50,
      description: 'Current value'
    },
    {
      name: 'disabled',
      type: 'boolean' as ControlType,
      defaultValue: false,
      description: 'Whether the component is disabled'
    }
  ];
</script>

<Story
  {controls}
  title="SliderWithInput Component"
  description="Slider with input component for value selection"
  let:controlValues
>
  <div class="p-4">
    <SliderWithInput
      min={controlValues.min}
      max={controlValues.max}
      step={controlValues.step}
      value={controlValues.value}
      disabled={controlValues.disabled}
    />
  </div>
</Story>