import type { IToastStyleClasses } from '$stylist/feedback/type/struct/toast';
import type { ToastNotificationType } from '$stylist/feedback/type/struct/toast';

/**
 * TokenBorderStyle utility class following Single Responsibility Principle
 * Responsible only for managing toast styling logic
 * Uses CSS variables from the theme system
 */
export class ToastStyleManager {
  static getTypeClasses(type: ToastNotificationType): string {
    const typeClasses: Record<ToastNotificationType, string> = {
      silent: 'toast-variant-info',
      info: 'toast-variant-info',
      success: 'toast-variant-success', 
      warning: 'toast-variant-warning',
      error: 'toast-variant-error'
    };

    return typeClasses[type];
  }

  static getVisibilityClass(isVisible: boolean): string {
    return isVisible ? 'toast-visible' : 'toast-hidden';
  }

  static getAllClasses(type: ToastNotificationType, isVisible: boolean, className: string): string {
    const baseClasses = 'toast-base border rounded-md p-4 mb-2 transition-opacity duration-[var(--duration-300)]';
    const typeClass = this.getTypeClasses(type);
    const visibilityClass = this.getVisibilityClass(isVisible);

    return `${baseClasses} ${typeClass} ${visibilityClass} ${className}`;
  }
}







