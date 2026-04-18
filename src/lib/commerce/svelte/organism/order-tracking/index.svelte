<script lang="ts">
	import type { RecipeOrderTracking as OrderTrackingContract } from '$stylist/commerce/interface/recipe/order-tracking';
	import { createOrderTrackingState } from '$stylist/commerce/function/state/order-tracking';

	let props: OrderTrackingContract = $props();
	const state = createOrderTrackingState(props);
</script>

<div class={state.containerClasses}>
	<div class={state.headerClasses}>
		<div class="flex items-center justify-between">
			<h2 class={state.titleClasses}>SlotOrder Tracking</h2>
			<span class={state.getStatusBadgeClasses(state.trackingInfo.status)}>
				{state.trackingInfo.status}
			</span>
		</div>
		<p class="text-sm text-[--color-text-secondary] mt-1">
			Tracking: {state.trackingInfo.trackingNumber} via {state.trackingInfo.carrier}
		</p>
	</div>

	<!-- Progress bar -->
	<div class={state.progressContainerClasses}>
		<div class={state.progressBarClasses}>
			<div
				class={state.progressFillClasses}
				style="width: {state.trackingInfo.progress}%"
			></div>
		</div>
		<p class="text-sm text-[--color-text-secondary] mt-1">
			Estimated delivery: {state.formatDate(state.trackingInfo.estimatedDelivery)}
		</p>
	</div>

	<!-- RecipeTimeline -->
	<div class={state.timelineContainerClasses}>
		{#each state.trackingInfo.events as event}
			{@const eventStatus = state.getEventStatus(event.status, state.trackingInfo.status)}
			<div class={state.timelineItemClasses}>
				<div class={state.getTimelineIndicatorClasses(eventStatus)}></div>
				<div class={state.timelineContentClasses}>
					<p class={state.eventTitleClasses}>{event.description}</p>
					{#if event.location}
						<p class={state.eventDescriptionClasses}>{event.location}</p>
					{/if}
					<p class={state.eventDateClasses}>{state.formatDate(event.timestamp)}</p>
				</div>
			</div>
		{/each}
	</div>

	<!-- Shipping info -->
	{#if props.showRecipientDetails !== false}
		<div class={state.shippingInfoClasses}>
			<p class="text-sm font-medium text-[--color-text-primary] mb-2">Shipping Address</p>
			<p class={state.addressClasses}>{state.trackingInfo.shippingAddress}</p>
			{#if state.trackingInfo.recipientName}
				<p class={state.addressClasses}>{state.trackingInfo.recipientName}</p>
			{/if}
		</div>
	{/if}

	{#if props.showDeliveryNotes !== false && state.trackingInfo.deliveryNotes}
		<div class="px-6 py-4 border-t border-[--color-border-secondary]">
			<p class="text-sm font-medium text-[--color-text-primary] mb-1">Delivery Notes</p>
			<p class="text-sm text-[--color-text-secondary]">{state.trackingInfo.deliveryNotes}</p>
		</div>
	{/if}

	<!-- Actions -->
	<div class={state.actionsContainerClasses}>
		{#if props.showContactCarrier !== false && props.onContactCarrier}
			<button onclick={props.onContactCarrier} class={state.getActionButtonClasses('secondary')}>
				Contact Carrier
			</button>
		{/if}
		{#if props.showReportIssue !== false && props.onReportIssue}
			<button onclick={props.onReportIssue} class={state.getActionButtonClasses('secondary')}>
				Report Issue
			</button>
		{/if}
	</div>
</div>
