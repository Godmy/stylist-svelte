import { cn } from '../../utils/cn/index';

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
	'2xl': 'text-2xl'
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


