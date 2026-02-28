import { cn } from '../../utils/cn/index';
import type { ComponentSize } from '../../tokens/architecture/component-size';
import { STATE_CLASSES } from '../../runtime/foundation';

export const TAB_SIZE_CLASSES: Record<ComponentSize, string> = {
	xs: 'px-1.5 py-0.5 text-xs',
	sm: 'px-2 py-1 text-sm',
	md: 'px-3 py-1.5 text-base',
	lg: 'px-4 py-2 text-lg',
	xl: 'px-5 py-2.5 text-xl',
	'2xl': 'px-6 py-3 text-2xl'
};

export const TAB_VARIANT_CLASSES: Record<string, string> = {
	primary: 'text-[var(--color-primary-600)]',
	secondary: 'text-[var(--color-secondary-600)]',
	success: 'text-[var(--color-success-600)]',
	warning: 'text-[var(--color-warning-600)]',
	danger: 'text-[var(--color-danger-600)]',
	ghost: 'text-[var(--color-text-primary)]',
	link: 'text-[var(--color-primary-600)] underline underline-offset-4',
	info: 'text-[var(--color-info-600)]',
	solid: 'bg-[var(--color-primary-600)] text-white',
	outline: 'border-2 border-[var(--color-primary-600)] text-[var(--color-primary-600)]',
	subtle: 'bg-[var(--color-primary-100)] text-[var(--color-primary-600)]'
};

export const DISABLED_CLASSES = STATE_CLASSES.disabled;

export class TabsStyleManager {
	static getTabClasses(options: {
		variant?: string;
		size?: string;
		selected?: boolean;
		disabled?: boolean;
		className?: string;
	}): string {
		const variant = options.variant ?? 'primary';
		const size = options.size ?? 'md';
		const sizeClass = TAB_SIZE_CLASSES[size as keyof typeof TAB_SIZE_CLASSES] ?? TAB_SIZE_CLASSES.md;
		const variantClass =
			TAB_VARIANT_CLASSES[variant as keyof typeof TAB_VARIANT_CLASSES] ?? TAB_VARIANT_CLASSES.primary;
		return cn(
			'inline-flex items-center justify-center rounded-md transition-colors',
			sizeClass,
			variantClass,
			options.selected ? 'bg-[var(--color-background-secondary)] font-semibold' : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-background-secondary)]',
			options.disabled ? DISABLED_CLASSES : '',
			options.className ?? ''
		);
	}

	static getTabListClasses(vertical = false, className = ''): string {
		return cn('flex items-center gap-2', vertical ? 'flex flex-col' : '', className);
	}
}
