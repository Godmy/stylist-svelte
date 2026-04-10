<script lang="ts">
	import type { PriceHistoryProps } from '$stylist/commerce/function/state/price-history';
	import { createPriceHistoryState } from '$stylist/commerce/function/state/price-history';
	import { PriceHistoryStyleManager } from '$stylist/commerce/class/style-manager/price-history';

	let props: PriceHistoryProps = $props();
	const state = createPriceHistoryState(props);
</script>

<div class={state.containerClass}>
	<h3 class={state.titleClass}>{props.title ?? 'Price History'}</h3>
	<div class={state.chartContainerClass}>
		{#if state.data.length > 0}
			<svg width={state.chartWidth} height={state.chartHeight} class={PriceHistoryStyleManager.getSVGClass()}>
				<!-- Grid lines -->
				{#each [0, 0.25, 0.5, 0.75, 1] as tick}
					<line
						x1="0"
						y1={tick * state.chartHeight}
						x2={state.chartWidth}
						y2={tick * state.chartHeight}
						class={PriceHistoryStyleManager.getGridLineClass()}
					/>
					<text
						x={state.chartWidth + 5}
						y={tick * state.chartHeight + 4}
						class={PriceHistoryStyleManager.getGridTextClass()}
					>
						{Math.round(state.maxPrice - (tick * state.priceRange))}
					</text>
				{/each}

				<!-- Price line -->
				<polyline
					fill="none"
					stroke="var(--color-primary-500)"
					stroke-width="2"
					points={
						state.data.map((d, i) => {
							const x = (i / (state.data.length - 1)) * state.chartWidth;
							const y = state.chartHeight - ((d.price - state.minPrice) / state.priceRange) * state.chartHeight;
							return `${x},${y}`;
						}).join(' ')
					}
					class={PriceHistoryStyleManager.getPriceLineClass()}
				/>

				<!-- Data points -->
				{#each state.data as d, i}
					<circle
						cx={(i / (state.data.length - 1)) * state.chartWidth}
						cy={state.chartHeight - ((d.price - state.minPrice) / state.priceRange) * state.chartHeight}
						r="3"
						fill="var(--color-primary-500)"
						class={PriceHistoryStyleManager.getDataPointClass()}
					/>
				{/each}
			</svg>
		{:else}
			<div class={state.noDataClass}>
				No price history data available
			</div>
		{/if}
	</div>
	<div class={state.infoClass}>
		{#if state.data.length > 0}
			<div class={state.infoTextClass}>Lowest: {props.currency ?? '$'}{state.minPrice}, Highest: {props.currency ?? '$'}{state.maxPrice}</div>
		{/if}
	</div>
</div>
