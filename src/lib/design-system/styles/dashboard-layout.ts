import { cn } from '../utils/cn';

export type DashboardLayoutVariant = 'default' | 'compact' | 'spacious';

export class DashboardLayoutStyleManager {
  static getWrapperClasses(className = ''): string {
    return cn(
      'c-dashboard-layout',
      'flex',
      'h-screen',
      'bg-[--color-background-secondary]',
      className
    );
  }

  static getSidebarClasses(isOpen: boolean, collapsible: boolean, className = ''): string {
    return cn(
      'c-dashboard-layout__sidebar',
      'hidden',
      'md:block',
      'bg-[--color-background-primary]',
      'shadow-md',
      'flex',
      'flex-col',
      'transition-all',
      'duration-300',
      'ease-in-out',
      isOpen ? 'w-64' : 'w-16',
      collapsible ? 'c-dashboard-layout__sidebar--collapsible' : '',
      className
    );
  }

  static getSidebarContentClasses(className = ''): string {
    return cn(
      'c-dashboard-layout__sidebar-content',
      'flex-1',
      'overflow-y-auto',
      'py-4',
      className
    );
  }

  static getSidebarToggleClasses(className = ''): string {
    return cn(
      'c-dashboard-layout__sidebar-toggle',
      'p-4',
      'flex',
      'justify-end',
      className
    );
  }

  static getMainContentClasses(className = ''): string {
    return cn(
      'c-dashboard-layout__main',
      'flex-1',
      'flex',
      'flex-col',
      'overflow-hidden',
      className
    );
  }

  static getHeaderClasses(className = ''): string {
    return cn(
      'c-dashboard-layout__header',
      'bg-[--color-background-primary]',
      'shadow-sm',
      'border-b',
      'border-[--color-border-primary]',
      className
    );
  }

  static getContentClasses(variant: DashboardLayoutVariant, className = ''): string {
    const variantClasses = {
      'default': 'p-4',
      'compact': 'p-2',
      'spacious': 'p-6'
    };

    return cn(
      'c-dashboard-layout__content',
      'flex-1',
      'overflow-y-auto',
      variantClasses[variant],
      className
    );
  }

  static getFooterClasses(className = ''): string {
    return cn(
      'c-dashboard-layout__footer',
      'bg-[--color-background-primary]',
      'border-t',
      'border-[--color-border-primary]',
      'py-3',
      'px-4',
      className
    );
  }

  static getMobileToggleClasses(className = ''): string {
    return cn(
      'c-dashboard-layout__mobile-toggle',
      'md:hidden',
      'fixed',
      'top-4',
      'left-4',
      'z-50',
      className
    );
  }

  static getMobileOverlayClasses(isOpen: boolean, className = ''): string {
    return cn(
      'c-dashboard-layout__mobile-overlay',
      'md:hidden',
      'fixed',
      'inset-0',
      'bg-black/50',
      'z-40',
      'transition-opacity',
      'duration-300',
      isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none',
      className
    );
  }

  static getMobileSidebarClasses(isOpen: boolean, className = ''): string {
    return cn(
      'c-dashboard-layout__mobile-sidebar',
      'md:hidden',
      'fixed',
      'top-0',
      'left-0',
      'h-full',
      'bg-[--color-background-primary]',
      'shadow-lg',
      'z-50',
      'transition-transform',
      'duration-300',
      'ease-in-out',
      isOpen ? 'translate-x-0' : '-translate-x-full',
      'w-64',
      className
    );
  }
}
