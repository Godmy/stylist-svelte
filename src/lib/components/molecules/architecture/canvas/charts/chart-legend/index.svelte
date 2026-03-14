<script lang="ts">
	import type { ChartLegendProps } from '$stylist/design-system';
	import { createChartLegendState } from '$stylist/design-system/models/information/chart-function.svelte';

	let props: ChartLegendProps = $props();
	const state = createChartLegendState(props);
</script>

<div class={state.classes}>
	{#each props.items as item (item.id)}
		<div class={state.itemClasses}>
			<span
				class={state.dotClasses}
				style={`background-color: ${item.color ?? 'var(--color-primary-500)'}`}
			></span>
			<span>{item.name}</span>
		</div>
	{/each}
</div>


