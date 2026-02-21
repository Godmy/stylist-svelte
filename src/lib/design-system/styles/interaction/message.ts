/**
 * Base StyleManager for all message components
 *
 * Provides common styling methods that can be extended
 * by specific message style managers
 *
 * @example
 * // In a specific message style manager:
 * import { MessageStyleManager } from '$stylist/design-system/styles/interaction/message';
 *
 * class CustomMessageStyleManager extends MessageStyleManager {
 *   static getContainerClasses(align: 'left' | 'right' = 'left', className?: string): string {
 *     return `${super.getMessageContainerClasses(align)} ${className || ''}`;
 *   }
 * }
 */

import {
  MESSAGE_BASE_CLASSES,
  MESSAGE_BUBBLE_BASE_CLASSES,
  MESSAGE_ALIGNMENT_CLASSES,
  MESSAGE_VARIANT_BG_CLASSES,
  MESSAGE_VARIANT_TEXT_CLASSES,
  MESSAGE_AUTHOR_CLASSES,
  MESSAGE_CONTENT_CLASSES,
  MESSAGE_META_CLASSES,
  MESSAGE_TIMESTAMP_CLASSES,
  MESSAGE_STATUS_CLASSES,
  MESSAGE_AVATAR_CONTAINER_CLASSES,
  MESSAGE_AVATAR_SIZE_CLASSES,
  MESSAGE_ACTIONS_CLASSES,
  MESSAGE_ACTION_BUTTON_CLASSES,
  MESSAGE_REACTION_BUTTON_CLASSES,
  MESSAGE_LIST_CONTAINER_CLASSES,
  MESSAGE_LIST_ITEM_CLASSES,
  MESSAGE_LIST_DATE_SEPARATOR_CLASSES,
  MESSAGE_LIST_DATE_SEPARATOR_LINE_CLASSES,
  MESSAGE_COMPOSER_CONTAINER_CLASSES,
  MESSAGE_COMPOSER_INPUT_CONTAINER_CLASSES,
  MESSAGE_COMPOSER_INPUT_CLASSES,
  MESSAGE_COMPOSER_BUTTON_CLASSES,
  getMessageVariantBgClasses,
  getMessageVariantTextClasses,
  getMessageStatusClasses,
  getMessageAvatarSizeClasses
} from '$stylist/design-system/classes/information/messages';

type MessageAlignment = keyof typeof MESSAGE_ALIGNMENT_CLASSES;
type MessageVariant = keyof typeof MESSAGE_VARIANT_BG_CLASSES;
type MessageStatus = keyof typeof MESSAGE_STATUS_CLASSES;
type MessageAvatarSize = keyof typeof MESSAGE_AVATAR_SIZE_CLASSES;

export class MessageStyleManager {
  /**
   * Get message container classes with alignment
   */
  static getMessageContainerClasses(align: MessageAlignment = 'left', className?: string): string {
    const alignmentClass = MESSAGE_ALIGNMENT_CLASSES[align];
    return `${MESSAGE_BASE_CLASSES} ${alignmentClass} ${className || ''}`.trim();
  }

  /**
   * Get message bubble classes with variant
   */
  static getMessageBubbleClasses(variant: MessageVariant = 'default', className?: string): string {
    const bgClass = getMessageVariantBgClasses(variant);
    return `${MESSAGE_BUBBLE_BASE_CLASSES} ${bgClass} ${className || ''}`.trim();
  }

  /**
   * Get message text color classes based on variant
   */
  static getMessageTextClasses(variant: MessageVariant = 'default'): string {
    return getMessageVariantTextClasses(variant);
  }

  /**
   * Get author classes
   */
  static getAuthorClasses(align: MessageAlignment = 'left', variant: MessageVariant = 'default'): string {
    const textClass = getMessageVariantTextClasses(variant);
    return `${MESSAGE_AUTHOR_CLASSES} ${textClass}`;
  }

  /**
   * Get content classes
   */
  static getContentClasses(align: MessageAlignment = 'left', variant: MessageVariant = 'default'): string {
    const textClass = getMessageVariantTextClasses(variant);
    return `${MESSAGE_CONTENT_CLASSES} ${textClass}`;
  }

  /**
   * Get meta classes
   */
  static getMetaClasses(): string {
    return MESSAGE_META_CLASSES;
  }

  /**
   * Get timestamp classes
   */
  static getTimestampClasses(): string {
    return MESSAGE_TIMESTAMP_CLASSES;
  }

  /**
   * Get status classes
   */
  static getStatusClasses(status: MessageStatus = 'delivered'): string {
    return getMessageStatusClasses(status);
  }

  /**
   * Get avatar container classes
   */
  static getAvatarContainerClasses(align: MessageAlignment = 'left'): string {
    return MESSAGE_AVATAR_CONTAINER_CLASSES;
  }

  /**
   * Get avatar size classes
   */
  static getAvatarSizeClasses(size: MessageAvatarSize = 'md'): string {
    return getMessageAvatarSizeClasses(size);
  }

  /**
   * Get actions classes
   */
  static getActionsClasses(): string {
    return MESSAGE_ACTIONS_CLASSES;
  }

  /**
   * Get action button classes
   */
  static getActionButtonClasses(): string {
    return MESSAGE_ACTION_BUTTON_CLASSES;
  }

  /**
   * Get reaction button classes
   */
  static getReactionButtonClasses(): string {
    return MESSAGE_REACTION_BUTTON_CLASSES;
  }

  /**
   * Get message list container classes
   */
  static getMessageListContainerClasses(className?: string): string {
    return `${MESSAGE_LIST_CONTAINER_CLASSES} ${className || ''}`.trim();
  }

  /**
   * Get message list item classes
   */
  static getMessageListItemClasses(): string {
    return MESSAGE_LIST_ITEM_CLASSES;
  }

  /**
   * Get date separator classes
   */
  static getDateSeparatorClasses(): string {
    return MESSAGE_LIST_DATE_SEPARATOR_CLASSES;
  }

  /**
   * Get date separator line classes
   */
  static getDateSeparatorLineClasses(): string {
    return MESSAGE_LIST_DATE_SEPARATOR_LINE_CLASSES;
  }

  /**
   * Get message composer container classes
   */
  static getMessageComposerContainerClasses(className?: string): string {
    return `${MESSAGE_COMPOSER_CONTAINER_CLASSES} ${className || ''}`.trim();
  }

  /**
   * Get message composer input container classes
   */
  static getMessageComposerInputContainerClasses(): string {
    return MESSAGE_COMPOSER_INPUT_CONTAINER_CLASSES;
  }

  /**
   * Get message composer input classes
   */
  static getMessageComposerInputClasses(className?: string): string {
    return `${MESSAGE_COMPOSER_INPUT_CLASSES} ${className || ''}`.trim();
  }

  /**
   * Get message composer button classes
   */
  static getMessageComposerButtonClasses(): string {
    return MESSAGE_COMPOSER_BUTTON_CLASSES;
  }
}

export default MessageStyleManager;
