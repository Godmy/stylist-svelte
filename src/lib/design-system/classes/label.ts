import type { LabelSize } from '../tokens';
import { cn } from '../utils/classnames';

export const BASE_LABEL_CLASSES = 'font-medium';
export const REQUIRED_INDICATOR_CLASSES = 'text-red-500';
export const LABEL_SIZE_CLASSES: Record<LabelSize, string> = {
	sm: 'text-sm',
	md: 'text-base',
	lg: 'text-lg'
};
export const LABEL_DISABLED_CLASSES = 'text-gray-400 cursor-not-allowed';
export const LABEL_ENABLED_CLASSES = 'text-gray-700';

export const DEFAULT_LABEL_DISABLED = false;
export const DEFAULT_LABEL_REQUIRED = false;
export const DEFAULT_LABEL_SIZE: keyof typeof LABEL_SIZE_CLASSES = 'md';

export const getLabelClasses = (
	size: keyof typeof LABEL_SIZE_CLASSES = DEFAULT_LABEL_SIZE as keyof typeof LABEL_SIZE_CLASSES,
	disabled = DEFAULT_LABEL_DISABLED,
	className = ''
) =>
	cn(
		BASE_LABEL_CLASSES,
		LABEL_SIZE_CLASSES[size],
		disabled ? LABEL_DISABLED_CLASSES : LABEL_ENABLED_CLASSES,
		DEFAULT_LABEL_REQUIRED && REQUIRED_INDICATOR_CLASSES,
		className
	);
