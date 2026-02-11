import { createBasePreset } from './interaction';

const BUTTON_VARIANTS = ['primary', 'secondary', 'outline', 'ghost', 'danger'] as const;
const BUTTON_SIZES = ['sm', 'md', 'lg'] as const;

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
