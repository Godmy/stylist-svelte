import type { NumberFlowRecipe as NumberFlowProps } from '$stylist/typography/interface/recipe/number-flow';
import { DataDisplayStyleManager } from '$stylist/typography/class/style-manager/data-display';

export function createNumberFlowState(props: NumberFlowProps) {
	const value = $derived(props.value ?? 0);
	const locales = $derived(props.locales ?? 'en-US');
	const format = $derived(props.format);
	const prefix = $derived(props.prefix ?? '');
	const suffix = $derived(props.suffix ?? '');
	const containerClass = $derived(
		DataDisplayStyleManager.getNumberFlowContainerClasses(
			typeof props.class === "string" ? props.class : undefined
		)
	);
	const classes = $derived(DataDisplayStyleManager.getNumberFlowClasses(containerClass));
	const formattedValue = $derived(
		DataDisplayStyleManager.formatNumberFlowValue(
			value,
			Array.isArray(locales)
				? locales.filter((locale): locale is string => typeof locale === 'string')
				: typeof locales === 'string'
					? locales
					: undefined,
			format ?? undefined
		)
	);

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
