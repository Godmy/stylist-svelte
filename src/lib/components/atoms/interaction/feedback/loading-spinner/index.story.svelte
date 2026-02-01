<script lang="ts">
  import LoadingSpinner from './loading-spinner/index.svelte';

  let size: 'sm' | 'md' | 'lg' = 'md';
  let color: 'blue' | 'gray' | 'green' | 'red' | 'yellow' | string = 'blue';
  let label: string = 'Loading...';
  let showLabel: boolean = true;
</script>

<div class="p-4">
  <h1 class="text-lg font-semibold mb-4">LoadingSpinner Component</h1>

  <div class="mb-6 p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">Interactive LoadingSpinner</h2>
    <div class="flex justify-center items-center min-h-32">
      <LoadingSpinner 
        {size}
        {color}
        {label}
        {showLabel}
      />
    </div>

    <div class="mt-4 flex flex-wrap gap-2">
      <div>
        <label for="spinner-size" class="block text-sm mb-1">Size:</label>
        <select
          id="spinner-size"
          bind:value={size}
          class="border rounded p-1"
        >
          <option value="sm">Small</option>
          <option value="md">Medium</option>
          <option value="lg">Large</option>
        </select>
      </div>

      <div>
        <label for="spinner-color" class="block text-sm mb-1">Color:</label>
        <select
          id="spinner-color"
          bind:value={color}
          class="border rounded p-1"
        >
          <option value="blue">Blue</option>
          <option value="gray">Gray</option>
          <option value="green">Green</option>
          <option value="red">Red</option>
          <option value="yellow">Yellow</option>
        </select>
      </div>

      <div>
        <label for="spinner-label" class="block text-sm mb-1">Label:</label>
        <input
          id="spinner-label"
          type="text"
          bind:value={label}
          class="border rounded p-1 w-32"
        />
      </div>

      <div class="flex items-end">
        <label for="show-label" class="flex items-center gap-1">
          <input id="show-label" type="checkbox" bind:checked={showLabel} />
          Show Label
        </label>
      </div>
    </div>
  </div>

  <div class="p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">LoadingSpinner Variations</h2>
    <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
      <div class="flex flex-col items-center">
        <h3 class="text-sm font-medium mb-2">Small</h3>
        <LoadingSpinner size="sm" color="blue" label="Small Spinner" />
      </div>
      <div class="flex flex-col items-center">
        <h3 class="text-sm font-medium mb-2">Medium</h3>
        <LoadingSpinner size="md" color="green" label="Medium Spinner" />
      </div>
      <div class="flex flex-col items-center">
        <h3 class="text-sm font-medium mb-2">Large</h3>
        <LoadingSpinner size="lg" color="red" label="Large Spinner" />
      </div>
      <div class="flex flex-col items-center">
        <h3 class="text-sm font-medium mb-2">No Label</h3>
        <LoadingSpinner size="md" color="blue" showLabel={false} />
      </div>
      <div class="flex flex-col items-center">
        <h3 class="text-sm font-medium mb-2">Gray</h3>
        <LoadingSpinner size="md" color="gray" label="Gray Spinner" />
      </div>
      <div class="flex flex-col items-center">
        <h3 class="text-sm font-medium mb-2">Yellow</h3>
        <LoadingSpinner size="md" color="yellow" label="Yellow Spinner" />
      </div>
    </div>
  </div>
</div>
