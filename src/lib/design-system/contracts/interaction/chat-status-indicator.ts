import type { ComponentSize } from '$stylist/design-system/tokens/architecture/component-size';
import type { ChatStatusIndicatorVariant } from '$stylist/design-system/tokens/interaction/chat-status';

export interface ChatStatusIndicatorProps {
  /**
   * The status to display
   * @default 'offline'
   */
  status?: ChatStatusIndicatorVariant;
  
  /**
   * The size of the indicator
   * @default 'sm'
   */
  size?: ComponentSize;
  
  /**
   * Whether to show the status label
   * @default false
   */
  showLabel?: boolean;
  
  /**
   * Additional CSS classes
   */
  class?: string;
}

// Presets moved from presets\chat-status-indicator.ts

export const chatStatusIndicatorPresets: Record<string, Partial<ChatStatusIndicatorProps>> = {
  online: {
    status: 'online',
    size: 'sm',
    showLabel: false
  },
  offline: {
    status: 'offline',
    size: 'sm',
    showLabel: false
  },
  away: {
    status: 'away',
    size: 'sm',
    showLabel: false
  },
  typing: {
    status: 'typing',
    size: 'sm',
    showLabel: false
  },
  onlineWithLabel: {
    status: 'online',
    size: 'sm',
    showLabel: true
  }
};
