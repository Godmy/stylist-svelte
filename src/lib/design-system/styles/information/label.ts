import { cn } from '../../utils/cn/index';

export const BASE_LABEL_CLASSES = 'font-medium';
export const REQUIRED_INDICATOR_CLASSES = 'text-[--color-danger-500]';
export const LABEL_DISABLED_CLASSES = 'text-[--color-text-tertiary] cursor-not-allowed';
export const LABEL_ENABLED_CLASSES = 'text-[--color-text-primary]';

export const LABEL_SIZE_CLASSES = {
	xs: 'text-xs',
	sm: 'text-sm',
	md: 'text-base',
	lg: 'text-lg',
	xl: 'text-xl',
	'2xl': 'text-2xl'
} as const;

export const LABEL_DEFAULTS = {
	size: 'md' as keyof typeof LABEL_SIZE_CLASSES
};

export const DEFAULT_LABEL_DISABLED = false;
export const DEFAULT_LABEL_REQUIRED = false;

export class LabelStyleManager {
	static getLabelClasses(
		size: keyof typeof LABEL_SIZE_CLASSES = LABEL_DEFAULTS.size,
		disabled = DEFAULT_LABEL_DISABLED,
		className = ''
	): string {
		return cn('font-medium', LABEL_SIZE_CLASSES[size], disabled ? 'text-[--color-text-tertiary] cursor-not-allowed' : 'text-[--color-text-primary]', className);
	}
}
