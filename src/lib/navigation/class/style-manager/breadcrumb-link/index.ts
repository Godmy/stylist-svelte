import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';
import { BREADCRUMB_LINK_VARIANT_CLASSES } from '$stylist/navigation/const/record/breadcrumb-link-variant-classes';

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
