import type { LabelRecipe } from '$stylist/information/interface/recipe/label';
import { LabelStyleManager } from '$stylist/information/class/style-manager/label';
import { mergeClasses } from '$stylist/layout/function/script/join-class-names';

/**
 * Label state creator
 * Provides reactive state management for label components using Svelte 5 runes
 *
 * @param props - Label component props
 * @returns Reactive state object with classes and computed values
 */
export function createLabelState(props: LabelRecipe) {
	const size = $derived(props.size ?? 'md');
	const required = $derived(props.required ?? false);
	const disabled = $derived(props.disabled ?? false);
	const htmlFor = $derived(props.htmlFor);
	const text = $derived(props.text ?? props.label);
	const className = $derived(typeof props.class === 'string' ? props.class : '');
	const classes = $derived(
		mergeClasses(
			LabelStyleManager.getLabelClasses(size, disabled),
			className
		)
	);
	const requiredIndicatorClasses = $derived('text-[--color-danger-500]');

	return {
		get size() {
			return size;
		},
		get required() {
			return required;
		},
		get disabled() {
			return disabled;
		},
		get htmlFor() {
			return htmlFor;
		},
		get text() {
			return text;
		},
		get classes() {
			return classes;
		},
		get requiredIndicatorClasses() {
			return requiredIndicatorClasses;
		}
	};
}

export default createLabelState;





