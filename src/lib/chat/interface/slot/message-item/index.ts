import type { SlotMessage as Message } from '$stylist/chat/interface/slot/message';
import type { SlotUser as User } from '$stylist/chat/interface/slot/user';
import type { SlotUser } from '$stylist/chat/interface/slot/user';
import type { SlotMessage } from '$stylist/chat/interface/slot/message';

export interface SlotMessageItem {
  message: SlotMessage;
  isOwn?: boolean;
  showAvatar?: boolean;
  enableReactions?: boolean;
  sender?: SlotUser;
}
