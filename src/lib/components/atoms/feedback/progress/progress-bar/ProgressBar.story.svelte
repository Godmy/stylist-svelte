<script lang="ts">
  import ProgressBar from './ProgressBar.svelte';

  let value = $state(50);
  let max = $state(100);
  let label = $state('');
  let showPercentage = $state(true);
  let size: 'sm' | 'md' | 'lg' = $state('md');
  let variant: 'primary' | 'success' | 'warning' | 'danger' = $state('primary');
  let className = $state('');
</script>

<div class="p-4">
  <h1 class="text-lg font-semibold mb-4">ProgressBar Component</h1>

  <div class="mb-6 p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">Interactive Progress Bar</h2>
    <div class="flex flex-col gap-4">
      <ProgressBar
        {value}
        {max}
        {label}
        {showPercentage}
        {size}
        {variant}
        class={className}
      />
    </div>

    <div class="mt-4 flex flex-wrap gap-2">
      <div>
        <label for="value-input" class="block text-sm mb-1">Value (0-100):</label>
        <input
          id="value-input"
          type="range"
          min="0"
          max="100"
          bind:value={value}
          class="border rounded p-1"
        />
        <span class="ml-2">{value}%</span>
      </div>

      <div>
        <label for="max-input" class="block text-sm mb-1">Max:</label>
        <input
          id="max-input"
          type="number"
          min="1"
          bind:value={max}
          class="border rounded p-1 w-20"
        />
      </div>

      <div>
        <label for="label-input" class="block text-sm mb-1">Label:</label>
        <input
          id="label-input"
          type="text"
          bind:value={label}
          class="border rounded p-1"
        />
      </div>

      <div class="flex items-end">
        <label for="showPercentage-checkbox" class="flex items-center gap-1">
          <input id="showPercentage-checkbox" type="checkbox" bind:checked={showPercentage} />
          Show %
        </label>
      </div>

      <div>
        <label for="size-select" class="block text-sm mb-1">Size:</label>
        <select id="size-select" bind:value={size} class="border rounded p-1">
          <option value="sm">Small</option>
          <option value="md">Medium</option>
          <option value="lg">Large</option>
        </select>
      </div>

      <div>
        <label for="variant-select" class="block text-sm mb-1">Variant:</label>
        <select id="variant-select" bind:value={variant} class="border rounded p-1">
          <option value="primary">Primary</option>
          <option value="success">Success</option>
          <option value="warning">Warning</option>
          <option value="danger">Danger</option>
        </select>
      </div>

      <div>
        <label for="className-input" class="block text-sm mb-1">CSS Classes:</label>
        <input
          id="className-input"
          type="text"
          bind:value={className}
          class="border rounded p-1"
        />
      </div>
    </div>
  </div>

  <div class="p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">Progress Bar Variants</h2>
    <div class="space-y-4">
      <div>
        <h3 class="text-sm font-medium mb-2">Primary</h3>
        <ProgressBar value={30} variant="primary" />
      </div>
      <div>
        <h3 class="text-sm font-medium mb-2">Success</h3>
        <ProgressBar value={60} variant="success" />
      </div>
      <div>
        <h3 class="text-sm font-medium mb-2">Warning</h3>
        <ProgressBar value={80} variant="warning" />
      </div>
      <div>
        <h3 class="text-sm font-medium mb-2">Danger</h3>
        <ProgressBar value={90} variant="danger" />
      </div>
    </div>
  </div>
</div>