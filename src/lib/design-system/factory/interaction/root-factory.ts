import { computeAriaLabel } from '$stylist/utils/aria';
import { buildClasses } from '$stylist/utils/classes';
import { resolveOption } from '$stylist/utils/input';
import type { Preset } from '../../presets/interaction/interaction-presets';
import { ACCESSIBILITY_CLASSES, BASE_CLASSES, STATE_CLASSES } from '../../classes/classes';
import { DEFAULT_FLAGS } from '../../tokens/flags';
import { INTERACTIVE_VARIANTS } from '../../classes/interaction';
import { VARIANT_CLASSES } from '../../classes/interaction';
import type { ComponentSize } from '../../tokens/sizes';
import { COMPONENT_SIZE_SCALE } from '../../tokens/sizes';
import { SIZE_CLASSES } from '../../classes/sizes';

type InteractivePreset = Preset<string, ComponentSize>;

type ComponentStateOptions<V extends string, S extends string> = {
	variant?: V;
	size?: S;
	disabled?: boolean;
	loading?: boolean;
	block?: boolean;
	class?: string;
	className?: string;
	ariaLabel?: string;
};

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

export function createPreset(
	config: Partial<{
		variants: readonly string[];
		sizes: readonly ComponentSize[];
		defaults: Partial<InteractivePreset['defaults']>;
		classes: Partial<InteractivePreset['classes']>;
	}> = {}
): InteractivePreset {
	return {
		variants: config.variants ?? INTERACTIVE_VARIANTS,
		sizes: config.sizes ?? COMPONENT_SIZE_SCALE,
		defaults: {
			variant: 'primary' as string,
			size: 'md' as ComponentSize,
			disabled: DEFAULT_FLAGS.disabled,
			block: false,
			...config.defaults
		},
		classes: {
			base: BASE_CLASSES.interactive,
			variant: VARIANT_CLASSES,
			state: STATE_CLASSES,
			focusVisible: ACCESSIBILITY_CLASSES.focusVisible,
			size: SIZE_CLASSES,
			...config.classes
		}
	};
}

export function createState<V extends string, S extends string>(
	preset: Preset<V, S>,
	props: ComponentStateOptions<V, S> & Record<string, unknown>
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
