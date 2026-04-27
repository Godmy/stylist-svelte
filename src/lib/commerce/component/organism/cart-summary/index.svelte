<script lang="ts">
	import type { CartSummaryProps } from '$stylist/commerce/interface/recipe/cart-summary-props';
	import { createCartSummaryState } from '$stylist/commerce/function/state/cart-summary';

	let props: CartSummaryProps = $props();
	const state = createCartSummaryState(props);
</script>

<div class={state.containerClasses}>
	<div class={state.headerClasses}>
		<h2 class={state.titleClasses}>Cart Summary</h2>
	</div>

	{#if state.items.length === 0}
		<div class="px-6 py-8 text-center text-[--color-text-secondary]">Your cart is empty</div>
	{:else}
		<ul>
			{#each state.items as item}
				<li class={state.itemClasses}>
					{#if props.showItemThumbnails !== false && item.thumbnail}
						<img src={item.thumbnail} alt={item.name} class={state.thumbnailClasses} />
					{/if}
					<div class="flex-1">
						<p class={state.itemNameClasses}>{item.name}</p>
						<p class={state.itemPriceClasses}>{state.formatPrice(item.price)}</p>
					</div>
					<div class={state.quantityControlClasses}>
						<button
							class={state.quantityButtonClasses}
							onclick={() => props.onQuantityChange?.(item.id, Math.max(1, item.quantity - 1))}
						>-</button>
						<span class={state.quantityInputClasses}>{item.quantity}</span>
						<button
							class={state.quantityButtonClasses}
							onclick={() => props.onQuantityChange?.(item.id, item.quantity + 1)}
						>+</button>
					</div>
					<button
						class={state.removeButtonClasses}
						onclick={() => props.onItemRemove?.(item.id)}
					>&times;</button>
				</li>
			{/each}
		</ul>
	{/if}

	<div class={state.summaryClasses}>
		<h3 class={state.summaryTitleClasses}>SlotOrder Summary</h3>

		<div class={state.summaryRowClasses}>
			<span class={state.summaryLabelClasses}>Subtotal</span>
			<span class={state.summaryValueClasses}>{state.formatPrice(state.subtotal)}</span>
		</div>

		{#if props.showDiscounts !== false && (props.discountAmount ?? 0) > 0}
			<div class={state.summaryRowClasses}>
				<span class={state.summaryLabelClasses}>Discount</span>
				<span class={state.discountBadgeClasses}>-{state.formatPrice(props.discountAmount ?? 0)}</span>
			</div>
		{/if}

		{#if props.showShipping}
			<div class={state.summaryRowClasses}>
				<span class={state.summaryLabelClasses}>Shipping</span>
				<span class={state.summaryValueClasses}>{state.formatPrice(props.shippingCost ?? 0)}</span>
			</div>
		{/if}

		{#if props.showTaxes}
			<div class={state.summaryRowClasses}>
				<span class={state.summaryLabelClasses}>Tax</span>
				<span class={state.summaryValueClasses}>{state.formatPrice(props.taxCost ?? 0)}</span>
			</div>
		{/if}

		<div class={state.totalClasses}>
			<span>Total</span>
			<span>{state.formatPrice(state.total)}</span>
		</div>

		{#if props.showPromoCode}
			<div class="flex gap-2 mt-4">
				<input
					type="text"
					placeholder="Promo code"
					value={state.promoCode}
					oninput={(e) => { state.promoCode = (e.target as HTMLInputElement).value; }}
					class={state.promoCodeInputClasses}
				/>
				<button
					onclick={state.handleApplyPromo}
					class={state.promoCodeButtonClasses}
				>Apply</button>
			</div>
		{/if}

		{#if props.onCheckout}
			<button
				onclick={props.onCheckout}
				class="w-full mt-4 px-4 py-2 bg-[--color-primary-600] text-white rounded font-medium"
			>Proceed to Checkout</button>
		{/if}
	</div>
</div>
