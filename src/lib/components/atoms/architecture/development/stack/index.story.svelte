<script lang="ts">
  import Stack from './index.svelte';

  let direction: 'vertical' | 'horizontal' = 'vertical';
  let spacing: string | number = '1rem';
  let align: 'start' | 'center' | 'end' | 'stretch' | 'baseline' = 'stretch';
  let justify: 'start' | 'center' | 'end' | 'between' | 'around' = 'start';
</script>

<div class="p-4">
  <h1 class="text-lg font-semibold mb-4">Stack</h1>

  <div class="flex flex-wrap gap-4 mb-6">
    <label class="flex items-center gap-2">
      <span class="text-sm">Direction</span>
      <select bind:value={direction} class="border rounded p-1">
        <option value="vertical">vertical</option>
        <option value="horizontal">horizontal</option>
      </select>
    </label>

    <label class="flex items-center gap-2">
      <span class="text-sm">Spacing</span>
      <input type="text" bind:value={spacing} class="border rounded p-1 w-24" />
    </label>

    <label class="flex items-center gap-2">
      <span class="text-sm">Align</span>
      <select bind:value={align} class="border rounded p-1">
        <option value="start">start</option>
        <option value="center">center</option>
        <option value="end">end</option>
        <option value="stretch">stretch</option>
        <option value="baseline">baseline</option>
      </select>
    </label>

    <label class="flex items-center gap-2">
      <span class="text-sm">Justify</span>
      <select bind:value={justify} class="border rounded p-1">
        <option value="start">start</option>
        <option value="center">center</option>
        <option value="end">end</option>
        <option value="between">between</option>
        <option value="around">around</option>
      </select>
    </label>
  </div>

  <Stack {direction} {spacing} {align} {justify}>
    {#snippet children()}
      <div class="bg-slate-100 p-2 rounded">Item A</div>
      <div class="bg-slate-100 p-2 rounded">Item B</div>
      <div class="bg-slate-100 p-2 rounded">Item C</div>
    {/snippet}
  </Stack>
</div>
