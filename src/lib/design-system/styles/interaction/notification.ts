import type { ToneVariant as NotificationType } from '$stylist/design-system/tokens/interaction/variants';
import type { NotificationPosition } from '$stylist/design-system/contracts/interaction/notification';

/**
 * Style utility class following Single Responsibility Principle
 * Responsible only for managing notification styling logic
 * Uses CSS variables from the theme system
 */
export class NotificationAtomStyleManager {
  static getTypeClasses(type: NotificationType): string {
    const typeClasses: Record<NotificationType, string> = {
      primary: 'bg-[--color-primary-50] border-[--color-primary-200] text-[--color-primary-800]',
      secondary: 'bg-[--color-secondary-50] border-[--color-secondary-200] text-[--color-secondary-800]',
      success: 'bg-[--color-success-50] border-[--color-success-200] text-[--color-success-800]',
      warning: 'bg-[--color-warning-50] border-[--color-warning-200] text-[--color-warning-800]',
      danger: 'bg-[--color-danger-50] border-[--color-danger-200] text-[--color-danger-800]',
      error: 'bg-[--color-danger-50] border-[--color-danger-200] text-[--color-danger-800]',
      info: 'bg-[--color-info-50] border-[--color-info-200] text-[--color-info-800]'
    };

    return typeClasses[type];
  }

  static getPositionClasses(position: NotificationPosition): string {
    const positionClasses: Record<NotificationPosition, string> = {
      'top-end': 'top-4 right-4',
      'top-start': 'top-4 left-4',
      'bottom-end': 'bottom-4 right-4',
      'bottom-start': 'bottom-4 left-4',
      'top-center': 'top-4 left-1/2 transform -translate-x-1/2',
      'bottom-center': 'bottom-4 left-1/2 transform -translate-x-1/2'
    };

    return positionClasses[position];
  }

  static getBaseClasses(type: NotificationType, position: NotificationPosition, className: string): string {
    const baseClasses = 'fixed z-50 max-w-sm w-full p-4 rounded-lg shadow-lg border';
    const typeClasses = this.getTypeClasses(type);
    const positionClasses = this.getPositionClasses(position);

    return `${baseClasses} ${typeClasses} ${positionClasses} ${className}`;
  }

  static getContentClasses(contentClass: string): string {
    return `ml-3 w-0 flex-1 ${contentClass}`;
  }

  static getHeaderClasses(headerClass: string): string {
    return `text-sm font-medium ${headerClass}`;
  }

  static getBodyClasses(bodyClass: string): string {
    return `mt-1 text-sm ${bodyClass}`;
  }

  static getCloseButtonClasses(): string {
    return 'inline-flex text-[--color-text-secondary] hover:text-[--color-text-primary] focus:outline-none';
  }
}


