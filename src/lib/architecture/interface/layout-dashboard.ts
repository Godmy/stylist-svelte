import type { Snippet } from 'svelte';
import type { TokenDensity } from '$stylist/architecture/type/token/density';

export interface ContractDashboardLayout {
	header?: Snippet;
	sidebar?: Snippet;
	footer?: Snippet;
	headerClass?: string;
	sidebarClass?: string;
	contentClass?: string;
	footerClass?: string;
	collapsibleSidebar?: boolean;
	sidebarOpen?: boolean;
	onSidebarToggle?: (open: boolean) => void;
	mobileBreakpoint?: string;
	showSidebarToggle?: boolean;
	variant?: TokenDensity;
}
