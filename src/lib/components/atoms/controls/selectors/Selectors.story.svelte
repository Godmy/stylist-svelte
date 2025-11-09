<script lang="ts">
  import { ColorSwatch, InputAddon, Select } from '$lib';
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';

  let color = '#3b82f6';
  let size = 32;
  let disabled = false;
  let value = '';
  let placeholder = 'Placeholder';

  const controls: ControlConfig[] = [
    { name: 'color', type: 'color', defaultValue: '#3b82f6' },
    { name: 'size', type: 'number', defaultValue: 32, min: 16, max: 64, step: 8 },
    { name: 'disabled', type: 'boolean', defaultValue: false }
  ];

  function handleColorChange(e: CustomEvent<string>) {
    color = e.detail;
  }
</script>

# Selectors

## ColorSwatch

<Story title="ColorSwatch" {controls}>

  <div class="space-y-4 p-8">
    <div class="flex items-center space-x-4">
      <ColorSwatch 
        color={color} 
        size={size} 
        disabled={disabled}
        on:colorChange={handleColorChange}
      />
      <span>Current color: {color}</span>
    </div>
  </div>
</Story>

## InputAddon

<Story title="InputAddon">
  <div class="space-y-4 p-8">
    <InputAddon>
      <span slot="start">https://</span>
      <input type="text" placeholder={placeholder} bind:value={value} class="flex-1 p-2 border" />
      <span slot="end">.com</span>
    </InputAddon>
  </div>
</Story>

## Select

<Story title="Select">
  <div class="space-y-4 p-8">
    <Select bind:value={value} placeholder={placeholder} class="w-full max-w-xs">
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    </Select>
    <p>Selected value: {value}</p>
  </div>
</Story>