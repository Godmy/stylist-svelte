/**
 * Style utility class following Single Responsibility Principle
 * Responsible only for managing MessageComposer styling logic
 * Uses CSS variables from the theme system
 */
import type { SlotMessageComposer as IMessageComposerProps } from '$stylist/chat/interface/slot/message-composer';

export class MessageComposerStyleManager {
  static getContainerClasses(hostClass: string): string {
    return `message-composer rounded-[1.15rem] border border-[--color-border-primary] bg-[--color-background-primary] p-2 shadow-custom28 ${hostClass}`;
  }

  static getFormClasses(): string {
    return 'flex flex-1 items-end gap-2';
  }

  static getAttachmentButtonClasses(): string {
    return 'shrink-0';
  }

  static getInputContainerClasses(): string {
    return 'relative flex-1';
  }

  static getInputClasses(inputClass: string): string {
    return `w-full resize-none rounded-[1rem] border border-transparent bg-[--color-background-secondary] px-4 py-3 pr-10 text-[--color-text-primary] focus:border-[--color-primary-500] focus:outline-none focus:ring-2 focus:ring-[--color-primary-500] max-h-32 ${inputClass}`;
  }

  static getSendButtonClasses(buttonClass: string): string {
    return `shrink-0 rounded-full ${buttonClass}`;
  }

  static getVoiceButtonClasses(buttonClass: string): string {
    return `shrink-0 rounded-full ${buttonClass}`;
  }
}




