import { createLabelState as createBaseLabelState } from '$stylist/information/function/state/label';
import { StyleManagerLabel } from '$stylist/typography/class/style-manager/label';
import type { ThemeLabelRecipe } from '$stylist/typography/interface/recipe/label';

export function createLabelState(props: ThemeLabelRecipe) {
	const baseState = createBaseLabelState(props);
	const classes = $derived(StyleManagerLabel.root(baseState.classes));
	const requiredIndicatorClasses = $derived(
		StyleManagerLabel.requiredIndicator(baseState.requiredIndicatorClasses)
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
