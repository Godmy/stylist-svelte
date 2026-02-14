import type { IMessageMetaStyleClasses } from '$stylist/design-system/props/message-meta';

/**
 * Style utility class following Single Responsibility Principle
 * Responsible only for managing MessageMeta styling logic
 * Uses CSS variables from the theme system
 */
export class MessageMetaStyleManager {
  static getBaseClasses(className: string): string {
    const baseClasses = 'message-meta-base flex justify-between text-xs text-gray-500';

    return `${baseClasses} ${className}`;
  }

  static getTimestampClasses(): string {
    return 'message-timestamp';
  }

  static getSenderClasses(): string {
    return 'message-sender font-medium';
  }

  static getStatusClasses(status: string): string {
    const statusClasses: Record<string, string> = {
      sent: 'status-sent text-blue-500',
      delivered: 'status-delivered text-yellow-500',
      read: 'status-read text-green-500'
    };

    return statusClasses[status] || 'status-default';
  }

  static getAllClasses(className: string, status: string): string {
    const baseClasses = this.getBaseClasses(className);
    const statusClass = this.getStatusClasses(status);

    return `${baseClasses} ${statusClass}`;
  }
}