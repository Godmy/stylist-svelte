/** AREA: STYLIST CODER MODEL -> AUTO-GENERATED */
export type { OrderItem } from './order-item';
export type { Product } from './product';

/** AREA: STYLIST CODER MODEL -> AUTO-PROTECTED */

import type { HTMLAttributes } from 'svelte/elements';

export interface BulkOrderFormProduct {
	id: string;
	name: string;
	price: number;
	originalPrice?: number;
	thumbnail?: string;
	minOrder?: number;
	available?: number;
}

export interface BulkOrderFormItem {
	id: string;
	productId: string;
	quantity: number;
	price: number;
	note?: string;
}

export interface BulkOrderFormProps extends Omit<HTMLAttributes<HTMLElement>, 'class'> {
	products: BulkOrderFormProduct[];
	initialItems?: BulkOrderFormItem[];
	title?: string;
	description?: string;
	showTotal?: boolean;
	showNotes?: boolean;
	allowFileUpload?: boolean;
	class?: string;
	headerClass?: string;
	formClass?: string;
	itemClass?: string;
	actionsClass?: string;
	onOrderSubmit?: (items: BulkOrderFormItem[]) => void;
	onItemsChange?: (items: BulkOrderFormItem[]) => void;
	currency?: string;
	locale?: string;
}