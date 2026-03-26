<script lang="ts">
  import { Story } from '$stylist/interaction/playground';
  import type { InterfaceControllerSettings } from '$stylist/interaction/interface/controller-settings';
  import RangeInput from './index.svelte';

  type Props = {
    min: number;
    max: number;
    step: number;
    disabled: boolean;
    showInputFields: boolean;
  };

  const controls: InterfaceControllerSettings[] = [
    {
      name: 'min',
      type: 'number',
      defaultValue: 0
    },
    {
      name: 'max',
      type: 'number',
      defaultValue: 500
    },
    {
      name: 'step',
      type: 'number',
      defaultValue: 1
    },
    {
      name: 'disabled',
      type: 'boolean',
      defaultValue: false
    },
    {
      name: 'showInputFields',
      type: 'boolean',
      defaultValue: true
    }
  ];

  let currentValues = $state({ min: 50, max: 350 });
  
  function handleInputChange(values: { min: number; max: number }) {
    currentValues = values;
    console.log('Range values changed:', values);
  }
</script>

<Story
  id="organisms-range-input"
  title="Organisms / Interaction / Input / Range Input"
  component={RangeInput}
  category="Organisms/Interaction/Input"
  description="A range input component with dual sliders."
  tags={['input', 'range', 'slider']}
  controls={controls}
>
  {#snippet children(values: any)}
    <div class="p-4 max-w-md">
      <div class="mb-4">
        <p>Current range: {currentValues.min} - {currentValues.max}</p>
      </div>
      <RangeInput 
        min={values.min}
        max={values.max}
        step={values.step}
        disabled={values.disabled}
        showInputFields={values.showInputFields}
        onInput={handleInputChange}
      />
    </div>
  {/snippet}
</Story>




