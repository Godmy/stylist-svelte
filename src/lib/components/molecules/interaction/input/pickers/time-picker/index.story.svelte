<script lang="ts">
  import Story from '$stylist/design-system/playground/Story.svelte';
  import TimePicker from './index.svelte';
  import type { ControlType } from '$stylist/design-system/tokens/interaction/controls';

  const controls = [
    {
      name: 'value',
      type: 'text' as ControlType,
      defaultValue: '14:30',
      description: 'Selected time value'
    },
    {
      name: 'showSeconds',
      type: 'boolean' as ControlType,
      defaultValue: false,
      description: 'Whether to show seconds selector'
    },
    {
      name: 'disabled',
      type: 'boolean' as ControlType,
      defaultValue: false,
      description: 'Whether the time picker is disabled'
    }
  ];

  function handleTimeChange(time: string) {
    console.log('Time changed to:', time);
  }
</script>

<Story
  {controls}
  title="TimePicker Component"
  description="Time picker component with customizable options"
 
>
  {#snippet children(controlValues: any)}
  <div class="p-4">
    <TimePicker
      value={controlValues.value}
      showSeconds={controlValues.showSeconds}
      disabled={controlValues.disabled}
      onValueChange={handleTimeChange}
    />
  </div>

  {/snippet}
</Story>