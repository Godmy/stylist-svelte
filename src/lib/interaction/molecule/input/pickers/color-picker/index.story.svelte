<script lang="ts">
  import Story from '$stylist/interaction/playground/Story.svelte';
  import ColorPicker from './index.svelte';
  import type { TokenControllerType } from '$stylist/interaction/type/token/controller-type';

  const controls = [
    {
      name: 'value',
      type: 'text' as TokenControllerType,
      defaultValue: '#3b82f6',
      description: 'Selected color value'
    },
    {
      name: 'label',
      type: 'text' as TokenControllerType,
      defaultValue: 'Select a color',
      description: 'Label for the color picker'
    },
    {
      name: 'helperText',
      type: 'text' as TokenControllerType,
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


