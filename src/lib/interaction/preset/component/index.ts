import { resolveAriaLabel } from '$stylist/information/function/script/resolve-aria-label';
import { buildPresetClassNames } from '$stylist/interaction/function/script/build-preset-class-names';
import { resolveAllowedOption } from '$stylist/interaction/function/script/resolve-allowed-option';
import type { InputPreset } from '$stylist/interaction/type/struct/preset/input-preset';
import type { Preset } from '$stylist/interaction/type/struct/preset/preset';
import type { ComponentStateOptions } from '$stylist/layout/type/struct/component-state';
import type { InputStateOptions } from '$stylist/layout/type/struct/component-state-input-state-options';

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

type InputStateResult<V extends string, S extends string> = {
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

type StatePresetLike<V extends string, S extends string> = {
	variants: readonly V[];
	sizes: readonly S[];
	defaults: {
		variant: V;
		size: S;
		disabled?: boolean;
		block?: boolean;
	};
	classes: {
		error?: string;
		[key: string]: unknown;
	};
};

type StatePropsLike<V extends string, S extends string> = {
	variant?: V;
	size?: S;
	disabled?: boolean;
	loading?: boolean;
	block?: boolean;
	error?: boolean;
	class?: string;
	className?: string;
	ariaLabel?: string;
} & Record<string, unknown>;

function buildStateBase<V extends string, S extends string>(
	preset: StatePresetLike<V, S>,
	props: StatePropsLike<V, S>,
	includeError: boolean
) {
	const variant = resolveAllowedOption(props.variant, preset.variants, preset.defaults.variant);
	const size = resolveAllowedOption(props.size, preset.sizes, preset.defaults.size);
	const disabled = props.disabled ?? preset.defaults.disabled ?? false;
	const loading = props.loading ?? false;
	const block = props.block ?? preset.defaults.block ?? false;
	const error = includeError ? (props.error ?? false) : false;
	const isDisabled = disabled || loading;
	const classes = buildPresetClassNames(preset as unknown as Preset<V, S>, {
		variant,
		size,
		disabled,
		loading,
		block,
		className: props.className ?? props.class,
		extra: includeError && error && preset.classes.error ? [preset.classes.error] : undefined
	});
	const ariaLabel = resolveAriaLabel(props.ariaLabel, props);

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
			'aria-live': loading ? ('polite' as const) : undefined,
			'aria-label': ariaLabel || undefined,
			disabled: isDisabled
		}
	};
}

export function createState<V extends string, S extends string>(
	preset: Preset<V, S>,
	props: ComponentStateOptions<V, S> & { className?: string } & Record<string, unknown>
): ComponentStateResult<V, S> {
	const base = buildStateBase(
		preset as unknown as StatePresetLike<V, S>,
		props as StatePropsLike<V, S>,
		false
	);
	return {
		variant: base.variant,
		size: base.size,
		disabled: base.disabled,
		loading: base.loading,
		block: base.block,
		isDisabled: base.isDisabled,
		classes: base.classes,
		attrs: base.attrs
	};
}

export function createInputState<V extends string, S extends string>(
	preset: InputPreset<V, S>,
	props: InputStateOptions<V, S> & Record<string, unknown>
): InputStateResult<V, S> {
	const base = buildStateBase(
		preset as unknown as StatePresetLike<V, S>,
		props as StatePropsLike<V, S>,
		true
	);
	return {
		variant: base.variant,
		size: base.size,
		disabled: base.disabled,
		loading: base.loading,
		error: base.error,
		block: base.block,
		isDisabled: base.isDisabled,
		classes: base.classes,
		attrs: base.attrs
	};
}


