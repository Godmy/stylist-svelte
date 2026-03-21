import type { Snippet } from 'svelte';
import type { ArchitectureHTMLAttributes } from '$stylist/design-system/html/attributes/architecture';
import type { ChildrenHtmlAttributes } from '$stylist/design-system/html/attributes/children';
import type { Density } from '$stylist/design-system/tokens/architecture/densities';

/**
 * DashboardLayout props interface
 * @description Properties for configuring the dashboard layout component
 */
export interface DashboardLayoutProps
	extends ArchitectureHTMLAttributes<HTMLDivElement>,
		ChildrenHtmlAttributes<HTMLDivElement> {
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
  variant?: Density;
}

/**
 * DashboardLayout state interface
 * @description Internal state management for the dashboard layout
 */
export interface DashboardLayoutState {
  isSidebarOpen: boolean;
  isMobile: boolean;
  currentVariant: Density;
}

// Presets moved from presets\dashboard-layout.ts

/**
 * DashboardLayout preset interface
 * @description Default configuration for dashboard layout component
 */
export interface DashboardLayoutPreset {
  /**
   * Default sidebar open state
   * @default true
   */
  sidebarOpen: boolean;

  /**
   * Default collapsible sidebar state
   * @default true
   */
  collapsibleSidebar: boolean;

  /**
   * Default show sidebar toggle state
   * @default true
   */
  showSidebarToggle: boolean;

  /**
   * Default variant
   * @default 'default'
   */
  variant: Density;

  /**
   * Default mobile breakpoint
   * @default 'lg'
   */
  mobileBreakpoint: string;
}


