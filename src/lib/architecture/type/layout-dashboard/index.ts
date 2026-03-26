import type { TokenDensity } from '$stylist/architecture/type/token/density';

export interface DashboardLayoutState {
  isSidebarOpen: boolean;
  isMobile: boolean;
  currentVariant: TokenDensity;
}

export interface DashboardLayoutPreset {
  sidebarOpen: boolean;
  collapsibleSidebar: boolean;
  showSidebarToggle: boolean;
  variant: TokenDensity;
  mobileBreakpoint: string;
}
