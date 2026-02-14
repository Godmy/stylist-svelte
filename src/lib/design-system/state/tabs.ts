import type { CommonSize } from '../tokens/variants';
import { TAB_VARIANT_CLASSES } from '../classes/tabs';
import { createDefaultValues } from './defaults';

export const TAB_DEFAULTS = createDefaultValues<keyof typeof TAB_VARIANT_CLASSES, CommonSize>(
	'primary',
	'md'
);
