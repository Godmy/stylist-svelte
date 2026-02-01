<script lang="ts">
  import AspectRatio from './index.svelte';

  let ratio = 1;
</script>

<div class="p-4">
  <h1 class="text-lg font-semibold mb-4">AspectRatio</h1>

  <div class="flex items-center gap-4 mb-6">
    <label class="flex items-center gap-2">
      <span class="text-sm">Ratio</span>
      <input type="number" bind:value={ratio} step="0.25" class="border rounded p-1 w-24" />
    </label>
  </div>

  <AspectRatio {ratio}>
    {#snippet children()}
      <div class="bg-slate-200 w-full h-full" />
    {/snippet}
  </AspectRatio>
</div>
