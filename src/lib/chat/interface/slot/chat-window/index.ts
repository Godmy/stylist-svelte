import type { SlotChat as Chat } from '$stylist/chat/interface/slot/chat';
import type { SlotUser as User } from '$stylist/chat/interface/slot/user';
import type { SlotMessage as Message } from '$stylist/chat/interface/slot/message';
import type { SlotUser } from '$stylist/chat/interface/slot/user';
import type { SlotMessage } from '$stylist/chat/interface/slot/message';
import type { SlotChat } from '$stylist/chat/interface/slot/chat';

export interface SlotChatWindow {
  chat: SlotChat;
  currentUser: SlotUser;
  messages: SlotMessage[];
}
