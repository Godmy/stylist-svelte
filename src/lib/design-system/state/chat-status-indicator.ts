import type { ChatStatusIndicatorProps } from '../props/chat-status-indicator';

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