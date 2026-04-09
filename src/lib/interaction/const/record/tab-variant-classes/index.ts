import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';

export const TAB_VARIANT_CLASSES: Record<string, string> = {
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
