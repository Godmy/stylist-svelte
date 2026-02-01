<script lang="ts">
  import Divider from './index.svelte';

  let orientation: 'horizontal' | 'vertical' = 'horizontal';
  let align: 'start' | 'center' | 'end' = 'center';
  let dashed = false;
  let label = 'Section';
</script>

<div class="p-4">
  <h1 class="text-lg font-semibold mb-4">Divider</h1>

  <div class="flex flex-wrap gap-4 mb-6 items-center">
    <label class="flex items-center gap-2">
      <span class="text-sm">Orientation</span>
      <select bind:value={orientation} class="border rounded p-1">
        <option value="horizontal">horizontal</option>
        <option value="vertical">vertical</option>
      </select>
    </label>

    <label class="flex items-center gap-2">
      <span class="text-sm">Align</span>
      <select bind:value={align} class="border rounded p-1">
        <option value="start">start</option>
        <option value="center">center</option>
        <option value="end">end</option>
      </select>
    </label>

    <label class="flex items-center gap-2">
      <span class="text-sm">Dashed</span>
      <input type="checkbox" bind:checked={dashed} />
    </label>

    <label class="flex items-center gap-2">
      <span class="text-sm">Label</span>
      <input type="text" bind:value={label} class="border rounded p-1 w-28" />
    </label>
  </div>

  {#if orientation === 'horizontal'}
    <Divider {orientation} {align} {dashed} {label} />
  {:else}
    <div class="h-32">
      <Divider {orientation} {align} {dashed} {label} />
    </div>
  {/if}
</div>
