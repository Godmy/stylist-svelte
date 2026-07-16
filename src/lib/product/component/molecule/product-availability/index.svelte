<script lang="ts">
	import type { RecipeProductAvailability } from '$stylist/product/interface/recipe/product-availability';
	import { createProductAvailabilityState } from '$stylist/product/function/state/product-availability/index.svelte';

	let props: RecipeProductAvailability = $props();
	const state = createProductAvailabilityState(props);
</script>

<div class={state.containerClass}>
	<div class={state.headerClass}>
		<h3 class={state.titleClass}>Availability</h3>
		<span class={state.statusBadgeClass}>
			{props.available ? 'In Stock' : 'Out of Stock'}
		</span>
	</div>

	<p class={state.descriptionClass}>
		{#if props.available}
			{props.stock && props.stock > 0
				? `${props.stock} item${props.stock !== 1 ? 's' : ''} available`
				: 'Available'}
			{#if props.location}
				at {props.location}{/if}
		{:else}
			Currently unavailable
			{#if props.estimatedRestock}
				(Expected {props.estimatedRestock}){/if}
		{/if}
	</p>

	{#if !props.available}
		<button onclick={() => state.showForm()} class={state.notifyButtonClass}>
			Notify me when available
		</button>

		{#if state.showNotificationForm}
			<div class={state.notificationFormClass}>
				<p class={state.notificationTextClass}>
					Enter your email to be notified when this product is back in stock.
				</p>
				<div class={state.formContainerClass}>
					<input type="email" placeholder="Your email" class={state.emailInputClass} />
					<button onclick={props.onNotifyMe} class={state.notifySubmitButtonClass}>Notify</button>
				</div>
			</div>
		{/if}
	{/if}
</div>

<style>
	.product-availability {
		border-radius: 0.5rem;
		border-width: 1px;
		border-style: solid;
		padding: 1rem;
	}

	.product-availability__header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 0.5rem;
	}

	.product-availability__title {
		font-weight: 600;
		color: var(--color-text-primary);
	}

	.product-availability__status-badge {
		border-radius: 9999px;
		padding-left: 0.5rem;
		padding-right: 0.5rem;
		padding-top: 0.25rem;
		padding-bottom: 0.25rem;
		font-size: 0.75rem;
		line-height: 1rem;
		font-weight: 500;
	}

	.product-availability__status-badge--available {
		background-color: var(--color-success-100);
		color: var(--color-success-800);
	}

	.product-availability__status-badge--unavailable {
		background-color: var(--color-warning-100);
		color: var(--color-warning-800);
	}

	.product-availability__description {
		margin-bottom: 0.5rem;
		color: var(--color-text-secondary);
	}

	.product-availability__notify-button {
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 500;
		color: var(--color-primary-600);
	}
	.product-availability__notify-button:hover {
		color: var(--color-primary-700);
	}

	.product-availability__notification-form {
		margin-top: 0.75rem;
		border-radius: 0.25rem;
		background-color: var(--color-primary-50);
		padding: 0.75rem;
	}

	.product-availability__notification-text {
		margin-bottom: 0.5rem;
		color: var(--color-text-secondary);
	}

	.product-availability__form-container {
		display: flex;
	}

	.product-availability__email-input {
		flex: 1 1 0%;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		padding-left: 0.75rem;
		padding-right: 0.75rem;
		padding-top: 0.5rem;
		padding-bottom: 0.5rem;
	}
	.product-availability__email-input:focus {
		outline: 2px solid transparent;
		outline-offset: 2px;
		box-shadow: 0 0 0 3px var(--color-primary-500);
	}

	.product-availability__notify-submit-button {
		background-color: var(--color-primary-500);
		padding-left: 1rem;
		padding-right: 1rem;
		padding-top: 0.5rem;
		padding-bottom: 0.5rem;
		color: var(--color-text-inverse);
	}
	.product-availability__notify-submit-button:hover {
		background-color: var(--color-primary-600);
	}
</style>
