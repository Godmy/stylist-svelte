import type { Snippet } from 'svelte';
import type { ArchitectureHTMLAttributes } from '$stylist/layout/type/struct/item-architecture-html-attributes';

export type StickyLayoutProps = ArchitectureHTMLAttributes<HTMLDivElement> & {
	class?: string;
	children: Snippet;
	/** Прилипающий заголовок */
	header?: Snippet;
	/** Прилипающий футер */
	footer?: Snippet;
	/** Растягивает layout на всю высоту родителя */
	fillHeight?: boolean;
	/** Тень под заголовком */
	headerShadow?: boolean;
	/** Тень над футером */
	footerShadow?: boolean;
};
