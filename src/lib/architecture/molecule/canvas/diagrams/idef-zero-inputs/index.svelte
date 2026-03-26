<script lang="ts">
	import type { Idef0InputsProps } from '$stylist';
	import { createIdef0InputsState } from '$stylist/information/state/idef0';
	import Idef0Connector from '$stylist/information/atom/data-display/diagrams/idef-zero-connector/index.svelte';

	let props: Idef0InputsProps = $props();
	const state = createIdef0InputsState(props);

	const startX = $derived(props.startX ?? 32);
</script>

<g>
	{#each state.positions as item (item.port.id)}
		<Idef0Connector
			label={item.port.label}
			direction="input"
			x1={startX}
			y1={item.y}
			x2={props.boxX}
			y2={item.y}
			color={item.port.color}
		/>
	{/each}
</g>



