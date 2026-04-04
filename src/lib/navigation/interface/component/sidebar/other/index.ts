import type { ArchitectureHTMLAttributes } from '$stylist/layout/type/struct/item';
import type { TokenAlignment } from '$stylist/layout/type/enum/alignment';
import type { TierContent } from '$stylist/architecture/type/enum/tier';
import type { NavItem } from '$stylist/navigation/type/struct/sidebar';
import type { Snippet } from 'svelte';

export interface SidebarProps extends ArchitectureHTMLAttributes<HTMLElement> {
	items: NavItem[];
	title?: string;
	logo?: Snippet;
	footer?: Snippet;
	collapsed?: boolean;
	collapsible?: boolean;
	mobileBreakpoint?: number;
	width?: string;
	mobileWidth?: string;
	variant?: TierContent;
	position?: TokenAlignment;
	disabled?: boolean;
	navClass?: string;
	itemClass?: string;
	activeItemClass?: string;
	disabledItemClass?: string;
	titleClass?: string;
	logoClass?: string;
	footerClass?: string;
}

export type { NavItem };
