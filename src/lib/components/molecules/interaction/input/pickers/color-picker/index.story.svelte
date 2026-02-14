<script lang="ts">
  import ColorPicker from './index.svelte';

  let value: string = '#3b82f6';
  let label: string = 'Select a color';
  let helperText: string = 'Choose your preferred color';
  let error: string = '';
</script>

<div class="p-4">
  <h1 class="text-lg font-semibold mb-4">ColorPicker Component</h1>

  <div class="mb-6 p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">Interactive ColorPicker</h2>
    <ColorPicker 
      {value}
      {label}
      {helperText}
      {error}
      onInput={(newValue) => value = newValue}
      onChange={(newValue) => console.log('Color changed:', newValue)}
    />

    <div class="mt-4 flex flex-wrap gap-2">
      <div>
        <label for="colorpicker-value" class="block text-sm mb-1">Current Value:</label>
        <input
          id="colorpicker-value"
          type="text"
          bind:value={value}
          class="border rounded p-1 w-32"
        />
      </div>

      <div>
        <label for="colorpicker-label" class="block text-sm mb-1">Label:</label>
        <input
          id="colorpicker-label"
          type="text"
          bind:value={label}
          class="border rounded p-1 w-32"
        />
      </div>

      <div>
        <label for="colorpicker-helper" class="block text-sm mb-1">Helper Text:</label>
        <input
          id="colorpicker-helper"
          type="text"
          bind:value={helperText}
          class="border rounded p-1 w-40"
        />
      </div>
    </div>
  </div>

  <div class="p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">ColorPicker Variations</h2>
    <div class="space-y-4">
      <div>
        <h3 class="text-sm font-medium mb-2">With Error State</h3>
        <ColorPicker 
          value="#ef4444"
          label="Invalid Color"
          error="This color is not allowed in the design system"
        />
      </div>
      <div>
        <h3 class="text-sm font-medium mb-2">Without Helper Text</h3>
        <ColorPicker 
          value="#10b981"
          label="Simple Color Picker"
        />
      </div>
    </div>
  </div>
</div>