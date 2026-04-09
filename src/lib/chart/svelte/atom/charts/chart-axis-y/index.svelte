<script lang="ts">
	import type { ChartAxisYProps } from '$stylist/chart/interface/recipe/chart-axis-y-props';
	import { createChartAxisYState } from '$stylist/chart/function/state/chart-function';

	let props: ChartAxisYProps = $props();
	const state = createChartAxisYState(props);

</script>

<g class={state.axisClasses}>
	<line x1={state.x} y1={state.startY} x2={state.x} y2={state.endY} stroke={props.color ?? 'currentColor'} stroke-width="1" />
	{#if state.showArrow}
		<path
			d={`M ${state.x} ${state.startY} L ${state.x - 4} ${state.startY + 8} M ${state.x} ${state.startY} L ${state.x + 4} ${state.startY + 8}`}
			stroke={props.color ?? 'currentColor'}
			stroke-width="1"
			fill="none"
		/>
	{/if}

	{#each state.ticks as tick, i}
		<line x1={state.x} y1={tick} x2={state.x - state.tickSize} y2={tick} stroke={props.color ?? 'currentColor'} stroke-width="1" />
		{#if props.showGrid}
			<line
				class={state.gridClasses}
				x1={state.x}
				y1={tick}
				x2={props.gridEndX ?? state.x}
				y2={tick}
				stroke={props.color ?? 'currentColor'}
				stroke-dasharray="4 4"
			/>
		{/if}
		{#if i === Math.floor(state.ticks.length / 2) && props.label}
			<text
				class={state.labelClasses}
				x={state.x - 28}
				y={(state.startY + state.endY) / 2}
				text-anchor="middle"
				transform={`rotate(-90 ${state.x - 28} ${(state.startY + state.endY) / 2})`}
			>
				{props.label}
			</text>
		{/if}
		{#if props.tickLabels && props.tickLabels[i] !== undefined}
			<text class={state.labelClasses} x={state.x - 10} y={tick + 4} text-anchor="end">
				{String(props.tickLabels[i])}
			</text>
		{/if}
	{/each}
</g>


