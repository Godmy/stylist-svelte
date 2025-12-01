import type { NotificationCenterType, INotificationCenterNotification, FilterOption } from './types';

/**
 * Style utility class following Single Responsibility Principle
 * Responsible only for managing notification center styling logic
 * Uses CSS variables from the theme system
 */
export class NotificationCenterStyleManager {
  static getContainerClasses(className: string): string {
    return `bg-[--color-surface-primary] rounded-lg shadow-lg w-80 flex flex-col border border-[--color-border-primary] ${className}`;
  }

  static getHeaderClasses(headerClass: string): string {
    return `p-4 border-b flex items-center justify-between ${headerClass}`;
  }

  static getUnreadBadgeClasses(): string {
    return 'ml-2 bg-[--color-danger-500] text-[--color-text-inverse] text-xs rounded-full h-5 w-5 flex items-center justify-center';
  }

  static getFilterTabClasses(isActive: boolean): string {
    return `flex-1 py-2 text-xs font-medium ${
      isActive
        ? 'text-[--color-primary-600] border-b-2 border-[--color-primary-600]'
        : 'text-[--color-text-secondary] hover:text-[--color-text-primary]'
    }`;
  }

  static getNotificationItemClasses(isUnread: boolean, notificationClass: string): string {
    return `p-3 ${isUnread ? 'bg-[--color-primary-50]' : ''} ${notificationClass}`;
  }

  static getNotificationIconColor(type: NotificationCenterType): string {
    const colorClasses: Record<NotificationCenterType, string> = {
      success: '[--color-success-500]',
      warning: '[--color-warning-500]',
      error: '[--color-danger-500]',
      info: '[--color-primary-500]'
    };

    return colorClasses[type];
  }

  static getNotificationTitleClasses(isRead: boolean): string {
    return `text-sm font-medium ${
      isRead ? '[--color-text-secondary]' : '[--color-text-primary]'
    }`;
  }

  static getNotificationMessageClasses(isRead: boolean): string {
    return `mt-1 text-sm ${
      isRead ? '[--color-text-secondary]' : '[--color-text-tertiary]'
    }`;
  }

  static getNotificationTimestampClasses(): string {
    return 'text-xs [--color-text-secondary]';
  }

  static getFooterClasses(footerClass: string): string {
    return `p-3 border-t flex justify-between ${footerClass}`;
  }
}