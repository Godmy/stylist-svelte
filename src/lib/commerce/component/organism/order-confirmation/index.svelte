<script lang="ts">
	import type { OrderConfirmationProps as Props } from '$stylist/commerce/type/struct/order-confirmation-props';
	import createOrderConfirmationState from '$stylist/commerce/function/state/order-confirmation/index.svelte';
	import Button from '$stylist/control/component/atom/button/index.svelte';
	import BaseIcon from '$stylist/media/component/atom/icon/index.svelte';
	import { OrderConfirmationStyleManager } from '$stylist/commerce/class/style-manager/order-confirmation';

	const CheckCircle = 'check-circle';
	const Package = 'package';
	const Truck = 'truck';
	const Calendar = 'calendar';
	const CreditCard = 'credit-card';
	const MapPin = 'map-pin';
	const User = 'user';
	const Mail = 'mail';
	const Phone = 'phone';
	const Download = 'download';
	const Share2 = 'share-2';
	const Home = 'home';
	const X = 'x';

	let props: Props = $props();
	const state = createOrderConfirmationState(props);
</script>

<div
	class={`c-order-confirmation ${OrderConfirmationStyleManager.getBaseClasses(props.class ?? '')}`}
	{...props}
>
	<div class={OrderConfirmationStyleManager.getContainerClasses()}>
		<div class="text-center">
			<div class="flex justify-center">
				<div class="flex h-16 w-16 items-center justify-center rounded-full bg-[--color-green-100]">
					<BaseIcon name={CheckCircle} class="h-10 w-10 text-[--color-green-600]" />
				</div>
			</div>

			<h1 class={OrderConfirmationStyleManager.getHeaderClasses(props.headerClass ?? '')}>
				Thank you for your order!
			</h1>

			<p class="mt-4 text-[--color-gray-600]">
				Your order <span class="font-medium">#{props.orderId}</span> has been confirmed and is being
				processed
			</p>
		</div>

		<div class="mt-12">
			<div class={OrderConfirmationStyleManager.getOrderContainerClasses()}>
				<div class={OrderConfirmationStyleManager.getOrderHeaderClasses()}>
					<div class="flex flex-wrap items-center justify-between gap-4">
						<h3 class="text-lg leading-6 font-medium text-[--color-gray-900]">
							SlotOrder #{props.orderId}
						</h3>

						<span
							class={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${state.orderStatusConfig.color}`}
						>
							<BaseIcon name={state.orderStatusConfig.icon} class="mr-1 h-4 w-4" />
							{state.orderStatusConfig.text}
						</span>
					</div>

					<p class="mt-1 text-sm text-[--color-gray-500]">
						Placed on {state.formattedOrderDate}
					</p>
				</div>

				<div class={OrderConfirmationStyleManager.getOrderContentClasses()}>
					<div class={OrderConfirmationStyleManager.getMainGridClasses()}>
						<!-- SlotOrder items -->
						<div class="md:col-span-2">
							<h4 class="text-md mb-4 font-medium text-[--color-gray-900]">SlotOrder Items</h4>

							<div class="space-y-4">
								{#each props.items as item}
									<div class="flex items-center">
										{#if item.thumbnail}
											<img
												src={item.thumbnail}
												alt={item.name}
												class="h-16 w-16 flex-shrink-0 rounded-md object-cover object-center"
											/>
										{/if}

										<div class="ml-4 flex-1">
											<div class="flex items-baseline justify-between">
												<h5 class="text-sm font-medium text-[--color-gray-900]">{item.name}</h5>
												<p class="text-sm font-medium text-[--color-gray-900]">
													{new Intl.NumberFormat(props.locale ?? 'en-US', {
														style: 'currency',
														currency: props.currency ?? 'USD'
													}).format(item.price * item.quantity)}
												</p>
											</div>

											{#if item.variant}
												<p class="mt-1 text-sm text-[--color-gray-500]">{item.variant}</p>
											{/if}

											<p class="mt-1 text-sm text-[--color-gray-500]">Qty: {item.quantity}</p>
										</div>
									</div>
								{/each}
							</div>
						</div>

						<!-- SlotOrder summary -->
						<div
							class={OrderConfirmationStyleManager.getOrderDetailsClasses(props.summaryClass ?? '')}
						>
							<h4 class="text-md mb-4 font-medium text-[--color-gray-900]">SlotOrder Summary</h4>

							<div class="space-y-3">
								<div class="flex justify-between text-sm text-[--color-gray-600]">
									<dt>Subtotal</dt>
									<dd>{state.formattedSubtotal}</dd>
								</div>

								<div class="flex justify-between text-sm text-[--color-gray-600]">
									<dt>Shipping</dt>
									<dd>{state.formattedShipping}</dd>
								</div>

								<div class="flex justify-between text-sm text-[--color-gray-600]">
									<dt>Tax</dt>
									<dd>{state.formattedTax}</dd>
								</div>

								<div
									class="flex justify-between border-t border-[--color-gray-200] pt-3 text-base font-medium text-[--color-gray-900]"
								>
									<dt>Total</dt>
									<dd>{state.formattedTotal}</dd>
								</div>
							</div>
						</div>
					</div>

					<!-- Shipping and payment info -->
					<div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
						<!-- Shipping address -->
						<div>
							<h4 class="text-md mb-4 flex items-center font-medium text-[--color-gray-900]">
								<BaseIcon name={MapPin} class="mr-2 h-4 w-4" />
								Shipping Address
							</h4>

							<div
								class={OrderConfirmationStyleManager.getShippingAddressClasses(
									props.addressClass ?? ''
								)}
							>
								<p class="text-sm text-[--color-gray-900]">
									{props.shippingAddress.firstName}
									{props.shippingAddress.lastName}
								</p>
								<p class="text-sm text-[--color-gray-900]">{props.shippingAddress.address1}</p>
								{#if props.shippingAddress.address2}
									<p class="text-sm text-[--color-gray-900]">{props.shippingAddress.address2}</p>
								{/if}
								<p class="text-sm text-[--color-gray-900]">
									{props.shippingAddress.city}, {props.shippingAddress.state}
									{props.shippingAddress.zipCode}
								</p>
								<p class="text-sm text-[--color-gray-900]">{props.shippingAddress.country}</p>
							</div>
						</div>

						<!-- Payment and delivery info -->
						<div>
							<h4 class="text-md mb-4 flex items-center font-medium text-[--color-gray-900]">
								<BaseIcon name={CreditCard} class="mr-2 h-4 w-4" />
								Payment & Delivery
							</h4>

							<div class="space-y-3">
								<div class="flex items-start">
									<BaseIcon
										name={CreditCard}
										class="mt-0.5 h-5 w-5 flex-shrink-0 text-[--color-gray-400]"
									/>
									<div class="ml-3">
										<p class="text-sm font-medium text-[--color-gray-900] capitalize">
											{props.paymentInfo.method}
										</p>
										{#if props.paymentInfo.lastFour}
											<p class="text-sm text-[--color-gray-500]">
												Ending in {props.paymentInfo.lastFour}
											</p>
										{/if}
										<span
											class={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
												props.paymentInfo.status === 'paid'
													? OrderConfirmationStyleManager.getPaymentStatusClasses('paid')
													: props.paymentInfo.status === 'pending'
														? OrderConfirmationStyleManager.getPaymentStatusClasses('pending')
														: OrderConfirmationStyleManager.getPaymentStatusClasses('failed')
											}`}
										>
											{props.paymentInfo.status === 'paid'
												? 'Paid'
												: props.paymentInfo.status === 'pending'
													? 'Pending'
													: 'Failed'}
										</span>
									</div>
								</div>

								{#if props.estimatedDelivery}
									<div class="flex items-start">
										<BaseIcon
											name={Calendar}
											class="mt-0.5 h-5 w-5 flex-shrink-0 text-[--color-gray-400]"
										/>
										<div class="ml-3">
											<p class="text-sm font-medium text-[--color-gray-900]">Estimated Delivery</p>
											<p class="text-sm text-[--color-gray-500]">
												{state.formattedEstimatedDelivery}
											</p>
										</div>
									</div>
								{/if}

								{#if props.trackingNumber}
									<div class="flex items-start">
										<BaseIcon
											name={Truck}
											class="mt-0.5 h-5 w-5 flex-shrink-0 text-[--color-gray-400]"
										/>
										<div class="ml-3">
											<p class="text-sm font-medium text-[--color-gray-900]">Tracking Number</p>
											<p class="text-sm text-[--color-gray-500]">{props.trackingNumber}</p>
										</div>
									</div>
								{/if}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Action buttons -->
		<div class={OrderConfirmationStyleManager.getActionButtonsClasses(props.actionsClass ?? '')}>
			<Button variant="primary" onclick={state.handleContinueShopping}>
				<BaseIcon name={Home} class="mr-2 h-4 w-4" />
				Continue Shopping
			</Button>

			{#if props.trackingNumber}
				<Button variant="ghost" onclick={state.handleTrackOrder}>
					<BaseIcon name={Truck} class="mr-2 h-4 w-4" />
					Track SlotOrder
				</Button>
			{/if}

			{#if props.showDownloadInvoice ?? true}
				<Button variant="ghost" onclick={state.handleDownloadInvoice}>
					<BaseIcon name={Download} class="mr-2 h-4 w-4" />
					Download Invoice
				</Button>
			{/if}

			{#if props.showShareOrder ?? true}
				<Button variant="ghost" onclick={state.handleShareOrder}>
					<BaseIcon name={Share2} class="mr-2 h-4 w-4" />
					Share SlotOrder
				</Button>
			{/if}
		</div>
	</div>
</div>
