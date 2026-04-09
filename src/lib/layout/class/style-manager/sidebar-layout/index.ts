import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';

export type SidebarLayoutSide = 'left' | 'right';
export type SidebarLayoutGap = 'none' | 'sm' | 'md' | 'lg' | 'xl';
export type SidebarLayoutWidth = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

const GAP_MAP: Record<SidebarLayoutGap, string> = {
	none: 'gap-0',
	sm: 'gap-2',
	md: 'gap-4',
	lg: 'gap-6',
	xl: 'gap-8'
};

const SIDEBAR_WIDTH_MAP: Record<SidebarLayoutWidth, string> = {
	xs: 'w-48',
	sm: 'w-56',
	md: 'w-64',
	lg: 'w-72',
	xl: 'w-80'
};

const SIDEBAR_COLLAPSED_WIDTH = 'w-0 overflow-hidden';

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
