import type { RecipeProductEditorForm } from '$stylist/travel-admin/interface/recipe/product-editor-form';
import type { AdminProduct } from '$stylist/travel-admin/type/object/admin-product';

export function createProductEditorFormState(getProps: () => RecipeProductEditorForm) {
	const props = $derived(getProps());
	const draft = $state<AdminProduct>({ ...props.product });

	function patch(partial: Partial<AdminProduct>) {
		Object.assign(draft, partial);
	}

	function save() {
		props.onSave({ ...draft });
	}

	return {
		get draft() {
			return draft;
		},
		patch,
		save
	};
}

export default createProductEditorFormState;
