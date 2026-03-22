import type { TokenAlignment } from '$stylist/design-system/tokens/architecture/alignment';
import type { TokenAppearance } from '$stylist/design-system/tokens/information/appearance';

/**
 * @file MessageBubble Types
 * @description Type definitions for MessageBubble component following Atomic Design principles
 * @author Vibe Management Pro
 * @version 1.0.0
 */
/**
 * TokenAlignment options for MessageBubble
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
   * TokenAlignment of the message bubble
   * @default 'left'
   */
  align?: TokenAlignment;

  /**
   * URL of the avatar image
   * @default undefined
   */
  avatar?: string;

  /**
   * Visual variant of the message bubble
   * @default 'primary'
   */
  variant?: TokenAppearance;

  /**
   * Additional CSS classes to apply to the component
   */
  class?: string;
}




