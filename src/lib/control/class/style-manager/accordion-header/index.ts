import type { TokenSize } from '$stylist/layout/type/enum/size';

const ACCORDION_HEADER_PADDING_CLASSES: Record<TokenSize, string> = {
	xs: 'px-2 py-1.5',
	sm: 'px-3 py-2',
	md: 'px-4 py-2.5',
	lg: 'px-5 py-3',
	xl: 'px-6 py-3.5',
	'2xl': 'px-7 py-4',
	'1/4': 'px-2 py-1.5',
	'1/3': 'px-3 py-2',
	'2/5': 'px-3 py-2',
	'1/2': 'px-4 py-2.5',
	'3/5': 'px-4 py-2.5',
	'2/3': 'px-5 py-3',
	'3/4': 'px-6 py-3.5',
	full: 'px-7 py-4'
};

export class AccordionHeaderStyleManager {
	private static join(classes: Array<string | false | null | undefined>): string {
		return classes.filter(Boolean).join(' ').trim();
	}

	static getAccordionHeaderClasses(
		open = false,
		disabled = false,
		padding: TokenSize = 'md',
		className?: string
	): string {
		return this.join([
			'flex items-center justify-between w-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary-500)] focus-visible:ring-offset-2',
			'text-[var(--color-text-primary)] hover:bg-[var(--color-background-secondary)]',
			ACCORDION_HEADER_PADDING_CLASSES[padding] ?? ACCORDION_HEADER_PADDING_CLASSES.md,
			open ? 'bg-[var(--color-background-secondary)]' : '',
			disabled ? 'opacity-[var(--opacity-50)] cursor-not-allowed pointer-events-none' : 'cursor-pointer',
			className
		]);
	}

	static getAccordionHeaderTitleClasses(className?: string): string {
		return this.join([
			'text-sm',
			className
		]);
	}

	static getAccordionHeaderIconClasses(open = false, className?: string): string {
		return this.join([
			'w-4 h-4 transition-transform duration-200',
			open ? 'rotate-180' : '',
			className
		]);
	}

	static getAccordionHeaderTriggerClasses(className?: string): string {
		return this.join([
			'flex items-center gap-2',
			className
		]);
	}
}
