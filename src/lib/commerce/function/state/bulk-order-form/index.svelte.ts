import type { BulkOrderFormItem } from '$stylist/commerce/type/struct/bulk-order-form/bulk-order-form-item';
import type { BulkOrderFormProduct } from '$stylist/commerce/type/struct/bulk-order-form/bulk-order-form-product';
import type { BulkOrderFormProps } from '$stylist/commerce/type/struct/bulk-order-form/bulk-order-form-props';

export function BulkOrderFormModel(props: BulkOrderFormProps) {
	let items = $state<BulkOrderFormItem[]>(props.initialItems ? [...props.initialItems] : []);
	let selectedProduct = $state<string | null>(null);
	let quantity = $state(1);
	let note = $state('');

	function updateFromProps(nextProps: BulkOrderFormProps) {
		if (nextProps.initialItems && nextProps.initialItems.length > 0) {
			items = [...nextProps.initialItems];
		}
	}

	function addProduct(
		products: BulkOrderFormProduct[],
		onItemsChange?: (items: BulkOrderFormItem[]) => void
	) {
		if (!selectedProduct) return;

		const product = products.find((item) => item.id === selectedProduct);
		if (!product) return;

		const existingItemIndex = items.findIndex((item) => item.productId === selectedProduct);

		if (existingItemIndex !== -1) {
			const updatedItems = [...items];
			updatedItems[existingItemIndex] = {
				...updatedItems[existingItemIndex],
				quantity: updatedItems[existingItemIndex].quantity + quantity
			};
			items = updatedItems;
		} else {
			items = [
				...items,
				{
					id: Date.now().toString(),
					productId: selectedProduct,
					quantity,
					price: product.price,
					note
				}
			];
		}

		selectedProduct = null;
		quantity = 1;
		note = '';

		onItemsChange?.(items);
	}

	function removeItem(itemId: string, onItemsChange?: (items: BulkOrderFormItem[]) => void) {
		items = items.filter((item) => item.id !== itemId);
		onItemsChange?.(items);
	}

	function updateQuantity(
		itemId: string,
		newQuantity: number,
		onItemsChange?: (items: BulkOrderFormItem[]) => void
	) {
		if (newQuantity < 1) return;

		items = items.map((item) =>
			item.id === itemId ? { ...item, quantity: newQuantity } : item
		);

		onItemsChange?.(items);
	}

	function updateNote(
		itemId: string,
		newNote: string,
		onItemsChange?: (items: BulkOrderFormItem[]) => void
	) {
		items = items.map((item) => (item.id === itemId ? { ...item, note: newNote } : item));

		onItemsChange?.(items);
	}

	function handleSubmit(
		currentItems: BulkOrderFormItem[],
		onOrderSubmit?: (items: BulkOrderFormItem[]) => void
	) {
		onOrderSubmit?.(currentItems);
	}

	function calculateTotal(products: BulkOrderFormProduct[]): number {
		return items.reduce((sum, item) => {
			const product = products.find((entry) => entry.id === item.productId);
			return sum + (product ? product.price * item.quantity : 0);
		}, 0);
	}

	function formatPrice(price: number, currency = 'USD', locale = 'en-US'): string {
		return new Intl.NumberFormat(locale, {
			style: 'currency',
			currency
		}).format(price);
	}

	updateFromProps(props);

	return {
		get items() {
			return items;
		},
		set items(value: BulkOrderFormItem[]) {
			items = value;
		},
		get selectedProduct() {
			return selectedProduct;
		},
		set selectedProduct(value: string | null) {
			selectedProduct = value;
		},
		get quantity() {
			return quantity;
		},
		set quantity(value: number) {
			quantity = value;
		},
		get note() {
			return note;
		},
		set note(value: string) {
			note = value;
		},
		updateFromProps,
		addProduct,
		removeItem,
		updateQuantity,
		updateNote,
		handleSubmit,
		calculateTotal,
		formatPrice
	};
}

export default BulkOrderFormModel;

