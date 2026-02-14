import { computeAriaLabel } from '$stylist/utils/aria';
import { buildClasses } from '$stylist/utils/classes';
import { resolveOption } from '$stylist/utils/input';
import type { ComponentStateOptions } from './defaults';
import type { Preset } from './preset';

type ComponentStateResult<V extends string, S extends string> = {
	variant: V;
	size: S;
	disabled: boolean;
	loading: boolean;
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

export function createState<V extends string, S extends string>(
	preset: Preset<V, S>,
	props: ComponentStateOptions<V, S> & { className?: string } & Record<string, unknown>
): ComponentStateResult<V, S> {
	const variant = resolveOption(props.variant, preset.variants, preset.defaults.variant);
	const size = resolveOption(props.size, preset.sizes, preset.defaults.size);
	const disabled = props.disabled ?? preset.defaults.disabled;
	const loading = props.loading ?? false;
	const block = props.block ?? preset.defaults.block ?? false;
	const isDisabled = disabled || loading;
	const classes = buildClasses(preset, {
		variant,
		size,
		disabled,
		loading,
		block,
		className: props.className ?? props.class
	});
	const ariaLabel = computeAriaLabel(props.ariaLabel, props);

	return {
		variant,
		size,
		disabled,
		loading,
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
