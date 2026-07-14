<script lang="ts">
	import type { RecipeIdef0Io } from '$stylist/idef-zero/interface/recipe/idef0-io';
	import createIdef0OutputsState from '$stylist/idef-zero/function/state/idef0-outputs/index.svelte';
	import Idef0Connector from '$stylist/idef-zero/component/atom/idef0-connector/index.svelte';

	let props: RecipeIdef0Io = $props();
	const state = createIdef0OutputsState(props);
</script>

<g>
	{#each state.positions as item (item.port.id)}
		<Idef0Connector
			label={item.port.label ?? ''}
			direction="output"
			x1={state.startX}
			y1={item.y}
			x2={state.endX}
			y2={item.y}
			color={(item.port as { color?: string }).color}
		/>
	{/each}
</g>

<style>
</style>
