import type { CommonSize } from '../tokens/architecture/variants';
import { TAB_VARIANT_CLASSES } from '../classes/interaction/tabs';
import { createDefaultValues } from '../defaults/defaults';

export const TAB_DEFAULTS = createDefaultValues<keyof typeof TAB_VARIANT_CLASSES, CommonSize>(
	'primary',
	'md'
);
