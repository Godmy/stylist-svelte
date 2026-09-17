import type { AdminProductAddon } from '$stylist/travel-admin/type/object/admin-product-addon';

export interface RecipeAddonRulesEditor {
	addons: AdminProductAddon[];
	onChange: (addons: AdminProductAddon[]) => void;
	class?: string;
}
