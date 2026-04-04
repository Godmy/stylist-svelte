import type { TokenSize } from '$stylist/layout/type/enum/size';

const ACCORDION_PANEL_PADDING_CLASSES: Record<TokenSize, string> = {
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

export class AccordionPanelStyleManager {
	private static join(classes: Array<string | false | null | undefined>): string {
		return classes.filter(Boolean).join(' ').trim();
	}

	static getAccordionPanelClasses(
		open = false,
		padding: TokenSize = 'md',
		className?: string
	): string {
		return this.join([
			'overflow-hidden transition-all duration-200 ease-in-out',
			'text-[var(--color-text-secondary)] text-sm',
			ACCORDION_PANEL_PADDING_CLASSES[padding] ?? ACCORDION_PANEL_PADDING_CLASSES.md,
			open ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0',
			className
		]);
	}

	static getAccordionPanelContentClasses(className?: string): string {
		return this.join([
			'',
			className
		]);
	}

	static getAccordionClasses(className?: string): string {
		return this.join([
			'w-full border border-[var(--color-border-primary)] rounded-md overflow-hidden bg-[var(--color-background-primary)]',
			className
		]);
	}

	static getAccordionItemClasses(open = false, className?: string): string {
		return this.join([
			'border-b border-[var(--color-border-primary)] last:border-b-0',
			open ? 'bg-[var(--color-background-secondary)]' : '',
			className
		]);
	}
}
