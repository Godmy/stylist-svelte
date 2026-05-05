import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { SlotUser as User } from '$stylist/chat/interface/slot/user';
import type { SlotMessage as Message } from '$stylist/chat/interface/slot/message';
import type { SlotUser } from '$stylist/chat/interface/slot/user';
import type { SlotMessage } from '$stylist/chat/interface/slot/message';

export interface SlotChatRoom extends Omit<InteractionHTMLAttributes<HTMLDivElement>, 'class'> {
  messages: SlotMessage[];
  currentUser: SlotUser;
  participants: SlotUser[];
  title?: string;
  subtitle?: string;
  class?: string;
  messagesClass?: string;
  headerClass?: string;
  footerClass?: string;
  onMessageSend?: (text: string) => void;
  loading?: boolean;
  variant?: 'default' | 'compact' | 'spacious';
}
