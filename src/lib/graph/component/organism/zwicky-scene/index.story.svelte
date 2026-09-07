<script lang="ts">
	import { onMount } from 'svelte';
	import ZwickyScene from '$stylist/graph/component/organism/zwicky-scene/index.svelte';
	import type { GraphJsonInput } from '$stylist/graph/interface/slot/graph-json-input';
	import depsUrl from '$stylist/graph/data/json/step-2-dependencies.json?url';

	let fullData = $state<GraphJsonInput | null>(null);
	let loadError = $state<string | null>(null);
	let selectedPath = $state('');

	function handleSelect(_nodeId: string, path: string) {
		selectedPath = path;
	}

	onMount(async () => {
		try {
			const response = await fetch(depsUrl);

			if (!response.ok) {
				throw new Error(`Failed to load graph data: ${response.status} ${response.statusText}`);
			}

			fullData = (await response.json()) as GraphJsonInput;
		} catch (error) {
			loadError = error instanceof Error ? error.message : String(error);
		}
	});
</script>

<div style="width:100%;height:100vh;background:#050810">
	{#if fullData}
		<ZwickyScene
			title="Morphological Box - Zwicky"
			data={fullData}
			onNodeSelect={handleSelect}
			style="height:100%"
		/>
	{:else if loadError}
		<p style="margin:0;padding:1rem;color:#fecaca">{loadError}</p>
	{:else}
		<p style="margin:0;padding:1rem;color:#cbd5e1">Loading graph data...</p>
	{/if}
</div>
