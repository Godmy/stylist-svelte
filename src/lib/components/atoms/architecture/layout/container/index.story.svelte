<script lang="ts">
  import Container from './index.svelte';

  let maxWidth: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full' = 'full';
</script>

<div class="p-4">
  <h1 class="text-lg font-semibold mb-4">Container</h1>

  <div class="flex items-center gap-4 mb-6">
    <label class="flex items-center gap-2">
      <span class="text-sm">Max width</span>
      <select bind:value={maxWidth} class="border rounded p-1">
        <option value="sm">sm</option>
        <option value="md">md</option>
        <option value="lg">lg</option>
        <option value="xl">xl</option>
        <option value="2xl">2xl</option>
        <option value="full">full</option>
      </select>
    </label>
  </div>

  <Container {maxWidth}>
    {#snippet children()}
      <div class="bg-slate-100 p-4 rounded">Container content</div>
    {/snippet}
  </Container>
</div>
