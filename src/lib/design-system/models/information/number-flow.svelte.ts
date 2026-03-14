import type { NumberFlowProps } from '$stylist/design-system/contracts';
import { DataDisplayStyleManager } from '$stylist/design-system/styles/information/data-display';

export function createNumberFlowState(props: NumberFlowProps) {
	const value = $derived(props.value ?? 0);
	const locales = $derived(props.locales ?? 'en-US');
	const format = $derived(props.format);
	const prefix = $derived(props.prefix ?? '');
	const suffix = $derived(props.suffix ?? '');
	const containerClass = $derived(DataDisplayStyleManager.getNumberFlowContainerClasses(props.class));
	const classes = $derived(DataDisplayStyleManager.getNumberFlowClasses(containerClass));
	const formattedValue = $derived(DataDisplayStyleManager.formatNumberFlowValue(value, locales, format ?? undefined));

	return {
		get value() {
			return value;
		},
		get prefix() {
			return prefix;
		},
		get suffix() {
			return suffix;
		},
		get formattedValue() {
			return formattedValue;
		},
		get classes() {
			return classes;
		}
	};
}

export default createNumberFlowState;






