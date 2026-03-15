import type { ComponentSize } from '../../tokens/architecture/component-size';
import type { Code } from '../../tokens/interaction/variants';
import type { DefaultVariants } from '../../tokens';
import { cn } from '../../utils/cn/index';
import { BADGE_DEFAULTS, CODE_BLOCK_DEFAULTS } from '../../defaults/information/badge';

export class BadgeStyleManager {
	static getBadgeClasses(
		variant: DefaultVariants = BADGE_DEFAULTS.variant,
		size: ComponentSize = BADGE_DEFAULTS.size,
		className = ''
	): string {
		return cn(
			'inline-flex items-center font-semibold rounded-full',
			this.getBadgeVariantClass(variant),
			this.getBadgeSizeClass(size),
			className
		);
	}

	static getBadgeVariantClass(variant: DefaultVariants = BADGE_DEFAULTS.variant): string {
		return {
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
		}[variant];
	}

	static getBadgeSizeClass(size: ComponentSize = BADGE_DEFAULTS.size): string {
		return {
			xs: 'text-[10px] px-1.5 py-0.5',
			sm: 'text-xs px-2 py-0.5',
			md: 'text-sm px-2.5 py-0.5',
			lg: 'text-base px-3 py-1',
			xl: 'text-lg px-3.5 py-1.5',
			'2xl': 'text-xl px-4 py-2'
		}[size];
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
		variant: Code = CODE_BLOCK_DEFAULTS.variant,
		size: ComponentSize = CODE_BLOCK_DEFAULTS.size,
		className = ''
	): string {
		return cn(
			'rounded-md overflow-x-auto font-mono',
			this.getCodeVariantClass(variant),
			this.getCodeSizeClass(size),
			className
		);
	}

	static getCodeVariantClass(variant: Code = CODE_BLOCK_DEFAULTS.variant): string {
		return {
			default: 'bg-[--color-neutral-900] text-[--color-text-inverse]',
			terminal: 'bg-[var(--color-neutral-900)] text-[--color-success-400] font-mono',
			diff: 'bg-[--color-background-secondary] text-[--color-text-primary]'
		}[variant];
	}

	static getCodeSizeClass(size: ComponentSize = CODE_BLOCK_DEFAULTS.size): string {
		return {
			xs: 'text-[10px] p-1.5',
			sm: 'text-xs p-2',
			md: 'text-sm p-4',
			lg: 'text-base p-6',
			xl: 'text-lg p-8',
			'2xl': 'text-xl p-10'
		}[size];
	}
}
