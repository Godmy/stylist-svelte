/**
 * InventoryTrackerContract — трекер складских остатков.
 *
 * LEGO-состав:
 *   ThemeAttributes   (theme) — class, data-variant, data-tone
 *
 * Примечание: variant здесь — layout-режим (compact/expanded/dashboard),
 * не тематический ThemeVariant. Оставлен inline.
 */
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export type InventoryItemStatus = 'in-stock' | 'low-stock' | 'out-of-stock' | 'overstocked';

export interface InventoryItemContract {
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

export interface LowStockAlertContract {
	id: string;
	itemId: string;
	itemName: string;
	threshold: number;
	currentLevel: number;
	date: Date;
	acknowledged?: boolean;
}

export interface InventoryTrackerEventsContract {
	onItemRestock?: (item: InventoryItemContract) => void;
	onItemEdit?: (item: InventoryItemContract) => void;
	onAlertAcknowledge?: (alertId: string) => void;
	onInventoryExport?: () => void;
}

export interface InventoryTrackerContract
	extends RecordArchitectureMerge<[
		ThemeAttributes<HTMLDivElement>
	]>, InventoryTrackerEventsContract {
	/** List of inventory items */
	items: InventoryItemContract[];
	/** List of low stock alerts */
	alerts?: LowStockAlertContract[];
	/** Layout variant (compact / expanded / dashboard) */
	variant?: 'compact' | 'expanded' | 'dashboard';
	/** Low stock threshold */
	lowStockThreshold?: number;
	/** Over stock threshold */
	overStockThreshold?: number;
	/** Show alerts section */
	showAlerts?: boolean;
	/** Show alert badges */
	showAlertBadges?: boolean;
	/** Show filters */
	showFilters?: boolean;
	/** Show search */
	showSearch?: boolean;
	/** Show status filter */
	showStatusFilter?: boolean;
	/** Additional CSS class for items */
	itemClass?: string;
	/** Additional CSS class for header */
	headerClass?: string;
}
