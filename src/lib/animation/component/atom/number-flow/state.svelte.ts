import type { RecipeNumberFlow as NumberFlowProps } from '$stylist/animation/interface/recipe/number-flow';
import { formatNumberFlowValue } from '$stylist/animation/function/script/format-number-flow-value';
import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';

export function createNumberFlowState(props: NumberFlowProps) {
	const value = $derived(props.value ?? 0);
	const locales = $derived(props.locales ?? 'en-US');
	const format = $derived(props.format);
	const prefix = $derived(props.prefix ?? '');
	const suffix = $derived(props.suffix ?? '');
	const containerClass = $derived(
		mergeClassNames(
			'c-animation-number-flow',
			typeof props.class === 'string' ? props.class : undefined
		)
	);
	const classes = $derived({
		container: containerClass,
		prefix: 'c-animation-number-flow__prefix',
		suffix: 'c-animation-number-flow__suffix',
		srOnly: 'c-animation-number-flow__sr-only'
	});
	const formattedValue = $derived(
		formatNumberFlowValue(
			value,
			Array.isArray(locales)
				? locales.filter((locale): locale is string => typeof locale === 'string')
				: typeof locales === 'string'
					? locales
					: undefined,
			format ?? undefined
		)
	);
	const restProps = $derived.by(() => {
		const {
			class: _class,
			value: _value,
			locales: _locales,
			format: _format,
			prefix: _prefix,
			suffix: _suffix,
			...rest
		} = props;
		return rest;
	});

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
		},
		get restProps() {
			return restProps;
		}
	};
}

export default createNumberFlowState;
