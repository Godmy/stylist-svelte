import type { BulkOrderFormItem } from '$stylist/commerce/interface/slot/bulk-order-form-item';
import type { BulkOrderFormProduct } from '$stylist/commerce/interface/slot/bulk-order-form-product';

export interface SlotBulkOrderForm {
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
