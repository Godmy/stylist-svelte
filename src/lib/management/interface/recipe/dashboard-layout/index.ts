import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
import type { TokenDensity } from '$stylist/layout/type/alias/density';

export interface DashboardLayoutProps
	extends ComputeIntersectAll<[Omit<HTMLAttributes<HTMLDivElement>, 'class'>]> {
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
	variant?: TokenDensity;
}
