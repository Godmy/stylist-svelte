import type { ArchitectureHTMLAttributes } from '$stylist/design-system/html/attributes/architecture';
import type { ComponentType, Snippet } from 'svelte';
import type { TokenAlignment } from '$stylist/design-system/tokens/architecture/alignment';
import type { TokenArchitecture } from '$stylist/design-system/tokens/architecture/architecture';

export interface NavItem {
	id: string;
	label: string;
	href?: string;
	icon?: ComponentType;
	onClick?: () => void;
	disabled?: boolean;
	active?: boolean;
	badge?: string | number;
}

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

