import type { ArchitectureHTMLAttributes } from '$stylist/architecture/type/attribute/item';
import type { TokenAlignment } from '$stylist/architecture/type/token/alignment';
import type { TokenArchitecture } from '$stylist/architecture/type/token/architecture';
import type { NavItem } from '$stylist/architecture/type/attribute/sidebar';
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
	variant?: TokenArchitecture;
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
