<script lang="ts">
	import type { CartSummaryProps } from '$stylist/commerce/interface/recipe/cart-summary-props';
	import createCartSummaryState from './state.svelte';

	let props: CartSummaryProps = $props();
	const state = createCartSummaryState(props);
</script>

<div class="cart-summary">
	<div class="cart-summary__header">
		<h2 class="cart-summary__title">Cart Summary</h2>
	</div>

	{#if state.items.length === 0}
		<div class="_c1">Your cart is empty</div>
	{:else}
		<ul>
			{#each state.items as item}
				<li class="cart-summary__item">
					{#if props.showItemThumbnails !== false && item.thumbnail}
						<img src={item.thumbnail} alt={item.name} class="cart-summary__thumbnail" />
					{/if}
					<div class="_c2">
						<p class="cart-summary__item-name">{item.name}</p>
						<p class="cart-summary__item-price">{state.formatPrice(item.price)}</p>
					</div>
					<div class="cart-summary__quantity-control">
						<button
							class="cart-summary__quantity-button"
							onclick={() => props.onQuantityChange?.(item.id, Math.max(1, item.quantity - 1))}
							>-</button
						>
						<span class="cart-summary__quantity-input">{item.quantity}</span>
						<button
							class="cart-summary__quantity-button"
							onclick={() => props.onQuantityChange?.(item.id, item.quantity + 1)}>+</button
						>
					</div>
					<button class="cart-summary__remove-button" onclick={() => props.onItemRemove?.(item.id)}
						>&times;</button
					>
				</li>
			{/each}
		</ul>
	{/if}

	<div class="cart-summary__summary">
		<h3 class="cart-summary__summary-title">SlotOrder Summary</h3>

		<div class="cart-summary__summary-row">
			<span class="cart-summary__summary-label">Subtotal</span>
			<span class="cart-summary__summary-value">{state.formatPrice(state.subtotal)}</span>
		</div>

		{#if props.showDiscounts !== false && (props.discountAmount ?? 0) > 0}
			<div class="cart-summary__summary-row">
				<span class="cart-summary__summary-label">Discount</span>
				<span class="cart-summary__discount-badge"
					>-{state.formatPrice(props.discountAmount ?? 0)}</span
				>
			</div>
		{/if}

		{#if props.showShipping}
			<div class="cart-summary__summary-row">
				<span class="cart-summary__summary-label">Shipping</span>
				<span class="cart-summary__summary-value">{state.formatPrice(props.shippingCost ?? 0)}</span
				>
			</div>
		{/if}

		{#if props.showTaxes}
			<div class="cart-summary__summary-row">
				<span class="cart-summary__summary-label">Tax</span>
				<span class="cart-summary__summary-value">{state.formatPrice(props.taxCost ?? 0)}</span>
			</div>
		{/if}

		<div class="cart-summary__total">
			<span>Total</span>
			<span>{state.formatPrice(state.total)}</span>
		</div>

		{#if props.showPromoCode}
			<div class="_c3">
				<input
					type="text"
					placeholder="Promo code"
					value={state.promoCode}
					oninput={(e) => {
						state.promoCode = (e.target as HTMLInputElement).value;
					}}
					class="cart-summary__promo-code-input"
				/>
				<button onclick={state.handleApplyPromo} class="cart-summary__promo-code-button"
					>Apply</button
				>
			</div>
		{/if}

		{#if props.onCheckout}
			<button onclick={props.onCheckout} class="_c4">Proceed to Checkout</button>
		{/if}
	</div>
</div>

<style>
	._c1 {
		padding-left: 1.5rem;
		padding-right: 1.5rem;
		padding-top: 2rem;
		padding-bottom: 2rem;
		text-align: center;
		color: var(--color-text-secondary);
	}
	._c2 {
		flex: 1 1 0%;
	}
	._c3 {
		margin-top: 1rem;
		display: flex;
		gap: 0.5rem;
	}
	._c4 {
		margin-top: 1rem;
		width: 100%;
		border-radius: 0.25rem;
		background-color: var(--color-primary-600);
		padding-left: 1rem;
		padding-right: 1rem;
		padding-top: 0.5rem;
		padding-bottom: 0.5rem;
		font-weight: 500;
		color: #ffffff;
	}

	.cart-summary {
		background-color: var(--color-background-primary);
		border-radius: 0.5rem;
		box-shadow:
			0 1px 3px 0 rgb(0 0 0 / 0.1),
			0 1px 2px -1px rgb(0 0 0 / 0.1);
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-secondary);
	}

	.cart-summary__header {
		border-bottom-width: 1px;
		border-style: solid;
		padding-left: 1.5rem;
		padding-right: 1.5rem;
		padding-top: 1rem;
		padding-bottom: 1rem;
	}

	.cart-summary__title {
		font-size: 1.25rem;
		line-height: 1.75rem;
		font-weight: 700;
		color: var(--color-text-primary);
	}

	.cart-summary__item {
		display: flex;
		align-items: center;
		border-bottom-width: 1px;
		border-style: solid;
		padding-bottom: 1rem;
	}

	.cart-summary__thumbnail {
		width: 6rem;
		height: 6rem;
		border-radius: 0.375rem;
		overflow: hidden;
		margin-right: 1rem;
	}

	.cart-summary__item-name {
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 500;
		color: var(--color-text-primary);
	}

	.cart-summary__item-price {
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 500;
		color: var(--color-text-primary);
	}

	.cart-summary__quantity-control {
		display: flex;
		align-items: center;
		border-width: 1px;
		border-style: solid;
		border-radius: 0.375rem;
	}

	.cart-summary__quantity-button {
		padding: 0.5rem;
		color: var(--color-text-secondary);
	}
	.cart-summary__quantity-button:hover {
		color: var(--color-text-primary);
	}
	.cart-summary__quantity-button:focus {
		outline: 2px solid transparent;
		outline-offset: 2px;
	}

	.cart-summary__quantity-input {
		width: 2.5rem;
		text-align: center;
		border-color: var(--color-border-primary);
	}
	.cart-summary__quantity-input:focus {
		outline: 2px solid transparent;
		outline-offset: 2px;
	}

	.cart-summary__remove-button {
		margin-left: 1rem;
		display: flex;
		align-items: center;
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 500;
		color: var(--color-danger-600);
	}
	.cart-summary__remove-button:hover {
		color: var(--color-danger-500);
	}

	.cart-summary__summary {
		border-width: 1px;
		border-style: solid;
		border-radius: 0.5rem;
		padding: 1.5rem;
	}

	.cart-summary__summary-title {
		font-size: 1.125rem;
		line-height: 1.75rem;
		font-weight: 500;
		color: var(--color-text-primary);
	}

	.cart-summary__summary-row {
		display: flex;
		justify-content: space-between;
		font-size: 0.875rem;
		line-height: 1.25rem;
	}

	.cart-summary__summary-label {
		color: var(--color-text-secondary);
	}

	.cart-summary__summary-value {
		color: var(--color-text-primary);
	}

	.cart-summary__total {
		display: flex;
		justify-content: space-between;
		font-size: 1rem;
		line-height: 1.5rem;
		font-weight: 500;
		color: var(--color-text-primary);
		padding-top: 1rem;
		border-top-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
	}

	.cart-summary__promo-code-input {
		flex: 1 1 0%;
		min-width: 0;
		display: block;
		width: 100%;
		padding-left: 0.75rem;
		padding-right: 0.75rem;
		padding-top: 0.5rem;
		padding-bottom: 0.5rem;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
	}
	.cart-summary__promo-code-input:focus {
		outline: 2px solid transparent;
		outline-offset: 2px;
		box-shadow: 0 0 0 3px var(--color-blue-500);
		border-color: var(--color-primary-500);
	}
	@media (min-width: 640px) {
		.cart-summary__promo-code-input {
			font-size: 0.875rem;
			line-height: 1.25rem;
		}
	}

	.cart-summary__promo-code-button {
		display: inline-flex;
		align-items: center;
		padding-left: 0.75rem;
		padding-right: 0.75rem;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		background-color: var(--color-background-secondary);
		color: var(--color-text-secondary);
	}
	.cart-summary__promo-code-button:hover {
		background-color: var(--color-background-secondary);
	}
	@media (min-width: 640px) {
		.cart-summary__promo-code-button {
			font-size: 0.875rem;
			line-height: 1.25rem;
		}
	}

	.cart-summary__discount-badge {
		display: inline-flex;
		align-items: center;
		padding-left: 0.625rem;
		padding-right: 0.625rem;
		padding-top: 0.125rem;
		padding-bottom: 0.125rem;
		border-radius: 9999px;
		font-size: 0.75rem;
		line-height: 1rem;
		font-weight: 500;
		background-color: var(--color-success-100);
		color: var(--color-success-800);
	}
</style>
