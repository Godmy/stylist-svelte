import type { DashboardLayoutProps, DashboardLayoutState, DashboardLayoutVariant } from '../../props/architecture/dashboard-layout';
import { DashboardLayoutStyleManager } from '../../styles/architecture/dashboard-layout';
import { DASHBOARD_LAYOUT_PRESET } from '../../presets/dashboard-layout';
import { cn } from '../../utils/cn/index';

export { DASHBOARD_LAYOUT_PRESET };

/**
 * Creates centralized state for DashboardLayout component
 * @param preset - Preset configuration for the dashboard layout
 * @param props - Component props
 * @returns Reactive state object with classes and attributes
 */
export function createDashboardLayoutState(
  preset: typeof DASHBOARD_LAYOUT_PRESET,
  props: Partial<DashboardLayoutProps>
) {
  // Extract props with defaults from preset
  const {
    sidebarOpen = preset.sidebarOpen,
    collapsibleSidebar = preset.collapsibleSidebar,
    showSidebarToggle = preset.showSidebarToggle,
    variant = preset.variant,
    class: hostClass = '',
    headerClass = '',
    sidebarClass = '',
    contentClass = '',
    footerClass = ''
  } = props;

  // Reactive state
  let isSidebarOpen = $state(sidebarOpen);
  let isMobile = $state(false);

  // Update sidebar open state
  function toggleSidebar() {
    isSidebarOpen = !isSidebarOpen;
  }

  function setSidebarOpen(open: boolean) {
    isSidebarOpen = open;
  }

  // Check if mobile breakpoint is active
  function checkMobileBreakpoint(breakpoint: string = 'lg') {
    // This would be implemented with actual media query logic
    isMobile = breakpoint === 'sm' || breakpoint === 'md';
  }

  // Derived classes using style manager
  const wrapperClasses = $derived(
    DashboardLayoutStyleManager.getWrapperClasses(hostClass)
  );

  const sidebarClasses = $derived(
    DashboardLayoutStyleManager.getSidebarClasses(isSidebarOpen, collapsibleSidebar, sidebarClass)
  );

  const headerClasses = $derived(
    DashboardLayoutStyleManager.getHeaderClasses(headerClass)
  );

  const contentClasses = $derived(
    DashboardLayoutStyleManager.getContentClasses(variant as DashboardLayoutVariant, contentClass)
  );

  const footerClasses = $derived(
    DashboardLayoutStyleManager.getFooterClasses(footerClass)
  );

  const mobileToggleClasses = $derived(
    DashboardLayoutStyleManager.getMobileToggleClasses()
  );

  const mobileOverlayClasses = $derived(
    DashboardLayoutStyleManager.getMobileOverlayClasses(isSidebarOpen && isMobile)
  );

  const mobileSidebarClasses = $derived(
    DashboardLayoutStyleManager.getMobileSidebarClasses(isSidebarOpen, sidebarClass)
  );

  // Computed attributes
  const attrs = $derived({
    'data-sidebar-open': isSidebarOpen,
    'data-mobile': isMobile,
    'data-variant': variant
  });

  return {
    // State
    isSidebarOpen,
    isMobile,
    
    // Actions
    toggleSidebar,
    setSidebarOpen,
    checkMobileBreakpoint,
    
    // Classes
    wrapperClasses,
    sidebarClasses,
    headerClasses,
    contentClasses,
    footerClasses,
    mobileToggleClasses,
    mobileOverlayClasses,
    mobileSidebarClasses,
    
    // Attributes
    attrs
  };
}

/**
 * DashboardLayout model type
 */
export type DashboardLayoutModel = ReturnType<typeof createDashboardLayoutState>;

export default createDashboardLayoutState;