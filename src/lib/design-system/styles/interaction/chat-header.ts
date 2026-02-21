/**
 * Style utility class following Single Responsibility Principle
 * Responsible only for managing chat header styling logic
 * Uses CSS variables from the theme system
 */
export class ChatHeaderStyleManager {
  static getHeaderClasses(): string {
    return 'c-chat-header flex items-center justify-between p-4 border-b border-[--color-border-primary] bg-[--color-background-primary]';
  }

  static getInfoClasses(): string {
    return 'chat-info flex items-center gap-3 flex-1';
  }

  static getDetailsClasses(): string {
    return 'chat-details flex flex-col flex-1';
  }

  static getNameClasses(): string {
    return 'chat-name font-semibold text-[--color-text-primary] text-base';
  }

  static getActionsClasses(): string {
    return 'chat-actions flex gap-2';
  }

  static getAllClasses(className: string): string {
    const baseClasses = this.getHeaderClasses();

    return `${baseClasses} ${className}`;
  }
}