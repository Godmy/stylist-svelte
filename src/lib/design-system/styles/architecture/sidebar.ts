import { cn } from '../../utils/cn/index';

/**
 * Style manager for the Sidebar component
 * Following the design system patterns
 */
export class SidebarStyleManager {
  static getHostClasses(baseClass: string = ''): string {
    return cn('c-sidebar flex', baseClass);
  }

  static getMobileButtonClasses(): string {
    return 'absolute top-[--spacing-4] left-[--spacing-4] z-[var(--z-index-modal)] p-[--spacing-2] rounded-[--radius-md] text-[--color-text-primary] lg:hidden';
  }

  static getOverlayClasses(): string {
    return 'fixed inset-0 z-[var(--z-index-overlay)] bg-[--color-overlay-backdrop] lg:hidden';
  }

  static getSidebarClasses(isMobile: boolean, isSidebarOpen: boolean, width: string, mobileWidth: string): string {
    return cn(
      'fixed left-0 top-0 z-[var(--z-index-overlay)] h-screen bg-[--color-background-primary] shadow-[--shadow-lg] transition-[transform,margin] duration-[var(--duration-300)] ease-in-out lg:sticky',
      isMobile
        ? isSidebarOpen
          ? 'translate-x-0'
          : '-translate-x-full'
        : 'translate-x-0',
      !isMobile && !isSidebarOpen ? '-ml-[var(--sidebar-width)]' : 'ml-0'
    );
  }

  static getSidebarStyle(isMobile: boolean, isSidebarOpen: boolean, width: string, mobileWidth: string): string {
    const resolvedWidth = isMobile ? mobileWidth : width;
    const marginLeft = !isMobile && !isSidebarOpen ? `-${width}` : '0px';
    return `--sidebar-width: ${width}; width: ${resolvedWidth}; margin-left: ${marginLeft};`;
  }

  static getSidebarContainerClasses(): string {
    return 'flex h-full flex-col border-r border-[--color-border-primary]';
  }

  static getHeaderClasses(customClass: string = ''): string {
    return cn(
      'flex items-center border-b border-[--color-border-primary] p-[--spacing-4]',
      customClass
    );
  }

  static getLogoWrapperClasses(): string {
    return 'mr-[--spacing-3]';
  }

  static getTitleClasses(customClass: string = ''): string {
    return cn(
      'text-[--text-size-xl] font-[--font-weight-semibold] text-[--color-text-primary]',
      customClass
    );
  }

  static getNavClasses(customClass: string = ''): string {
    return cn('flex-1 overflow-y-auto py-[--spacing-4]', customClass);
  }

  static getNavListClasses(): string {
    return 'space-y-[--spacing-1] px-[--spacing-2]';
  }

  static getNavItemClasses(isActive: boolean, isDisabled: boolean, customClass: string = '', activeClass: string = '', disabledClass: string = ''): string {
    return cn(
      'flex items-center rounded-[--radius-lg] p-[--spacing-3] transition-colors',
      isActive
        ? activeClass || 'border-r-[--border-width-2] border-[--color-border-primary] bg-[--color-primary-50] text-[--color-text-primary]'
        : 'text-[--color-text-primary] hover:bg-[--color-background-hover]',
      isDisabled
        ? disabledClass || 'cursor-not-allowed opacity-[--opacity-medium]'
        : 'cursor-pointer',
      customClass
    );
  }

  static getNavItemIconWrapperClasses(): string {
    return 'mr-[--spacing-3]';
  }

  static getNavItemLabelClasses(): string {
    return 'flex-1 text-left';
  }

  static getNavItemBadgeClasses(): string {
    return 'rounded-full bg-[--color-background-tertiary] px-[--spacing-2] py-[--spacing-0.5] text-[--text-size-xs] font-[--font-weight-medium] text-[--color-text-primary]';
  }

  static getFooterClasses(customClass: string = ''): string {
    return cn(
      'mt-auto border-t border-[--color-border-primary] p-[--spacing-4]',
      customClass
    );
  }

  static getContentAreaClasses(isSidebarOpen: boolean, isMobile: boolean): string {
    let classes = 'flex-1 lg:ml-0 transition-all duration-[var(--duration-300)] ';
    
    if (isSidebarOpen && !isMobile) {
      // Space occupied when sidebar is open on desktop
    }
    
    return classes;
  }
}






