<script lang="ts">
  import Spacer from './index.svelte';

  let size: string | number = 16;
  let axis: 'vertical' | 'horizontal' = 'vertical';
</script>

<div class="p-4">
  <h1 class="text-lg font-semibold mb-4">Spacer</h1>

  <div class="flex flex-wrap gap-4 mb-6 items-center">
    <label class="flex items-center gap-2">
      <span class="text-sm">Size</span>
      <input type="number" bind:value={size} class="border rounded p-1 w-20" />
    </label>

    <label class="flex items-center gap-2">
      <span class="text-sm">Axis</span>
      <select bind:value={axis} class="border rounded p-1">
        <option value="vertical">vertical</option>
        <option value="horizontal">horizontal</option>
      </select>
    </label>
  </div>

  {#if axis === 'vertical'}
    <div class="bg-slate-100 inline-block">
      <Spacer {size} {axis} />
    </div>
  {:else}
    <div class="flex items-center bg-slate-100 p-2">
      <span>Left</span>
      <Spacer {size} {axis} />
      <span>Right</span>
    </div>
  {/if}
</div>
