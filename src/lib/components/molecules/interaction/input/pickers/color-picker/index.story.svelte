<script lang="ts">
  import Story from '$stylist/design-system/playground/Story.svelte';
  import ColorPicker from './index.svelte';
  import type { ControlType } from '$stylist/design-system/tokens/controls';

  const controls = [
    {
      name: 'value',
      type: 'text' as ControlType,
      defaultValue: '#3b82f6',
      description: 'Selected color value'
    },
    {
      name: 'label',
      type: 'text' as ControlType,
      defaultValue: 'Select a color',
      description: 'Label for the color picker'
    },
    {
      name: 'helperText',
      type: 'text' as ControlType,
      defaultValue: 'Choose your preferred color',
      description: 'Helper text for the color picker'
    }
  ];

  function handleValueChange(newValue: string) {
    console.log('Color changed:', newValue);
  }
</script>

<Story
  {controls}
  title="ColorPicker Component"
  description="Interactive color picker with customizable options"
 
>
  {#snippet children(controlValues: any)}
  <div class="p-4">
    <ColorPicker
      value={controlValues.value}
      label={controlValues.label}
      helperText={controlValues.helperText}
      onValueInput={(newValue) => console.log('Color input:', newValue)}
      onValueChange={handleValueChange}
    />
  </div>

  {/snippet}
</Story>