import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';
import { TAB_VARIANT_CLASSES } from '$stylist/interaction/const/record/tab-variant-classes';
import { TAB_SIZE_CLASSES } from '$stylist/interaction/const/record/tab-size-classes';

export class TabStyleManager {
	private static join(classes: Array<string | false | null | undefined>): string {
		return classes.filter(Boolean).join(' ').trim();
	}

	static getTabVariantClass(variant: string = 'default'): string {
		return TAB_VARIANT_CLASSES[variant] ?? TAB_VARIANT_CLASSES.default;
	}

	static getTabSizeClass(size: TokenSize = 'md'): string {
		return TAB_SIZE_CLASSES[size] ?? TAB_SIZE_CLASSES.md;
	}

	static getTabClasses(
		selected = false,
		disabled = false,
		variant: string = 'default',
		size: TokenSize = 'md',
		className?: string
	): string {
		return this.join([
			'inline-flex items-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary-500)] focus-visible:ring-offset-2',
			'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]',
			this.getTabVariantClass(variant),
			this.getTabSizeClass(size),
			disabled ? 'opacity-[var(--opacity-50)] cursor-not-allowed pointer-events-none' : 'cursor-pointer',
			className
		]);
	}

	static getTabListClasses(variant: string = 'default', className?: string): string {
		return this.join([
			'inline-flex items-center gap-1',
			variant === 'box' || variant === 'enclosed' ? 'border-b border-[var(--color-border-primary)]' : '',
			className
		]);
	}

	static getTabContentClasses(className?: string): string {
		return this.join([
			'mt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary-500)] focus-visible:ring-offset-2',
			className
		]);
	}

	static getTabIndicatorClasses(className?: string): string {
		return this.join([
			'absolute bottom-0 h-0.5 bg-[var(--color-primary-600)] transition-all duration-200',
			className
		]);
	}
}
