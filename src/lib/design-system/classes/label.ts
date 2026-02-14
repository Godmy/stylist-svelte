import type { LabelSize } from '../tokens';

export const BASE_LABEL_CLASSES = 'font-medium';
export const REQUIRED_INDICATOR_CLASSES = 'text-red-500';
export const LABEL_SIZE_CLASSES: Record<LabelSize, string> = {
	sm: 'text-sm',
	md: 'text-base',
	lg: 'text-lg'
};
export const LABEL_DISABLED_CLASSES = 'text-gray-400 cursor-not-allowed';
export const LABEL_ENABLED_CLASSES = 'text-gray-700';

