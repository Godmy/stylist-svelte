import type { ComponentSize } from '../../tokens/architecture/component-size';
import type { Code } from '../../tokens/interaction/variants';
import type { DefaultVariants } from '../../tokens';
import { cn } from '../../utils/cn/index';

export const BADGE_VARIANT_CLASSES: Record<DefaultVariants, string> = {
	default: 'bg-[var(--color-background-secondary)] text-[var(--color-text-primary)]',
	primary: 'bg-[var(--color-primary-100)] text-[var(--color-primary-800)]',
	secondary: 'bg-[var(--color-secondary-100)] text-[var(--color-secondary-800)]',
	success: 'bg-[var(--color-success-100)] text-[var(--color-success-800)]',
	warning: 'bg-[var(--color-warning-100)] text-[var(--color-warning-800)]',
	danger: 'bg-[var(--color-danger-100)] text-[var(--color-danger-800)]',
	error: 'bg-[var(--color-danger-100)] text-[var(--color-danger-800)]',
	info: 'bg-[var(--color-primary-100)] text-[var(--color-primary-800)]',
	gray: 'bg-[var(--color-neutral-100)] text-[var(--color-neutral-800)]',
	neutral: 'bg-[var(--color-neutral-100)] text-[var(--color-neutral-800)]',
	solid: 'bg-[var(--color-primary-600)] text-[var(--color-text-inverse)]',
	outline: 'bg-transparent text-[var(--color-text-primary)] border border-[var(--color-border-primary)]',
	ghost: 'bg-transparent text-[var(--color-text-primary)]',
	link: 'bg-transparent text-[var(--color-primary-600)] underline underline-offset-2',
	subtle: 'bg-[var(--color-neutral-50)] text-[var(--color-text-primary)]',
	dark: 'bg-[var(--color-neutral-800)] text-[var(--color-text-inverse)]',
	light: 'bg-[var(--color-neutral-50)] text-[var(--color-text-primary)]'
};

export const BADGE_SIZE_CLASSES: Record<ComponentSize, string> = {
	xs: 'text-[10px] px-1.5 py-0.5',
	sm: 'text-xs px-2 py-0.5',
	md: 'text-sm px-2.5 py-0.5',
	lg: 'text-base px-3 py-1',
	xl: 'text-lg px-3.5 py-1.5',
	'2xl': 'text-xl px-4 py-2'
};

export const CODE_BLOCK_VARIANT_CLASSES: Record<Code, string> = {
	default: 'bg-[--color-neutral-900] text-[--color-text-inverse]',
	terminal: 'bg-black text-[--color-success-400] font-mono',
	diff: 'bg-[--color-background-secondary] text-[--color-text-primary]'
};

export const CODE_BLOCK_SIZE_CLASSES: Record<ComponentSize, string> = {
	xs: 'text-[10px] p-1.5',
	sm: 'text-xs p-2',
	md: 'text-sm p-4',
	lg: 'text-base p-6',
	xl: 'text-lg p-8',
	'2xl': 'text-xl p-10'
};

export const BADGE_DEFAULTS = {
	variant: 'default' as keyof typeof BADGE_VARIANT_CLASSES,
	size: 'md' as keyof typeof BADGE_SIZE_CLASSES
};

export const CODE_BLOCK_DEFAULTS = {
	variant: 'default' as keyof typeof CODE_BLOCK_VARIANT_CLASSES,
	size: 'md' as keyof typeof CODE_BLOCK_SIZE_CLASSES
};

export const DEFAULT_SHOW_LINE_NUMBERS = false;
export const DEFAULT_START_LINE_NUMBER = 1;

export class BadgeStyleManager {
	static getBadgeClasses(
		variant: keyof typeof BADGE_VARIANT_CLASSES = BADGE_DEFAULTS.variant,
		size: keyof typeof BADGE_SIZE_CLASSES = BADGE_DEFAULTS.size,
		className = ''
	): string {
		return cn(
			'inline-flex items-center font-semibold rounded-full',
			BADGE_VARIANT_CLASSES[variant],
			BADGE_SIZE_CLASSES[size],
			className
		);
	}

	static getBadgeGroupContainerClasses(className = ''): string {
		return cn('flex flex-wrap items-center gap-2', className);
	}

	static getBadgeGroupOverflowClasses(className = ''): string {
		return cn(
			'inline-flex items-center rounded-full text-xs font-medium bg-[var(--color-neutral-100)] text-[var(--color-neutral-800)] px-2.5 py-0.5',
			className
		);
	}

	static getCodeClasses(
		variant: keyof typeof CODE_BLOCK_VARIANT_CLASSES = CODE_BLOCK_DEFAULTS.variant,
		size: keyof typeof CODE_BLOCK_SIZE_CLASSES = CODE_BLOCK_DEFAULTS.size,
		className = ''
	): string {
		return cn(
			'rounded-md overflow-x-auto font-mono',
			CODE_BLOCK_VARIANT_CLASSES[variant],
			CODE_BLOCK_SIZE_CLASSES[size],
			className
		);
	}
}

