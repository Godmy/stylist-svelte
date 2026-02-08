<script lang="ts">
	import GraphEdge from './index.svelte';

	let fromNodeId = 'node-1';
	let toNodeId = 'node-2';
	let directed = true;
	let type: 'line' | 'curve' | 'polyline' = 'line';
</script>

<div class="p-4">
	<h1 class="mb-4 text-lg font-semibold">GraphEdge</h1>

	<div class="mb-6 flex flex-wrap gap-4">
		<label class="flex items-center gap-2">
			<span class="text-sm">Directed</span>
			<input type="checkbox" bind:checked={directed} />
		</label>

		<label class="flex items-center gap-2">
			<span class="text-sm">Type</span>
			<select bind:value={type} class="rounded border p-1">
				<option value="line">Line</option>
				<option value="curve">Curve</option>
				<option value="polyline">Polyline</option>
			</select>
		</label>
	</div>

	<div class="rounded border p-4">
		<GraphEdge {fromNodeId} {toNodeId} {directed} {type} />
	</div>
</div>
