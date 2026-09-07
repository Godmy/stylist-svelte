<script lang="ts">
	import { PresetPriceAlert } from '$stylist/commerce/const/preset/price-alert';
	import type { RecipePriceAlert } from '$stylist/commerce/interface/recipe/price-alert';
	import { createPriceAlertState } from './state.svelte';

	let props: RecipePriceAlert = $props();
	const state = createPriceAlertState(PresetPriceAlert, props);
</script>

<div {...state.restProps} class={state.classes} {...state.attrs}>
	<h3 class="price-alert__title">{state.productName || 'Price Alert'}</h3>
	<div class="price-alert__content">
		<div class="price-alert__price-info">
			<p class="price-alert__current-price">Current: {state.currency}{state.currentPrice}</p>
			<p class="price-alert__target-price">Target: {state.currency}{state.targetPrice}</p>
		</div>
		<div class={`price-alert__status-badge ${state.statusBadgeTypeClass}`}>
			{state.statusMsg}
		</div>
	</div>
</div>

<style>
	.price-alert {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		padding: 1rem;
		border: 1px solid var(--color-border-primary);
		border-radius: 0.5rem;
		background-color: var(--color-background-primary);
	}

	.price-alert__title {
		margin: 0 0 0.5rem;
		font-weight: 600;
	}

	.price-alert__content {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		width: 100%;
	}

	.price-alert__price-info > * + * {
		margin-top: 0.25rem;
	}

	.price-alert__current-price {
		margin: 0;
		font-size: 0.875rem;
		color: var(--color-text-secondary);
	}

	.price-alert__target-price {
		margin: 0;
		font-size: 0.875rem;
		font-weight: 500;
	}

	.price-alert__status-badge {
		border-radius: 0.25rem;
		padding: 0.25rem 0.5rem;
		font-size: 0.75rem;
		font-weight: 500;
	}

	.price-alert__status-badge--success {
		background-color: var(--color-success-100);
		color: var(--color-success-800);
	}

	.price-alert__status-badge--monitoring {
		background-color: var(--color-primary-100);
		color: var(--color-primary-800);
	}
</style>
