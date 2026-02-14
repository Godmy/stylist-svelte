import {
	BADGE_SIZE_CLASSES,
	BADGE_VARIANT_CLASSES,
	CODE_BLOCK_SIZE_CLASSES,
	CODE_BLOCK_VARIANT_CLASSES
} from '../classes/badge';
import { createDefaultValues } from './defaults';

export const BADGE_DEFAULTS = createDefaultValues<
	keyof typeof BADGE_VARIANT_CLASSES,
	keyof typeof BADGE_SIZE_CLASSES
>('default', 'md');

export const CODE_BLOCK_DEFAULTS = createDefaultValues<
	keyof typeof CODE_BLOCK_VARIANT_CLASSES,
	keyof typeof CODE_BLOCK_SIZE_CLASSES
>('default', 'md');

export const DEFAULT_SHOW_LINE_NUMBERS = false;
export const DEFAULT_START_LINE_NUMBER = 1;
