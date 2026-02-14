import { COMPACT_SIZE_SCALE } from '../tokens/sizes';
import { INPUT_VARIANTS } from '../tokens/variants';
import type { CompactSize } from '../tokens/sizes';
import { createBasePreset, type Preset } from './preset';
import { createDefaultValues } from './defaults';

export interface InputPreset<
	V extends string = (typeof INPUT_VARIANTS)[number],
	S extends string = CompactSize
> extends Preset<V, S> {
	classes: Preset<V, S>['classes'] & {
		error?: string;
	};
}

export interface InputStateOptions<
	V extends string = (typeof INPUT_VARIANTS)[number],
	S extends string = CompactSize
> {
	variant?: V;
	size?: S;
	disabled?: boolean;
	loading?: boolean;
	error?: boolean;
	block?: boolean;
	class?: string;
	ariaLabel?: string;
}

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

export const INPUT_DEFAULTS = createDefaultValues<(typeof INPUT_VARIANTS)[number], CompactSize>(
	'default',
	'md'
);
