<script lang="ts">
  import Story from '$stylist/design-system/playground/Story.svelte';
  import FormDatePicker from './index.svelte';
  import type { ControlType } from '$stylist/design-system/tokens/controls';

  const controls = [
    {
      name: 'value',
      type: 'text' as ControlType,
      defaultValue: '',
      description: 'Selected date value'
    },
    {
      name: 'label',
      type: 'text' as ControlType,
      defaultValue: 'Select Date',
      description: 'Label for the date picker'
    },
    {
      name: 'helperText',
      type: 'text' as ControlType,
      defaultValue: 'Choose a date for your appointment',
      description: 'Helper text for the date picker'
    },
    {
      name: 'minDate',
      type: 'text' as ControlType,
      defaultValue: '2024-01-01',
      description: 'Minimum selectable date'
    },
    {
      name: 'maxDate',
      type: 'text' as ControlType,
      defaultValue: '2025-12-31',
      description: 'Maximum selectable date'
    },
    {
      name: 'placeholder',
      type: 'text' as ControlType,
      defaultValue: 'Select date',
      description: 'Placeholder text'
    }
  ];

  function handleChange(newValue: string) {
    console.log('Date changed:', newValue);
  }
</script>

<Story
  {controls}
  title="FormDatePicker Component"
  description="Interactive form date picker with customizable options"
  let:controlValues
>
  <div class="p-4">
    <div class="max-w-xs">
      <FormDatePicker
        value={controlValues.value}
        label={controlValues.label}
        helperText={controlValues.helperText}
        minDate={controlValues.minDate}
        maxDate={controlValues.maxDate}
        placeholder={controlValues.placeholder}
        onValueInput={(newValue) => console.log('Date input:', newValue)}
        onValueChange={handleChange}
      />
    </div>
  </div>
</Story>