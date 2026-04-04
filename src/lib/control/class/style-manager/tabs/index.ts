import type { TokenSize } from '$stylist/layout/type/enum/size';

const TABS_VARIANT_CLASSES: Record<string, string> = {
	default: 'border-b border-[var(--color-border-primary)]',
	underline: 'border-b border-[var(--color-border-primary)]',
	pill: '',
	box: 'border border-[var(--color-border-primary)] rounded-md bg-[var(--color-background-secondary)]',
	enclosed: 'border border-[var(--color-border-primary)] rounded-t-md bg-[var(--color-background-secondary)]',
	line: ''
};

const TABS_SIZE_CLASSES: Record<TokenSize, string> = {
	xs: 'gap-1',
	sm: 'gap-1.5',
	md: 'gap-2',
	lg: 'gap-2.5',
	xl: 'gap-3',
	'2xl': 'gap-4',
	'1/4': 'gap-1',
	'1/3': 'gap-1.5',
	'2/5': 'gap-1.5',
	'1/2': 'gap-2',
	'3/5': 'gap-2',
	'2/3': 'gap-2.5',
	'3/4': 'gap-3',
	full: 'gap-4'
};

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
