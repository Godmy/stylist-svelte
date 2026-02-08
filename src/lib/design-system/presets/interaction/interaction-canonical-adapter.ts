type Preset<V extends string = string, S extends string = string> = {
	variants: readonly V[];
	sizes: readonly S[];
	defaults: { variant: V; size: S; disabled: boolean; block?: boolean };
	classes: {
		base: string;
		size: Record<S, string>;
		variant: Record<V, string>;
		state: Record<string, string>;
		focusVisible?: string;
		error?: string;
	};
	loaderSize?: Record<S, string>;
};

const basePreset = <V extends string, S extends string>(
	variants: readonly V[],
	sizes: readonly S[],
	defaults: { variant: V; size: S }
): Preset<V, S> => ({
	variants,
	sizes,
	defaults: { ...defaults, disabled: false, block: false },
	classes: {
		base: 'inline-flex items-center justify-center rounded-md transition-colors',
		focusVisible: 'focus-visible:outline-none focus-visible:ring-2',
		size: Object.fromEntries(
			sizes.map((s) => [
				s,
				s === 'sm' ? 'h-8 px-3 text-xs' : s === 'lg' ? 'h-11 px-6 text-base' : 'h-9 px-4 text-sm'
			])
		) as Record<S, string>,
		variant: Object.fromEntries(
			variants.map((v) => [v, v === 'outline' ? 'border bg-transparent' : 'bg-primary text-white'])
		) as Record<V, string>,
		state: { disabled: 'opacity-50 cursor-not-allowed', block: 'w-full' }
	},
	loaderSize: Object.fromEntries(
		sizes.map((s) => [s, s === 'sm' ? 'w-3 h-3' : s === 'lg' ? 'w-5 h-5' : 'w-4 h-4'])
	) as Record<S, string>
});

const BUTTON_VARIANTS = ['primary', 'secondary', 'outline', 'ghost', 'danger'] as const;
const INPUT_VARIANTS = ['default', 'filled', 'ghost', 'warning', 'danger'] as const;
const SIZES = ['sm', 'md', 'lg'] as const;

export const BUTTON_PRESET = basePreset(BUTTON_VARIANTS, SIZES, { variant: 'primary', size: 'md' });
export const CLOSE_BUTTON_PRESET = basePreset(BUTTON_VARIANTS, SIZES, {
	variant: 'ghost',
	size: 'sm'
});
export const COPY_BUTTON_PRESET = basePreset(BUTTON_VARIANTS, SIZES, {
	variant: 'outline',
	size: 'sm'
});
export const ICON_BUTTON_PRESET = basePreset(BUTTON_VARIANTS, SIZES, {
	variant: 'secondary',
	size: 'md'
});
export const PAGE_BUTTON_PRESET = basePreset(BUTTON_VARIANTS, SIZES, {
	variant: 'outline',
	size: 'md'
});
export const SPLIT_BUTTON_PRESET = basePreset(BUTTON_VARIANTS, SIZES, {
	variant: 'primary',
	size: 'md'
});

const inputBase = basePreset(INPUT_VARIANTS, SIZES, { variant: 'default', size: 'md' });

export const INPUT_FIELD_PRESET = {
	...inputBase,
	classes: {
		...inputBase.classes,
		error: 'border-red-500'
	}
} as const;

export const INPUT_HELPER_PRESET = INPUT_FIELD_PRESET;
export const INPUT_ADDON_PRESET = INPUT_FIELD_PRESET;
export const FORM_HELPER_TEXT_PRESET = INPUT_FIELD_PRESET;
export const FORM_ERROR_MESSAGE_PRESET = INPUT_FIELD_PRESET;
export const CHARACTER_COUNT_PRESET = INPUT_FIELD_PRESET;
export const PIN_INPUT_DIGIT_PRESET = INPUT_FIELD_PRESET;
