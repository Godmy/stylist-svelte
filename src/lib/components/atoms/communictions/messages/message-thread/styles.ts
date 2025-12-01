import type { IMessageThreadStyleClasses } from './types';

/**
 * Style utility class following Single Responsibility Principle
 * Responsible only for managing MessageThread styling logic
 * Uses CSS variables from the theme system
 */
export class MessageThreadStyleManager {
  static getBaseClasses(className: string): string {
    const baseClasses = 'message-thread-base flex flex-col h-full overflow-y-auto p-4 space-y-4';

    return `${baseClasses} ${className}`;
  }

  static getMessageClasses(): string {
    return 'message flex mb-4';
  }

  static getUserClasses(): string {
    return 'message-user flex justify-end';
  }

  static getContactClasses(): string {
    return 'message-contact flex justify-start';
  }

  static getAllClasses(className: string): string {
    return this.getBaseClasses(className);
  }
}