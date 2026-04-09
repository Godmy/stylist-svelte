import type { Snippet } from 'svelte';
import type { ArchitectureHTMLAttributes } from '$stylist/layout/type/struct/item-architecture-html-attributes';
import type { SidebarLayoutGap, SidebarLayoutSide, SidebarLayoutWidth } from '$stylist/layout/class/style-manager/sidebar-layout';

export type SidebarLayoutProps = ArchitectureHTMLAttributes<HTMLDivElement> & {
	class?: string;
	sidebar: Snippet;
	children: Snippet;
	/** На какой стороне размещается сайдбар */
	side?: SidebarLayoutSide;
	/** Ширина сайдбара */
	sidebarWidth?: SidebarLayoutWidth;
	/** Промежуток между сайдбаром и основным контентом */
	gap?: SidebarLayoutGap;
	/** Схлопнуть сайдбар */
	collapsed?: boolean;
	/** Растягивает layout на всю высоту родителя */
	fillHeight?: boolean;
	/** Адаптивный режим: на мобильных — вертикальный, на lg+ — горизонтальный */
	responsive?: boolean;
	/** aria-label для <aside> элемента сайдбара (role="complementary") */
	sidebarLabel?: string;
};
