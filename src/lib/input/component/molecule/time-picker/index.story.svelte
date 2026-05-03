<script lang="ts">
  import Story from '$stylist/playground/component/molecule/story/index.svelte';
  import TimePicker from './index.svelte';
  import type { TokenControllerType } from '$stylist/interaction/type/record/controller-type';

  const controls = [
    {
      name: 'value',
      type: 'text' as TokenControllerType,
      defaultValue: '14:30',
      description: 'Selected time value'
    },
    {
      name: 'showSeconds',
      type: 'boolean' as TokenControllerType,
      defaultValue: false,
      description: 'Whether to show seconds selector'
    },
    {
      name: 'disabled',
      type: 'boolean' as TokenControllerType,
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


