<script lang="ts">
	import type { PaymentSummaryProps } from '$stylist/commerce/type/struct/payment-summary-props';
	import createPaymentSummaryState from './state.svelte';

	let props: PaymentSummaryProps = $props();
	const state = createPaymentSummaryState(props);
</script>

<div class="payment-summary">
	<div class="_c1">
		<h3 class="_c2">{props.title ?? 'Payment Summary'}</h3>
		{#if props.subtitle}<p class="_c3">
				{props.subtitle}
			</p>{/if}
	</div>
	<div class="_c4">
		<div>
			<div class="_c5">Items</div>
			<div class="_c6">
				{#each props.items ?? [] as item}
					<div class="_c7">
						<span>{item.name} x{item.quantity}</span>
						<span>{state.money(item.total)}</span>
					</div>
				{/each}
			</div>
		</div>
		<div class="_c8">
			<div class="_c9">
				<span>Subtotal</span><span>{state.money(state.subtotal)}</span>
			</div>
			<div class="_c9">
				<span>Discounts</span><span>-{state.money(state.discountTotal)}</span>
			</div>
			<div class="_c9">
				<span>Taxes</span><span>{state.money(state.taxTotal)}</span>
			</div>
			<div class="_c10">
				<span>Total</span><span>{state.money(props.total ?? 0)}</span>
			</div>
			{#if props.paymentMethod}<div>Method: {props.paymentMethod}</div>{/if}
			{#if props.transactionId}<div>ID: {props.transactionId}</div>{/if}
			<div>Status: {props.status ?? 'completed'}</div>
			<div>Date: {(props.date ?? new Date()).toLocaleDateString()}</div>
		</div>
	</div>
</div>

<style>
	._c1 {
		border-bottom-width: 1px;
		border-style: solid;
		padding-left: 1.5rem;
		padding-right: 1.5rem;
		padding-top: 1rem;
		padding-bottom: 1rem;
	}
	._c10 {
		display: flex;
		justify-content: space-between;
		border-top-width: 1px;
		border-style: solid;
		padding-top: 0.5rem;
		font-weight: 600;
	}
	._c2 {
		font-size: 1.125rem;
		line-height: 1.75rem;
		font-weight: 600;
	}
	._c3 {
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}
	._c4 {
		display: grid;
		gap: 1.5rem;
		padding: 1.5rem;
	}
	@media (min-width: 768px) {
		._c4 {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}
	._c5 {
		margin-bottom: 0.5rem;
		font-weight: 500;
	}
	._c6 > * + * {
		margin-top: 0.5rem;
	}
	._c7 {
		display: flex;
		justify-content: space-between;
		border-radius: 0.25rem;
		border-width: 1px;
		border-style: solid;
		padding: 0.5rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
	}
	._c8 {
		border-radius: 0.25rem;
		border-width: 1px;
		border-style: solid;
		background-color: var(--color-background-secondary);
		padding: 1rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
	}
	._c8 > * + * {
		margin-top: 0.5rem;
	}
	._c9 {
		display: flex;
		justify-content: space-between;
	}
</style>
