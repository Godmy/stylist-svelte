<script lang="ts">
  import GridLayout from './index.svelte';

  const items = [
    { id: 'a', content: 'Item A' },
    { id: 'b', content: 'Item B' },
    { id: 'c', content: 'Item C', colSpan: 2 },
    { id: 'd', content: 'Item D' }
  ];
</script>

<div class="p-4">
  <h1 class="text-lg font-semibold mb-4">GridLayout</h1>
  <GridLayout {items} />
</div>
