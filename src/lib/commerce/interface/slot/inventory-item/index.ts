import type { InventoryItemStatus } from '$stylist/token/type/alias/inventory-item-status';

export interface SlotInventoryItem {
	id: string;
	name: string;
	sku: string;
	currentStock: number;
	minStock: number;
	maxStock?: number;
	reserved?: number;
	available: number;
	category?: string;
	supplier?: string;
	lastUpdated?: Date;
	status: InventoryItemStatus;
	thumbnail?: string;
}

