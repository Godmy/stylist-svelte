import type { RecipeTabPanel } from '$stylist/dialog/interface/recipe/tab-panel';

export const createTabPanelState = (props: RecipeTabPanel, selected: () => boolean) => {
	const isSelected = $derived.by(selected);
	const disabled = $derived(props.disabled ?? false);

	return {
		get isSelected() {
			return isSelected;
		},
		get disabled() {
			return disabled;
		}
	};
};

export default createTabPanelState;
