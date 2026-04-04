import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { TierContent } from '$stylist/architecture/type/enum/tier';

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
  variant?: TierContent;
  
  /**
   * Size of the chat preview
   * @default 'md'
   */
  size?: TokenSize | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  
  /**
   * Additional CSS classes
   */
  class?: string;
}




