import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

/**
 * DashboardLayout variant options
 * @description Controls the spacing and density of the dashboard layout
 */
export type DashboardLayoutVariant = 'default' | 'compact' | 'spacious';

/**
 * DashboardLayout props interface
 * @description Properties for configuring the dashboard layout component
 */
export interface DashboardLayoutProps extends Omit<HTMLAttributes<HTMLDivElement>, 'class'> {
  /**
   * Snippet content for the header section
   * @description Renders custom header content
   */
  header?: Snippet;

  /**
   * Snippet content for the sidebar navigation
   * @description Renders custom sidebar content
   */
  sidebar?: Snippet;

  /**
   * Snippet content for the footer section
   * @description Renders custom footer content
   */
  footer?: Snippet;

  /**
   * Snippet content for the main content area
   * @description Renders the primary content of the dashboard
   */
  children: Snippet;

  /**
   * Additional CSS class for the wrapper element
   * @default ''
   */
  class?: string;

  /**
   * Additional CSS class for the header element
   * @default ''
   */
  headerClass?: string;

  /**
   * Additional CSS class for the sidebar element
   * @default ''
   */
  sidebarClass?: string;

  /**
   * Additional CSS class for the content area
   * @default ''
   */
  contentClass?: string;

  /**
   * Additional CSS class for the footer element
   * @default ''
   */
  footerClass?: string;

  /**
   * Controls whether the sidebar can be collapsed
   * @default true
   */
  collapsibleSidebar?: boolean;

  /**
   * Initial state of the sidebar (open/closed)
   * @default true
   */
  sidebarOpen?: boolean;

  /**
   * Callback fired when sidebar toggle state changes
   * @param open - The new open state of the sidebar
   */
  onSidebarToggle?: (open: boolean) => void;

  /**
   * CSS media query breakpoint for mobile sidebar behavior
   * @default 'lg'
   */
  mobileBreakpoint?: string;

  /**
   * Controls visibility of the sidebar toggle button
   * @default true
   */
  showSidebarToggle?: boolean;

  /**
   * Visual variant controlling spacing density
   * @default 'default'
   */
  variant?: DashboardLayoutVariant;
}

/**
 * DashboardLayout state interface
 * @description Internal state management for the dashboard layout
 */
export interface DashboardLayoutState {
  isSidebarOpen: boolean;
  isMobile: boolean;
  currentVariant: DashboardLayoutVariant;
}
