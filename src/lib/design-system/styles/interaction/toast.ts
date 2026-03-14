import type { IToastStyleClasses } from '$stylist/design-system/contracts/interaction/toast';
import type { NotificationType } from '$stylist/design-system/tokens/interaction/statuses';

/**
 * Style utility class following Single Responsibility Principle
 * Responsible only for managing toast styling logic
 * Uses CSS variables from the theme system
 */
export class ToastStyleManager {
  static getTypeClasses(type: NotificationType): string {
    const typeClasses: Record<NotificationType, string> = {
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

  static getAllClasses(type: NotificationType, isVisible: boolean, className: string): string {
    const baseClasses = 'toast-base border rounded-md p-4 mb-2 transition-opacity duration-[var(--duration-300)]';
    const typeClass = this.getTypeClasses(type);
    const visibilityClass = this.getVisibilityClass(isVisible);

    return `${baseClasses} ${typeClass} ${visibilityClass} ${className}`;
  }
}







