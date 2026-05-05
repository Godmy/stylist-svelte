import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { Snippet } from 'svelte';
import type { Chat } from '$stylist/chat/type/struct/chat-header/chat';
import type { User } from '$stylist/chat/type/struct/chat-header/user';
import type { SlotUser } from '$stylist/chat/interface/slot/user';
import type { SlotChat } from '$stylist/chat/interface/slot/chat';

// ChatHeader props interface
export interface SlotChatHeader extends InteractionHTMLAttributes<HTMLDivElement> {
  chat: SlotChat;
  currentUser: SlotUser;
  showActions?: boolean;
  class?: string;
  children?: Snippet;
}
