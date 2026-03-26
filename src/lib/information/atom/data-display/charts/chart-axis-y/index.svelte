<script lang="ts">
	import type { ChartAxisYProps } from '$stylist';
	import { createChartAxisYState } from '$stylist/information/state/chart-function';

	let props: ChartAxisYProps = $props();
	const state = createChartAxisYState(props);

	const x = $derived(props.x ?? 0);
	const startY = $derived(props.startY ?? 0);
	const endY = $derived(props.endY ?? 100);
	const tickCount = $derived(Math.max(0, props.tickCount ?? 5));
	const ticks = $derived.by(() => {
		if (props.ticks && props.ticks.length > 0) {
			return props.ticks;
		}
		if (tickCount === 0) {
			return [];
		}
		return Array.from({ length: tickCount + 1 }, (_, i) => endY - ((endY - startY) * i) / tickCount);
	});
	const tickSize = 6;
	const showArrow = $derived(props.showArrow ?? true);
</script>

<g class={state.axisClasses}>
	<line x1={x} y1={startY} x2={x} y2={endY} stroke={props.color ?? 'currentColor'} stroke-width="1" />
	{#if showArrow}
		<path
			d={`M ${x} ${startY} L ${x - 4} ${startY + 8} M ${x} ${startY} L ${x + 4} ${startY + 8}`}
			stroke={props.color ?? 'currentColor'}
			stroke-width="1"
			fill="none"
		/>
	{/if}

	{#each ticks as tick, i}
		<line x1={x} y1={tick} x2={x - tickSize} y2={tick} stroke={props.color ?? 'currentColor'} stroke-width="1" />
		{#if props.showGrid}
			<line
				class={state.gridClasses}
				x1={x}
				y1={tick}
				x2={props.gridEndX ?? x}
				y2={tick}
				stroke={props.color ?? 'currentColor'}
				stroke-dasharray="4 4"
			/>
		{/if}
		{#if i === Math.floor(ticks.length / 2) && props.label}
			<text
				class={state.labelClasses}
				x={x - 28}
				y={(startY + endY) / 2}
				text-anchor="middle"
				transform={`rotate(-90 ${x - 28} ${(startY + endY) / 2})`}
			>
				{props.label}
			</text>
		{/if}
		{#if props.tickLabels && props.tickLabels[i] !== undefined}
			<text class={state.labelClasses} x={x - 10} y={tick + 4} text-anchor="end">
				{String(props.tickLabels[i])}
			</text>
		{/if}
	{/each}
</g>


