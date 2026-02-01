<script lang="ts">
  import ButtonPage from './index.svelte';

  let page = 1;
  let isActive = false;
  let disabled = false;
</script>

<div class="p-4">
  <h1 class="text-lg font-semibold mb-4">Page Button</h1>

  <div class="mb-6 p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">Interactive Page Button</h2>
    <div class="flex flex-col items-center gap-4">
      <ButtonPage page={page} isActive={isActive} disabled={disabled} />
      <p class="text-sm text-gray-500">Toggle active/disabled states to preview pagination styling.</p>
    </div>

    <div class="mt-4 flex flex-wrap gap-2">
      <div>
        <label for="page-number" class="block text-sm mb-1">Page number:</label>
        <input
          id="page-number"
          type="number"
          min="1"
          bind:value={page}
          class="border rounded p-1 w-20"
        />
      </div>

      <div class="flex items-end gap-4">
        <label for="page-active" class="flex items-center gap-1">
          <input id="page-active" type="checkbox" bind:checked={isActive} />
          Active
        </label>
        <label for="page-disabled" class="flex items-center gap-1">
          <input id="page-disabled" type="checkbox" bind:checked={disabled} />
          Disabled
        </label>
      </div>
    </div>
  </div>

  <div class="p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">Examples</h2>
    <div class="flex flex-wrap gap-4 items-center">
      <ButtonPage page={1} isActive={false} disabled={false} />
      <ButtonPage page={2} isActive={true} disabled={false} />
      <ButtonPage page={3} isActive={false} disabled={false} />
      <ButtonPage page={4} isActive={false} disabled={true} />
    </div>
  </div>
</div>
