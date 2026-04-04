import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';

const TAB_VARIANT_CLASSES: Record<string, string> = {
	default:
		'border-b-2 border-transparent data-[state=active]:border-[var(--color-primary-600)] data-[state=active]:text-[var(--color-primary-600)]',
	underline:
		'border-b-2 border-transparent data-[state=active]:border-[var(--color-primary-600)] data-[state=active]:text-[var(--color-primary-600)]',
	pill:
		'rounded-full data-[state=active]:bg-[var(--color-primary-600)] data-[state=active]:text-[var(--color-text-inverse)]',
	box:
		'rounded-md border border-transparent data-[state=active]:border-[var(--color-border-primary)] data-[state=active]:bg-[var(--color-background-primary)]',
	enclosed:
		'rounded-t-md border border-transparent data-[state=active]:border-[var(--color-border-primary)] data-[state=active]:bg-[var(--color-background-primary)] data-[state=active]:border-b-transparent'
};

const TAB_SIZE_CLASSES: Record<TokenSize, string> = {
	xs: 'px-2 py-1 text-xs',
	sm: 'px-3 py-1.5 text-sm',
	md: 'px-4 py-2 text-sm',
	lg: 'px-5 py-2.5 text-base',
	xl: 'px-6 py-3 text-base',
	'2xl': 'px-7 py-3.5 text-lg',
	'1/4': 'px-2 py-1 text-xs',
	'1/3': 'px-3 py-1.5 text-sm',
	'2/5': 'px-3 py-1.5 text-sm',
	'1/2': 'px-4 py-2 text-sm',
	'3/5': 'px-4 py-2 text-sm',
	'2/3': 'px-5 py-2.5 text-base',
	'3/4': 'px-6 py-3 text-base',
	full: 'px-7 py-3.5 text-lg flex-1 justify-center'
};

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
