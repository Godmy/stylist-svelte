/**
 * Style manager for the Sidebar component
 * Following the design system patterns
 */
export class SidebarStyleManager {
  static getHostClasses(baseClass: string = ''): string {
    return `c-sidebar flex ${baseClass}`;
  }

  static getMobileButtonClasses(): string {
    return 'absolute top-[--spacing-4] left-[--spacing-4] z-50 p-[--spacing-2] rounded-[--radius-md] text-[--color-text-primary] lg:hidden';
  }

  static getOverlayClasses(): string {
    return 'fixed inset-0 z-40 bg-[--color-overlay-backdrop] lg:hidden';
  }

  static getSidebarClasses(isMobile: boolean, isSidebarOpen: boolean, width: string, mobileWidth: string): string {
    const widthNum = width.replace('px', '');
    const mobileWidthNum = mobileWidth.replace('px', '');
    
    let classes = 'fixed lg:sticky top-0 left-0 h-screen z-40 bg-[--color-background-primary] shadow-[--shadow-lg] transform transition-transform duration-300 ease-in-out ';
    
    if (isMobile) {
      if (isSidebarOpen) {
        classes += `translate-x-0 w-${mobileWidthNum}`;
      } else {
        classes += `-translate-x-full w-${mobileWidthNum}`;
      }
    } else {
      if (isSidebarOpen) {
        classes += `translate-x-0 w-${widthNum}`;
      } else {
        classes += `translate-x-0 -ml-${widthNum} w-${widthNum}`;
      }
    }
    
    return classes + ' lg:translate-x-0 lg:w-' + widthNum;
  }

  static getSidebarContainerClasses(): string {
    return 'h-full flex flex-col border-r border-[--color-border-primary]';
  }

  static getHeaderClasses(customClass: string = ''): string {
    return `flex items-center p-[--spacing-4] border-b border-[--color-border-primary] ${customClass}`;
  }

  static getLogoWrapperClasses(): string {
    return 'mr-[--spacing-3]';
  }

  static getTitleClasses(customClass: string = ''): string {
    return `text-[--text-size-xl] font-[--font-weight-semibold] text-[--color-text-primary] ${customClass}`;
  }

  static getNavClasses(customClass: string = ''): string {
    return `flex-1 overflow-y-auto py-[--spacing-4] ${customClass}`;
  }

  static getNavListClasses(): string {
    return 'space-y-[--spacing-1] px-[--spacing-2]';
  }

  static getNavItemClasses(isActive: boolean, isDisabled: boolean, customClass: string = '', activeClass: string = '', disabledClass: string = ''): string {
    let classes = 'flex items-center p-[--spacing-3] rounded-[--radius-lg] transition-colors ';
    
    if (isActive) {
      classes += activeClass || 'bg-[--color-surface-selected] text-[--color-text-accent] border-r-[--border-width-2] border-[--color-border-accent] ';
    } else {
      classes += 'text-[--color-text-primary] hover:bg-[--color-surface-hover] ';
    }
    
    if (isDisabled) {
      classes += disabledClass || 'opacity-[--opacity-medium] cursor-not-allowed ';
    } else {
      classes += 'cursor-pointer ';
    }
    
    return classes + customClass;
  }

  static getNavItemIconWrapperClasses(): string {
    return 'mr-[--spacing-3]';
  }

  static getNavItemLabelClasses(): string {
    return 'flex-1 text-left';
  }

  static getNavItemBadgeClasses(): string {
    return 'bg-[--color-surface-muted] text-[--color-text-primary] text-[--text-size-xs] font-[--font-weight-medium] px-[--spacing-2] py-[--spacing-0.5] rounded-full';
  }

  static getFooterClasses(customClass: string = ''): string {
    return `mt-auto p-[--spacing-4] border-t border-[--color-border-primary] ${customClass}`;
  }

  static getContentAreaClasses(isSidebarOpen: boolean, isMobile: boolean): string {
    let classes = 'flex-1 lg:ml-0 transition-all duration-300 ';
    
    if (isSidebarOpen && !isMobile) {
      // Space occupied when sidebar is open on desktop
    }
    
    return classes;
  }
}