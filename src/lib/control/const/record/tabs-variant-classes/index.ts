import type { TokenSize } from '$stylist/layout/type/enum/size';

export const TABS_VARIANT_CLASSES: Record<string, string> = {
	default: 'border-b border-[var(--color-border-primary)]',
	underline: 'border-b border-[var(--color-border-primary)]',
	pill: '',
	box: 'border border-[var(--color-border-primary)] rounded-md bg-[var(--color-background-secondary)]',
	enclosed: 'border border-[var(--color-border-primary)] rounded-t-md bg-[var(--color-background-secondary)]',
	line: ''
};
