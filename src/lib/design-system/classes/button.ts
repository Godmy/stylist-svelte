import { createBasePreset } from './interaction';
import { createDefaultValues } from './component-utils';

const BUTTON_VARIANTS = [
	'default',
	'primary',
	'secondary',
	'success',
	'warning',
	'danger',
	'info',
	'solid',
	'outline',
	'ghost',
	'link',
	'subtle',
	'neutral',
	'dark',
	'light'
] as const;
const BUTTON_SIZES = ['sm', 'md', 'lg'] as const;

export const BUTTON_DEFAULTS = createDefaultValues<(typeof BUTTON_VARIANTS)[number], (typeof BUTTON_SIZES)[number]>(
	'primary',
	'md'
);

export const BUTTON_PRESET = createBasePreset(BUTTON_VARIANTS, BUTTON_SIZES, {
	variant: 'primary',
	size: 'md'
});
export const CLOSE_BUTTON_PRESET = createBasePreset(BUTTON_VARIANTS, BUTTON_SIZES, {
	variant: 'ghost',
	size: 'sm'
});
export const COPY_BUTTON_PRESET = createBasePreset(BUTTON_VARIANTS, BUTTON_SIZES, {
	variant: 'outline',
	size: 'sm'
});
export const ICON_BUTTON_PRESET = createBasePreset(BUTTON_VARIANTS, BUTTON_SIZES, {
	variant: 'secondary',
	size: 'md'
});
export const PAGE_BUTTON_PRESET = createBasePreset(BUTTON_VARIANTS, BUTTON_SIZES, {
	variant: 'outline',
	size: 'md'
});
export const SPLIT_BUTTON_PRESET = createBasePreset(BUTTON_VARIANTS, BUTTON_SIZES, {
	variant: 'primary',
	size: 'md'
});

