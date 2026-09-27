import type { RecipeAddonRulesEditor } from '$stylist/travel-admin/interface/recipe/addon-rules-editor';
import type { AdminProductAddon } from '$stylist/travel-admin/type/object/admin-product-addon';

export function createAddonRulesEditorState(getProps: () => RecipeAddonRulesEditor) {
	const props = $derived(getProps());
	const addons = $state<AdminProductAddon[]>(props.addons.map((a) => ({ ...a })));

	function emit() {
		props.onChange(addons.map((a) => ({ ...a })));
	}

	function add() {
		addons.push({
			id: -Date.now(),
			productId: null,
			domain: null,
			label: '',
			descriptionHtml: '',
			priceCents: 0,
			priceUnit: 'flat',
			sortOrder: addons.length + 1
		});
		emit();
	}

	function update(index: number, next: AdminProductAddon) {
		addons[index] = next;
		emit();
	}

	function remove(index: number) {
		addons.splice(index, 1);
		emit();
	}

	return {
		get addons() {
			return addons;
		},
		add,
		update,
		remove
	};
}

export default createAddonRulesEditorState;
