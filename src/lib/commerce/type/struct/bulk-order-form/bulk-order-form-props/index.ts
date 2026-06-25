import type { HTMLAttributes } from 'svelte/elements';
import type { BulkOrderFormItem } from '$stylist/commerce/type/struct/bulk-order-form/bulk-order-form-item';
import type { BulkOrderFormProduct } from '$stylist/commerce/type/struct/bulk-order-form/bulk-order-form-product';

export type BulkOrderFormProps = Omit<HTMLAttributes<HTMLElement>, 'class'> & {
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
};
