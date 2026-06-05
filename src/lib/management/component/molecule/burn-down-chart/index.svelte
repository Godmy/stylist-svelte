<script lang="ts">
	import createBurnDownChartState from '$stylist/management/function/state/burn-down-chart/index.svelte';
	import type { SlotBurnDownData as BurnDownData } from '$stylist/management/interface/slot/burn-down-data';

	let {
		data,
		width = 600,
		height = 400,
		title = 'Burn Down Chart'
	}: {
		data: BurnDownData;
		width?: number;
		height?: number;
		title?: string;
	} = $props();

	const state = createBurnDownChartState({ data, width, height, title });
</script>

<div class={state.containerClass}>
	{#if state.title}<h3 class={state.titleClass}>{state.title}</h3>{/if}
	<svg width={state.width} height={state.height} class={state.svgClass}>
		{#each Array(5) as _, i}
			{@const y = state.margins.top + (i * state.innerHeight) / 5}
			<line
				x1={state.margins.left}
				y1={y}
				x2={state.width - state.margins.right}
				y2={y}
				class={state.gridLineClass}
			/>
		{/each}

		<line
			x1={state.margins.left}
			y1={state.height - state.margins.bottom}
			x2={state.width - state.margins.right}
			y2={state.height - state.margins.bottom}
			class={state.axisClass}
		/>
		<line
			x1={state.margins.left}
			y1={state.margins.top}
			x2={state.margins.left}
			y2={state.height - state.margins.bottom}
			class={state.axisClass}
		/>

		{#if state.data.points.length}
			<path d={state.idealPath} class={state.idealLineClass} />
			<path d={state.actualPath} class={state.actualLineClass} />
		{/if}

		{#if state.data.points.length}
			{#each state.data.points as point, i}
				{@const x = state.margins.left + (i * state.innerWidth) / (state.data.points.length - 1)}
				{@const actualY =
					state.margins.top +
					state.innerHeight -
					(point.actual / state.minMaxValues.maxActual) * state.innerHeight}
				<circle cx={x} cy={actualY} r="4" class={state.dataPointClass} />
			{/each}
		{/if}

		{#each state.xLabels as label}
			<text x={label.x} y={label.y} class={state.xAxisLabelClass}>
				{label.text}
			</text>
		{/each}

		{#each state.yLabels as label}
			<text x={label.x} y={label.y} class={state.yAxisLabelClass} dominant-baseline="middle">
				{label.text}
			</text>
		{/each}

		<g transform={`translate(${state.width - 150}, ${state.margins.top})`}>
			<line x1="0" y1="0" x2="20" y2="0" class={state.legendLineClass} />
			<text x="25" y="5" class={state.legendTextClass}>Ideal</text>
			<line x1="0" y1="20" x2="20" y2="20" class={state.legendLineClass} />
			<text x="25" y="25" class={state.legendTextClass}>Actual</text>
		</g>
	</svg>
</div>

<style>
	:global(.c-burn-down-chart .chart-title) {
		text-align: center;
	}
</style>
