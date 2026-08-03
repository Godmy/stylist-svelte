<script lang="ts">
import type { HTMLAttributes } from 'svelte/elements';
	import type { RecipePriceMatch } from '$stylist/commerce/interface/recipe/price-match';
	import { createPriceMatchState } from '$stylist/commerce/function/state/price-match/index.svelte';

	let props: RecipePriceMatch & HTMLAttributes<HTMLDivElement> = $props();
	const state = createPriceMatchState(props);
</script>

<div class={state.containerClass}>
	<h3 class={state.titleClass}>{props.productName || 'Price Match'}</h3>
	<div class={state.priceInfoClass}>
		<p class={state.yourPriceClass}>
			Your price: <span class={state.boldClass}
				>{props.currency ?? '$'}{props.targetPrice ?? 0}</span
			>
		</p>
		{#if state.isLowerAvailable}
			<p class={state.lowerPriceClass}>
				Lower price found: {props.currency ?? '$'}{state.bestPrice}
			</p>
		{:else}
			<p class={state.bestPriceClass}>Best price available!</p>
		{/if}
	</div>

	{#if state.competitorPrices.length > 0}
		<div class={state.competitorsContainerClass}>
			{#each state.competitorPrices as competitor}
				<div class={state.competitorRowClass}>
					<span>{competitor.name}</span>
					<span>{props.currency ?? '$'}{competitor.price}</span>
				</div>
			{/each}
		</div>
	{/if}

	{#if state.isLowerAvailable}
		<button onclick={props.onFindLower} class={state.buttonClass}> Find Lower Price </button>
	{/if}
</div>

<style>
	.price-match {
		padding: 1rem;
		border-radius: 0.5rem;
		border-width: 1px;
		border-style: solid;
	}

	.price-match__lower-available {
		background-color: var(--color-warning-50);
		border-color: var(--color-warning-200);
	}

	.price-match__best-price {
		background-color: var(--color-success-50);
		border-color: var(--color-success-200);
	}

	.price-match__title {
		font-weight: 600;
		margin-bottom: 0.5rem;
	}

	.price-match__price-info {
		margin-bottom: 0.75rem;
	}

	.price-match__lower-price {
		color: var(--color-warning-700);
		font-weight: 600;
	}

	.price-match__best-price-text {
		color: var(--color-success-700);
		font-weight: 600;
	}

	.price-match__competitors-container {
		margin-bottom: 0.75rem;
	}

	.price-match__competitor-row {
		display: flex;
		justify-content: space-between;
		padding-top: 0.25rem;
		padding-bottom: 0.25rem;
	}

	.price-match__button {
		padding-left: 1rem;
		padding-right: 1rem;
		padding-top: 0.5rem;
		padding-bottom: 0.5rem;
		background-color: var(--color-warning-500);
		color: var(--color-text-inverse);
		border-radius: 0.25rem;
	}
	.price-match__button:hover {
		background-color: var(--color-warning-600);
	}

	.price-match__bold {
		font-weight: 700;
	}
</style>
