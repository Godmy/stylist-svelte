import type { BulkOrderFormItem } from '$stylist/commerce/type/struct/bulk-order-form/bulk-order-form-item';
import type { BulkOrderFormProduct } from '$stylist/commerce/type/struct/bulk-order-form/bulk-order-form-product';

export const DEFAULT_BULK_ORDER = {
	products: [] as BulkOrderFormProduct[],
	initialItems: [] as BulkOrderFormItem[],
	title: 'Bulk Order',
	description: 'Add multiple products to your order',
	showTotal: true,
	showNotes: true,
	allowFileUpload: true,
	currency: 'USD',
	locale: 'en-US'
};
