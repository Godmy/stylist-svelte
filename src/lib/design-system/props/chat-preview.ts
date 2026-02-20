export type ChatPreviewVariant = 'default' | 'compact' | 'detailed';
export type ChatPreviewSize = 'sm' | 'md' | 'lg';

/** Элемент чата для превью */
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
  variant?: ChatPreviewVariant;
  
  /**
   * Size of the chat preview
   * @default 'md'
   */
  size?: ChatPreviewSize;
  
  /**
   * Additional CSS classes
   */
  class?: string;
}