import type { LabelProps } from '$stylist/design-system/contracts';
import { LabelStyleManager } from '$stylist/design-system/styles/information/label';
import { mergeClasses } from '$stylist/utils/classes';

/**
 * Label state creator
 * Provides reactive state management for label components using Svelte 5 runes
 *
 * @param props - Label component props
 * @returns Reactive state object with classes and computed values
 */
export function createLabelState(props: LabelProps) {
	const size = $derived(props.size ?? 'md');
	const required = $derived(props.required ?? false);
	const disabled = $derived(props.disabled ?? false);
	const htmlFor = $derived(props.htmlFor);
	const text = $derived(props.text);
	const classes = $derived(
		mergeClasses(
			LabelStyleManager.getLabelClasses(size, disabled),
			props.class ?? ''
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




