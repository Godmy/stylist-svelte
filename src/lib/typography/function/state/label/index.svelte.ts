import { createLabelState as createBaseLabelState } from '$stylist/information/function/state/label';
import { LabelStyleManager } from '$stylist/typography/class/style-manager/label';
import type { LabelRecipe } from '$stylist/typography/interface/recipe/label';

export function createLabelState(props: LabelRecipe) {
	const baseState = createBaseLabelState(props);
	const classes = $derived(LabelStyleManager.root(baseState.classes));
	const requiredIndicatorClasses = $derived(
		LabelStyleManager.requiredIndicator(baseState.requiredIndicatorClasses)
	);
	return {
		get classes() {
			return classes;
		},
		get htmlFor() {
			return baseState.htmlFor;
		},
		get text() {
			return baseState.text;
		},
		get required() {
			return baseState.required;
		},
		get requiredIndicatorClasses() {
			return requiredIndicatorClasses;
		}
	};
}

export default createLabelState;
