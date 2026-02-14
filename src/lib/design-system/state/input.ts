import { computeAriaLabel } from '$stylist/utils/aria';
import { buildClasses } from '$stylist/utils/classes';
import { resolveOption } from '$stylist/utils/input';
import type { InputPreset, InputStateOptions } from './input-preset';

type StateResult<V extends string, S extends string> = {
	variant: V;
	size: S;
	disabled: boolean;
	loading: boolean;
	error: boolean;
	block: boolean;
	isDisabled: boolean;
	classes: string;
	attrs: {
		'aria-busy': boolean;
		'aria-live': 'polite' | undefined;
		'aria-label': string | undefined;
		disabled: boolean;
	};
};

export function createInputState<V extends string, S extends string>(
	preset: InputPreset<V, S>,
	props: InputStateOptions<V, S> & Record<string, unknown>
): StateResult<V, S> {
	const variant = resolveOption(props.variant, preset.variants, preset.defaults.variant);
	const size = resolveOption(props.size, preset.sizes, preset.defaults.size);
	const disabled = props.disabled ?? preset.defaults.disabled;
	const loading = props.loading ?? false;
	const error = props.error ?? false;
	const block = props.block ?? preset.defaults.block ?? false;
	const isDisabled = disabled || loading;
	const classes = buildClasses(preset, {
		variant,
		size,
		disabled,
		loading,
		block,
		className: props.class,
		extra: [error ? preset.classes.error : '']
	});
	const ariaLabel = computeAriaLabel(props.ariaLabel, props);

	return {
		variant,
		size,
		disabled,
		loading,
		error,
		block,
		isDisabled,
		classes,
		attrs: {
			'aria-busy': loading,
			'aria-live': loading ? 'polite' : undefined,
			'aria-label': ariaLabel || undefined,
			disabled: isDisabled
		}
	};
}
