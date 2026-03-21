import type { ArchitectureHTMLAttributes } from '$stylist/design-system/html/attributes/architecture';
import type { ComponentType, Snippet } from 'svelte';
import type { Alignment } from '$stylist/design-system/tokens/architecture/alignments';
import type { SidebarVariant } from '$stylist/design-system/tokens/interaction/variants';

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
	variant?: SidebarVariant;
	position?: Alignment;
	disabled?: boolean;
	navClass?: string;
	itemClass?: string;
	activeItemClass?: string;
	disabledItemClass?: string;
	titleClass?: string;
	logoClass?: string;
	footerClass?: string;
}
