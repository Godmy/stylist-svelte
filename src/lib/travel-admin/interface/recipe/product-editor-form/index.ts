import type { AdminProduct } from '$stylist/travel-admin/type/object/admin-product';

export interface RecipeProductEditorForm {
	product: AdminProduct;
	onSave: (product: AdminProduct) => void;
	onCancel?: () => void;
	saving?: boolean;
	class?: string;
}
