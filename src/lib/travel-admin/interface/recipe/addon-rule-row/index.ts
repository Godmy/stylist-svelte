import type { AdminProductAddon } from '$stylist/travel-admin/type/object/admin-product-addon';

export interface RecipeAddonRuleRow {
	addon: AdminProductAddon;
	onChange: (addon: AdminProductAddon) => void;
	onRemove: () => void;
	class?: string;
}
