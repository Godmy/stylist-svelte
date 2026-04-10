import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { Snippet } from 'svelte';
import type { TokenMessageStatus } from '$stylist/communication/type/enum/message-status';

export type ChatMessageStatus = 'sent' | 'delivered' | 'read';

export interface ChatMessageProps extends Omit<InteractionHTMLAttributes<HTMLDivElement>, 'class'> {
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
