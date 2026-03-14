import type { AnimatedNumberProps } from '$stylist/design-system/contracts';
import { DataDisplayStyleManager } from '$stylist/design-system/styles/information/data-display';
import { BADGE_LABELS } from '$stylist/design-system/defaults';

export function createAnimatedNumberState(props: AnimatedNumberProps) {
	const value = $derived(props.value ?? 0);
	const prefix = $derived(props.prefix ?? '');
	const suffix = $derived(props.suffix ?? '');
	const separator = $derived(props.separator ?? ',');
	const decimals = $derived(props.decimals ?? 0);
	const classes = $derived(DataDisplayStyleManager.getAnimatedNumberClasses(props.class));

	const formattedValue = $derived(
		DataDisplayStyleManager.formatAnimatedValue(value, {
			format: props.format ?? 'number',
			separator,
			decimals
		})
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

export default createAnimatedNumberState;





