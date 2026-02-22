import type { InputPreset } from '../runtime/types';
import { COMPACT_SIZE_SCALE } from '../tokens/architecture/sizes';
import { INPUT_VARIANTS } from '../tokens/architecture/variants';
import { createBasePreset } from './preset';

const inputBase = createBasePreset(INPUT_VARIANTS, COMPACT_SIZE_SCALE, {
	variant: 'default',
	size: 'md'
});

export const INPUT_FIELD_PRESET: InputPreset = {
	...inputBase,
	classes: {
		...inputBase.classes,
		error: 'border-red-500'
	}
} as const;
