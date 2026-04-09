import type { TokenSize } from '$stylist/layout/type/enum/size';
import { TABS_VARIANT_CLASSES } from '$stylist/control/const/record/tabs-variant-classes';
import { TABS_SIZE_CLASSES } from '$stylist/control/const/record/tabs-size-classes';

export class TabsStyleManager {
	private static join(classes: Array<string | false | null | undefined>): string {
		return classes.filter(Boolean).join(' ').trim();
	}

	static getTabsClasses(
		variant: string = 'default',
		size: TokenSize = 'md',
		className?: string
	): string {
		return this.join([
			'flex',
			variant === 'default' || variant === 'underline' ? 'flex-col' : '',
			this.getTabsVariantClass(variant),
			this.getTabsSizeClass(size),
			className
		]);
	}

	static getTabsVariantClass(variant: string = 'default'): string {
		return TABS_VARIANT_CLASSES[variant] ?? TABS_VARIANT_CLASSES.default;
	}

	static getTabsSizeClass(size: TokenSize = 'md'): string {
		return TABS_SIZE_CLASSES[size] ?? TABS_SIZE_CLASSES.md;
	}

	static getTabsListClasses(className?: string): string {
		return this.join([
			'flex items-center',
			className
		]);
	}

	static getTabsContentClasses(className?: string): string {
		return this.join([
			'flex-1',
			className
		]);
	}

	static getTabsPanelClasses(className?: string): string {
		return this.join([
			'pt-4',
			className
		]);
	}

	static getTabClass(
		variant: string = 'default',
		size: TokenSize = 'md',
		selected = false,
		disabled = false,
		className?: string
	): string {
		return this.join([
			'px-4 py-2 font-medium transition-colors',
			selected ? 'text-[var(--color-primary-500)] border-b-2 border-[var(--color-primary-500)]' : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]',
			disabled && 'opacity-50 cursor-not-allowed',
			className
		]);
	}
}
