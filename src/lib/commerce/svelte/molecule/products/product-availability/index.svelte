<script lang="ts">
	import { createProductAvailabilityState } from '$stylist/commerce/function/state/product-availability';
	import type { ProductAvailabilityProps } from '$stylist/commerce/function/state/product-availability';

	let props: ProductAvailabilityProps = $props();
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
			{props.stock && props.stock > 0 ? `${props.stock} item${props.stock !== 1 ? 's' : ''} available` : 'Available'}
			{#if props.location} at {props.location}{/if}
		{:else}
			Currently unavailable
			{#if props.estimatedRestock} (Expected {props.estimatedRestock}){/if}
		{/if}
	</p>

	{#if !props.available}
		<button onclick={() => state.showForm()} class={state.notifyButtonClass}>
			Notify me when available
		</button>

		{#if state.showNotificationForm}
			<div class={state.notificationFormClass}>
				<p class={state.notificationTextClass}>Enter your email to be notified when this product is back in stock.</p>
				<div class={state.formContainerClass}>
					<input type="email" placeholder="Your email" class={state.emailInputClass} />
					<button onclick={props.onNotifyMe} class={state.notifySubmitButtonClass}>Notify</button>
				</div>
			</div>
		{/if}
	{/if}
</div>
