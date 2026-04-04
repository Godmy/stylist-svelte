import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';

const BREADCRUMB_LINK_VARIANT_CLASSES: Record<TokenAppearance, string> = {
	default: 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]',
	primary: 'text-[var(--color-primary-600)] hover:text-[var(--color-primary-700)]',
	secondary: 'text-[var(--color-secondary-600)] hover:text-[var(--color-secondary-700)]',
	success: 'text-[var(--color-success-600)] hover:text-[var(--color-success-700)]',
	warning: 'text-[var(--color-warning-600)] hover:text-[var(--color-warning-700)]',
	danger: 'text-[var(--color-danger-600)] hover:text-[var(--color-danger-700)]',
	error: 'text-[var(--color-danger-600)] hover:text-[var(--color-danger-700)]',
	info: 'text-[var(--color-info-600)] hover:text-[var(--color-info-700)]',
	solid: 'text-[var(--color-primary-600)] hover:text-[var(--color-primary-700)]',
	outline: 'text-[var(--color-text-primary)] hover:underline',
	ghost: 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]',
	link: 'text-[var(--color-primary-600)] hover:text-[var(--color-primary-700)] underline',
	subtle: 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]',
	neutral: 'text-[var(--color-neutral-600)] hover:text-[var(--color-neutral-700)]',
	gray: 'text-[var(--color-neutral-600)] hover:text-[var(--color-neutral-700)]',
	dark: 'text-[var(--color-neutral-800)] hover:text-[var(--color-neutral-900)]',
	light: 'text-[var(--color-neutral-400)] hover:text-[var(--color-neutral-500)]',
	elevated: 'text-[var(--color-text-primary)] hover:underline',
	flat: 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
};

export class BreadcrumbLinkStyleManager {
	private static join(classes: Array<string | false | null | undefined>): string {
		return classes.filter(Boolean).join(' ').trim();
	}

	static getBreadcrumbLinkClasses(
		variant: TokenAppearance = 'default',
		disabled = false,
		className?: string
	): string {
		return this.join([
			'inline-flex items-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary-500)] focus-visible:ring-offset-2',
			'text-sm underline underline-offset-2',
			BREADCRUMB_LINK_VARIANT_CLASSES[variant] ?? BREADCRUMB_LINK_VARIANT_CLASSES.default,
			disabled ? 'opacity-[var(--opacity-50)] cursor-not-allowed pointer-events-none' : '',
			className
		]);
	}

	static getBreadcrumbSeparatorClasses(className?: string): string {
		return this.join([
			'mx-2 text-[var(--color-text-tertiary)]',
			className
		]);
	}

	static getBreadcrumbClasses(className?: string): string {
		return this.join([
			'flex items-center flex-wrap',
			className
		]);
	}

	static getBreadcrumbItemClasses(className?: string): string {
		return this.join([
			'inline-flex items-center',
			className
		]);
	}

	static getBreadcrumbCurrentClasses(className?: string): string {
		return this.join([
			'text-sm font-medium text-[var(--color-text-primary)]',
			className
		]);
	}

	static getBreadcrumbListClasses(className?: string): string {
		return this.join([
			'flex items-center flex-wrap gap-1',
			className
		]);
	}
}
