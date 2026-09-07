<script lang="ts">
	import type { RecipeInventoryTracker as InventoryTrackerContract } from '$stylist/commerce/interface/recipe/inventory-tracker';
	import createInventoryTrackerState from './state.svelte';

	let props: InventoryTrackerContract = $props();
	const state = createInventoryTrackerState(props);
</script>

<div class="inventory-tracker">
	<div class="inventory-tracker__header">
		<h2 class="inventory-tracker__title">Inventory Tracker</h2>

		{#if props.showAlerts !== false && state.alerts.length > 0}
			<span class="inventory-tracker__alert-badge">{state.alerts.length} alerts</span>
		{/if}
	</div>

	{#if props.showAlerts !== false && state.alerts.length > 0}
		<div class="inventory-tracker__alerts-container">
			{#each state.alerts as alert}
				<div class="inventory-tracker__alert-item">
					<span>{alert.itemName}: {alert.currentLevel} left (min: {alert.threshold})</span>
					{#if props.onAlertAcknowledge}
						<button onclick={() => props.onAlertAcknowledge?.(alert.id)} class="_c1"
							>Acknowledge</button
						>
					{/if}
				</div>
			{/each}
		</div>
	{/if}

	{#if props.showFilters !== false}
		<div class="inventory-tracker__filters-container">
			{#if props.showSearch !== false}
				<input
					type="text"
					placeholder="Search inventory..."
					value={state.searchQuery}
					oninput={(e) => {
						state.searchQuery = (e.target as HTMLInputElement).value;
					}}
					class="inventory-tracker__search-input"
				/>
			{/if}
		</div>
	{/if}

	<div class="inventory-tracker__items-container">
		{#each state.filteredItems as item}
			<div class="inventory-tracker__item">
				{#if item.thumbnail}
					<img src={item.thumbnail} alt={item.name} class="inventory-tracker__item-thumbnail" />
				{/if}
				<div class="inventory-tracker__item-info">
					<p class="inventory-tracker__item-name">{item.name}</p>
					<p class="inventory-tracker__item-sku">SKU: {item.sku}</p>
					<span
						class="inventory-tracker__status-badge"
						data-TODO="was state.StatusBadgeClasses(...) вЂ” add data-attr">{item.status}</span
					>
				</div>
				<div class="_c2">
					<p class="inventory-tracker__stock-level">
						{item.currentStock} / {item.maxStock ?? 'в€ћ'}
					</p>
					{#if item.maxStock}
						<div class="inventory-tracker__progress-bar">
							<div class="_c3" style="width: {state.getStockProgress(item)}%"></div>
						</div>
					{/if}
				</div>
				<div class="inventory-tracker__actions-container">
					{#if props.onItemRestock}
						<button
							onclick={() => props.onItemRestock?.(item)}
							class="inventory-tracker__action-button">Restock</button
						>
					{/if}
					{#if props.onItemEdit}
						<button
							onclick={() => props.onItemEdit?.(item)}
							class="inventory-tracker__action-button">Edit</button
						>
					{/if}
				</div>
			</div>
		{/each}
	</div>

	{#if props.onInventoryExport}
		<div class="_c4">
			<button onclick={props.onInventoryExport} class="_c5"> Export Report </button>
		</div>
	{/if}
</div>

<style>
	._c1 {
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-primary-600);
	}
	._c2 {
		flex: 1 1 0%;
	}
	._c3 {
		height: 100%;
		border-radius: 0.25rem;
		background-color: var(--color-primary-500);
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
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 500;
		color: var(--color-primary-600);
	}

	.inventory-tracker {
		background-color: var(--color-background-primary);
		border-radius: 0.5rem;
		box-shadow:
			0 1px 3px 0 rgb(0 0 0 / 0.1),
			0 1px 2px -1px rgb(0 0 0 / 0.1);
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-secondary);
	}

	.inventory-tracker__header {
		border-bottom-width: 1px;
		border-style: solid;
		padding-left: 1.5rem;
		padding-right: 1.5rem;
		padding-top: 1rem;
		padding-bottom: 1rem;
	}

	.inventory-tracker__title {
		font-size: 1.125rem;
		line-height: 1.75rem;
		font-weight: 500;
		color: var(--color-text-primary);
	}

	.inventory-tracker__filters-container {
		padding: 1rem;
		border-bottom-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
	}

	.inventory-tracker__search-input {
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
	.inventory-tracker__search-input:focus {
		border-color: var(--color-primary-500);
		outline: 2px solid transparent;
		outline-offset: 2px;
		box-shadow: 0 0 0 3px var(--color-primary-500);
	}

	.inventory-tracker__items-container > * + * {
		border-top-width: 1px;
		border-style: solid;
	}

	.inventory-tracker__item {
		padding: 1rem;
		display: flex;
		align-items: center;
	}

	.inventory-tracker__item-thumbnail {
		width: 4rem;
		height: 4rem;
		border-radius: 0.375rem;
		overflow: hidden;
		margin-right: 1rem;
	}

	.inventory-tracker__item-info {
		flex: 1 1 0%;
		min-width: 0;
	}

	.inventory-tracker__item-name {
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 500;
		color: var(--color-text-primary);
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.inventory-tracker__item-sku {
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}

	.inventory-tracker__status-badge {
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

	.inventory-tracker__stock-level {
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}

	.inventory-tracker__progress-bar {
		width: 8rem;
	}

	.inventory-tracker__actions-container {
		margin-left: 1rem;
		display: flex;
		align-items: center;
	}
	.inventory-tracker__actions-container > * + * {
		margin-left: 0.5rem;
	}

	.inventory-tracker__action-button {
		padding: 0.5rem;
		color: var(--color-text-secondary);
	}
	.inventory-tracker__action-button:hover {
		color: var(--color-text-primary);
	}
	.inventory-tracker__action-button:focus {
		outline: 2px solid transparent;
		outline-offset: 2px;
	}

	.inventory-tracker__alert-badge {
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
		background-color: var(--color-warning-100);
		color: var(--color-warning-800);
	}

	.inventory-tracker__alerts-container {
		margin-top: 1rem;
		padding-top: 1rem;
		border-top-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
	}

	.inventory-tracker__alert-item {
		padding: 0.75rem;
		background-color: var(--color-warning-50);
		border-radius: 0.375rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	/* --- migrated from StyleManager --- */

	.inventory-tracker {
		background-color: var(--color-background-primary);
		border-radius: 0.5rem;
		box-shadow:
			0 1px 3px 0 rgb(0 0 0 / 0.1),
			0 1px 2px -1px rgb(0 0 0 / 0.1);
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-secondary);
	}

	.inventory-tracker__header {
		border-bottom-width: 1px;
		border-style: solid;
		padding-left: 1.5rem;
		padding-right: 1.5rem;
		padding-top: 1rem;
		padding-bottom: 1rem;
	}

	.inventory-tracker__title {
		font-size: 1.125rem;
		line-height: 1.75rem;
		font-weight: 500;
		color: var(--color-text-primary);
	}

	.inventory-tracker__filters-container {
		padding: 1rem;
		border-bottom-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
	}

	.inventory-tracker__search-input {
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
	.inventory-tracker__search-input:focus {
		border-color: var(--color-primary-500);
		outline: 2px solid transparent;
		outline-offset: 2px;
		box-shadow: 0 0 0 3px var(--color-primary-500);
	}

	.inventory-tracker__items-container > * + * {
		border-top-width: 1px;
		border-style: solid;
	}

	.inventory-tracker__item {
		padding: 1rem;
		display: flex;
		align-items: center;
	}

	.inventory-tracker__item-thumbnail {
		width: 4rem;
		height: 4rem;
		border-radius: 0.375rem;
		overflow: hidden;
		margin-right: 1rem;
	}

	.inventory-tracker__item-info {
		flex: 1 1 0%;
		min-width: 0;
	}

	.inventory-tracker__item-name {
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 500;
		color: var(--color-text-primary);
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.inventory-tracker__item-sku {
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}

	.inventory-tracker__status-badge {
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

	.inventory-tracker__stock-level {
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}

	.inventory-tracker__progress-bar {
		width: 8rem;
	}

	.inventory-tracker__actions-container {
		margin-left: 1rem;
		display: flex;
		align-items: center;
	}
	.inventory-tracker__actions-container > * + * {
		margin-left: 0.5rem;
	}

	.inventory-tracker__action-button {
		padding: 0.5rem;
		color: var(--color-text-secondary);
	}
	.inventory-tracker__action-button:hover {
		color: var(--color-text-primary);
	}
	.inventory-tracker__action-button:focus {
		outline: 2px solid transparent;
		outline-offset: 2px;
	}

	.inventory-tracker__alert-badge {
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
		background-color: var(--color-warning-100);
		color: var(--color-warning-800);
	}

	.inventory-tracker__alerts-container {
		margin-top: 1rem;
		padding-top: 1rem;
		border-top-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
	}

	.inventory-tracker__alert-item {
		padding: 0.75rem;
		background-color: var(--color-warning-50);
		border-radius: 0.375rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
</style>
