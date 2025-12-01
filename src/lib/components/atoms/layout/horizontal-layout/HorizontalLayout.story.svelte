<script lang="ts">
  import HorizontalLayout from './HorizontalLayout.svelte';

  let gap: 'none' | 'sm' | 'md' | 'lg' | 'xl' = 'md';
  let alignItems: 'start' | 'center' | 'end' | 'stretch' = 'center';
  let justifyContent: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly' = 'start';
  let wrap: boolean = true;
</script>

<div class="p-4">
  <h1 class="text-lg font-semibold mb-4">HorizontalLayout Component</h1>

  <div class="mb-6 p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">Interactive HorizontalLayout</h2>
    <div class="border rounded p-4 bg-gray-50 min-h-40">
      <HorizontalLayout 
        {gap}
        {alignItems}
        {justifyContent}
        {wrap}
      >
        <div class="bg-blue-500 text-white p-4 rounded flex items-center justify-center" style="min-width: 100px; min-height: 60px;">
          Item 1
        </div>
        <div class="bg-green-500 text-white p-4 rounded flex items-center justify-center" style="min-width: 120px; min-height: 60px;">
          Item 2
        </div>
        <div class="bg-purple-500 text-white p-4 rounded flex items-center justify-center" style="min-width: 80px; min-height: 60px;">
          Item 3
        </div>
        <div class="bg-yellow-500 text-white p-4 rounded flex items-center justify-center" style="min-width: 140px; min-height: 60px;">
          Item 4
        </div>
        <div class="bg-red-500 text-white p-4 rounded flex items-center justify-center" style="min-width: 100px; min-height: 60px;">
          Item 5
        </div>
      </HorizontalLayout>
    </div>

    <div class="mt-4 flex flex-wrap gap-2">
      <div>
        <label for="layout-gap" class="block text-sm mb-1">Gap:</label>
        <select
          id="layout-gap"
          bind:value={gap}
          class="border rounded p-1"
        >
          <option value="none">None</option>
          <option value="sm">Small</option>
          <option value="md">Medium</option>
          <option value="lg">Large</option>
          <option value="xl">Extra Large</option>
        </select>
      </div>

      <div>
        <label for="layout-align" class="block text-sm mb-1">Align Items:</label>
        <select
          id="layout-align"
          bind:value={alignItems}
          class="border rounded p-1"
        >
          <option value="start">Start</option>
          <option value="center">Center</option>
          <option value="end">End</option>
          <option value="stretch">Stretch</option>
        </select>
      </div>

      <div>
        <label for="layout-justify" class="block text-sm mb-1">Justify Content:</label>
        <select
          id="layout-justify"
          bind:value={justifyContent}
          class="border rounded p-1"
        >
          <option value="start">Start</option>
          <option value="center">Center</option>
          <option value="end">End</option>
          <option value="between">Space Between</option>
          <option value="around">Space Around</option>
          <option value="evenly">Space Evenly</option>
        </select>
      </div>

      <div class="flex items-end">
        <label for="layout-wrap" class="flex items-center gap-1">
          <input id="layout-wrap" type="checkbox" bind:checked={wrap} />
          Wrap
        </label>
      </div>
    </div>
  </div>

  <div class="p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">HorizontalLayout Variations</h2>
    <div class="space-y-4">
      <div>
        <h3 class="text-sm font-medium mb-2">Space Between (No Wrap)</h3>
        <div class="border rounded p-4 bg-gray-50 min-h-32">
          <HorizontalLayout 
            justifyContent="between"
            wrap={false}
          >
            <div class="bg-blue-500 text-white p-4 rounded flex items-center justify-center" style="min-width: 100px;">
              Item 1
            </div>
            <div class="bg-green-500 text-white p-4 rounded flex items-center justify-center" style="min-width: 100px;">
              Item 2
            </div>
            <div class="bg-purple-500 text-white p-4 rounded flex items-center justify-center" style="min-width: 100px;">
              Item 3
            </div>
          </HorizontalLayout>
        </div>
      </div>
      <div>
        <h3 class="text-sm font-medium mb-2">Center Alignment with Stretch</h3>
        <div class="border rounded p-4 bg-gray-50 min-h-40">
          <HorizontalLayout 
            alignItems="stretch"
            justifyContent="center"
            gap="lg"
          >
            <div class="bg-blue-500 text-white p-4 rounded flex items-center justify-center">
              Item 1
            </div>
            <div class="bg-green-500 text-white p-4 rounded flex items-center justify-center">
              Item 2
            </div>
            <div class="bg-purple-500 text-white p-4 rounded flex items-center justify-center">
              Item 3
            </div>
          </HorizontalLayout>
        </div>
      </div>
    </div>
  </div>
</div>