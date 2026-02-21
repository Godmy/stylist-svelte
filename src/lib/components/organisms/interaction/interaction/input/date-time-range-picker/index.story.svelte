<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
  import DateTimeRangePicker from './index.svelte';
  import type { DateTimeRangeValue } from '$stylist/design-system/props/interaction/interaction-input';

  type Props = {
    placeholder: string;
    disabled: boolean;
  };

  const controls: ControlConfig[] = [
    {
      name: 'placeholder',
      type: 'text',
      defaultValue: 'Select date and time range...'
    },
    {
      name: 'disabled',
      type: 'boolean',
      defaultValue: false
    }
  ];

  let selectedRange: DateTimeRangeValue = { start: null, end: null };
  
  function handleInputChange(value: DateTimeRangeValue) {
    selectedRange = value;
    console.log('Date time range changed:', value);
  }
</script>

<Story
  id="organisms-date-time-range-picker"
  title="Organisms / Interaction / Input / Date Time Range Picker"
  component={DateTimeRangePicker}
  category="Organisms/Interaction/Input"
  description="A date and time range picker component."
  tags={['input', 'datetime', 'picker', 'range']}
  controls={controls}
>
  {#snippet children(values: any)}
    <div class="p-4 max-w-lg">
      <div class="mb-4">
        <p>Selected range: {selectedRange.start ? selectedRange.start.toLocaleString() : 'None'} - {selectedRange.end ? selectedRange.end.toLocaleString() : 'None'}</p>
      </div>
      <DateTimeRangePicker 
        placeholder={values.placeholder}
        disabled={values.disabled}
        onInput={handleInputChange}
      />
    </div>
  {/snippet}
</Story>

