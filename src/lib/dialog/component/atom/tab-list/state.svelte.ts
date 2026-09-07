import type { RecipeTabList } from '$stylist/dialog/interface/recipe/tab-list';

export const createTabListState = (props: RecipeTabList) => {
	const disabled = $derived(props.disabled ?? false);

	return {
		get disabled() {
			return disabled;
		}
	};
};

export default createTabListState;
