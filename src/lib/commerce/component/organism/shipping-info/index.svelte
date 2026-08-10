<script lang="ts">
	import type { RecipeShippingInfo as ShippingInfoContract } from '$stylist/commerce/interface/recipe/shipping-info';
	import stateFn from './state.svelte';

	let props: ShippingInfoContract = $props();
	const state = stateFn(props);
</script>

<div class="shipping-info">
	<header class="shipping-info__header">
		<h3 class="shipping-info__title">Shipping Information</h3>
	</header>

	{#if props.showOptions !== false}
		<section class="shipping-info__options-container">
			{#each state.options as option}
				<button
					type="button"
					class={`shipping-info__option ${state.selectedOptionId === option.id ? 'si-option--selected' : ''}`}
					disabled={option.disabled}
					onclick={() => state.handleOptionSelect(option)}
				>
					<div class="_c1">
						<div>
							<p class="shipping-info__option-name">{option.name}</p>
							<p class="shipping-info__option-description">{option.description}</p>
						</div>
						<div class="_c2">
							<p class="shipping-info__option-price">{state.formatPrice(option.price)}</p>
							<p class="shipping-info__delivery-time">
								{state.formatDelivery(option.estimatedDays)}
							</p>
						</div>
					</div>
				</button>
			{/each}
		</section>
	{/if}

	{#if props.showRegions && state.regions.length}
		<section class="shipping-info__regions-container">
			<h4 class="shipping-info__region-name">Regions</h4>
			{#each state.regions as region}
				<article class="shipping-info__region-item">
					<p class="shipping-info__region-name">{region.name}</p>
					<p class="shipping-info__countries-list">{region.countries.join(', ')}</p>
					{#if props.showRestrictions && region.restrictions?.length}
						<p class="shipping-info__shipping-detail-value">{region.restrictions.join(', ')}</p>
					{/if}
				</article>
			{/each}
		</section>
	{/if}

	<section class="shipping-info__shipping-details-container">
		{#if props.showDeliveryEstimate && props.deliveryEstimate}
			<div class="shipping-info__shipping-detail-item">
				<span class="shipping-info__shipping-detail-label">Estimated Delivery</span>
				<span class="shipping-info__shipping-detail-value">
					{new Intl.DateTimeFormat('en-US', { dateStyle: 'medium' }).format(props.deliveryEstimate)}
				</span>
			</div>
		{/if}

		{#if props.showFreeShipping && props.freeShippingThreshold !== undefined}
			<div class="shipping-info__shipping-detail-item">
				<span class="shipping-info__shipping-detail-label">Free Shipping Threshold</span>
				<span class="shipping-info__shipping-detail-value"
					>{state.formatPrice(props.freeShippingThreshold)}</span
				>
			</div>
		{/if}
	</section>
</div>

<style>
	._c1 {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		gap: 1rem;
	}
	._c2 {
		text-align: right;
	}

	.shipping-info {
		background-color: var(--color-background-primary);
		border-radius: 0.5rem;
		box-shadow:
			0 1px 3px 0 rgb(0 0 0 / 0.1),
			0 1px 2px -1px rgb(0 0 0 / 0.1);
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-secondary);
	}

	.shipping-info__header {
		border-bottom-width: 1px;
		border-style: solid;
		padding-left: 1.5rem;
		padding-right: 1.5rem;
		padding-top: 1rem;
		padding-bottom: 1rem;
	}

	.shipping-info__title {
		font-size: 1.125rem;
		line-height: 1.75rem;
		font-weight: 500;
		color: var(--color-text-primary);
	}

	.shipping-info__options-container {
		padding: 1.5rem;
	}
	.shipping-info__options-container > * + * {
		margin-top: 1rem;
	}

	.shipping-info__option {
		border-width: 1px;
		border-style: solid;
		border-radius: 0.5rem;
		padding: 1rem;
	}

	.shipping-info__option-name {
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 500;
		color: var(--color-text-primary);
	}

	.shipping-info__option-description {
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}

	.shipping-info__option-price {
		font-size: 1.125rem;
		line-height: 1.75rem;
		font-weight: 600;
		color: var(--color-text-primary);
	}

	.shipping-info__delivery-time {
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}

	.shipping-info__regions-container {
		margin-top: 1.5rem;
		border-top-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		padding-top: 1.5rem;
	}

	.shipping-info__region-item {
		padding: 1rem;
		border-width: 1px;
		border-style: solid;
		border-radius: 0.5rem;
		margin-bottom: 0.75rem;
	}

	.shipping-info__region-name {
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 500;
		color: var(--color-text-primary);
	}

	.shipping-info__countries-list {
		margin-top: 0.5rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}

	.shipping-info__shipping-details-container {
		margin-top: 1.5rem;
		background-color: var(--color-background-secondary);
		border-radius: 0.5rem;
		padding: 1rem;
	}

	.shipping-info__shipping-detail-item {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-top: 0.5rem;
		padding-bottom: 0.5rem;
	}

	.shipping-info__shipping-detail-label {
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}

	.shipping-info__shipping-detail-value {
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 500;
		color: var(--color-text-primary);
	}

	.shipping-info__free-shipping-badge {
		display: inline-flex;
		align-items: center;
		padding-left: 0.75rem;
		padding-right: 0.75rem;
		padding-top: 0.25rem;
		padding-bottom: 0.25rem;
		border-radius: 9999px;
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 500;
		background-color: var(--color-success-100);
		color: var(--color-success-800);
	}

	.shipping-info__icon {
		height: 1.25rem;
		width: 1.25rem;
		margin-right: 0.5rem;
	}

	.shipping-info__free-shipping-progress {
		width: 100%;
		background-color: var(--color-background-tertiary);
		border-radius: 9999px;
		height: 0.5rem;
		margin-top: 0.5rem;
	}

	.shipping-info__free-shipping-progress-fill {
		background-color: var(--color-success-600);
		height: 0.5rem;
		border-radius: 9999px;
		transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
		transition-duration: 300ms;
	}

	/* --- migrated from StyleManager --- */

	.shipping-info {
		background-color: var(--color-background-primary);
		border-radius: 0.5rem;
		box-shadow:
			0 1px 3px 0 rgb(0 0 0 / 0.1),
			0 1px 2px -1px rgb(0 0 0 / 0.1);
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-secondary);
	}

	.shipping-info__header {
		border-bottom-width: 1px;
		border-style: solid;
		padding-left: 1.5rem;
		padding-right: 1.5rem;
		padding-top: 1rem;
		padding-bottom: 1rem;
	}

	.shipping-info__title {
		font-size: 1.125rem;
		line-height: 1.75rem;
		font-weight: 500;
		color: var(--color-text-primary);
	}

	.shipping-info__options-container {
		padding: 1.5rem;
	}
	.shipping-info__options-container > * + * {
		margin-top: 1rem;
	}

	.shipping-info__option {
		border-width: 1px;
		border-style: solid;
		border-radius: 0.5rem;
		padding: 1rem;
	}

	.shipping-info__option-name {
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 500;
		color: var(--color-text-primary);
	}

	.shipping-info__option-description {
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}

	.shipping-info__option-price {
		font-size: 1.125rem;
		line-height: 1.75rem;
		font-weight: 600;
		color: var(--color-text-primary);
	}

	.shipping-info__delivery-time {
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}

	.shipping-info__regions-container {
		margin-top: 1.5rem;
		border-top-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		padding-top: 1.5rem;
	}

	.shipping-info__region-item {
		padding: 1rem;
		border-width: 1px;
		border-style: solid;
		border-radius: 0.5rem;
		margin-bottom: 0.75rem;
	}

	.shipping-info__region-name {
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 500;
		color: var(--color-text-primary);
	}

	.shipping-info__countries-list {
		margin-top: 0.5rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}

	.shipping-info__shipping-details-container {
		margin-top: 1.5rem;
		background-color: var(--color-background-secondary);
		border-radius: 0.5rem;
		padding: 1rem;
	}

	.shipping-info__shipping-detail-item {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-top: 0.5rem;
		padding-bottom: 0.5rem;
	}

	.shipping-info__shipping-detail-label {
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}

	.shipping-info__shipping-detail-value {
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 500;
		color: var(--color-text-primary);
	}

	.shipping-info__free-shipping-badge {
		display: inline-flex;
		align-items: center;
		padding-left: 0.75rem;
		padding-right: 0.75rem;
		padding-top: 0.25rem;
		padding-bottom: 0.25rem;
		border-radius: 9999px;
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 500;
		background-color: var(--color-success-100);
		color: var(--color-success-800);
	}

	.shipping-info__icon {
		height: 1.25rem;
		width: 1.25rem;
		margin-right: 0.5rem;
	}

	.shipping-info__free-shipping-progress {
		width: 100%;
		background-color: var(--color-background-tertiary);
		border-radius: 9999px;
		height: 0.5rem;
		margin-top: 0.5rem;
	}

	.shipping-info__free-shipping-progress-fill {
		background-color: var(--color-success-600);
		height: 0.5rem;
		border-radius: 9999px;
		transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
		transition-duration: 300ms;
	}
	.si-option--selected {
		box-shadow: 0 0 0 2px var(--color-border-primary);
	}
</style>
