<script lang="ts">
	import type { PriceMatchProps } from '$stylist/commerce/function/state/price-match';
	import { createPriceMatchState } from '$stylist/commerce/function/state/price-match';

	let props: PriceMatchProps = $props();
	const state = createPriceMatchState(props);
</script>

<div class={state.containerClass}>
	<h3 class={state.titleClass}>{props.productName || 'Price Match'}</h3>
	<div class={state.priceInfoClass}>
		<p class={state.yourPriceClass}>Your price: <span class={state.boldClass}>{props.currency ?? '$'}{props.targetPrice ?? 0}</span></p>
		{#if state.isLowerAvailable}
			<p class={state.lowerPriceClass}>Lower price found: {props.currency ?? '$'}{state.bestPrice}</p>
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
		<button
			onclick={props.onFindLower}
			class={state.buttonClass}
		>
			Find Lower Price
		</button>
	{/if}
</div>
