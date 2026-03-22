/**
 * @file MessageBubble TokenBorderStyle Manager
 * @description TokenBorderStyle management for MessageBubble component following Atomic Design principles
 * @author Vibe Management Pro
 * @version 1.0.0
 * 
 * SOLID Principles Applied:
 * - Single Responsibility: Only handles styling logic for MessageBubble
 */

import { cn } from '$stylist/design-system/utils/cn/index';
import type { TokenAlignment } from '$stylist/design-system/tokens/architecture/alignment';
import type { TokenAppearance } from '$stylist/design-system/tokens/information/appearance';

/**
 * @file MessageBubble TokenBorderStyle Manager
 * @description TokenBorderStyle management for MessageBubble component following Atomic Design principles
 * @author Vibe Management Pro
 * @version 1.0.0
 * 
 * SOLID Principles Applied:
 * - Single Responsibility: Only handles styling logic for MessageBubble
 */

const MESSAGE_BUBBLE_WRAPPER_VARIANTS = {
	left: 'rounded-bl-none bg-[var(--color-neutral-100)] text-[var(--color-text-primary)] rounded-br-lg',
	right: 'rounded-bl-lg rounded-br-none bg-[var(--color-primary-500)] text-[var(--color-text-inverse)]',
	secondary: 'rounded-lg bg-[var(--color-neutral-200)] text-[var(--color-text-secondary)]'
} as const;






/**
 * TokenBorderStyle manager for MessageBubble component
 * Manages all class names and styling for the MessageBubble atom
 */
export class MessageBubbleStyleManager {
  private static normalizeAlign(align: TokenAlignment): 'left' | 'right' {
    return align === 'right' ? 'right' : 'left';
  }

  /**
   * Gets the container classes for the MessageBubble component
   * @param align - TokenAlignment of the message bubble
   * @param className - Additional CSS classes to append
   * @returns Combined string of container classes and additional classes
   */
  static getContainerClasses(align: TokenAlignment = 'left', className?: string): string {
    const normalizedAlign = this.normalizeAlign(align);
    return cn(
      'message-bubble-container flex',
      normalizedAlign === 'right' ? 'justify-end ml-auto' : 'justify-start mr-auto',
      className
    );
  }

  /**
   * Gets the wrapper classes for the MessageBubble component
   * @param align - TokenAlignment of the message bubble
   * @param variant - Visual variant of the message bubble
   * @returns Combined string of wrapper classes
   */
  static getWrapperClasses(align: TokenAlignment = 'left', variant: TokenAppearance = 'primary'): string {
    const normalizedAlign = this.normalizeAlign(align);
    return cn(
      'message-bubble-wrapper relative max-w-xs p-4',
      variant === 'secondary'
        ? MESSAGE_BUBBLE_WRAPPER_VARIANTS.secondary
        : normalizedAlign === 'right'
          ? MESSAGE_BUBBLE_WRAPPER_VARIANTS.right
          : MESSAGE_BUBBLE_WRAPPER_VARIANTS.left
    );
  }

  /**
   * Gets the author text classes for the MessageBubble component
   * @param align - TokenAlignment of the message bubble
   * @param variant - Visual variant of the message bubble
   * @returns Author text classes
   */
  static getAuthorClasses(align: TokenAlignment = 'left', variant: TokenAppearance = 'primary'): string {
    const normalizedAlign = this.normalizeAlign(align);
    const baseClasses = 'text-sm font-semibold';

    if (variant === 'secondary') {
      return `${baseClasses} text-center text-[var(--color-text-secondary)]`;
    }

    return normalizedAlign === 'right'
      ? `${baseClasses} text-[var(--color-primary-100)]`
      : `${baseClasses} text-[var(--color-text-secondary)]`;
  }

  /**
   * Gets the message content classes for the MessageBubble component
   * @param align - TokenAlignment of the message bubble
   * @param variant - Visual variant of the message bubble
   * @returns Message content classes
   */
  static getMessageClasses(align: TokenAlignment = 'left', variant: TokenAppearance = 'primary'): string {
    const normalizedAlign = this.normalizeAlign(align);
    const baseClasses = 'mt-1';
    
    if (variant === 'secondary') {
      return `${baseClasses} text-center text-[var(--color-text-secondary)]`;
    }
    
    return normalizedAlign === 'right'
      ? `${baseClasses} text-[var(--color-text-inverse)]`
      : `${baseClasses} text-[var(--color-text-primary)]`;
  }

  /**
   * Gets the timestamp classes for the MessageBubble component
   * @param align - TokenAlignment of the message bubble
   * @param variant - Visual variant of the message bubble
   * @returns Timestamp classes
   */
  static getTimestampClasses(align: TokenAlignment = 'left', variant: TokenAppearance = 'primary'): string {
    const normalizedAlign = this.normalizeAlign(align);
    const baseClasses = 'text-xs mt-2';
    
    if (variant === 'secondary') {
      return `${baseClasses} text-center text-[var(--color-text-tertiary)]`;
    }
    
    return normalizedAlign === 'right'
      ? `${baseClasses} text-[var(--color-primary-100)]`
      : `${baseClasses} text-[var(--color-text-tertiary)]`;
  }

  /**
   * Gets the avatar container classes for the MessageBubble component
   * @param align - TokenAlignment of the message bubble
   * @returns Avatar container classes
   */
  static getAvatarContainerClasses(align: TokenAlignment = 'left'): string {
    return `flex ${this.normalizeAlign(align) === 'left' ? 'mr-3' : 'ml-3'}`;
  }
}



