<script lang="ts">
	import ZwickyScene from '$stylist/graph/component/organism/zwicky-scene/index.svelte';
	import type { GraphJsonInput } from '$stylist/graph/type/struct/graph-json-input';
	import rawDeps from '$stylist/graph/data/json/step-2-dependencies.json';

	const fullData = rawDeps as GraphJsonInput;

	let selectedPath = $state('');

	function handleSelect(_nodeId: string, path: string) {
		selectedPath = path;
	}
</script>

<div style="width:100%;height:100vh;background:#050810">
	<ZwickyScene
		title="Morphological Box · Zwicky"
		data={fullData}
		onNodeSelect={handleSelect}
		style="height:100%"
	/>
</div>
