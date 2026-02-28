import type { IMessageMetaStyleClasses } from '$stylist/design-system/contracts/information/message-meta';
import { cn } from '../../utils/cn/index';

/**
 * Style utility class following Single Responsibility Principle
 * Responsible only for managing MessageMeta styling logic
 * Uses CSS variables from the theme system
 */
export class MessageMetaStyleManager {
  static getBaseClasses(className: string): string {
    return cn(
      'message-meta-base flex justify-between text-xs text-[var(--color-text-tertiary)]',
      className
    );
  }

  static getTimestampClasses(): string {
    return 'message-timestamp';
  }

  static getSenderClasses(): string {
    return 'message-sender font-medium';
  }

  static getStatusClasses(status: string): string {
    const statusClasses: Record<string, string> = {
      sent: 'status-sent text-[var(--color-primary-500)]',
      delivered: 'status-delivered text-[var(--color-warning-500)]',
      read: 'status-read text-[var(--color-success-500)]'
    };

    return statusClasses[status] || 'status-default';
  }

  static getAllClasses(className: string, status: string): string {
    const baseClasses = this.getBaseClasses(className);
    const statusClass = this.getStatusClasses(status);

    return `${baseClasses} ${statusClass}`;
  }
}
