<script lang="ts">
  import Story from '$stylist/design-system/playground/Story.svelte';
  import ToggleButtonGroup from './index.svelte';
  import type { ControlType } from '$stylist/design-system/tokens/interaction/controls';

  const defaultOptions = [
    { label: 'Small', value: 'small' },
    { label: 'Medium', value: 'medium' },
    { label: 'Large', value: 'large' }
  ];

  const controls = [
    {
      name: 'value',
      type: 'text' as ControlType,
      defaultValue: 'medium',
      description: 'Selected value'
    },
    {
      name: 'size',
      type: 'select' as ControlType,
      defaultValue: 'md',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the toggle buttons'
    },
    {
      name: 'disabled',
      type: 'boolean' as ControlType,
      defaultValue: false,
      description: 'Whether the component is disabled'
    }
  ];

  function handleValueChange(value: string | string[]) {
    console.log('Value changed to:', value);
  }
</script>

<Story
  {controls}
  title="ToggleButtonGroup Component"
  description="Group of toggle buttons for selection"
 
>
  {#snippet children(controlValues: any)}
  <div class="p-4">
    <ToggleButtonGroup
      options={defaultOptions}
      value={controlValues.value}
      size={controlValues.size}
      disabled={controlValues.disabled}
      onValueChange={handleValueChange}
    />
  </div>

  {/snippet}
</Story>

