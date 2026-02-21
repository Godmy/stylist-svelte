import { LABEL_SIZE_CLASSES } from '../classes/information/label';
import { createDefaultValues } from './defaults';

export const LABEL_DEFAULTS = createDefaultValues<never, keyof typeof LABEL_SIZE_CLASSES>(
	undefined as never,
	'md'
);

export const DEFAULT_LABEL_DISABLED = false;
export const DEFAULT_LABEL_REQUIRED = false;
