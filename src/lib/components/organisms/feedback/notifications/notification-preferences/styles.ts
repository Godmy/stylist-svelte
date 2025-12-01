import type { INotificationCategory, INotificationPreferencesItem, NotificationPreferencesChannel } from './types';

/**
 * Style utility class following Single Responsibility Principle
 * Responsible only for managing notification preferences styling logic
 * Uses CSS variables from the theme system
 */
export class NotificationPreferencesStyleManager {
  static getContainerClasses(className: string): string {
    return `bg-[--color-surface-primary] rounded-lg shadow border border-[--color-border-primary] overflow-hidden ${className}`;
  }

  static getHeaderClasses(headerClass: string): string {
    return `border-b px-6 py-5 ${headerClass}`;
  }

  static getCategoryClasses(categoryClass: string): string {
    return `border border-[--color-border-primary] rounded-lg ${categoryClass}`;
  }

  static getCategoryHeaderClasses(): string {
    return 'border-b border-[--color-border-primary] px-4 py-3 flex items-center justify-between';
  }

  static getCategoryTitleClasses(): string {
    return 'text-sm font-medium text-[--color-text-primary]';
  }

  static getCategoryDescriptionClasses(): string {
    return 'mt-1 text-sm text-[--color-text-secondary]';
  }

  static getSelectAllButtonClasses(): string {
    return 'text-xs font-medium text-[--color-primary-600] hover:text-[--color-primary-900]';
  }

  static getCategoryContentClasses(): string {
    return 'p-4';
  }

  static getChannelCheckboxContainerClasses(): string {
    return 'flex items-center';
  }

  static getChannelCheckboxClasses(): string {
    return 'focus:ring-[--color-primary-500] h-4 w-4 text-[--color-primary-600] border-[--color-border-primary] rounded';
  }

  static getChannelLabelClasses(): string {
    return 'ml-3 text-sm font-medium text-[--color-text-primary] flex items-center';
  }

  static getFooterClasses(footerClass: string): string {
    return `border-t px-6 py-4 ${footerClass}`;
  }

  static getSaveButtonClasses(): string {
    return 'inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-[--color-text-inverse] bg-[--color-primary-600] hover:bg-[--color-primary-700] focus:outline-none';
  }
}