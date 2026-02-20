import type { ChatPreviewProps } from '../props/chat-preview';

export const chatPreviewPresets: Record<string, Partial<ChatPreviewProps>> = {
  default: {
    title: 'Team Chat',
    participants: ['Alex', 'Taylor', 'Jordan'],
    maxMessages: 3,
    showAvatars: true,
    variant: 'default',
    size: 'md'
  },
  compact: {
    title: 'Quick Chat',
    participants: ['Sam', 'Riley'],
    maxMessages: 2,
    showAvatars: false,
    variant: 'compact',
    size: 'sm'
  },
  detailed: {
    title: 'Project Discussion',
    participants: ['Developer 1', 'Developer 2', 'Designer', 'PM'],
    maxMessages: 5,
    showAvatars: true,
    variant: 'detailed',
    size: 'lg'
  }
};