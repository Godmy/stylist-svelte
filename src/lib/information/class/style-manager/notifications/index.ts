import { cn } from '$stylist/information/function/cn/index';

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
    return cn(base, className);
  }

  /**
   * Get classes for notification item
   */
  static item(base: string, type?: 'info' | 'success' | 'warning' | 'error', className?: string): string {
    return cn(base, type ? NOTIFICATION_ITEM_TYPE_CLASSES[type] : RESPONSE_VIEWER_STATUS_CLASSES.info, className);
  }

  /**
   * Get classes for scheduled notification
   */
  static scheduled(base: string, className?: string): string {
    return cn(base, 'rounded-lg border border-[var(--color-border-primary)] p-4', className);
  }

  /**
   * Get classes for notification badge
   */
  static badge(base: string, unread?: boolean, className?: string): string {
    return cn(
      base,
      unread ? NOTIFICATION_BADGE_STATE_CLASSES.unread : NOTIFICATION_BADGE_STATE_CLASSES.read,
      'rounded-full px-2 py-1 text-xs font-semibold',
      className
    );
  }
}

/**
 * Response Viewer Style Manager
 */
export class ResponseViewerStyleManager {
  /**
   * Get base classes for response viewer
   */
  static root(base: string, className?: string): string {
    return cn(base, 'overflow-hidden rounded-lg border border-[var(--color-border-primary)]', className);
  }

  /**
   * Get classes based on status
   */
  static byStatus(status: 'success' | 'error' | 'loading' | 'info'): string {
    return RESPONSE_VIEWER_STATUS_CLASSES[status];
  }

  /**
   * Get classes for code content
   */
  static code(base: string, className?: string): string {
    return cn(base, 'overflow-auto p-4 font-mono text-sm text-[var(--color-text-primary)]', className);
  }

  /**
   * Get classes for toolbar
   */
  static toolbar(base: string, className?: string): string {
    return cn(
      base,
      'flex items-center justify-between border-b border-[var(--color-border-primary)] bg-[var(--color-background-secondary)] px-4 py-2',
      className
    );
  }
}

/**
 * Document Preview Style Manager
 */
export class DocumentPreviewStyleManager {
  /**
   * Get base classes for document preview
   */
  static root(base: string, className?: string): string {
    return cn(base, 'overflow-hidden rounded-lg border border-[var(--color-border-primary)]', className);
  }

  /**
   * Get classes for preview content
   */
  static content(base: string, className?: string): string {
    return cn(base, 'overflow-auto p-4 font-mono text-sm text-[var(--color-text-primary)]', className);
  }

  /**
   * Get classes for line numbers
   */
  static lineNumbers(base: string, className?: string): string {
    return cn(
      base,
      'select-none border-r border-[var(--color-border-primary)] pr-4 text-right text-[var(--color-text-tertiary)]',
      className
    );
  }

  /**
   * Get classes for toolbar
   */
  static toolbar(base: string, className?: string): string {
    return cn(
      base,
      'flex items-center justify-between border-b border-[var(--color-border-primary)] bg-[var(--color-background-secondary)] px-4 py-2',
      className
    );
  }
}



