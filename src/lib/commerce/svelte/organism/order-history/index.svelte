<script lang="ts">
	import type { OrderHistoryContract } from '$stylist/commerce/interface/component/order-history';
	import { createOrderHistoryState } from '$stylist/commerce/function/state/order-history';

	let props: OrderHistoryContract = $props();
	const state = createOrderHistoryState(props);
</script>

<div class={state.containerClasses}>
	<div class={state.headerClasses}>
		<h2 class={state.titleClasses}>Order History</h2>
	</div>

	{#if props.showSearch !== false}
		<div class={state.filtersContainerClasses}>
			<input
				type="text"
				placeholder="Search orders..."
				value={state.searchQuery}
				oninput={(e) => { state.searchQuery = (e.target as HTMLInputElement).value; }}
				class={state.searchInputClasses}
			/>
		</div>
	{/if}

	<div class={state.ordersContainerClasses}>
		{#each state.filteredOrders as order}
			<div class={state.orderItemClasses}>
				<div class="flex items-center justify-between">
					<div>
						<p class={state.orderNumberClasses}>Order #{order.orderNumber}</p>
						<p class={state.orderDateClasses}>{state.formatDate(order.date)}</p>
					</div>
					<div class="text-right">
						<span class={state.getStatusBadgeClasses(order.status)}>{order.status}</span>
						<p class={state.orderTotalClasses}>{state.formatPrice(order.total, order.currency)}</p>
					</div>
				</div>

				{#if order.items.length > 0}
					<div class="mt-2 flex gap-2 flex-wrap">
						{#each order.items.slice(0, 3) as item}
							<div class="flex items-center gap-1">
								{#if item.thumbnail}
									<img src={item.thumbnail} alt={item.name} class={state.itemThumbnailClasses} />
								{/if}
								<span class="text-sm text-[--color-text-secondary]">{item.name} x{item.quantity}</span>
							</div>
						{/each}
					</div>
				{/if}

				<div class={state.actionsContainerClasses}>
					{#if props.showRepeatOrder !== false}
						<button
							onclick={() => props.onOrderRepeat?.(order.id)}
							class={state.actionButtonClasses}
						>Reorder</button>
					{/if}
					{#if props.showDownloadInvoice && props.onDownloadInvoice}
						<button
							onclick={() => props.onDownloadInvoice?.(order.id)}
							class={state.actionButtonClasses}
						>Invoice</button>
					{/if}
				</div>
			</div>
		{/each}

		{#if state.filteredOrders.length === 0}
			<div class="px-6 py-8 text-center text-[--color-text-secondary]">No orders found</div>
		{/if}
	</div>
</div>
