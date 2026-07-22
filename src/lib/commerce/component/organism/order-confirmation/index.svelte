<script lang="ts">
	import type { RecipeOrderConfirmation } from '$stylist/commerce/interface/recipe/order-confirmation';
	import { PresetOrderConfirmation } from '$stylist/commerce/const/preset/order-confirmation';
	import { createOrderConfirmationState } from '$stylist/commerce/function/state/order-confirmation/index.svelte';
	import Button from '$stylist/button/component/atom/button/index.svelte';
	import Icon from '$stylist/svg/component/atom/icon/index.svelte';

	let props: RecipeOrderConfirmation = $props();
	const state = createOrderConfirmationState(props);
</script>

<div class={state.containerClass}>
	<div class={state.successClass}>
		<div class={state.successIconWrapClass}>
			<Icon name={PresetOrderConfirmation.CheckCircle} class={state.successIconClass} />
		</div>

		<h1 class={state.headerClass}>Thank you for your order!</h1>

		<p class={state.leadClass}>
			Your order <span class={state.orderIdClass}>#{props.orderId}</span> has been confirmed and is being
			processed.
		</p>
	</div>

	<div class={state.bodyClass}>
		<div class={state.orderContainerClass}>
			<div class={state.orderHeaderClass}>
				<div class={state.orderHeaderRowClass}>
					<h3 class={state.orderTitleClass}>Order #{props.orderId}</h3>

					<span class={state.statusBadgeClass}>
						<Icon name={state.statusIcon} class={state.statusIconClass} />
						{state.statusText}
					</span>
				</div>

				<p class={state.mutedClass}>Placed on {state.formattedOrderDate}</p>
			</div>

			<div class={state.contentClass}>
				<div class={state.mainGridClass}>
					<div class={state.itemsSectionClass}>
						<h4 class={state.sectionTitleClass}>Order Items</h4>

						<div class={state.itemListClass}>
							{#each props.items as item}
								<div class={state.itemClass}>
									{#if item.thumbnail}
										<img src={item.thumbnail} alt={item.name} class={state.thumbnailClass} />
									{/if}

									<div class={state.itemBodyClass}>
										<div class={state.itemRowClass}>
											<h5 class={state.itemNameClass}>{item.name}</h5>
											<p class={state.itemNameClass}>
												{state.formatCurrency(item.price * item.quantity)}
											</p>
										</div>

										{#if item.variant}
											<p class={state.mutedClass}>{item.variant}</p>
										{/if}

										<p class={state.mutedClass}>Qty: {item.quantity}</p>
									</div>
								</div>
							{/each}
						</div>
					</div>

					<div class={state.summaryClass}>
						<h4 class={state.sectionTitleClass}>Order Summary</h4>

						<dl class={state.summaryRowsClass}>
							<div class={state.summaryRowClass}>
								<dt>Subtotal</dt>
								<dd>{state.formattedSubtotal}</dd>
							</div>

							<div class={state.summaryRowClass}>
								<dt>Shipping</dt>
								<dd>{state.formattedShipping}</dd>
							</div>

							<div class={state.summaryRowClass}>
								<dt>Tax</dt>
								<dd>{state.formattedTax}</dd>
							</div>

							<div class={state.totalRowClass}>
								<dt>Total</dt>
								<dd>{state.formattedTotal}</dd>
							</div>
						</dl>
					</div>
				</div>

				<div class={state.infoGridClass}>
					<div>
						<h4 class={state.infoTitleClass}>
							<Icon name={PresetOrderConfirmation.MapPin} class={state.infoIconClass} />
							Shipping Address
						</h4>

						<div class={state.addressClass}>
							<p>{props.shippingAddress.firstName} {props.shippingAddress.lastName}</p>
							<p>{props.shippingAddress.address1}</p>
							{#if props.shippingAddress.address2}
								<p>{props.shippingAddress.address2}</p>
							{/if}
							<p>
								{props.shippingAddress.city}, {props.shippingAddress.state}
								{props.shippingAddress.zipCode}
							</p>
							<p>{props.shippingAddress.country}</p>
						</div>
					</div>

					<div>
						<h4 class={state.infoTitleClass}>
							<Icon name={PresetOrderConfirmation.CreditCard} class={state.infoIconClass} />
							Payment & Delivery
						</h4>

						<div class={state.infoStackClass}>
							<div class={state.infoRowClass}>
								<Icon name={PresetOrderConfirmation.CreditCard} class={state.infoRowIconClass} />
								<div class={state.infoRowBodyClass}>
									<p class={state.strongTextClass}>{props.paymentInfo.method}</p>
									{#if props.paymentInfo.lastFour}
										<p class={state.mutedClass}>Ending in {props.paymentInfo.lastFour}</p>
									{/if}
									<span class={state.paymentStatusBadgeClass}>
										{state.getPaymentStatusText(props.paymentInfo.status)}
									</span>
								</div>
							</div>

							{#if props.estimatedDelivery}
								<div class={state.infoRowClass}>
									<Icon name={PresetOrderConfirmation.Calendar} class={state.infoRowIconClass} />
									<div class={state.infoRowBodyClass}>
										<p class={state.strongTextClass}>Estimated Delivery</p>
										<p class={state.mutedClass}>{state.formattedEstimatedDelivery}</p>
									</div>
								</div>
							{/if}

							{#if props.trackingNumber}
								<div class={state.infoRowClass}>
									<Icon name={PresetOrderConfirmation.Truck} class={state.infoRowIconClass} />
									<div class={state.infoRowBodyClass}>
										<p class={state.strongTextClass}>Tracking Number</p>
										<p class={state.mutedClass}>{props.trackingNumber}</p>
									</div>
								</div>
							{/if}
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class={state.actionsClass}>
		<Button variant="primary" onclick={state.handleContinueShopping}>
			<Icon name={PresetOrderConfirmation.Home} class={state.buttonIconClass} />
			Continue Shopping
		</Button>

		{#if props.trackingNumber}
			<Button variant="ghost" onclick={state.handleTrackOrder}>
				<Icon name={PresetOrderConfirmation.Truck} class={state.buttonIconClass} />
				Track Order
			</Button>
		{/if}

		{#if props.showDownloadInvoice ?? true}
			<Button variant="ghost" onclick={state.handleDownloadInvoice}>
				<Icon name={PresetOrderConfirmation.Download} class={state.buttonIconClass} />
				Download Invoice
			</Button>
		{/if}

		{#if props.showShareOrder ?? true}
			<Button variant="ghost" onclick={state.handleShareOrder}>
				<Icon name={PresetOrderConfirmation.Share2} class={state.buttonIconClass} />
				Share Order
			</Button>
		{/if}
	</div>
</div>

<style>
	.order-confirmation {
		margin-right: auto;
		margin-left: auto;
		background-color: var(--color-background-primary);
		padding: 1.5rem;
	}

	.order-confirmation__success {
		text-align: center;
	}

	.order-confirmation__success-icon-wrap {
		display: flex;
		justify-content: center;
	}

	.order-confirmation__success-icon-wrap > :global(*) {
		display: flex;
		width: 4rem;
		height: 4rem;
		align-items: center;
		justify-content: center;
		border-radius: 9999px;
		background-color: var(--color-success-100);
	}

	.order-confirmation__success-icon {
		width: 2.5rem;
		height: 2.5rem;
		color: var(--color-success-600);
	}

	.order-confirmation__heading {
		margin-top: 1rem;
		font-size: 1.875rem;
		line-height: 2.25rem;
		font-weight: 700;
		color: var(--color-text-primary);
	}

	.order-confirmation__lead {
		margin-top: 1rem;
		color: var(--color-text-secondary);
	}

	.order-confirmation__order-id {
		font-weight: 500;
	}

	.order-confirmation__body {
		margin-top: 3rem;
	}

	.order-confirmation__order-container {
		overflow: hidden;
		border: 1px solid var(--color-border-primary);
		border-radius: 0.5rem;
		background-color: var(--color-background-primary);
		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
	}

	.order-confirmation__order-header,
	.order-confirmation__content {
		padding: 1.5rem;
	}

	.order-confirmation__order-header {
		border-bottom: 1px solid var(--color-border-primary);
	}

	.order-confirmation__order-header-row {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
	}

	.order-confirmation__order-title {
		font-size: 1.125rem;
		line-height: 1.5rem;
		font-weight: 500;
		color: var(--color-text-primary);
	}

	.order-confirmation__status-badge,
	.order-confirmation__payment-badge {
		display: inline-flex;
		align-items: center;
		border-radius: 9999px;
		font-weight: 500;
	}

	.order-confirmation__status-badge {
		padding: 0.25rem 0.75rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
	}

	.order-confirmation__payment-badge {
		padding: 0.125rem 0.625rem;
		font-size: 0.75rem;
		line-height: 1rem;
	}

	.order-confirmation__status-badge--delivered,
	.order-confirmation__payment-badge--paid {
		background-color: var(--color-success-100);
		color: var(--color-success-800);
	}

	.order-confirmation__status-badge--pending,
	.order-confirmation__status-badge--processing,
	.order-confirmation__payment-badge--pending {
		background-color: var(--color-warning-100);
		color: var(--color-warning-800);
	}

	.order-confirmation__status-badge--shipped {
		background-color: var(--color-info-100);
		color: var(--color-info-800);
	}

	.order-confirmation__status-badge--cancelled,
	.order-confirmation__payment-badge--failed {
		background-color: var(--color-error-100);
		color: var(--color-error-800);
	}

	.order-confirmation__status-icon,
	.order-confirmation__button-icon {
		width: 1rem;
		height: 1rem;
		margin-right: 0.5rem;
	}

	.order-confirmation__muted {
		margin-top: 0.25rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}

	.order-confirmation__main-grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: 1.5rem;
	}

	@media (min-width: 768px) {
		.order-confirmation__main-grid {
			grid-template-columns: repeat(3, minmax(0, 1fr));
		}

		.order-confirmation__items {
			grid-column: span 2 / span 2;
		}
	}

	.order-confirmation__section-title {
		margin-bottom: 1rem;
		font-size: 1rem;
		line-height: 1.5rem;
		font-weight: 500;
		color: var(--color-text-primary);
	}

	.order-confirmation__item-list > * + * {
		margin-top: 1rem;
	}

	.order-confirmation__item {
		display: flex;
		align-items: center;
	}

	.order-confirmation__thumbnail {
		width: 4rem;
		height: 4rem;
		flex-shrink: 0;
		border-radius: 0.375rem;
		object-fit: cover;
		object-position: center;
	}

	.order-confirmation__item-body {
		flex: 1 1 0%;
		margin-left: 1rem;
	}

	.order-confirmation__item-row {
		display: flex;
		align-items: baseline;
		justify-content: space-between;
	}

	.order-confirmation__item-name,
	.order-confirmation__strong-text {
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 500;
		color: var(--color-text-primary);
	}

	.order-confirmation__summary {
		border-radius: 0.5rem;
		background-color: var(--color-background-secondary);
		padding: 1rem;
	}

	.order-confirmation__summary-rows > * + * {
		margin-top: 0.75rem;
	}

	.order-confirmation__summary-row {
		display: flex;
		justify-content: space-between;
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}

	.order-confirmation__summary-row--total {
		border-top: 1px solid var(--color-border-primary);
		padding-top: 0.75rem;
		font-size: 1rem;
		line-height: 1.5rem;
		font-weight: 500;
		color: var(--color-text-primary);
	}

	.order-confirmation__info-grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: 2rem;
		margin-top: 2rem;
	}

	@media (min-width: 768px) {
		.order-confirmation__info-grid {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}

	.order-confirmation__info-title {
		display: flex;
		align-items: center;
		margin-bottom: 1rem;
		font-size: 1rem;
		line-height: 1.5rem;
		font-weight: 500;
		color: var(--color-text-primary);
	}

	.order-confirmation__info-icon {
		width: 1rem;
		height: 1rem;
		margin-right: 0.5rem;
	}

	.order-confirmation__address {
		border: 1px solid var(--color-border-primary);
		border-radius: 0.5rem;
		padding: 1rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-primary);
	}

	.order-confirmation__info-stack > * + * {
		margin-top: 0.75rem;
	}

	.order-confirmation__info-row {
		display: flex;
		align-items: flex-start;
	}

	.order-confirmation__info-row-icon {
		width: 1.25rem;
		height: 1.25rem;
		flex-shrink: 0;
		margin-top: 0.125rem;
		color: var(--color-text-tertiary);
	}

	.order-confirmation__info-row-body {
		margin-left: 0.75rem;
	}

	.order-confirmation__actions {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
		margin-top: 2rem;
	}
</style>
