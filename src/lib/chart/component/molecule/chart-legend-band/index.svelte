<script lang="ts">
	import createChartLegendBandState from './state.svelte';
	import type { RecipeChartLegendBand } from '$stylist/chart/interface/recipe/chart-legend-band';

	let props: RecipeChartLegendBand = $props();
	const state = createChartLegendBandState(props);
</script>

<g class={state.className} aria-label={`${state.labelText}: ${state.valueLabel}`}>
	<text
		class="chart-legend-band__value"
		x={props.x + props.width / 2}
		y={Math.max(12, props.y - 8)}
		text-anchor="middle"
	>
		{state.valueLabel}
	</text>
	{#each props.segments as segment (segment.id)}
		{#if segment.height > 0}
			<rect
				class="chart-legend-band__segment"
				x={segment.x}
				y={segment.y}
				width={segment.width}
				height={segment.height}
				fill={segment.color}
			>
				<title>{segment.text}: {segment.value}</title>
			</rect>
		{/if}
	{/each}
	<line
		class="chart-legend-band__ruler"
		x1={props.connectorX}
		y1={props.y}
		x2={props.connectorX}
		y2={props.y + props.height}
		stroke={props.color}
		stroke-width={props.connectorWidth}
	/>
	{#each props.segments as segment (segment.id)}
		{#if segment.height > 0}
			<line
				class="chart-legend-band__notch"
				x1={props.connectorX - Math.max(4, props.width * 0.34)}
				y1={segment.y}
				x2={props.connectorX + Math.max(4, props.width * 0.34)}
				y2={segment.y}
				stroke={props.color}
				stroke-width={props.connectorWidth}
			/>
			<line
				class="chart-legend-band__notch"
				x1={props.connectorX - Math.max(4, props.width * 0.34)}
				y1={segment.y + segment.height}
				x2={props.connectorX + Math.max(4, props.width * 0.34)}
				y2={segment.y + segment.height}
				stroke={props.color}
				stroke-width={props.connectorWidth}
			/>
		{/if}
	{/each}
	{#if props.connectorVisible ?? true}
		<path
			class="chart-legend-band__connector"
			d={`M ${props.connectorX} ${props.connectorY1} V ${props.connectorY2}`}
			stroke={props.color}
			stroke-width={props.connectorWidth}
		/>
	{/if}
	<rect
		class="chart-legend-band__label-box"
		x={props.labelX}
		y={props.labelY}
		width={props.labelWidth}
		height={props.labelHeight}
		rx="6"
		stroke={props.color}
		stroke-width={props.connectorWidth}
	/>
	<text class="chart-legend-band__label" x={props.textX} y={props.textY} text-anchor="middle">
		{state.labelText}
	</text>
</g>

<style>
	.chart-legend-band__value {
		fill: var(--color-text-secondary, #64748b);
		font-size: 0.68rem;
		font-weight: 800;
		font-variant-numeric: tabular-nums;
	}

	.chart-legend-band__segment {
		shape-rendering: crispEdges;
	}

	.chart-legend-band__connector,
	.chart-legend-band__ruler,
	.chart-legend-band__notch {
		fill: none;
		stroke-linecap: round;
	}

	.chart-legend-band__label-box {
		fill: var(--color-background-primary, #ffffff);
	}

	.chart-legend-band__label {
		fill: var(--color-text-primary, #0f172a);
		font-size: 0.68rem;
		font-weight: 750;
	}
</style>
