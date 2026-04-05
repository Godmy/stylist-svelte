import type { Preset } from '$stylist/interaction/type/struct/preset';

export function buildPresetClassNames<V extends string, S extends string>(
	preset: Preset<V, S>,
	options: {
		variant: V;
		size: S;
		disabled?: boolean;
		loading?: boolean;
		block?: boolean;
		className?: string;
		extra?: Array<string | undefined>;
	}
): string {
	const { variant, size, disabled, loading, block, className, extra = [] } = options;

	return [
		preset.classes.base,
		preset.classes.focusVisible ?? '',
		preset.classes.variant[variant],
		preset.classes.size[size],
		disabled || loading ? preset.classes.state.disabled : '',
		block ? preset.classes.state.block : '',
		...extra,
		className
	]
		.filter(Boolean)
		.join(' ');
}

export const buildClasses = buildPresetClassNames;
