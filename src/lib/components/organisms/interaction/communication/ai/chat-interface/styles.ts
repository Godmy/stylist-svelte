/**
 * Style utility class following Single Responsibility Principle
 * Responsible only for managing chat interface styling logic
 * Uses CSS variables from the theme system
 */
export class ChatInterfaceStyleManager {
  /**
   * Creates CSS class string for the main chat container
   * @param customClass - Additional CSS classes to be applied
   * @returns Combined CSS class string for the main container
   */
  static getContainerClass(customClass: string = ''): string {
    const baseClass = 'c-chat-interface flex flex-col h-[--dimension-height-chat-container] border border-[--color-border-primary] rounded-lg shadow-sm';

    return customClass ? `${baseClass} ${customClass}`.trim() : baseClass;
  }

  /**
   * Creates CSS class string for the chat header
   * @param headerClass - Additional CSS classes for the header
   * @returns Combined CSS class string for the chat header
   */
  static getHeaderClass(headerClass: string = ''): string {
    const baseClass = 'flex items-center justify-between p-[--spacing-lg] border-b border-[--color-border-primary]';

    return headerClass ? `${baseClass} ${headerClass}`.trim() : baseClass;
  }

  /**
   * Creates CSS class string for the provider selector
   * @returns CSS class string for the provider selector
   */
  static getProviderSelectorClass(): string {
    return 'text-sm border border-[--color-border-primary] rounded-md px-[--spacing-sm] py-[--spacing-xs] bg-[--color-background-primary] text-[--color-text-primary]';
  }

  /**
   * Creates CSS class string for the settings button
   * @returns CSS class string for the settings button
   */
  static getSettingsButtonClass(): string {
    return 'text-[--color-text-secondary] hover:text-[--color-text-primary]';
  }

  /**
   * Creates CSS class string for the more options button
   * @returns CSS class string for the more options button
   */
  static getMoreOptionsButtonClass(): string {
    return 'text-[--color-text-secondary] hover:text-[--color-text-primary]';
  }

  /**
   * Creates CSS class string for the messages container
   * @param messageListClass - Additional CSS classes for the message list
   * @returns Combined CSS class string for the messages container
   */
  static getMessagesContainerClass(messageListClass: string = ''): string {
    const baseClass = 'flex-1 overflow-y-auto p-[--spacing-md] space-y-[--spacing-md]';

    return messageListClass ? `${baseClass} ${messageListClass}`.trim() : baseClass;
  }

  /**
   * Creates CSS class string for an individual message
   * @param isUserMessage - Whether the message is from the user
   * @param messageClass - Additional CSS classes for the message
   * @returns Combined CSS class string for an individual message
   */
  static getMessageClass(isUserMessage: boolean, messageClass: string = ''): string {
    const baseClass = 'max-w-[80%] rounded-lg p-[--spacing-md]';
    const positionClass = isUserMessage
      ? 'bg-[--color-primary-500] text-[--color-text-inverse] rounded-br-none ml-auto'
      : 'bg-[--color-background-secondary] text-[--color-text-primary] rounded-bl-none';

    return [baseClass, positionClass, messageClass].filter(Boolean).join(' ');
  }

  /**
   * Creates CSS class string for the message content wrapper
   * @returns CSS class string for the message content wrapper
   */
  static getMessageContentWrapperClass(): string {
    return 'flex items-start space-x-[--spacing-sm]';
  }

  /**
   * Creates CSS class string for the bot icon in AI messages
   * @returns CSS class string for the bot icon
   */
  static getBotIconClass(): string {
    return 'h-4 w-4 mt-0.5 text-[--color-text-secondary] flex-shrink-0';
  }

  /**
   * Creates CSS class string for the user icon in user messages
   * @returns CSS class string for the user icon
   */
  static getUserIconClass(): string {
    return 'h-4 w-4 mt-0.5 text-[--color-primary-200] flex-shrink-0';
  }

  /**
   * Creates CSS class string for the message timestamp
   * @param isUserMessage - Whether the message is from the user
   * @returns CSS class string for the message timestamp
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
   * @returns CSS class string for the message status indicator
   */
  static getStatusIndicatorClass(): string {
    return 'ml-[--spacing-xs]';
  }

  /**
   * Creates CSS class string for the input area
   * @param footerClass - Additional CSS classes for the footer/input area
   * @returns Combined CSS class string for the input area
   */
  static getInputAreaClass(footerClass: string = ''): string {
    const baseClass = 'border-t border-[--color-border-primary] p-[--spacing-lg]';

    return footerClass ? `${baseClass} ${footerClass}`.trim() : baseClass;
  }

  /**
   * Creates CSS class string for the message input
   * @param inputClass - Additional CSS classes for the input
   * @returns Combined CSS class string for the message input
   */
  static getMessageInputClass(inputClass: string = ''): string {
    const baseClass = 'w-full border border-[--color-border-primary] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[--color-primary-500] focus:border-[--color-primary-500] resize-none';

    return inputClass ? `${baseClass} ${inputClass}`.trim() : baseClass;
  }

  /**
   * Creates CSS class string for the send button
   * @param isDisabled - Whether the button is disabled
   * @returns Combined CSS class string for the send button
   */
  static getSendButtonClass(isDisabled: boolean): string {
    const baseClass = 'flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-[--color-primary-500] text-[--color-text-inverse] hover:bg-[--color-primary-600] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[--color-primary-500]';
    const disabledClass = isDisabled
      ? 'opacity-50 cursor-not-allowed'
      : '';

    return [baseClass, disabledClass].filter(Boolean).join(' ');
  }

  /**
   * Creates CSS class string for the send icon
   * @returns CSS class string for the send icon
   */
  static getSendIconClass(): string {
    return 'h-5 w-5';
  }
}