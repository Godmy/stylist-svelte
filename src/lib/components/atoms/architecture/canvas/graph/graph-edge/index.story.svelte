<script lang="ts">
  import GraphEdge from './index.svelte';

  let fromNodeId = 'node-1';
  let toNodeId = 'node-2';
  let directed = true;
  let type: 'line' | 'curve' | 'polyline' = 'line';
</script>

<div class="p-4">
  <h1 class="text-lg font-semibold mb-4">GraphEdge</h1>

  <div class="flex flex-wrap gap-4 mb-6">
    <label class="flex items-center gap-2">
      <span class="text-sm">Directed</span>
      <input type="checkbox" bind:checked={directed} />
    </label>

    <label class="flex items-center gap-2">
      <span class="text-sm">Type</span>
      <select bind:value={type} class="border rounded p-1">
        <option value="line">Line</option>
        <option value="curve">Curve</option>
        <option value="polyline">Polyline</option>
      </select>
    </label>
  </div>

  <div class="p-4 border rounded">
    <GraphEdge {fromNodeId} {toNodeId} {directed} {type} />
  </div>
</div>
