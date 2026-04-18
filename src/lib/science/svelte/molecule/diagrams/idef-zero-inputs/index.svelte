<script lang="ts">
	import type { Idef0InputsProps } from '$stylist/science/type/struct/idef-zero';
	import { createIdef0InputsState } from '$stylist/science/function/state/idef0-inputs';
	import Idef0Connector from '$stylist/science/svelte/atom/diagrams/idef-zero-connector/index.svelte';

	let props: Idef0InputsProps = $props();
	const state = createIdef0InputsState(props as any);

	const startX = $derived(props.startX ?? 32);
</script>

<g>
	{#each state.positions as item (item.port.id)}
		<Idef0Connector
			label={item.port.label ?? ''}
			direction="input"
			x1={startX}
			y1={item.y}
			x2={props.boxX}
			y2={item.y}
			color={(item.port as { color?: string }).color}
		/>
	{/each}
</g>


