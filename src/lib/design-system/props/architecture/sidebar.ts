import type { HTMLAttributes } from 'svelte/elements';
import type { ComponentType, Snippet } from 'svelte';

export type SidebarVariant = 'default' | 'compact' | 'minimal';
export type SidebarPosition = 'left' | 'right' | 'top' | 'bottom';

export type NavItem = {
  id: string;
  label: string;
  href?: string;
  icon?: ComponentType;
  onClick?: () => void;
  disabled?: boolean;
  active?: boolean;
  badge?: string | number;
};

export type SidebarProps = {
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
  position?: SidebarPosition;
  disabled?: boolean;
  class?: string;
  navClass?: string;
  itemClass?: string;
  activeItemClass?: string;
  disabledItemClass?: string;
  titleClass?: string;
  logoClass?: string;
  footerClass?: string;
} & HTMLAttributes<HTMLElement>;