import type { SlotChatHeaderStyleClasses as IChatHeaderStyleClasses } from '$stylist/chat/interface/slot/chat-header-style-classes';

/**
 * Style utility class following Single Responsibility Principle
 * Responsible only for managing chat header styling logic
 * Uses CSS variables from the theme system
 */
export class ChatHeaderStyleManager {
  static getHeaderClasses(): string {
    return 'c-chat-header flex items-center justify-between border-b border-[--color-border-primary] bg-[--color-background-primary] px-4 py-3';
  }

  static getInfoClasses(): string {
    return 'chat-info flex flex-1 items-center gap-3.5 min-w-0';
  }

  static getDetailsClasses(): string {
    return 'chat-details flex flex-1 flex-col gap-[2px] min-w-0';
  }

  static getNameClasses(): string {
    return 'chat-name truncate text-sm font-semibold tracking-[0.01em] text-[--color-text-primary]';
  }

  static getActionsClasses(): string {
    return 'chat-actions flex items-center gap-2';
  }

  static getAllClasses(className: string): string {
    const baseClasses = this.getHeaderClasses();
    return `${baseClasses} ${className}`;
  }
}
