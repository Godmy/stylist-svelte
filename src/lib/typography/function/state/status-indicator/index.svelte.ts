import { createStatusIndicatorState as createBaseStatusIndicatorState } from '$stylist/information/function/state/status-indicator';
import { StyleManagerStatusIndicator } from '$stylist/typography/class/style-manager/status-indicator';
import type { ThemeStatusIndicatorRecipe } from '$stylist/typography/interface/recipe/status-indicator';

export function createStatusIndicatorState(props: ThemeStatusIndicatorRecipe) {
	const baseState = createBaseStatusIndicatorState(props);
	const classes = $derived(StyleManagerStatusIndicator.root(baseState.classes));
	const containerClasses = $derived(
		StyleManagerStatusIndicator.container(baseState.containerClasses)
	);
	const dotClasses = $derived(StyleManagerStatusIndicator.dot(baseState.dotClasses));
	const indicatorClasses = $derived(
		StyleManagerStatusIndicator.indicator(baseState.indicatorClasses)
	);
	const labelClasses = $derived(
		StyleManagerStatusIndicator.label(baseState.labelClasses)
	);
	return {
		get classes() {
			return classes;
		},
		get containerClasses() {
			return containerClasses;
		},
		get dotClasses() {
			return dotClasses;
		},
		get indicatorClasses() {
			return indicatorClasses;
		},
		get indicatorStyle() {
			return baseState.indicatorStyle;
		},
		get labelClasses() {
			return labelClasses;
		},
		get label() {
			return baseState.label;
		},
		get showLabel() {
			return baseState.showLabel;
		},
		get isSimpleMode() {
			return baseState.isSimpleMode;
		}
	};
}

export default createStatusIndicatorState;
