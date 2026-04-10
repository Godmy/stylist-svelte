<script lang="ts">
	import type { InventoryTrackerContract } from '$stylist/commerce/interface/component/inventory-tracker';
	import { createInventoryTrackerState } from '$stylist/commerce/function/state/inventory-tracker';

	let props: InventoryTrackerContract = $props();
	const state = createInventoryTrackerState(props);
</script>

<div class={state.containerClasses}>
	<div class={state.headerClasses}>
		<h2 class={state.titleClasses}>Inventory Tracker</h2>

		{#if props.showAlerts !== false && state.alerts.length > 0}
			<span class={state.alertBadgeClasses}>{state.alerts.length} alerts</span>
		{/if}
	</div>

	{#if props.showAlerts !== false && state.alerts.length > 0}
		<div class={state.alertsContainerClasses}>
			{#each state.alerts as alert}
				<div class={state.alertItemClasses}>
					<span>{alert.itemName}: {alert.currentLevel} left (min: {alert.threshold})</span>
					{#if props.onAlertAcknowledge}
						<button
							onclick={() => props.onAlertAcknowledge?.(alert.id)}
							class="text-sm text-[--color-primary-600]"
						>Acknowledge</button>
					{/if}
				</div>
			{/each}
		</div>
	{/if}

	{#if props.showFilters !== false}
		<div class={state.filtersContainerClasses}>
			{#if props.showSearch !== false}
				<input
					type="text"
					placeholder="Search inventory..."
					value={state.searchQuery}
					oninput={(e) => { state.searchQuery = (e.target as HTMLInputElement).value; }}
					class={state.searchInputClasses}
				/>
			{/if}
		</div>
	{/if}

	<div class={state.itemsContainerClasses}>
		{#each state.filteredItems as item}
			<div class={state.itemClasses}>
				{#if item.thumbnail}
					<img src={item.thumbnail} alt={item.name} class={state.itemThumbnailClasses} />
				{/if}
				<div class={state.itemInfoClasses}>
					<p class={state.itemNameClasses}>{item.name}</p>
					<p class={state.itemSkuClasses}>SKU: {item.sku}</p>
					<span class={state.getStatusBadgeClasses(item.status)}>{item.status}</span>
				</div>
				<div class="flex-1">
					<p class={state.stockLevelClasses}>{item.currentStock} / {item.maxStock ?? '∞'}</p>
					{#if item.maxStock}
						<div class={state.progressBarClasses}>
							<div
								class="h-full bg-[--color-primary-500] rounded"
								style="width: {state.getStockProgress(item)}%"
							></div>
						</div>
					{/if}
				</div>
				<div class={state.actionsContainerClasses}>
					{#if props.onItemRestock}
						<button onclick={() => props.onItemRestock?.(item)} class={state.actionButtonClasses}>Restock</button>
					{/if}
					{#if props.onItemEdit}
						<button onclick={() => props.onItemEdit?.(item)} class={state.actionButtonClasses}>Edit</button>
					{/if}
				</div>
			</div>
		{/each}
	</div>

	{#if props.onInventoryExport}
		<div class="px-6 py-4 border-t border-[--color-border-secondary]">
			<button onclick={props.onInventoryExport} class="text-sm text-[--color-primary-600] font-medium">
				Export Report
			</button>
		</div>
	{/if}
</div>
