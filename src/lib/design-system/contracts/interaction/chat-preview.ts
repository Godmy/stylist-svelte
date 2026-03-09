import type { ComponentSize } from '$stylist/design-system/tokens/architecture/component-size';
import type { CardType } from '$stylist/design-system/tokens/architecture/card-types';

/** Р­Р»РµРјРµРЅС‚ С‡Р°С‚Р° РґР»СЏ РїСЂРµРІСЊСЋ */
export interface ChatPreviewItem {
  id: string;
  title: string;
  lastMessage?: string;
  timestamp?: string;
  unreadCount?: number;
}

export interface ChatPreviewMessage {
  text: string;
  sender: string;
  timestamp?: string;
  isOwn?: boolean;
  avatar?: string;
  status?: 'sent' | 'delivered' | 'read';
}

export interface ChatPreviewProps {
  /**
   * Title of the chat
   */
  title: string;
  
  /**
   * Participants in the chat
   */
  participants: string[];
  
  /**
   * Messages to display
   */
  messages: ChatPreviewMessage[];
  
  /**
   * Maximum number of messages to display
   * @default 3
   */
  maxMessages?: number;
  
  /**
   * Whether to show avatars
   * @default true
   */
  showAvatars?: boolean;
  
  /**
   * Variant of the chat preview
   * @default 'default'
   */
  variant?: CardType;
  
  /**
   * Size of the chat preview
   * @default 'md'
   */
  size?: ComponentSize | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  
  /**
   * Additional CSS classes
   */
  class?: string;
}

// Presets moved from presets\chat-preview.ts

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



