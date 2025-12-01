/**
 * Style utility class following Single Responsibility Principle
 * Responsible only for managing MessageComposer styling logic
 * Uses CSS variables from the theme system
 */
import type { IMessageComposerProps } from './types';

export class MessageComposerStyleManager {
  static getContainerClasses(hostClass: string): string {
    return `message-composer flex items-end border-t border-[--color-border-primary] bg-[--color-background-surface] p-4 ${hostClass}`;
  }

  static getFormClasses(): string {
    return 'flex-1 flex items-end';
  }

  static getAttachmentButtonClasses(): string {
    return 'mr-2';
  }

  static getInputContainerClasses(): string {
    return 'flex-1 relative';
  }

  static getInputClasses(inputClass: string): string {
    return `w-full border border-[--color-border-primary] rounded-lg py-2 px-3 pr-10 focus:outline-none focus:ring-2 focus:ring-[--color-primary-500] focus:border-transparent resize-none max-h-32 ${inputClass}`;
  }

  static getSendButtonClasses(buttonClass: string): string {
    return `ml-2 ${buttonClass}`;
  }

  static getVoiceButtonClasses(buttonClass: string): string {
    return `ml-2 ${buttonClass}`;
  }
}