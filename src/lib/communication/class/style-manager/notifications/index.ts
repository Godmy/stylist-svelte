import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';
import { NOTIFICATION_ITEM_TYPE_CLASSES } from '$stylist/communication/const/map/notification-item-type-classes';
import { NOTIFICATION_BADGE_STATE_CLASSES } from '$stylist/communication/const/map/notification-badge-state-classes';
import { RESPONSE_VIEWER_STATUS_CLASSES } from '$stylist/communication/const/map/response-viewer-status-classes';

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
