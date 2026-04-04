import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { Snippet } from 'svelte';
import type { Chat } from '$stylist/communication/type/struct/chat-header/chat';
import type { User } from '$stylist/communication/type/struct/chat-header/user';

// ChatHeader props interface
export interface IChatHeaderProps extends InteractionHTMLAttributes<HTMLDivElement> {
  chat: Chat;
  currentUser: User;
  showActions?: boolean;
  class?: string;
  children?: Snippet;
}
