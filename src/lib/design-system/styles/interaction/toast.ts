import type { ToastType, IToastStyleClasses } from '$stylist/design-system/contracts/interaction/toast';

/**
 * Style utility class following Single Responsibility Principle
 * Responsible only for managing toast styling logic
 * Uses CSS variables from the theme system
 */
export class ToastStyleManager {
  static getTypeClasses(type: ToastType): string {
    const typeClasses: Record<ToastType, string> = {
      silent: 'toast-variant-info',
      info: 'toast-variant-info',
      success: 'toast-variant-success', 
      warning: 'toast-variant-warning',
      danger: 'toast-variant-error',
      error: 'toast-variant-error'
    };

    return typeClasses[type];
  }

  static getVisibilityClass(isVisible: boolean): string {
    return isVisible ? 'toast-visible' : 'toast-hidden';
  }

  static getAllClasses(type: ToastType, isVisible: boolean, className: string): string {
    const baseClasses = 'toast-base border rounded-md p-4 mb-2 transition-opacity duration-300';
    const typeClass = this.getTypeClasses(type);
    const visibilityClass = this.getVisibilityClass(isVisible);

    return `${baseClasses} ${typeClass} ${visibilityClass} ${className}`;
  }
}
