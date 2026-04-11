<script lang="ts">
	import { Icon as BaseIcon } from '$stylist';
	import { createPaymentInfoState } from '$stylist/commerce/function/state/payment-info';
	import type { PaymentInfoProps } from '$stylist/commerce/function/state/payment-info';

	let props: PaymentInfoProps = $props();
	const state = createPaymentInfoState(props);
</script>

<div class={state.rootClass}>
	<div class="border border-[var(--color-border-primary)] rounded-lg p-6">
		<div class="flex items-center gap-2">
			<BaseIcon name="credit-card" class="h-5 w-5 text-[var(--color-primary-600)]" />
			<h3 class="text-lg font-semibold">Payment Information</h3>
		</div>
	</div>

	{#if props.showMethods !== false}
		<div class="mt-4 border border-[var(--color-border-primary)] rounded-lg p-4 space-y-3">
			{#each props.methods ?? [] as method}
				<button
					type="button"
					class={`w-full text-left rounded-md border p-3 ${state.selectedMethodId === method.id ? 'border-[var(--color-primary-500)] bg-[var(--color-primary-50)]' : 'border-[var(--color-border-primary)]'}`}
					onclick={() => state.handleMethodSelect(method)}
					disabled={method.disabled}
				>
					<div class="font-medium">{method.name}</div>
					{#if method.description}
						<div class="text-sm text-[var(--color-text-secondary)]">{method.description}</div>
					{/if}
					<div class="text-xs text-[var(--color-text-secondary)] mt-1">
						{#if props.showFees !== false && method.fee !== undefined}Fee: {method.fee}%{/if}
						{#if props.showProcessingTime !== false && method.processingTime}
							<span class="ml-2">{method.processingTime}</span>
						{/if}
					</div>
				</button>
			{/each}
		</div>
	{/if}

	{#if props.showAcceptedCards !== false}
		<div class="mt-4 border border-[var(--color-border-primary)] rounded-lg p-4">
			<div class="text-sm font-medium mb-2">Accepted Cards</div>
			<div class="flex flex-wrap gap-2">
				{#each props.acceptedCards ?? ['visa', 'mastercard', 'amex'] as card}
					<span class="px-2 py-1 rounded bg-[var(--color-background-secondary)] text-xs uppercase">{card}</span>
				{/each}
			</div>
		</div>
	{/if}

	{#if props.showSecurityInfo !== false}
		<div class="mt-4 border border-[var(--color-border-primary)] rounded-lg p-4">
			<div class="flex items-center gap-2 text-sm font-medium">
				<BaseIcon name="shield" class="h-4 w-4" /> Security
			</div>
			<div class="mt-2 text-sm text-[var(--color-text-secondary)] flex items-center gap-2">
				<BaseIcon name="lock" class="h-4 w-4" /> Encrypted payment processing
			</div>
		</div>
	{/if}
</div>
