import { cn } from '$stylist/layout/function/script/merge-class-names';

const BASE_LABEL_CLASSES = 'font-medium';

const REQUIRED_INDICATOR_CLASSES = 'text-[--color-danger-500]';

const LABEL_DISABLED_CLASSES = 'text-[--color-text-tertiary] cursor-not-allowed';

const LABEL_ENABLED_CLASSES = 'text-[--color-text-primary]';

const LABEL_SIZE_CLASSES = {
	xs: 'text-xs',
	sm: 'text-sm',
	md: 'text-base',
	lg: 'text-lg',
	xl: 'text-xl',
	'2xl': 'text-2xl',
	'1/4': 'text-xs',
	'1/3': 'text-sm',
	'2/5': 'text-sm',
	'1/2': 'text-base',
	'3/5': 'text-base',
	'2/3': 'text-lg',
	'3/4': 'text-xl',
	full: 'text-2xl'
} as const;

const LABEL_DEFAULTS = {
	size: 'md' as keyof typeof LABEL_SIZE_CLASSES
};

const DEFAULT_LABEL_DISABLED = false;

const DEFAULT_LABEL_REQUIRED = false;





export class LabelStyleManager {
	static getLabelClasses(
		size: keyof typeof LABEL_SIZE_CLASSES = LABEL_DEFAULTS.size,
		disabled = DEFAULT_LABEL_DISABLED,
		className = ''
	): string {
		return cn('font-medium', LABEL_SIZE_CLASSES[size], disabled ? 'text-[--color-text-tertiary] cursor-not-allowed' : 'text-[--color-text-primary]', className);
	}
}



