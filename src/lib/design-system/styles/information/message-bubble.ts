/**
 * @file MessageBubble Style Manager
 * @description Style management for MessageBubble component following Atomic Design principles
 * @author Vibe Management Pro
 * @version 1.0.0
 * 
 * SOLID Principles Applied:
 * - Single Responsibility: Only handles styling logic for MessageBubble
 */

/**
 * Style manager for MessageBubble component
 * Manages all class names and styling for the MessageBubble atom
 */
export class MessageBubbleStyleManager {
  /**
   * Gets the container classes for the MessageBubble component
   * @param align - Alignment of the message bubble
   * @param className - Additional CSS classes to append
   * @returns Combined string of container classes and additional classes
   */
  static getContainerClasses(align: 'left' | 'right' = 'left', className?: string): string {
    const alignmentClass = align === 'right' ? 'ml-auto' : 'mr-auto';
    const baseClasses = `message-bubble-container flex ${align === 'right' ? 'justify-end' : 'justify-start'}`;
    return className ? `${baseClasses} ${alignmentClass} ${className}` : `${baseClasses} ${alignmentClass}`;
  }

  /**
   * Gets the wrapper classes for the MessageBubble component
   * @param align - Alignment of the message bubble
   * @param variant - Visual variant of the message bubble
   * @returns Combined string of wrapper classes
   */
  static getWrapperClasses(align: 'left' | 'right' = 'left', variant: 'default' | 'system' = 'default'): string {
    const alignmentClass = align === 'right' 
      ? 'bg-blue-500 text-white rounded-br-none rounded-bl-lg' 
      : 'bg-gray-100 text-gray-800 rounded-bl-none rounded-br-lg';
      
    const variantClass = variant === 'system' 
      ? 'bg-gray-200 text-gray-700 rounded-lg' 
      : alignmentClass;
      
    return `message-bubble-wrapper p-4 max-w-xs relative ${variantClass}`;
  }

  /**
   * Gets the author text classes for the MessageBubble component
   * @param align - Alignment of the message bubble
   * @param variant - Visual variant of the message bubble
   * @returns Author text classes
   */
  static getAuthorClasses(align: 'left' | 'right' = 'left', variant: 'default' | 'system' = 'default'): string {
    const baseClasses = 'font-semibold text-sm';
    
    if (variant === 'system') {
      return `${baseClasses} text-center`;
    }
    
    return align === 'right'
      ? `${baseClasses} text-blue-100`
      : `${baseClasses} text-gray-600`;
  }

  /**
   * Gets the message content classes for the MessageBubble component
   * @param align - Alignment of the message bubble
   * @param variant - Visual variant of the message bubble
   * @returns Message content classes
   */
  static getMessageClasses(align: 'left' | 'right' = 'left', variant: 'default' | 'system' = 'default'): string {
    const baseClasses = 'mt-1';
    
    if (variant === 'system') {
      return `${baseClasses} text-center`;
    }
    
    return align === 'right'
      ? `${baseClasses} text-white`
      : `${baseClasses} text-gray-800`;
  }

  /**
   * Gets the timestamp classes for the MessageBubble component
   * @param align - Alignment of the message bubble
   * @param variant - Visual variant of the message bubble
   * @returns Timestamp classes
   */
  static getTimestampClasses(align: 'left' | 'right' = 'left', variant: 'default' | 'system' = 'default'): string {
    const baseClasses = 'text-xs mt-2';
    
    if (variant === 'system') {
      return `${baseClasses} text-gray-500 text-center`;
    }
    
    return align === 'right'
      ? `${baseClasses} text-blue-200`
      : `${baseClasses} text-gray-500`;
  }

  /**
   * Gets the avatar container classes for the MessageBubble component
   * @param align - Alignment of the message bubble
   * @returns Avatar container classes
   */
  static getAvatarContainerClasses(align: 'left' | 'right' = 'left'): string {
    return `flex ${align === 'left' ? 'mr-3' : 'ml-3'}`;
  }
}