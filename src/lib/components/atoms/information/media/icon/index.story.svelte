<script lang="ts">
  import Icon from './index.svelte';

  let props = $props();

  let name: 'search' | 'plus' | 'minus' | 'check' | 'x' | 'chevron-down' | 'chevron-up' | 'box' | string = $derived(props.name ?? 'search');
  let size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = $derived(props.size ?? 'md');
  let strokeWidth: number = $derived(props.strokeWidth ?? 1.5);

  export const controls = [
    { name: 'name', type: 'select', options: ['search', 'plus', 'minus', 'check', 'x', 'chevron-down', 'chevron-up', 'box'], defaultValue: 'search', group: 'Content' },
    { name: 'size', type: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl'], defaultValue: 'md', group: 'Layout' },
    { name: 'strokeWidth', type: 'number', defaultValue: 1.5, group: 'Style', min: 0.5, max: 5, step: 0.1 }
  ];
</script>

<div class="p-4">
  <h1 class="text-lg font-semibold mb-4">Icon Component</h1>

  <div class="mb-6 p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">Interactive Icon</h2>
    <div class="flex flex-col gap-4">
      <div class="inline-block">
        <Icon
          name={name}
          size={size}
          strokeWidth={strokeWidth}
        />
      </div>
    </div>

    <div class="mt-4 flex flex-wrap gap-2">
      <div>
        <label for="icon-name" class="block text-sm mb-1">Name:</label>
        <select id="icon-name" bind:value={name} class="border rounded p-1">
          <option value="search">Search</option>
          <option value="plus">Plus</option>
          <option value="minus">Minus</option>
          <option value="check">Check</option>
          <option value="x">X (Close)</option>
          <option value="chevron-down">Chevron Down</option>
          <option value="chevron-up">Chevron Up</option>
          <option value="box">Box</option>
        </select>
      </div>

      <div>
        <label for="icon-size" class="block text-sm mb-1">Size:</label>
        <select id="icon-size" bind:value={size} class="border rounded p-1">
          <option value="xs">Extra Small</option>
          <option value="sm">Small</option>
          <option value="md">Medium</option>
          <option value="lg">Large</option>
          <option value="xl">Extra Large</option>
        </select>
      </div>

      <div>
        <label for="icon-strokeWidth" class="block text-sm mb-1">Stroke Width:</label>
        <input
          id="icon-strokeWidth"
          type="number"
          bind:value={strokeWidth}
          class="border rounded p-1 w-16"
          min="0.5"
          max="5"
          step="0.1"
        />
      </div>
    </div>
  </div>

  <div class="mb-6 p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">All Sizes</h2>
    <div class="flex items-center gap-4">
      <div class="flex flex-col items-center">
        <Icon name="search" size="xs" />
        <span class="text-xs mt-1">XS</span>
      </div>
      <div class="flex flex-col items-center">
        <Icon name="search" size="sm" />
        <span class="text-xs mt-1">SM</span>
      </div>
      <div class="flex flex-col items-center">
        <Icon name="search" size="md" />
        <span class="text-xs mt-1">MD</span>
      </div>
      <div class="flex flex-col items-center">
        <Icon name="search" size="lg" />
        <span class="text-xs mt-1">LG</span>
      </div>
      <div class="flex flex-col items-center">
        <Icon name="search" size="xl" />
        <span class="text-xs mt-1">XL</span>
      </div>
    </div>
  </div>

  <div class="p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">All Icons</h2>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div class="flex flex-col items-center">
        <Icon name="search" />
        <span class="text-xs mt-1">Search</span>
      </div>
      <div class="flex flex-col items-center">
        <Icon name="plus" />
        <span class="text-xs mt-1">Plus</span>
      </div>
      <div class="flex flex-col items-center">
        <Icon name="minus" />
        <span class="text-xs mt-1">Minus</span>
      </div>
      <div class="flex flex-col items-center">
        <Icon name="check" />
        <span class="text-xs mt-1">Check</span>
      </div>
      <div class="flex flex-col items-center">
        <Icon name="x" />
        <span class="text-xs mt-1">X</span>
      </div>
      <div class="flex flex-col items-center">
        <Icon name="chevron-down" />
        <span class="text-xs mt-1">Chevron Down</span>
      </div>
      <div class="flex flex-col items-center">
        <Icon name="chevron-up" />
        <span class="text-xs mt-1">Chevron Up</span>
      </div>
      <div class="flex flex-col items-center">
        <Icon name="box" />
        <span class="text-xs mt-1">Box</span>
      </div>
    </div>
  </div>
</div>