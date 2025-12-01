/**
 * Стиль-менеджер для атомарного компонента уведомлений
 */

interface INotificationStyleConfig {
  base: string;
  success: string;
  warning: string;
  error: string;
  info: string;
  default: string;
  message: string;
  mention: string;
  follow: string;
  like: string;
  comment: string;
  closeButton: string;
  content: string;
  title: string;
  messageText: string;
  timestamp: string;
}

const defaultConfig: INotificationStyleConfig = {
  base: 'notification flex items-start p-[--spacing-md] rounded-lg shadow-md border',
  success: 'bg-[--color-success-50] border-[--color-success-200] text-[--color-success-800]',
  warning: 'bg-[--color-warning-50] border-[--color-warning-200] text-[--color-warning-800]',
  error: 'bg-[--color-danger-50] border-[--color-danger-200] text-[--color-danger-800]',
  info: 'bg-[--color-primary-50] border-[--color-primary-200] text-[--color-primary-800]',
  default: 'bg-[--color-surface-primary] border-[--color-border-default] text-[--color-text-primary]',
  message: 'bg-[--color-surface-primary] border-[--color-border-default] text-[--color-text-primary]',
  mention: 'bg-[--color-accent-50] border-[--color-accent-200] text-[--color-accent-800]',
  follow: 'bg-[--color-secondary-50] border-[--color-secondary-200] text-[--color-secondary-800]',
  like: 'bg-[--color-info-50] border-[--color-info-200] text-[--color-info-800]',
  comment: 'bg-[--color-tertiary-50] border-[--color-tertiary-200] text-[--color-tertiary-800]',
  closeButton: 'ml-auto pl-[--spacing-sm] text-[--color-text-secondary] hover:text-[--color-text-primary] cursor-pointer',
  content: 'flex-1',
  title: 'font-[--font-weight-semibold] text-[--text-size-base] mb-[--spacing-xs]',
  messageText: 'text-[--text-size-sm] text-[--color-text-secondary] mb-[--spacing-xs]',
  timestamp: 'text-[--text-size-xs] text-[--color-text-muted]'
};

export class NotificationStyleManager {
  static getNotificationClass(type: import('./Notification.types').NotificationType, additionalClass: string = ''): string {
    const typeClass = defaultConfig[type] || defaultConfig.default;
    return `${defaultConfig.base} ${typeClass} ${additionalClass}`.trim();
  }

  static getCloseButtonClass(): string {
    return defaultConfig.closeButton;
  }

  static getContentClass(): string {
    return defaultConfig.content;
  }

  static getTitleClass(): string {
    return defaultConfig.title;
  }

  static getMessageClass(): string {
    return defaultConfig.messageText;
  }

  static getTimestampClass(): string {
    return defaultConfig.timestamp;
  }
}