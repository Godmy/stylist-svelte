<script lang="ts">
	import type { CartSummary } from '$stylist/travel-commerce/type/object/cart-summary';

	type Props = {
		summary: CartSummary;
		onCheckout?: () => void;
	};

	let { summary, onCheckout }: Props = $props();
</script>

<aside class="tc-cart-summary-panel">
	<h2>Summary</h2>
	<dl>
		<div><dt>Subtotal</dt><dd>{summary.subtotal}</dd></div>
		{#if summary.discount}<div><dt>Discount</dt><dd>{summary.discount}</dd></div>{/if}
		{#if summary.prepayment}<div><dt>Prepayment</dt><dd>{summary.prepayment}</dd></div>{/if}
		{#if summary.dueOnArrival}<div><dt>Due on arrival</dt><dd>{summary.dueOnArrival}</dd></div>{/if}
		<div class="tc-cart-summary-panel__total"><dt>Total</dt><dd>{summary.total}</dd></div>
	</dl>
	<button type="button" onclick={() => onCheckout?.()}>Checkout</button>
</aside>

<style>
	.tc-cart-summary-panel {
		display: grid;
		gap: 1rem;
		padding: 1rem;
		border-radius: 8px;
		background: #17231f;
		color: #fff;
	}
	.tc-cart-summary-panel h2,
	.tc-cart-summary-panel dl,
	.tc-cart-summary-panel dd {
		margin: 0;
	}
	.tc-cart-summary-panel h2 {
		font-size: 1.3rem;
	}
	.tc-cart-summary-panel dl {
		display: grid;
		gap: 0.65rem;
	}
	.tc-cart-summary-panel div {
		display: flex;
		justify-content: space-between;
		gap: 1rem;
	}
	.tc-cart-summary-panel dt {
		color: rgba(255, 255, 255, 0.68);
	}
	.tc-cart-summary-panel__total {
		padding-top: 0.75rem;
		border-top: 1px solid rgba(255, 255, 255, 0.18);
		font-size: 1.2rem;
		font-weight: 700;
	}
	.tc-cart-summary-panel button {
		min-height: 2.75rem;
		border: 0;
		border-radius: 999px;
		background: #f7f3ec;
		color: #17231f;
		font-weight: 700;
		cursor: pointer;
	}
</style>
