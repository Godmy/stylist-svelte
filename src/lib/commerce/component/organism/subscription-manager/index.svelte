<script lang="ts">
	import type { RecipeSubscriptionManager as SubscriptionManagerContract } from '$stylist/commerce/interface/recipe/subscription-manager';
	import stateFn from './state.svelte';

	let props: SubscriptionManagerContract = $props();
	const state = stateFn(props);
</script>

<div class="subscription-manager">
	<header class="subscription-manager__header">
		<div>
			<h3 class="subscription-manager__title">{props.title ?? 'SlotSubscription Manager'}</h3>
			{#if props.subtitle}
				<p class="subscription-manager__subtitle">{props.subtitle}</p>
			{/if}
		</div>
		<span
			class="subscription-manager__status-badge"
			data-TODO="was state.StatusBadgeClasses(...) вЂ” add data-attr"
			>{state.subscription.status}</span
		>
	</header>

	<section class="subscription-manager__plan-container">
		<div class="_c1">
			<div>
				<h4 class="subscription-manager__plan-name">{state.subscription.plan.name}</h4>
				<p class="subscription-manager__plan-description">{state.subscription.plan.description}</p>
			</div>
			<div class="subscription-manager__plan-price">
				{state.formatPrice(state.subscription.plan.price, state.subscription.plan.currency)}
				<span class="subscription-manager__plan-price-period"
					>/{state.subscription.plan.period}</span
				>
			</div>
		</div>

		<div class="subscription-manager__features-list">
			{#each state.subscription.plan.features as feature}
				<div class="subscription-manager__feature-item">
					<span class="subscription-manager__feature-text">{feature}</span>
				</div>
			{/each}
		</div>
	</section>

	{#if props.showBillingInfo !== false}
		<section class="subscription-manager__billing-info">
			<div class="_c2">
				<span class="subscription-manager__billing-info-label">Started</span>
				<span class="subscription-manager__billing-info-value"
					>{state.formatDate(state.subscription.startDate)}</span
				>
			</div>
			{#if state.subscription.nextBillingDate}
				<div class="_c2">
					<span class="subscription-manager__billing-info-label">Next Billing</span>
					<span class="subscription-manager__billing-info-value"
						>{state.formatDate(state.subscription.nextBillingDate)}</span
					>
				</div>
			{/if}
			{#if props.showPaymentMethod && state.subscription.paymentMethod}
				<div class="_c2">
					<span class="subscription-manager__billing-info-label">Payment Method</span>
					<span class="subscription-manager__billing-info-value"
						>{state.subscription.paymentMethod}</span
					>
				</div>
			{/if}
		</section>
	{/if}

	{#if props.showActions !== false}
		<div class="subscription-manager__actions-container">
			<button
				type="button"
				class="subscription-manager__action-button"
				data-TODO="was state.ActionButtonClasses(...) вЂ” add data-attr"
				onclick={props.onUpgrade}>Upgrade</button
			>
			<button
				type="button"
				class="subscription-manager__action-button"
				data-TODO="was state.ActionButtonClasses(...) вЂ” add data-attr"
				onclick={props.onPause}>Pause</button
			>
			<button
				type="button"
				class="subscription-manager__action-button"
				data-TODO="was state.ActionButtonClasses(...) вЂ” add data-attr"
				onclick={props.onCancel}>Cancel</button
			>
		</div>
	{/if}
</div>

<style>
	._c1 {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		gap: 1rem;
	}
	._c2 {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
	}

	.subscription-manager {
		background-color: var(--color-background-primary);
		border-radius: 0.5rem;
		box-shadow:
			0 1px 3px 0 rgb(0 0 0 / 0.1),
			0 1px 2px -1px rgb(0 0 0 / 0.1);
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-secondary);
	}

	.subscription-manager__header {
		border-bottom-width: 1px;
		border-style: solid;
		padding-left: 1.5rem;
		padding-right: 1.5rem;
		padding-top: 1rem;
		padding-bottom: 1rem;
	}

	.subscription-manager__title {
		font-size: 1.125rem;
		line-height: 1.75rem;
		font-weight: 500;
		color: var(--color-text-primary);
	}

	.subscription-manager__subtitle {
		margin-top: 0.25rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}

	.subscription-manager__plan-container {
		padding: 1.5rem;
	}

	.subscription-manager__plan-name {
		font-size: 1.25rem;
		line-height: 1.75rem;
		font-weight: 700;
		color: var(--color-text-primary);
	}

	.subscription-manager__plan-description {
		margin-top: 0.5rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}

	.subscription-manager__plan-price {
		margin-top: 1rem;
		font-size: 1.875rem;
		line-height: 2.25rem;
		font-weight: 700;
		color: var(--color-text-primary);
	}

	.subscription-manager__plan-price-period {
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 400;
		color: var(--color-text-secondary);
	}

	.subscription-manager__features-list {
		margin-top: 1.5rem;
	}
	.subscription-manager__features-list > * + * {
		margin-top: 0.75rem;
	}

	.subscription-manager__feature-item {
		display: flex;
		align-items: flex-start;
	}

	.subscription-manager__feature-text {
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-primary);
	}

	.subscription-manager__actions-container {
		margin-top: 1.5rem;
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	.subscription-manager__action-button {
		display: inline-flex;
		align-items: center;
		padding-left: 1rem;
		padding-right: 1rem;
		padding-top: 0.5rem;
		padding-bottom: 0.5rem;
		border-radius: 0.375rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 500;
		background-color: var(--color-primary-600);
		color: var(--color-text-inverse);
	}
	.subscription-manager__action-button:focus {
		outline: 2px solid transparent;
		outline-offset: 2px;
		box-shadow: 0 0 0 3px var(--color-primary-500);
	}
	.subscription-manager__action-button:hover {
		background-color: var(--color-primary-700);
	}

	.subscription-manager__status-badge {
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

	.subscription-manager__billing-info {
		margin-top: 1.5rem;
		padding-top: 1.5rem;
		border-top-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
	}

	.subscription-manager__billing-info-label {
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 500;
		color: var(--color-text-primary);
	}

	.subscription-manager__billing-info-value {
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}
</style>
