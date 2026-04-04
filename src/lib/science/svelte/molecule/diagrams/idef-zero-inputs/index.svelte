<script lang="ts">
	type Idef0Port = { id: string; label?: string; color?: string };
	type Idef0InputsProps = {
		ports: Idef0Port[];
		boxX: number;
		boxY?: number;
		boxHeight: number;
		startX?: number;
	};
	import { createIdef0InputsState } from '$stylist/information/function/state/idef0';
	import Idef0Connector from '$stylist/information/svelte/atom/data-display/diagrams/idef-zero-connector/index.svelte';

	let props: Idef0InputsProps = $props();
	const state = createIdef0InputsState(props as any);

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
			color={(item.port as { color?: string }).color}
		/>
	{/each}
</g>



