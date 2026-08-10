import type { RecipeAnimatedNumber } from '$stylist/animation/interface/recipe/animated-number';
import { formatAnimatedValue } from '$stylist/animation/function/script/format-animated-value';
import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';

export function createAnimatedNumberState(props: RecipeAnimatedNumber) {
	const value = $derived(props.value ?? 0);
	const prefix = $derived(props.prefix ?? '');
	const suffix = $derived(props.suffix ?? '');
	const separator = $derived(props.separator ?? ',');
	const decimals = $derived(props.decimals ?? 0);
	const classes = $derived(
		mergeClassNames(
			'c-animation-animated-number',
			typeof props.class === 'string' ? props.class : undefined
		)
	);

	const formattedValue = $derived(
		formatAnimatedValue(value, {
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
