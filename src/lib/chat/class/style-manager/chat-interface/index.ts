/**
 * Style utility class following Single Responsibility Principle
 * Responsible only for managing chat interface styling logic
 * Uses CSS variables from the theme system
 */
export class ChatInterfaceStyleManager {
  /**
   * Creates CSS class string for the main chat container
   */
  static getContainerClass(customClass: string = ''): string {
    const baseClass = 'c-chat-interface flex flex-col h-[--dimension-height-chat-container] overflow-hidden rounded-[1.5rem] border border-[--color-border-primary] bg-[--color-background-primary] shadow-custom40';
    return customClass ? `${baseClass} ${customClass}`.trim() : baseClass;
  }

  /**
   * Creates CSS class string for the chat header
   */
  static getHeaderClass(headerClass: string = ''): string {
    const baseClass = 'flex items-center justify-between border-b border-[--color-border-primary] bg-[--color-background-primary] px-[--spacing-lg] py-[--spacing-md]';
    return headerClass ? `${baseClass} ${headerClass}`.trim() : baseClass;
  }

  /**
   * Creates CSS class string for the provider selector
   */
  static getProviderSelectorClass(): string {
    return 'rounded-full border border-[--color-border-primary] bg-[--color-background-secondary] px-[--spacing-md] py-[--spacing-xs] text-sm text-[--color-text-primary]';
  }

  /**
   * Creates CSS class string for the settings button
   */
  static getSettingsButtonClass(): string {
    return 'inline-flex h-9 w-9 items-center justify-center rounded-full border border-transparent text-[--color-text-secondary] transition-colors hover:border-[--color-border-primary] hover:bg-[--color-background-secondary] hover:text-[--color-text-primary]';
  }

  /**
   * Creates CSS class string for the more options button
   */
  static getMoreOptionsButtonClass(): string {
    return 'inline-flex h-9 w-9 items-center justify-center rounded-full border border-transparent text-[--color-text-secondary] transition-colors hover:border-[--color-border-primary] hover:bg-[--color-background-secondary] hover:text-[--color-text-primary]';
  }

  /**
   * Creates CSS class string for the messages container
   */
  static getMessagesContainerClass(messageListClass: string = ''): string {
    const baseClass = 'flex-1 overflow-y-auto bg-[--color-background-secondary] p-[--spacing-md] space-y-[--spacing-md]';
    return messageListClass ? `${baseClass} ${messageListClass}`.trim() : baseClass;
  }

  /**
   * Creates CSS class string for an individual message
   */
  static getMessageClass(isUserMessage: boolean, messageClass: string = ''): string {
    const baseClass = 'max-w-[80%] rounded-[1.25rem] px-[--spacing-md] py-[--spacing-md] shadow-custom28';
    const positionClass = isUserMessage
      ? 'bg-[--color-primary-500] text-[--color-text-inverse] rounded-br-none ml-auto'
      : 'bg-[--color-background-primary] text-[--color-text-primary] rounded-bl-none';
    return [baseClass, positionClass, messageClass].filter(Boolean).join(' ');
  }

  /**
   * Creates CSS class string for the message content wrapper
   */
  static getMessageContentWrapperClass(): string {
    return 'flex items-start space-x-[--spacing-sm]';
  }

  /**
   * Creates CSS class string for the bot icon in AI messages
   */
  static getBotIconClass(): string {
    return 'h-4 w-4 mt-0.5 text-[--color-text-secondary] flex-shrink-0';
  }

  /**
   * Creates CSS class string for the user icon in user messages
   */
  static getUserIconClass(): string {
    return 'h-4 w-4 mt-0.5 text-[--color-primary-200] flex-shrink-0';
  }

  /**
   * Creates CSS class string for the message timestamp
   */
  static getTimestampClass(isUserMessage: boolean): string {
    const baseClass = 'text-xs mt-[--spacing-xs]';
    const colorClass = isUserMessage
      ? 'text-[--color-primary-200]'
      : 'text-[--color-text-secondary]';
    return `${baseClass} ${colorClass}`;
  }

  /**
   * Creates CSS class string for the message status indicator
   */
  static getStatusIndicatorClass(): string {
    return 'ml-[--spacing-xs]';
  }

  /**
   * Creates CSS class string for the input area
   */
  static getInputAreaClass(footerClass: string = ''): string {
    const baseClass = 'border-t border-[--color-border-primary] bg-[--color-background-primary] p-[--spacing-lg]';
    return footerClass ? `${baseClass} ${footerClass}`.trim() : baseClass;
  }

  /**
   * Creates CSS class string for the message input
   */
  static getMessageInputClass(inputClass: string = ''): string {
    const baseClass = 'w-full resize-none rounded-[1rem] border border-transparent bg-[--color-background-secondary] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[--color-primary-500] focus:border-[--color-primary-500]';
    return inputClass ? `${baseClass} ${inputClass}`.trim() : baseClass;
  }

  /**
   * Creates CSS class string for the send button
   */
  static getSendButtonClass(isDisabled: boolean): string {
    const baseClass = 'flex-shrink-0 h-11 w-11 flex items-center justify-center rounded-full bg-[--color-primary-500] text-[--color-text-inverse] hover:bg-[--color-primary-600] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[--color-primary-500]';
    const disabledClass = isDisabled
      ? 'opacity-[var(--opacity-50)] cursor-not-allowed'
      : '';
    return [baseClass, disabledClass].filter(Boolean).join(' ');
  }

  /**
   * Creates CSS class string for the send icon
   */
  static getSendIconClass(): string {
    return 'h-5 w-5';
  }
}
