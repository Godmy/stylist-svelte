import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';

const LINK_VARIANT_CLASSES: Record<TokenAppearance, string> = {
	default: 'text-[var(--color-text-primary)] hover:text-[var(--color-primary-600)]',
	primary: 'text-[var(--color-primary-600)] hover:text-[var(--color-primary-700)]',
	secondary: 'text-[var(--color-secondary-600)] hover:text-[var(--color-secondary-700)]',
	success: 'text-[var(--color-success-600)] hover:text-[var(--color-success-700)]',
	warning: 'text-[var(--color-warning-600)] hover:text-[var(--color-warning-700)]',
	danger: 'text-[var(--color-danger-600)] hover:text-[var(--color-danger-700)]',
	error: 'text-[var(--color-danger-600)] hover:text-[var(--color-danger-700)]',
	info: 'text-[var(--color-info-600)] hover:text-[var(--color-info-700)]',
	solid: 'text-[var(--color-primary-600)] hover:text-[var(--color-primary-700)]',
	outline: 'text-[var(--color-text-primary)] border border-[var(--color-border-primary)] hover:bg-[var(--color-background-secondary)]',
	ghost: 'text-[var(--color-text-primary)] hover:bg-[var(--color-background-secondary)]',
	link: 'text-[var(--color-primary-600)] hover:text-[var(--color-primary-700)] underline underline-offset-2',
	subtle: 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]',
	neutral: 'text-[var(--color-neutral-600)] hover:text-[var(--color-neutral-700)]',
	gray: 'text-[var(--color-neutral-600)] hover:text-[var(--color-neutral-700)]',
	dark: 'text-[var(--color-neutral-800)] hover:text-[var(--color-neutral-900)]',
	light: 'text-[var(--color-neutral-300)] hover:text-[var(--color-neutral-400)]',
	elevated: 'text-[var(--color-text-primary)] shadow-sm hover:shadow-md',
	flat: 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
};

const LINK_SIZE_CLASSES: Record<TokenSize, string> = {
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
};

export class LinkStyleManager {
	private static join(classes: Array<string | false | null | undefined>): string {
		return classes.filter(Boolean).join(' ').trim();
	}

	static getLinkClasses(
		variant: TokenAppearance = 'default',
		size: TokenSize = 'md',
		disabled = false,
		underline = true,
		className?: string
	): string {
		return this.join([
			'inline-flex items-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary-500)] focus-visible:ring-offset-2',
			LINK_VARIANT_CLASSES[variant] ?? LINK_VARIANT_CLASSES.default,
			LINK_SIZE_CLASSES[size] ?? LINK_SIZE_CLASSES.md,
			underline && variant !== 'outline' && variant !== 'ghost' ? 'underline underline-offset-2' : '',
			disabled ? 'opacity-[var(--opacity-50)] cursor-not-allowed pointer-events-none' : 'cursor-pointer hover:opacity-[var(--opacity-80)]',
			className
		]);
	}

	static getLinkIconClasses(className?: string): string {
		return this.join([
			'w-4 h-4 ml-1',
			className
		]);
	}
}
