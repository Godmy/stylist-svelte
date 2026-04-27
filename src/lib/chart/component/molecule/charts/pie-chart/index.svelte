<script lang="ts">
	import type { PieChartRecipe } from '$stylist/chart/interface/recipe/pie-chart';
	import { createPieChartState } from '$stylist/chart/function/state/pie-chart';

	let props: PieChartRecipe = $props();
	const state = createPieChartState(props);
</script>

<div class={state.containerClasses}>
	<svg width={state.width} height={state.height} viewBox={`0 0 ${state.width} ${state.height}`}>
		{#each state.segments as segment, i}
			<path
				d={`
          M ${state.width / 2} ${state.height / 2}
          L ${state.width / 2 + (state.width / 3) * Math.cos((segment.startAngle - 90) * Math.PI / 180)}
            ${state.height / 2 + (state.height / 3) * Math.sin((segment.startAngle - 90) * Math.PI / 180)}
          A ${state.width / 3} ${state.height / 3} 0 ${segment.endAngle - segment.startAngle > 180 ? 1 : 0} 1
            ${state.width / 2 + (state.width / 3) * Math.cos((segment.endAngle - 90) * Math.PI / 180)}
            ${state.height / 2 + (state.height / 3) * Math.sin((segment.endAngle - 90) * Math.PI / 180)}
          Z
        `}
				fill={segment.color}
			/>
		{/each}
	</svg>
	<div class={state.legendClasses}>
		{#each state.segments as segment, i}
			<div class={state.legendItemClasses}>
				<div class={state.legendSwatchClasses} style={`background-color: ${segment.color}`}></div>
				<span class={state.legendTextClasses}>{segment.label}: {segment.value}</span>
			</div>
		{/each}
	</div>
</div>








