/**
 * Common base classes for all message components
 * 
 * Provides consistent styling foundation for message-based components
 * following Atomic Design principles (Molecule level)
 * 
 * Usage: Import these classes and extend in specific message style managers
 */

import { BASE_CLASSES } from './classes';
import { VARIANT_CLASSES } from './interaction';

// ============================================================================
// BASE MESSAGE CLASSES
// ============================================================================

/**
 * Base container classes for message components
 */
export const MESSAGE_BASE_CLASSES = 'flex items-start gap-3';

/**
 * Message bubble base classes
 */
export const MESSAGE_BUBBLE_BASE_CLASSES = 'rounded-lg p-4 max-w-[75%] shadow-sm border';

/**
 * Message alignment classes
 */
export const MESSAGE_ALIGNMENT_CLASSES = {
  left: 'items-start',
  right: 'items-end',
  center: 'items-center'
} as const;

/**
 * Message variant background classes
 */
export const MESSAGE_VARIANT_BG_CLASSES = {
  default: 'bg-white border-[--color-border-secondary]',
  system: 'bg-[--color-background-secondary] border-[--color-border-primary]',
  incoming: 'bg-white border-[--color-border-secondary]',
  outgoing: 'bg-[--color-primary-500] border-[--color-primary-600]',
  error: 'bg-red-50 border-red-200',
  warning: 'bg-yellow-50 border-yellow-200',
  success: 'bg-green-50 border-green-200'
} as const;

/**
 * Message variant text classes
 */
export const MESSAGE_VARIANT_TEXT_CLASSES = {
  default: 'text-[--color-text-primary]',
  system: 'text-[--color-text-secondary]',
  incoming: 'text-[--color-text-primary]',
  outgoing: 'text-[--color-text-inverse]',
  error: 'text-red-800',
  warning: 'text-yellow-800',
  success: 'text-green-800'
} as const;

// ============================================================================
// MESSAGE STRUCTURE CLASSES
// ============================================================================

/**
 * Message header classes (author name)
 */
export const MESSAGE_AUTHOR_CLASSES = 'text-sm font-semibold mb-1';

/**
 * Message content classes
 */
export const MESSAGE_CONTENT_CLASSES = 'text-[--color-text-primary] word-wrap-break-word whitespace-pre-wrap';

/**
 * Message meta classes (timestamp, status)
 */
export const MESSAGE_META_CLASSES = 'flex items-center gap-2 mt-2 text-xs';

/**
 * Message timestamp classes
 */
export const MESSAGE_TIMESTAMP_CLASSES = 'text-[--color-text-secondary]';

/**
 * Message status classes
 */
export const MESSAGE_STATUS_CLASSES = {
  sent: 'text-blue-500',
  delivered: 'text-gray-500',
  read: 'text-green-500',
  error: 'text-red-500'
} as const;

// ============================================================================
// MESSAGE AVATAR CLASSES
// ============================================================================

/**
 * Avatar container classes in message context
 */
export const MESSAGE_AVATAR_CONTAINER_CLASSES = 'flex-shrink-0';

/**
 * Avatar size classes for messages
 */
export const MESSAGE_AVATAR_SIZE_CLASSES = {
  sm: 'w-6 h-6',
  md: 'w-8 h-8',
  lg: 'w-10 h-10'
} as const;

// ============================================================================
// MESSAGE ACTIONS CLASSES
// ============================================================================

/**
 * Message actions container classes
 */
export const MESSAGE_ACTIONS_CLASSES = 'flex items-center gap-1 mt-2 opacity-0 group-hover:opacity-100 transition-opacity';

/**
 * Message action button classes
 */
export const MESSAGE_ACTION_BUTTON_CLASSES = 'p-1 rounded hover:bg-[--color-background-secondary] transition-colors';

/**
 * Message reaction button classes
 */
export const MESSAGE_REACTION_BUTTON_CLASSES = 'text-lg p-1 rounded hover:bg-[--color-background-secondary]';

// ============================================================================
// MESSAGE LIST CLASSES
// ============================================================================

/**
 * Message list container classes
 */
export const MESSAGE_LIST_CONTAINER_CLASSES = 'flex flex-col gap-4 p-4 overflow-y-auto';

/**
 * Message list item classes
 */
export const MESSAGE_LIST_ITEM_CLASSES = 'flex gap-3';

/**
 * Message list date separator classes
 */
export const MESSAGE_LIST_DATE_SEPARATOR_CLASSES = 'flex items-center gap-4 my-4 text-xs text-[--color-text-secondary]';

/**
 * Message list date separator line classes
 */
export const MESSAGE_LIST_DATE_SEPARATOR_LINE_CLASSES = 'flex-1 h-px bg-[--color-border-secondary]';

// ============================================================================
// MESSAGE COMPOSER CLASSES
// ============================================================================

/**
 * Message composer container classes
 */
export const MESSAGE_COMPOSER_CONTAINER_CLASSES = 'flex items-end gap-2 p-4 border-t border-[--color-border-secondary] bg-[--color-background-primary]';

/**
 * Message composer input container classes
 */
export const MESSAGE_COMPOSER_INPUT_CONTAINER_CLASSES = 'flex-1 flex items-center gap-2 border border-[--color-border-secondary] rounded-lg px-3 py-2 bg-[--color-background-primary]';

/**
 * Message composer input classes
 */
export const MESSAGE_COMPOSER_INPUT_CLASSES = 'flex-1 resize-none border-none outline-none bg-transparent text-[--color-text-primary] placeholder-[--color-text-secondary]';

/**
 * Message composer button classes
 */
export const MESSAGE_COMPOSER_BUTTON_CLASSES = 'p-2 rounded-md hover:bg-[--color-background-secondary] transition-colors';

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Get message variant background classes with fallback
 */
export function getMessageVariantBgClasses(variant: keyof typeof MESSAGE_VARIANT_BG_CLASSES): string {
  return MESSAGE_VARIANT_BG_CLASSES[variant] || MESSAGE_VARIANT_BG_CLASSES.default;
}

/**
 * Get message variant text classes with fallback
 */
export function getMessageVariantTextClasses(variant: keyof typeof MESSAGE_VARIANT_TEXT_CLASSES): string {
  return MESSAGE_VARIANT_TEXT_CLASSES[variant] || MESSAGE_VARIANT_TEXT_CLASSES.default;
}

/**
 * Get message status classes with fallback
 */
export function getMessageStatusClasses(status: keyof typeof MESSAGE_STATUS_CLASSES): string {
  return MESSAGE_STATUS_CLASSES[status] || MESSAGE_STATUS_CLASSES.delivered;
}

/**
 * Get avatar size classes with validation
 */
export function getMessageAvatarSizeClasses(size: keyof typeof MESSAGE_AVATAR_SIZE_CLASSES): string {
  return MESSAGE_AVATAR_SIZE_CLASSES[size] || MESSAGE_AVATAR_SIZE_CLASSES.md;
}
