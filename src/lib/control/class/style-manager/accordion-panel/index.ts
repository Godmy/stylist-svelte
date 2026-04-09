import type { TokenSize } from '$stylist/layout/type/enum/size';
import { ACCORDION_PANEL_PADDING_CLASSES } from '$stylist/control/const/record/accordion-panel-padding-classes';

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
