<script lang="ts">
  import HorizontalLayout from './index.svelte';

  let gap: 'none' | 'sm' | 'md' | 'lg' | 'xl' = 'md';
  let alignItems: 'start' | 'center' | 'end' | 'stretch' = 'center';
  let justifyContent: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly' = 'start';
  let wrap = true;
</script>

<div class="p-4">
  <h1 class="text-lg font-semibold mb-4">HorizontalLayout</h1>

  <div class="flex flex-wrap gap-4 mb-6">
    <label class="flex items-center gap-2">
      <span class="text-sm">Gap</span>
      <select bind:value={gap} class="border rounded p-1">
        <option value="none">none</option>
        <option value="sm">sm</option>
        <option value="md">md</option>
        <option value="lg">lg</option>
        <option value="xl">xl</option>
      </select>
    </label>

    <label class="flex items-center gap-2">
      <span class="text-sm">Align</span>
      <select bind:value={alignItems} class="border rounded p-1">
        <option value="start">start</option>
        <option value="center">center</option>
        <option value="end">end</option>
        <option value="stretch">stretch</option>
      </select>
    </label>

    <label class="flex items-center gap-2">
      <span class="text-sm">Justify</span>
      <select bind:value={justifyContent} class="border rounded p-1">
        <option value="start">start</option>
        <option value="center">center</option>
        <option value="end">end</option>
        <option value="between">between</option>
        <option value="around">around</option>
        <option value="evenly">evenly</option>
      </select>
    </label>

    <label class="flex items-center gap-2">
      <span class="text-sm">Wrap</span>
      <input type="checkbox" bind:checked={wrap} />
    </label>
  </div>

  <HorizontalLayout {gap} {alignItems} {justifyContent} {wrap}>
    {#snippet children()}
      <div class="bg-slate-100 p-2 rounded">Item 1</div>
      <div class="bg-slate-100 p-2 rounded">Item 2</div>
      <div class="bg-slate-100 p-2 rounded">Item 3</div>
    {/snippet}
  </HorizontalLayout>
</div>
