<script lang="ts">
  import { Story } from '$stylist/interaction/playground';
  import type { InterfaceControllerSettings } from '$stylist/interaction/interface/controller-settings';
  import DateRangePicker from './index.svelte';
  import type { DateRangeValue } from '$stylist/interaction/type/attribute/interaction-input';

  type Props = {
    placeholder: string;
    disabled: boolean;
  };

  const controls: InterfaceControllerSettings[] = [
    {
      name: 'placeholder',
      type: 'text',
      defaultValue: 'Select date range...'
    },
    {
      name: 'disabled',
      type: 'boolean',
      defaultValue: false
    }
  ];

  let selectedRange: DateRangeValue = { start: null, end: null };
  
  function handleInputChange(value: DateRangeValue) {
    selectedRange = value;
    console.log('Date range changed:', value);
  }
</script>

<Story
  id="organisms-date-range-picker"
  title="Organisms / Interaction / Input / Date Range Picker"
  component={DateRangePicker}
  category="Organisms/Interaction/Input"
  description="A date range picker component."
  tags={['input', 'date', 'picker', 'range']}
  controls={controls}
>
  {#snippet children(values: any)}
    <div class="p-4 max-w-md">
      <div class="mb-4">
        <p>Selected range: {selectedRange.start ? selectedRange.start.toLocaleDateString() : 'None'} - {selectedRange.end ? selectedRange.end.toLocaleDateString() : 'None'}</p>
      </div>
      <DateRangePicker 
        placeholder={values.placeholder}
        disabled={values.disabled}
        onInput={handleInputChange}
      />
    </div>
  {/snippet}
</Story>




