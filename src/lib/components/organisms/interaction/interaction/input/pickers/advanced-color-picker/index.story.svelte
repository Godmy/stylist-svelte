<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';
  import AdvancedColorPicker from './index.svelte';

  type Props = {
    value: string;
    disabled: boolean;
    showInput: boolean;
    showPalette: boolean;
  };

  const controls: ControlConfig[] = [
    {
      name: 'value',
      type: 'text',
      defaultValue: '#22b14c'
    },
    {
      name: 'disabled',
      type: 'boolean',
      defaultValue: false
    },
    {
      name: 'showInput',
      type: 'boolean',
      defaultValue: true
    },
    {
      name: 'showPalette',
      type: 'boolean',
      defaultValue: true
    }
  ];

  let selectedColor: string = '#22b14c';
  
  function handleInputChange(value: string) {
    selectedColor = value;
    console.log('Color changed:', value);
  }
</script>

<Story
  id="organisms-advanced-color-picker"
  title="Organisms / Interaction / Input / Advanced Color Picker"
  component={AdvancedColorPicker}
  category="Organisms/Interaction/Input"
  description="An advanced color picker component."
  tags={['input', 'color', 'picker']}
  controls={controls}
>
  {#snippet children(values: any)}
    <div class="p-4">
      <div class="mb-4 flex items-center gap-4">
        <div class="flex items-center gap-2">
          <div 
            class="w-8 h-8 rounded border" 
            style="background-color: {selectedColor};"
          ></div>
          <span>Selected color: {selectedColor}</span>
        </div>
      </div>
      <AdvancedColorPicker 
        value={values.value}
        disabled={values.disabled}
        showInput={values.showInput}
        showPalette={values.showPalette}
        onInput={handleInputChange}
      />
    </div>
  {/snippet}
</Story>

