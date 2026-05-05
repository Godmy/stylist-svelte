import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { Snippet } from 'svelte';
import type { TokenMessageStatus } from '$stylist/chat/type/enum/message-status';
import type { ChatMessageStatus } from '$stylist/chat/type/struct/chat-message-status';

export interface SlotChatMessage extends Omit<InteractionHTMLAttributes<HTMLDivElement>, 'class'> {
  text?: string;
  sender?: string;
  senderAvatar?: string;
  timestamp?: string;
  status?: ChatMessageStatus;
  isOwn?: boolean;
  children?: Snippet;
  class?: string;
  contentClass?: string;
  headerClass?: string;
  footerClass?: string;
  variant?: 'default' | 'primary' | 'secondary';
}
