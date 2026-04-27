<script lang="ts">
	import type { ChartLegendProps } from '$stylist/navigation/interface/recipe/chart-legend';
	import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';
	import { createChartLegendState } from '$stylist/chart/function/state/chart-legend';

	let props: ChartLegendProps = $props();
	const state = createChartLegendState({ ...props, class: mergeClassNames(props.class) });
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








