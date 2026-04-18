import type { SlotChat as Chat } from '$stylist/communication/interface/slot/chat';
import type { SlotUser as User } from '$stylist/communication/interface/slot/user';
import type { SlotMessage as Message } from '$stylist/communication/interface/slot/message';
import type { SlotUser } from '$stylist/communication/interface/slot/user';
import type { SlotMessage } from '$stylist/communication/interface/slot/message';
import type { SlotChat } from '$stylist/communication/interface/slot/chat';

export interface SlotChatWindow {
  chat: SlotChat;
  currentUser: SlotUser;
  messages: SlotMessage[];
}
