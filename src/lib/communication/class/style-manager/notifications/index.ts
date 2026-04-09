import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';

const NOTIFICATION_ITEM_TYPE_CLASSES = {
	info: 'border-[var(--color-primary-200)] bg-[var(--color-primary-50)]',
	success: 'border-[var(--color-success-200)] bg-[var(--color-success-50)]',
	warning: 'border-[var(--color-warning-200)] bg-[var(--color-warning-50)]',
	error: 'border-[var(--color-danger-200)] bg-[var(--color-danger-50)]'
} as const;

const NOTIFICATION_BADGE_STATE_CLASSES = {
	unread: 'bg-[var(--color-danger-500)] text-[var(--color-text-inverse)]',
	read: 'bg-[var(--color-neutral-200)] text-[var(--color-text-secondary)]'
} as const;

const RESPONSE_VIEWER_STATUS_CLASSES = {
	success: 'border-[var(--color-success-200)] bg-[var(--color-success-50)]',
	error: 'border-[var(--color-danger-200)] bg-[var(--color-danger-50)]',
	loading: 'border-[var(--color-primary-200)] bg-[var(--color-primary-50)]',
	info: 'border-[var(--color-neutral-200)] bg-[var(--color-background-secondary)]'
} as const;

/**
 * Notification Components Style Manager
 * Provides consistent styling for notification-related components
 */

export class NotificationStyleManager {
  /**
   * Get base classes for notification preferences
   */
  static preferences(base: string, className?: string): string {
    return mergeClassNames(base, className);
  }

  /**
   * Get classes for notification item
   */
  static item(base: string, type?: 'info' | 'success' | 'warning' | 'error', className?: string): string {
    return mergeClassNames(base, type ? NOTIFICATION_ITEM_TYPE_CLASSES[type] : RESPONSE_VIEWER_STATUS_CLASSES.info, className);
  }

  /**
   * Get classes for scheduled notification
   */
  static scheduled(base: string, className?: string): string {
    return mergeClassNames(base, 'rounded-lg border border-[var(--color-border-primary)] p-4', className);
  }

  /**
   * Get classes for notification badge
   */
  static badge(base: string, unread?: boolean, className?: string): string {
    return mergeClassNames(
      base,
      unread ? NOTIFICATION_BADGE_STATE_CLASSES.unread : NOTIFICATION_BADGE_STATE_CLASSES.read,
      'rounded-full px-2 py-1 text-xs font-semibold',
      className
    );
  }
}
