<script lang="ts">
	import type { RecipeOrderTracking as OrderTrackingContract } from '$stylist/commerce/interface/recipe/order-tracking';
	import createOrderTrackingState from './state.svelte';

	let props: OrderTrackingContract = $props();
	const state = createOrderTrackingState(props);
</script>

<div class="order-tracking">
	<div class="order-tracking__header">
		<div class="_c1">
			<h2 class="order-tracking__title">SlotOrder Tracking</h2>
			<span
				class="order-tracking__status-badge"
				data-TODO="was state.StatusBadgeClasses(...) вЂ” add data-attr"
			>
				{state.trackingInfo.status}
			</span>
		</div>
		<p class="_c2">
			Tracking: {state.trackingInfo.trackingNumber} via {state.trackingInfo.carrier}
		</p>
	</div>

	<!-- Progress bar -->
	<div class="order-tracking__progress-container">
		<div class="order-tracking__progress-bar">
			<div
				class="order-tracking__progress-fill"
				style="width: {state.trackingInfo.progress}%"
			></div>
		</div>
		<p class="_c2">
			Estimated delivery: {state.formatDate(state.trackingInfo.estimatedDelivery)}
		</p>
	</div>

	<!-- RecipeTimeline -->
	<div class="order-tracking__timeline-container">
		{#each state.trackingInfo.events as event}
			{@const eventStatus = state.getEventStatus(event.status, state.trackingInfo.status)}
			<div class="order-tracking__timeline-item">
				<div
					class="order-tracking__timeline-indicator"
					data-TODO="was state.TimelineIndicatorClasses(...) вЂ” add data-attr"
				></div>
				<div class="order-tracking__timeline-content">
					<p class="order-tracking__event-title">{event.description}</p>
					{#if event.location}
						<p class="order-tracking__event-description">{event.location}</p>
					{/if}
					<p class="order-tracking__event-date">{state.formatDate(event.timestamp)}</p>
				</div>
			</div>
		{/each}
	</div>

	<!-- Shipping info -->
	{#if props.showRecipientDetails !== false}
		<div class="order-tracking__shipping-info">
			<p class="_c3">Shipping Address</p>
			<p class="order-tracking__address">{state.trackingInfo.shippingAddress}</p>
			{#if state.trackingInfo.recipientName}
				<p class="order-tracking__address">{state.trackingInfo.recipientName}</p>
			{/if}
		</div>
	{/if}

	{#if props.showDeliveryNotes !== false && state.trackingInfo.deliveryNotes}
		<div class="_c4">
			<p class="_c5">Delivery Notes</p>
			<p class="_c6">{state.trackingInfo.deliveryNotes}</p>
		</div>
	{/if}

	<!-- Actions -->
	<div class="order-tracking__actions-container">
		{#if props.showContactCarrier !== false && props.onContactCarrier}
			<button
				onclick={props.onContactCarrier}
				class="order-tracking__action-button"
				data-TODO="was state.ActionButtonClasses(...) вЂ” add data-attr"
			>
				Contact Carrier
			</button>
		{/if}
		{#if props.showReportIssue !== false && props.onReportIssue}
			<button
				onclick={props.onReportIssue}
				class="order-tracking__action-button"
				data-TODO="was state.ActionButtonClasses(...) вЂ” add data-attr"
			>
				Report Issue
			</button>
		{/if}
	</div>
</div>

<style>
	._c1 {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	._c2 {
		margin-top: 0.25rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}
	._c3 {
		margin-bottom: 0.5rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 500;
		color: var(--color-text-primary);
	}
	._c4 {
		border-top-width: 1px;
		border-style: solid;
		border-color: var(--color-border-secondary);
		padding-left: 1.5rem;
		padding-right: 1.5rem;
		padding-top: 1rem;
		padding-bottom: 1rem;
	}
	._c5 {
		margin-bottom: 0.25rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 500;
		color: var(--color-text-primary);
	}
	._c6 {
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}

	.order-tracking {
		background-color: var(--color-background-primary);
		border-radius: 0.5rem;
		box-shadow:
			0 1px 3px 0 rgb(0 0 0 / 0.1),
			0 1px 2px -1px rgb(0 0 0 / 0.1);
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-secondary);
	}

	.order-tracking__header {
		border-bottom-width: 1px;
		border-style: solid;
		padding-left: 1.5rem;
		padding-right: 1.5rem;
		padding-top: 1rem;
		padding-bottom: 1rem;
	}

	.order-tracking__title {
		font-size: 1.125rem;
		line-height: 1.75rem;
		font-weight: 500;
		color: var(--color-text-primary);
	}

	.order-tracking__progress-container {
		padding: 1.5rem;
	}

	.order-tracking__progress-bar {
		width: 100%;
		background-color: var(--color-background-tertiary);
		border-radius: 9999px;
		height: 0.5rem;
	}

	.order-tracking__progress-fill {
		background-color: var(--color-primary-600);
		height: 0.5rem;
		border-radius: 9999px;
		transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
		transition-duration: 300ms;
	}

	.order-tracking__timeline-container {
		margin-top: 1.5rem;
	}

	.order-tracking__timeline-item {
		display: flex;
		align-items: flex-start;
		padding-bottom: 1.5rem;
		position: relative;
	}

	.order-tracking__timeline-indicator {
		width: 1rem;
		height: 1rem;
		border-radius: 9999px;
		margin-top: 0.25rem;
		background-color: var(--color-success-600);
	}

	.order-tracking__timeline-content {
		margin-left: 1rem;
		flex: 1 1 0%;
	}

	.order-tracking__event-title {
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 500;
		color: var(--color-text-primary);
	}

	.order-tracking__event-description {
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}

	.order-tracking__event-date {
		font-size: 0.75rem;
		line-height: 1rem;
		color: var(--color-text-tertiary);
	}

	.order-tracking__shipping-info {
		padding: 1rem;
		background-color: var(--color-background-secondary);
		border-radius: 0.5rem;
	}

	.order-tracking__address {
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-primary);
	}

	.order-tracking__actions-container {
		margin-top: 1.5rem;
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	.order-tracking__action-button {
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
	}
	.order-tracking__action-button:focus {
		outline: 2px solid transparent;
		outline-offset: 2px;
		box-shadow: 0 0 0 2px rgb(59 130 246 / 0.5);
	}

	.order-tracking__status-badge {
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

	/* --- migrated from StyleManager --- */

	.order-tracking {
		background-color: var(--color-background-primary);
		border-radius: 0.5rem;
		box-shadow:
			0 1px 3px 0 rgb(0 0 0 / 0.1),
			0 1px 2px -1px rgb(0 0 0 / 0.1);
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-secondary);
	}

	.order-tracking__header {
		border-bottom-width: 1px;
		border-style: solid;
		padding-left: 1.5rem;
		padding-right: 1.5rem;
		padding-top: 1rem;
		padding-bottom: 1rem;
	}

	.order-tracking__title {
		font-size: 1.125rem;
		line-height: 1.75rem;
		font-weight: 500;
		color: var(--color-text-primary);
	}

	.order-tracking__progress-container {
		padding: 1.5rem;
	}

	.order-tracking__progress-bar {
		width: 100%;
		background-color: var(--color-background-tertiary);
		border-radius: 9999px;
		height: 0.5rem;
	}

	.order-tracking__progress-fill {
		background-color: var(--color-primary-600);
		height: 0.5rem;
		border-radius: 9999px;
		transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
		transition-duration: 300ms;
	}

	.order-tracking__timeline-container {
		margin-top: 1.5rem;
	}

	.order-tracking__timeline-item {
		display: flex;
		align-items: flex-start;
		padding-bottom: 1.5rem;
		position: relative;
	}

	.order-tracking__timeline-indicator {
		width: 1rem;
		height: 1rem;
		border-radius: 9999px;
		margin-top: 0.25rem;
		background-color: var(--color-success-600);
	}

	.order-tracking__timeline-content {
		margin-left: 1rem;
		flex: 1 1 0%;
	}

	.order-tracking__event-title {
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 500;
		color: var(--color-text-primary);
	}

	.order-tracking__event-description {
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}

	.order-tracking__event-date {
		font-size: 0.75rem;
		line-height: 1rem;
		color: var(--color-text-tertiary);
	}

	.order-tracking__shipping-info {
		padding: 1rem;
		background-color: var(--color-background-secondary);
		border-radius: 0.5rem;
	}

	.order-tracking__address {
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-primary);
	}

	.order-tracking__actions-container {
		margin-top: 1.5rem;
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	.order-tracking__action-button {
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
	}
	.order-tracking__action-button:focus {
		outline: 2px solid transparent;
		outline-offset: 2px;
		box-shadow: 0 0 0 2px rgb(59 130 246 / 0.5);
	}

	.order-tracking__status-badge {
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
