<script lang="ts">
	import type { RecipeOrderHistory as OrderHistoryContract } from '$stylist/commerce/interface/recipe/order-history';
	import createOrderHistoryState from '$stylist/commerce/function/state/order-history/index.svelte';

	let props: OrderHistoryContract = $props();
	const state = createOrderHistoryState(props);
</script>

<div class="order-history">
	<div class="order-history__header">
		<h2 class="order-history__title">SlotOrder History</h2>
	</div>

	{#if props.showSearch !== false}
		<div class="order-history__filters-container">
			<input
				type="text"
				placeholder="Search orders..."
				value={state.searchQuery}
				oninput={(e) => {
					state.searchQuery = (e.target as HTMLInputElement).value;
				}}
				class="order-history__search-input"
			/>
		</div>
	{/if}

	<div class="order-history__orders-container">
		{#each state.filteredOrders as order}
			<div class="order-history__order-item">
				<div class="_c1">
					<div>
						<p class="order-history__order-number">SlotOrder #{order.orderNumber}</p>
						<p class="order-history__order-date">{state.formatDate(order.date)}</p>
					</div>
					<div class="_c2">
						<span
							class="order-history__status-badge"
							data-TODO="was state.StatusBadgeClasses(...) — add data-attr">{order.status}</span
						>
						<p class="order-history__order-total">
							{state.formatPrice(order.total, order.currency)}
						</p>
					</div>
				</div>

				{#if order.items.length > 0}
					<div class="_c3">
						{#each order.items.slice(0, 3) as item}
							<div class="_c4">
								{#if item.thumbnail}
									<img src={item.thumbnail} alt={item.name} class="order-history__item-thumbnail" />
								{/if}
								<span class="_c5">{item.name} x{item.quantity}</span>
							</div>
						{/each}
					</div>
				{/if}

				<div class="order-history__actions-container">
					{#if props.showRepeatOrder !== false}
						<button
							onclick={() => props.onOrderRepeat?.(order.id)}
							class="order-history__action-button">Reorder</button
						>
					{/if}
					{#if props.showDownloadInvoice && props.onDownloadInvoice}
						<button
							onclick={() => props.onDownloadInvoice?.(order.id)}
							class="order-history__action-button">Invoice</button
						>
					{/if}
				</div>
			</div>
		{/each}

		{#if state.filteredOrders.length === 0}
			<div class="_c6">No orders found</div>
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
		text-align: right;
	}
	._c3 {
		margin-top: 0.5rem;
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}
	._c4 {
		display: flex;
		align-items: center;
		gap: 0.25rem;
	}
	._c5 {
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}
	._c6 {
		padding-left: 1.5rem;
		padding-right: 1.5rem;
		padding-top: 2rem;
		padding-bottom: 2rem;
		text-align: center;
		color: var(--color-text-secondary);
	}

	.order-history {
		background-color: var(--color-background-primary);
		border-radius: 0.5rem;
		box-shadow:
			0 1px 3px 0 rgb(0 0 0 / 0.1),
			0 1px 2px -1px rgb(0 0 0 / 0.1);
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-secondary);
	}

	.order-history__header {
		border-bottom-width: 1px;
		border-style: solid;
		padding-left: 1.5rem;
		padding-right: 1.5rem;
		padding-top: 1rem;
		padding-bottom: 1rem;
	}

	.order-history__title {
		font-size: 1.25rem;
		line-height: 1.75rem;
		font-weight: 700;
		color: var(--color-text-primary);
	}

	.order-history__filters-container {
		padding: 1rem;
		border-bottom-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
	}

	.order-history__search-input {
		display: block;
		width: 100%;
		border-radius: 0.375rem;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		background-color: var(--color-background-primary);
		padding-left: 0.75rem;
		padding-right: 0.75rem;
		padding-top: 0.5rem;
		padding-bottom: 0.5rem;
		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
	}
	.order-history__search-input:focus {
		border-color: var(--color-primary-500);
		outline: 2px solid transparent;
		outline-offset: 2px;
		box-shadow: 0 0 0 3px var(--color-primary-500);
	}

	.order-history__orders-container > * + * {
		border-top-width: 1px;
		border-style: solid;
	}

	.order-history__order-item {
		padding: 1.5rem;
	}
	.order-history__order-item:hover {
		background-color: var(--color-background-secondary);
	}

	.order-history__order-number {
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 500;
		color: var(--color-text-primary);
	}

	.order-history__order-date {
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}

	.order-history__status-badge {
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

	.order-history__order-total {
		font-size: 1.125rem;
		line-height: 1.75rem;
		font-weight: 600;
		color: var(--color-text-primary);
	}

	.order-history__actions-container {
		margin-top: 1rem;
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	.order-history__action-button {
		display: inline-flex;
		align-items: center;
		padding-left: 0.75rem;
		padding-right: 0.75rem;
		padding-top: 0.5rem;
		padding-bottom: 0.5rem;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		border-radius: 0.375rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 500;
		color: var(--color-text-primary);
		background-color: var(--color-background-primary);
	}
	.order-history__action-button:hover {
		background-color: var(--color-background-secondary);
	}
	.order-history__action-button:focus {
		outline: 2px solid transparent;
		outline-offset: 2px;
		box-shadow: 0 0 0 3px var(--color-primary-500);
	}

	.order-history__item-thumbnail {
		width: 4rem;
		height: 4rem;
		border-radius: 0.375rem;
		overflow: hidden;
		margin-right: 1rem;
	}
</style>
