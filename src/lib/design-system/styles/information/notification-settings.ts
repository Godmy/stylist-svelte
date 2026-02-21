/**
 * Style utility class following Single Responsibility Principle
 * Responsible only for managing notification settings styling logic
 * Uses CSS variables from the theme system
 */
export class NotificationSettingsStyleManager {
  static getContainerClasses(className: string): string {
    return `bg-[--color-surface-primary] rounded-lg shadow border border-[--color-border-primary] overflow-hidden ${className}`;
  }

  static getHeaderClasses(headerClass: string): string {
    return `border-b px-6 py-5 ${headerClass}`;
  }

  static getChannelHeaderClasses(): string {
    return 'grid grid-cols-5 gap-4 px-6 py-3 bg-[--color-surface-secondary] text-xs font-medium text-[--color-text-secondary]';
  }

  static getSectionClasses(sectionClass: string): string {
    return `p-6 grid grid-cols-5 gap-4 items-center ${sectionClass}`;
  }

  static getSwitchClasses(): string {
    return 'w-11 h-6 bg-[--color-border-primary] peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[--color-primary-300] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-[--color-text-inverse] after:content-[""] after:absolute after:top-[2px] after:left-[2px] after:bg-[--color-text-inverse] after:border-[--color-border-primary] after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[--color-primary-600]';
  }

  static getSwitchTrackClasses(): string {
    return 'sr-only peer';
  }

  static getFooterClasses(footerClass: string): string {
    return `border-t px-6 py-4 ${footerClass}`;
  }

  static getFooterTextClasses(): string {
    return 'flex items-center text-xs text-[--color-text-secondary]';
  }
}
