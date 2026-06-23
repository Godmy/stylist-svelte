import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';
import type { LayoutHTMLAttributes } from '$stylist/layout/type/struct/item';
import type { SplitLayoutGap } from '$stylist/layout/type/enum/split-layout-gap';
import type { PopoverPosition } from '$stylist/layout/type/enum/popover-position';
import type { SidebarLayoutWidth } from '$stylist/layout/type/enum/sidebar-layout-width';

export type SidebarLayoutProps = LayoutHTMLAttributes<HTMLDivElement> & {
	class?: string;
	sidebar: Snippet;
	children: Snippet;
	/** На какой стороне размещается сайдбар */
	side?: PopoverPosition;
	/** Ширина сайдбара */
	sidebarWidth?: SidebarLayoutWidth;
	/** Промежуток между сайдбаром и основным контентом */
	gap?: SplitLayoutGap;
	/** Схлопнуть сайдбар */
	collapsed?: boolean;
	/** Растягивает layout на всю высоту родителя */
	fillHeight?: boolean;
	/** Адаптивный режим: на мобильных — вертикальный, на lg+ — горизонтальный */
	responsive?: boolean;
	/** aria-label для <aside> элемента сайдбара (role="complementary") */
	sidebarLabel?: string;
};
