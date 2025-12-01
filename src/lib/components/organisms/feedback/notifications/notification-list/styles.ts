import type { NotificationListType, INotification } from './types';

/**
 * Style utility class following Single Responsibility Principle
 * Responsible only for managing notification list styling logic
 * Uses CSS variables from the theme system
 */
export class NotificationListStyleManager {
  static getContainerClasses(hostClass: string): string {
    return `notification-list ${hostClass}`;
  }

  static getHeaderClasses(headerClass: string): string {
    return `border-b border-[--color-border-primary] p-4 ${headerClass}`;
  }

  static getUnreadBadgeClasses(): string {
    return 'ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[--color-danger-100] text-[--color-danger-800]';
  }

  static getNotificationItemClasses(isUnread: boolean, itemClass: string): string {
    return `p-4 hover:bg-[--color-surface-secondary] transition-colors ${
      isUnread ? 'bg-[--color-primary-50]' : 'bg-[--color-surface-primary]'
    } ${itemClass}`;
  }

  static getNotificationIconColor(type: NotificationListType): string {
    const colorMap: Record<NotificationListType, string> = {
      info: '[--color-primary-500]',
      success: '[--color-success-500]',
      warning: '[--color-warning-500]',
      error: '[--color-danger-500]',
      default: '[--color-gray-500]',
      message: '[--color-indigo-500]',
      mention: '[--color-purple-500]',
      follow: '[--color-primary-500]',
      like: '[--color-pink-500]',
      comment: '[--color-teal-500]'
    };

    return colorMap[type] || '[--color-gray-500]';
  }

  static getFooterClasses(footerClass: string): string {
    return `border-t border-[--color-border-primary] p-4 ${footerClass}`;
  }
}