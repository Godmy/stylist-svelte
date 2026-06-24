<script lang="ts">
	import BaseIcon from '$stylist/svg/component/atom/icon/index.svelte';

	import createPaymentInfoState from '$stylist/commerce/function/state/payment-info/createpaymentinfostate/index.svelte';

	import type { PaymentInfoProps } from '$stylist/commerce/interface/recipe/payment-info-props';

	let props: PaymentInfoProps = $props();

	const state = createPaymentInfoState(props);
</script>

<div class="payment-info">
	<div class="_c1">
		<div class="_c2">
			<BaseIcon name="credit-card" class="_c3" />

			<h3 class="_c4">Payment Information</h3>
		</div>
	</div>

	{#if props.showMethods !== false}
		<div class="_c5">
			{#each props.methods ?? [] as method}
				<button
					type="button"
					class={`${state.selectedMethodId === method.id ? 'payment-option--selected' : 'payment-option--default'} _c1`}
					onclick={() => state.handleMethodSelect(method)}
					disabled={method.disabled}
				>
					<div class="_c6">{method.name}</div>

					{#if method.description}
						<div class="_c7">{method.description}</div>
					{/if}

					<div class="_c8">
						{#if props.showFees !== false && method.fee !== undefined}Fee: {method.fee}%{/if}

						{#if props.showProcessingTime !== false && method.processingTime}
							<span class="_c9">{method.processingTime}</span>
						{/if}
					</div>
				</button>
			{/each}
		</div>
	{/if}

	{#if props.showAcceptedCards !== false}
		<div class="_c10">
			<div class="_c11">Accepted Cards</div>

			<div class="_c12">
				{#each props.acceptedCards ?? ['visa', 'mastercard', 'amex'] as card}
					<span class="_c13">{card}</span>
				{/each}
			</div>
		</div>
	{/if}

	{#if props.showSecurityInfo !== false}
		<div class="_c10">
			<div class="_c14">
				<BaseIcon name="shield" class="_c15" /> Security
			</div>

			<div class="_c16">
				<BaseIcon name="lock" class="_c15" /> Encrypted payment processing
			</div>
		</div>
	{/if}
</div>

<style>
	._c1 {
		border-radius: 0.5rem;

		border-width: 1px;

		border-style: solid;

		border-color: var(--color-border-primary);

		padding: 1.5rem;
	}

	._c10 {
		margin-top: 1rem;

		border-radius: 0.5rem;

		border-width: 1px;

		border-style: solid;

		border-color: var(--color-border-primary);

		padding: 1rem;
	}

	._c11 {
		margin-bottom: 0.5rem;

		font-size: 0.875rem;

		line-height: 1.25rem;

		font-weight: 500;
	}

	._c12 {
		display: flex;

		flex-wrap: wrap;

		gap: 0.5rem;
	}

	._c13 {
		border-radius: 0.25rem;

		background-color: var(--color-background-secondary);

		padding-left: 0.5rem;

		padding-right: 0.5rem;

		padding-top: 0.25rem;

		padding-bottom: 0.25rem;

		font-size: 0.75rem;

		line-height: 1rem;

		text-transform: uppercase;
	}

	._c14 {
		display: flex;

		align-items: center;

		gap: 0.5rem;

		font-size: 0.875rem;

		line-height: 1.25rem;

		font-weight: 500;
	}

	._c15 {
		height: 1rem;

		width: 1rem;
	}

	._c16 {
		margin-top: 0.5rem;

		display: flex;

		align-items: center;

		gap: 0.5rem;

		font-size: 0.875rem;

		line-height: 1.25rem;

		color: var(--color-text-secondary);
	}

	._c2 {
		display: flex;

		align-items: center;

		gap: 0.5rem;
	}

	._c3 {
		height: 1.25rem;

		width: 1.25rem;

		color: var(--color-primary-600);
	}

	._c4 {
		font-size: 1.125rem;

		line-height: 1.75rem;

		font-weight: 600;
	}

	._c5 {
		margin-top: 1rem;

		border-radius: 0.5rem;

		border-width: 1px;

		border-style: solid;

		border-color: var(--color-border-primary);

		padding: 1rem;
	}

	._c5 > * + * {
		margin-top: 0.75rem;
	}

	._c6 {
		font-weight: 500;
	}

	._c7 {
		font-size: 0.875rem;

		line-height: 1.25rem;

		color: var(--color-text-secondary);
	}

	._c8 {
		margin-top: 0.25rem;

		font-size: 0.75rem;

		line-height: 1rem;

		color: var(--color-text-secondary);
	}

	._c9 {
		margin-left: 0.5rem;
	}

	._c1 {
		width: 100%;

		border-radius: 0.375rem;

		border-width: 1px;

		border-style: solid;

		padding: 0.75rem;

		text-align: left;
	}

	.payment-option--selected {
		border-color: var(--color-primary-500);
		background-color: var(--color-primary-50);
	}
	.payment-option--default {
		border-color: var(--color-border-primary);
	}
</style>
