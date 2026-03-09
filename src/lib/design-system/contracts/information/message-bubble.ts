/**
 * @file MessageBubble Types
 * @description Type definitions for MessageBubble component following Atomic Design principles
 * @author Vibe Management Pro
 * @version 1.0.0
 */

import type { Alignment } from '$stylist/design-system/tokens/architecture/alignments';
import type { MessageBubbleVariant } from '$stylist/design-system/tokens/architecture/message-bubble';

export type MessageAlign = Extract<Alignment, 'left' | 'right'>;

/**
 * Alignment options for MessageBubble
 */
/**
 * Variant options for MessageBubble
 */
/**
 * Props interface for MessageBubble component
 * Single Responsibility: Define the contract for MessageBubble component
 */
export interface IMessageBubbleProps {
  /**
   * Author of the message
   */
  author: string;

  /**
   * Content of the message
   */
  message: string;

  /**
   * Timestamp of the message
   * @default undefined
   */
  timestamp?: string;

  /**
   * Alignment of the message bubble
   * @default 'left'
   */
  align?: MessageAlign;

  /**
   * URL of the avatar image
   * @default undefined
   */
  avatar?: string;

  /**
   * Visual variant of the message bubble
   * @default 'default'
   */
  variant?: MessageBubbleVariant;

  /**
   * Additional CSS classes to apply to the component
   */
  class?: string;
}

