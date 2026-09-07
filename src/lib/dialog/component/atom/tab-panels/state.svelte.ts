import type { RecipeTabPanels } from '$stylist/dialog/interface/recipe/tab-panels';

export const createTabPanelsState = (props: RecipeTabPanels) => {
	const disabled = $derived(props.disabled ?? false);

	return {
		get disabled() {
			return disabled;
		}
	};
};

export default createTabPanelsState;
