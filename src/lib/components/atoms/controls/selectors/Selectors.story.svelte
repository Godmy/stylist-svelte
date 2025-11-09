<script lang="ts">
  import { ColorSwatch, InputAddon, Select } from '$lib';
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';

  type ColorSwatchSize = number;

  let color = '#3b82f6';
  let size: ColorSwatchSize = 32;
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

  // Define options for Select component
  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' }
  ];
</script>

# Selectors

## ColorSwatch

<Story id="colorswatch-story" title="ColorSwatch" component={ColorSwatch} {controls}>

  <div class="space-y-4 p-8">
    <div class="flex items-center space-x-4">
      <ColorSwatch 
        color={color} 
        size={size}
      />
      <span>Current color: {color}</span>
    </div>
  </div>
</Story>

## InputAddon

<Story id="inputaddon-story" title="InputAddon">
  <div class="space-y-4 p-8">
    <div class="flex items-center border rounded">
      <div class="flex items-center pr-3 border-r border-gray-300">
        <span class="text-gray-500">https://</span>
      </div>
      <input type="text" placeholder={placeholder} bind:value={value} class="flex-1 p-2 border border-transparent rounded" />
      <div class="flex items-center pl-3 border-l border-gray-300">
        <span class="text-gray-500">.com</span>
      </div>
    </div>
    
    <div class="mt-4 space-y-4">
      <div>
        <label>Placeholder: <input type="text" bind:value={placeholder} class="p-2 border rounded" /></label>
      </div>
    </div>
  </div>
</Story>

## Select

<Story id="select-story" title="Select" component={Select}>
  <div class="space-y-4 p-8">
    <Select 
      id="demo-select" 
      label="Demo Select" 
      bind:value={value} 
      placeholder={placeholder} 
      {options}
      class="w-full max-w-xs"
    />
    <p>Selected value: {value}</p>
  </div>
</Story>