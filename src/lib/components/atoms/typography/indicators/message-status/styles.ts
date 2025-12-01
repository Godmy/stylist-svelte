import type { MessageStatus, MessageStatusSize } from './types';

export class MessageStatusStyleManager {
  static getContainerClasses(status: MessageStatus): string {
    const statusColors: Record<MessageStatus, string> = {
      'sent': 'text-gray-400',
      'delivered': 'text-gray-400',
      'read': 'text-green-500'
    };

    const baseClasses = 'inline-flex items-center justify-center';
    const colorClass = statusColors[status];

    return `${baseClasses} ${colorClass}`;
  }

  static getIconSizeClasses(size: MessageStatusSize): string {
    const sizeClasses: Record<MessageStatusSize, string> = {
      'sm': 'w-3 h-3',
      'md': 'w-4 h-4'
    };

    return sizeClasses[size];
  }
}