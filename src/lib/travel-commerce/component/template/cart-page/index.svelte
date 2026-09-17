<script lang="ts">
	import type { CartLineItem as CartLineItemType } from '$stylist/travel-commerce/type/object/cart-line-item';
	import type { CartSummary } from '$stylist/travel-commerce/type/object/cart-summary';
	import type { TourAddon } from '$stylist/travel-commerce/type/object/tour-addon';
	import CartLineItem from '$stylist/travel-commerce/component/molecule/cart-line-item/index.svelte';
	import CartUpsellCard from '$stylist/travel-commerce/component/molecule/cart-upsell-card/index.svelte';
	import CartUsdCashToggle from '$stylist/travel-commerce/component/organism/cart-usd-cash-toggle/index.svelte';
	import CartSummaryPanel from '$stylist/travel-commerce/component/organism/cart-summary-panel/index.svelte';

	type Props = {
		items: CartLineItemType[];
		summary: CartSummary;
		upsells?: TourAddon[];
	};

	let { items, summary, upsells = [] }: Props = $props();
</script>

<main class="tc-cart-page">
	<header>
		<h1>Cart</h1>
		<p>{items.length} selected experiences</p>
	</header>
	<div class="tc-cart-page__layout">
		<section class="tc-cart-page__items">
			{#each items as item (item.id)}
				<CartLineItem {item} />
			{/each}
			{#if upsells.length}
				<div class="tc-cart-page__upsells">
					<h2>Add before checkout</h2>
					{#each upsells as addon (addon.id)}
						<CartUpsellCard {addon} />
					{/each}
				</div>
			{/if}
		</section>
		<aside class="tc-cart-page__aside">
			<CartUsdCashToggle />
			<CartSummaryPanel {summary} />
		</aside>
	</div>
</main>

<style>
	.tc-cart-page {
		display: grid;
		gap: 1.5rem;
		background: #f7f3ec;
		color: #17231f;
	}
	.tc-cart-page header h1,
	.tc-cart-page header p {
		margin: 0;
	}
	.tc-cart-page header h1 {
		font-size: 3rem;
		line-height: 1;
		letter-spacing: 0;
	}
	.tc-cart-page header p {
		margin-top: 0.4rem;
		color: rgba(23, 35, 31, 0.62);
	}
	.tc-cart-page__layout {
		display: grid;
		grid-template-columns: minmax(0, 1fr) minmax(18rem, 24rem);
		gap: 1.25rem;
		align-items: start;
	}
	.tc-cart-page__items,
	.tc-cart-page__aside,
	.tc-cart-page__upsells {
		display: grid;
		gap: 0.85rem;
	}
	.tc-cart-page__aside {
		position: sticky;
		top: 1rem;
	}
	.tc-cart-page__upsells h2 {
		margin: 1rem 0 0.2rem;
		font-size: 1.3rem;
	}
	/*
	 * Duplicated as `@media` (real device viewport) and `@container` (the
	 * Story sandbox simulates device width via `container-type: inline-size`
	 * on an ancestor, which plain `@media` can't see). Keep both in sync.
	 */
	@media (max-width: 900px) {
		.tc-cart-page__layout {
			grid-template-columns: 1fr;
		}
		.tc-cart-page__aside {
			position: static;
		}
	}
	@container (max-width: 900px) {
		.tc-cart-page__layout {
			grid-template-columns: 1fr;
		}
		.tc-cart-page__aside {
			position: static;
		}
	}
</style>
