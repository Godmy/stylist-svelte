import type { InformationHTMLAttributes } from '$stylist/information/type/struct/information-html-attributes';
import type { AtomicPrinciplesShowcaseAtomicPrinciplesStats } from '$stylist/development/type/struct/atomic-principles-showcase-atomic-principles-stats';

export interface SlotAtomicPrinciplesShowcase
	extends Omit<InformationHTMLAttributes<HTMLElement>, 'class'> {
	stats?: AtomicPrinciplesShowcaseAtomicPrinciplesStats;
	badgeText?: string;
	title?: string;
	description?: string;
	class?: string;
}
