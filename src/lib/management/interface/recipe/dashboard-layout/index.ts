import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { TokenDensity as DashboardLayoutVariant } from '$stylist/layout/type/enum/density';
import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

export interface DashboardLayoutProps extends StructIntersectAll<[Omit<HTMLAttributes<HTMLDivElement>, 'class'>]> {
	header?: Snippet;
	sidebar?: Snippet;
	sidebarOpen?: boolean;
	footer?: Snippet;
	children: Snippet;
	class?: string;
	headerClass?: string;
	sidebarClass?: string;
	contentClass?: string;
	footerClass?: string;
	collapsibleSidebar?: boolean;
	onSidebarToggle?: (open: boolean) => void;
	mobileBreakpoint?: string;
	showSidebarToggle?: boolean;
	variant?: DashboardLayoutVariant;
}
