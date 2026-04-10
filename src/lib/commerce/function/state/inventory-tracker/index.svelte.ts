import type { InventoryTrackerContract, InventoryItemContract, InventoryItemStatus } from '$stylist/commerce/interface/component/inventory-tracker';
import { InventoryTrackerStyleManager } from '$stylist/commerce/class/style-manager/inventory-tracker';

export function createInventoryTrackerState(props: InventoryTrackerContract) {
	let searchQuery = $state('');

	const items = $derived(props.items ?? []);
	const alerts = $derived(props.alerts ?? []);

	const filteredItems = $derived(
		searchQuery
			? items.filter(item =>
				item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
				item.sku.toLowerCase().includes(searchQuery.toLowerCase())
			)
			: items
	);

	const containerClasses = $derived(InventoryTrackerStyleManager.getContainerClasses(String(props.class ?? '')));
	const headerClasses = $derived(InventoryTrackerStyleManager.getHeaderClasses());
	const titleClasses = $derived(InventoryTrackerStyleManager.getTitleClasses());
	const filtersContainerClasses = $derived(InventoryTrackerStyleManager.getFiltersContainerClasses());
	const searchInputClasses = $derived(InventoryTrackerStyleManager.getSearchInputClasses());
	const itemsContainerClasses = $derived(InventoryTrackerStyleManager.getItemsContainerClasses());
	const itemClasses = $derived(InventoryTrackerStyleManager.getItemClasses());
	const itemThumbnailClasses = $derived(InventoryTrackerStyleManager.getItemThumbnailClasses());
	const itemInfoClasses = $derived(InventoryTrackerStyleManager.getItemInfoClasses());
	const itemNameClasses = $derived(InventoryTrackerStyleManager.getItemNameClasses());
	const itemSkuClasses = $derived(InventoryTrackerStyleManager.getItemSkuClasses());
	const stockLevelClasses = $derived(InventoryTrackerStyleManager.getStockLevelClasses());
	const progressBarClasses = $derived(InventoryTrackerStyleManager.getProgressBarClasses());
	const actionsContainerClasses = $derived(InventoryTrackerStyleManager.getActionsContainerClasses());
	const actionButtonClasses = $derived(InventoryTrackerStyleManager.getActionButtonClasses());
	const alertBadgeClasses = $derived(InventoryTrackerStyleManager.getAlertBadgeClasses());
	const alertsContainerClasses = $derived(InventoryTrackerStyleManager.getAlertsContainerClasses());
	const alertItemClasses = $derived(InventoryTrackerStyleManager.getAlertItemClasses());

	function getStatusBadgeClasses(status: InventoryItemStatus) {
		return InventoryTrackerStyleManager.getStatusBadgeClasses(status);
	}

	function getStockProgress(item: InventoryItemContract) {
		if (!item.maxStock) return 100;
		return Math.min(100, (item.currentStock / item.maxStock) * 100);
	}

	return {
		get searchQuery() { return searchQuery; },
		set searchQuery(v: string) { searchQuery = v; },
		get items() { return items; },
		get alerts() { return alerts; },
		get filteredItems() { return filteredItems; },
		get containerClasses() { return containerClasses; },
		get headerClasses() { return headerClasses; },
		get titleClasses() { return titleClasses; },
		get filtersContainerClasses() { return filtersContainerClasses; },
		get searchInputClasses() { return searchInputClasses; },
		get itemsContainerClasses() { return itemsContainerClasses; },
		get itemClasses() { return itemClasses; },
		get itemThumbnailClasses() { return itemThumbnailClasses; },
		get itemInfoClasses() { return itemInfoClasses; },
		get itemNameClasses() { return itemNameClasses; },
		get itemSkuClasses() { return itemSkuClasses; },
		get stockLevelClasses() { return stockLevelClasses; },
		get progressBarClasses() { return progressBarClasses; },
		get actionsContainerClasses() { return actionsContainerClasses; },
		get actionButtonClasses() { return actionButtonClasses; },
		get alertBadgeClasses() { return alertBadgeClasses; },
		get alertsContainerClasses() { return alertsContainerClasses; },
		get alertItemClasses() { return alertItemClasses; },
		getStatusBadgeClasses,
		getStockProgress
	};
}

export default createInventoryTrackerState;
