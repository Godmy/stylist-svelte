<script lang="ts">
	import type { Idef0OutputsProps } from '$stylist';
	import { createIdef0OutputsState } from '$stylist/information/state/idef0';
	import Idef0Connector from '$stylist/information/atom/data-display/diagrams/idef-zero-connector/index.svelte';

	let props: Idef0OutputsProps = $props();
	const state = createIdef0OutputsState(props);

	const endX = $derived(props.endX ?? props.boxX + props.boxWidth + 140);
	const startX = $derived(props.boxX + props.boxWidth);
</script>

<g>
	{#each state.positions as item (item.port.id)}
		<Idef0Connector
			label={item.port.label}
			direction="output"
			x1={startX}
			y1={item.y}
			x2={endX}
			y2={item.y}
			color={item.port.color}
		/>
	{/each}
</g>



