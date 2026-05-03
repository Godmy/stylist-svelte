<script lang="ts">
	import type { PaymentSummaryProps } from '$stylist/commerce/type/struct/payment-summary-props';
	import { createPaymentSummaryState } from '$stylist/commerce/function/state/payment-summary';

	let props: PaymentSummaryProps = $props();
	const state = createPaymentSummaryState(props);
</script>

<div class={state.rootClass}>
	<div class="border-b px-6 py-4">
		<h3 class="text-lg font-semibold">{props.title ?? 'Payment Summary'}</h3>
		{#if props.subtitle}<p class="text-sm text-[var(--color-text-secondary)]">{props.subtitle}</p>{/if}
	</div>
	<div class="p-6 grid gap-6 md:grid-cols-2">
		<div>
			<div class="font-medium mb-2">Items</div>
			<div class="space-y-2">
				{#each props.items ?? [] as item}
					<div class="flex justify-between text-sm border rounded p-2">
						<span>{item.name} x{item.quantity}</span>
						<span>{state.money(item.total)}</span>
					</div>
				{/each}
			</div>
		</div>
		<div class="border rounded p-4 bg-[var(--color-background-secondary)] text-sm space-y-2">
			<div class="flex justify-between"><span>Subtotal</span><span>{state.money(state.subtotal)}</span></div>
			<div class="flex justify-between"><span>Discounts</span><span>-{state.money(state.discountTotal)}</span></div>
			<div class="flex justify-between"><span>Taxes</span><span>{state.money(state.taxTotal)}</span></div>
			<div class="border-t pt-2 font-semibold flex justify-between"><span>Total</span><span>{state.money(props.total ?? 0)}</span></div>
			{#if props.paymentMethod}<div>Method: {props.paymentMethod}</div>{/if}
			{#if props.transactionId}<div>ID: {props.transactionId}</div>{/if}
			<div>Status: {props.status ?? 'completed'}</div>
			<div>Date: {(props.date ?? new Date()).toLocaleDateString()}</div>
		</div>
	</div>
</div>
