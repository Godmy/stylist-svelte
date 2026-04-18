import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';
import { SIDEBAR_LAYOUT_GAP_MAP as GAP_MAP } from '$stylist/layout/const/map/sidebar-layout-gap-map';
import { SIDEBAR_LAYOUT_WIDTH_MAP as SIDEBAR_WIDTH_MAP } from '$stylist/layout/const/map/sidebar-layout-width-map';
import { SIDEBAR_COLLAPSED_WIDTH } from '$stylist/layout/const/value/sidebar-collapsed-width';
import type { SidebarLayoutGap } from '$stylist/layout/type/enum/sidebar-layout-gap';
import type { SidebarLayoutWidth } from '$stylist/layout/type/enum/sidebar-layout-width';

export class SidebarLayoutStyleManager {
	static getGapClass(gap: SidebarLayoutGap): string {
		return GAP_MAP[gap];
	}

	static getSidebarWidthClass(width: SidebarLayoutWidth, collapsed: boolean): string {
		if (collapsed) return SIDEBAR_COLLAPSED_WIDTH;
		return mergeClassNames(SIDEBAR_WIDTH_MAP[width], 'shrink-0 transition-[width] duration-200');
	}

	static getHostClass(gap: SidebarLayoutGap, fillHeight: boolean, className?: string): string {
		return mergeClassNames(
			'flex flex-row',
			this.getGapClass(gap),
			fillHeight && 'h-full',
			className
		);
	}

	static getContentClass(fillHeight: boolean): string {
		return mergeClassNames('flex-1 min-w-0', fillHeight && 'overflow-auto');
	}

	static getResponsiveHostClass(
		gap: SidebarLayoutGap,
		fillHeight: boolean,
		className?: string
	): string {
		return mergeClassNames(
			'flex flex-col lg:flex-row',
			this.getGapClass(gap),
			fillHeight && 'h-full',
			className
		);
	}

	static getResponsiveSidebarClass(width: SidebarLayoutWidth, collapsed: boolean): string {
		if (collapsed) return SIDEBAR_COLLAPSED_WIDTH;
		return mergeClassNames(
			'w-full lg:shrink-0',
			`lg:${SIDEBAR_WIDTH_MAP[width]}`,
			'transition-[width] duration-200'
		);
	}
}
