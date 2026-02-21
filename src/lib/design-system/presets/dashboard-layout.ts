import type { DashboardLayoutVariant } from '../props/architecture/dashboard-layout';

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
  variant: DashboardLayoutVariant;

  /**
   * Default mobile breakpoint
   * @default 'lg'
   */
  mobileBreakpoint: string;
}

/**
 * Default preset for DashboardLayout component
 * @description Standard configuration for dashboard layout
 */
export const DASHBOARD_LAYOUT_PRESET: DashboardLayoutPreset = {
  sidebarOpen: true,
  collapsibleSidebar: true,
  showSidebarToggle: true,
  variant: 'default',
  mobileBreakpoint: 'lg'
};

/**
 * Compact preset for DashboardLayout component
 * @description Compact configuration with reduced spacing
 */
export const DASHBOARD_LAYOUT_COMPACT_PRESET: DashboardLayoutPreset = {
  ...DASHBOARD_LAYOUT_PRESET,
  variant: 'compact'
};

/**
 * Spacious preset for DashboardLayout component
 * @description Spacious configuration with increased spacing
 */
export const DASHBOARD_LAYOUT_SPACIOUS_PRESET: DashboardLayoutPreset = {
  ...DASHBOARD_LAYOUT_PRESET,
  variant: 'spacious'
};

/**
 * Fixed sidebar preset for DashboardLayout component
 * @description Configuration with non-collapsible sidebar
 */
export const DASHBOARD_LAYOUT_FIXED_SIDEBAR_PRESET: DashboardLayoutPreset = {
  ...DASHBOARD_LAYOUT_PRESET,
  collapsibleSidebar: false,
  showSidebarToggle: false
};

/**
 * Get preset by name
 * @param name - Name of the preset
 * @returns The preset configuration
 */
export function getDashboardLayoutPreset(
  name: 'default' | 'compact' | 'spacious' | 'fixed-sidebar'
): DashboardLayoutPreset {
  switch (name) {
    case 'compact':
      return DASHBOARD_LAYOUT_COMPACT_PRESET;
    case 'spacious':
      return DASHBOARD_LAYOUT_SPACIOUS_PRESET;
    case 'fixed-sidebar':
      return DASHBOARD_LAYOUT_FIXED_SIDEBAR_PRESET;
    case 'default':
    default:
      return DASHBOARD_LAYOUT_PRESET;
  }
}
