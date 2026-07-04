import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';
import type { LayoutHTMLAttributes } from '$stylist/layout/type/struct/item';
import type { SplitLayoutGap } from '$stylist/layout/type/alias/split-layout-gap';

import type { TOKEN_ALIGNMENT } from '$stylist/layout/const/array/alignment';
import type { TOKEN_SIZE } from '$stylist/theme/const/array/size';
export type SidebarLayoutProps = LayoutHTMLAttributes<HTMLDivElement> & {
	class?: string;
	sidebar: Snippet;
	children: Snippet;
	/** На какой стороне размещается сайдбар */
	side?: (typeof TOKEN_ALIGNMENT)[number];
	/** Ширина сайдбара */
	sidebarWidth?: (typeof TOKEN_SIZE)[number];
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

