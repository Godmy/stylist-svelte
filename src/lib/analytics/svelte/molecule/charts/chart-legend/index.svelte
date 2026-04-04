<script lang="ts">
	import type { ChartLegendRecipe } from '$stylist/analytics/interface/recipe/chart-legend';
	import { cn } from '$stylist/layout/function/script/merge-class-names';
	import { createChartLegendState } from '$stylist/analytics/function/state/chart-function';

	let props: ChartLegendRecipe = $props();
	const state = createChartLegendState({ ...props, class: cn(props.class) });
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








