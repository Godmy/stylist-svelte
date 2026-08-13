<script lang="ts">
	import ChartLegendBand from '$stylist/chart/component/molecule/chart-legend-band/index.svelte';
	import createLegendBandDiagramState from './state.svelte';
	import type { RecipeLegendBandDiagram } from '$stylist/chart/interface/recipe/legend-band-diagram';

	let props: RecipeLegendBandDiagram = $props();
	const state = createLegendBandDiagramState(props);
</script>

<section class={state.className} aria-label={props.ariaLabel ?? props.text ?? 'Legend band diagram'}>
	{#if props.text}
		<header class="legend-band-diagram__header">
			<h3>{props.text}</h3>
			{#if props.description}
				<p>{props.description}</p>
			{/if}
		</header>
	{/if}

	<div class="legend-band-diagram__viewport">
		<svg
			viewBox={`0 0 ${state.layout.width} ${state.layout.height}`}
			role="img"
			aria-label={props.ariaLabel ?? props.text ?? 'Band diagram'}
		>
			<rect
				class="legend-band-diagram__plot"
				x={state.layout.plotX}
				y="0"
				width={state.layout.plotRight - state.layout.plotX}
				height={state.layout.axisY}
				rx="8"
			/>
			{#each state.layout.ticks as tick (tick.id)}
				<line
					class="legend-band-diagram__grid"
					x1={state.layout.plotX}
					y1={tick.y}
					x2={state.layout.plotRight}
					y2={tick.y}
				/>
				<text class="legend-band-diagram__tick-label" x={state.layout.plotX - 10} y={tick.y + 4} text-anchor="end">
					{tick.value}
				</text>
			{/each}
			<line
				class="legend-band-diagram__axis legend-band-diagram__axis--y"
				x1={state.layout.plotX}
				y1="0"
				x2={state.layout.plotX}
				y2={state.layout.axisY}
			/>
			<line
				class="legend-band-diagram__axis"
				x1={state.layout.plotX}
				y1={state.layout.axisY}
				x2={state.layout.plotRight}
				y2={state.layout.axisY}
			/>
			{#each state.layout.items as item (item.id)}
				<path
					class="legend-band-diagram__connector"
					d={`M ${item.connectorX} ${item.y} V ${item.connectorY2}`}
					stroke={item.color}
					stroke-width={item.connectorWidth}
				/>
			{/each}
			{#each state.layout.items as item (item.id)}
				<ChartLegendBand {...item} connectorVisible={false} />
			{/each}
		</svg>
	</div>
</section>

<style>
	.legend-band-diagram {
		display: grid;
		gap: 0.85rem;
		min-width: 0;
	}

	.legend-band-diagram__header {
		display: flex;
		align-items: end;
		justify-content: space-between;
		gap: 1rem;
	}

	.legend-band-diagram__header h3,
	.legend-band-diagram__header p {
		margin: 0;
	}

	.legend-band-diagram__header h3 {
		font-size: 1rem;
		line-height: 1.2;
	}

	.legend-band-diagram__header p {
		color: var(--color-text-secondary, #64748b);
		font-size: 0.78rem;
	}

	.legend-band-diagram__viewport {
		min-width: 0;
		overflow-x: auto;
		padding-bottom: 0.15rem;
	}

	.legend-band-diagram__viewport svg {
		display: block;
		min-width: 54rem;
		width: 100%;
		height: auto;
		overflow: visible;
	}

	.legend-band-diagram__plot {
		fill: var(--color-background-secondary, #f8fafc);
	}

	.legend-band-diagram__grid {
		stroke: color-mix(in srgb, var(--color-border-primary, #cbd5e1) 52%, transparent);
		stroke-width: 1;
	}

	.legend-band-diagram__axis {
		stroke: color-mix(in srgb, var(--color-border-primary, #cbd5e1) 80%, #0f172a 20%);
		stroke-width: 1.2;
	}

	.legend-band-diagram__axis--y {
		stroke-width: 1.4;
	}

	.legend-band-diagram__connector {
		fill: none;
		stroke-linecap: round;
	}

	.legend-band-diagram__tick-label {
		fill: var(--color-text-secondary, #64748b);
		font-size: 0.68rem;
		font-weight: 750;
		font-variant-numeric: tabular-nums;
	}
</style>
