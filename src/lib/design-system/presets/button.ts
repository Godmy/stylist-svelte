import { COMPACT_SIZE_SCALE } from '../tokens/architecture/sizes';
import { INTERACTIVE_VARIANTS } from '../classes/interaction';
import { createDefaultValues } from '../defaults/defaults';
import { createBasePreset } from './preset';

export const BUTTON_DEFAULTS = createDefaultValues<
	(typeof INTERACTIVE_VARIANTS)[number],
	(typeof COMPACT_SIZE_SCALE)[number]
>(
	'primary',
	'md'
);

export const BUTTON_PRESET = createBasePreset(INTERACTIVE_VARIANTS, COMPACT_SIZE_SCALE, {
	variant: 'primary',
	size: 'md'
});

export const CLOSE_BUTTON_PRESET = createBasePreset(INTERACTIVE_VARIANTS, COMPACT_SIZE_SCALE, {
	variant: 'ghost',
	size: 'sm'
});

export const COPY_BUTTON_PRESET = createBasePreset(INTERACTIVE_VARIANTS, COMPACT_SIZE_SCALE, {
	variant: 'outline',
	size: 'sm'
});

export const ICON_BUTTON_PRESET = createBasePreset(INTERACTIVE_VARIANTS, COMPACT_SIZE_SCALE, {
	variant: 'secondary',
	size: 'md'
});

export const PAGE_BUTTON_PRESET = createBasePreset(INTERACTIVE_VARIANTS, COMPACT_SIZE_SCALE, {
	variant: 'outline',
	size: 'md'
});

export const SPLIT_BUTTON_PRESET = createBasePreset(INTERACTIVE_VARIANTS, COMPACT_SIZE_SCALE, {
	variant: 'primary',
	size: 'md'
});

