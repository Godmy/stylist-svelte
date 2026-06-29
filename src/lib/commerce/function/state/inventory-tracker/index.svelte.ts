import type { InventoryItemStatus } from '$stylist/commerce/type/alias/inventory-item-status';
import type { RecipeInventoryTracker as InventoryTrackerContract } from '$stylist/commerce/interface/recipe/inventory-tracker';
import type { SlotInventoryItem as InventoryItemContract } from '$stylist/commerce/interface/slot/inventory-item';
export function createInventoryTrackerState(props: InventoryTrackerContract) {
	let searchQuery = $state('');

	const items = $derived(props.items ?? []);
	const alerts = $derived(props.alerts ?? []);

	const filteredItems = $derived(
		searchQuery
			? items.filter(
					(item) =>
						item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
						item.sku.toLowerCase().includes(searchQuery.toLowerCase())
				)
			: items
	);

	function getStockProgress(item: InventoryItemContract) {
		if (!item.maxStock) return 100;
		return Math.min(100, (item.currentStock / item.maxStock) * 100);
	}

	return {
		get searchQuery() {
			return searchQuery;
		},
		set searchQuery(v: string) {
			searchQuery = v;
		},
		get items() {
			return items;
		},
		get alerts() {
			return alerts;
		},
		get filteredItems() {
			return filteredItems;
		},
		getStockProgress
	};
}

export default createInventoryTrackerState;

