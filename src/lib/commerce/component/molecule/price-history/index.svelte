<script lang="ts">
	import type { RecipePriceHistory } from '$stylist/commerce/interface/recipe/price-history';
	import { createPriceHistoryState } from '$stylist/commerce/function/state/price-history/index.svelte';

	let props: RecipePriceHistory = $props();
	const state = createPriceHistoryState(props);
</script>

<div class={state.containerClass}>
	<h3 class={state.titleClass}>{props.title ?? 'Price History'}</h3>
	<div class={state.chartContainerClass}>
		{#if state.data.length > 0}
			<svg width={state.chartWidth} height={state.chartHeight} class="price-history__s-v-g">
				<!-- Grid lines -->
				{#each [0, 0.25, 0.5, 0.75, 1] as tick}
					<line
						x1="0"
						y1={tick * state.chartHeight}
						x2={state.chartWidth}
						y2={tick * state.chartHeight}
						class="price-history__grid-line"
					/>
					<text
						x={state.chartWidth + 5}
						y={tick * state.chartHeight + 4}
						class="price-history__grid-text"
					>
						{Math.round(state.maxPrice - tick * state.priceRange)}
					</text>
				{/each}

				<!-- Price line -->
				<polyline
					fill="none"
					stroke="var(--color-primary-500)"
					stroke-width="2"
					points={state.data
						.map((d, i) => {
							const x = (i / (state.data.length - 1)) * state.chartWidth;
							const y =
								state.chartHeight -
								((d.price - state.minPrice) / state.priceRange) * state.chartHeight;
							return `${x},${y}`;
						})
						.join(' ')}
					class="price-history__price-line"
				/>

				<!-- Data points -->
				{#each state.data as d, i}
					<circle
						cx={(i / (state.data.length - 1)) * state.chartWidth}
						cy={state.chartHeight -
							((d.price - state.minPrice) / state.priceRange) * state.chartHeight}
						r="3"
						fill="var(--color-primary-500)"
						class="price-history__data-point"
					/>
				{/each}
			</svg>
		{:else}
			<div class={state.noDataClass}>No price history data available</div>
		{/if}
	</div>
	<div class={state.infoClass}>
		{#if state.data.length > 0}
			<div class={state.infoTextClass}>
				Lowest: {props.currency ?? '$'}{state.minPrice}, Highest: {props.currency ??
					'$'}{state.maxPrice}
			</div>
		{/if}
	</div>
</div>

<style>
	.price-history {
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		padding: 1rem;
		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
		border-radius: 0.5rem;
		background-color: var(--color-background-primary);
		overflow: hidden;
	}

	.price-history__title {
		margin-bottom: 1rem;
		font-weight: 600;
		color: var(--color-text-primary);
	}

	.price-history__chart-container {
		position: relative;
	}

	.price-history__s-v-g {
		width: 100%;
	}

	.price-history__grid-text {
		font-size: 0.75rem;
		line-height: 1rem;
		fill: var(--color-text-tertiary);
	}

	.price-history__grid-line {
		stroke: var(--color-border-primary);
		stroke-width: 1;
	}

	.price-history__price-line {
		vector-effect: non-scaling-stroke;
	}

	.price-history__data-point {
		transition: r var(--duration-150, 150ms) var(--easing-smooth, ease-in-out);
	}

	.price-history__no-data {
		display: flex;
		height: 12rem;
		align-items: center;
		justify-content: center;
		color: var(--color-text-tertiary);
	}

	.price-history__info {
		margin-top: 1rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}
</style>
