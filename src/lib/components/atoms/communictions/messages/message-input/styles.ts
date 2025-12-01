import type { IMessageInputStyleClasses } from './types';

/**
 * Style utility class following Single Responsibility Principle
 * Responsible only for managing MessageInput styling logic
 * Uses CSS variables from the theme system
 */
export class MessageInputStyleManager {
  static getBaseClasses(className: string): string {
    const baseClasses = 'message-input-base flex items-center';

    return `${baseClasses} ${className}`;
  }

  static getInputClasses(isDisabled: boolean): string {
    const baseInputClasses = 'message-input w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2';
    const disabledClass = isDisabled ? 'opacity-50 cursor-not-allowed' : 'focus:ring-blue-500';

    return `${baseInputClasses} ${disabledClass}`;
  }

  static getDisabledClass(isDisabled: boolean): string {
    return isDisabled ? 'opacity-50 cursor-not-allowed' : '';
  }

  static getAllClasses(className: string, isDisabled: boolean): string {
    const baseClasses = this.getBaseClasses(className);
    const inputClasses = this.getInputClasses(isDisabled);
    const disabledClass = this.getDisabledClass(isDisabled);

    return `${baseClasses} ${inputClasses} ${disabledClass}`;
  }
}