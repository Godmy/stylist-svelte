import type { SlotMessage as Message } from '$stylist/communication/interface/slot/message';
import type { SlotUser as User } from '$stylist/communication/interface/slot/user';
import type { SlotUser } from '$stylist/communication/interface/slot/user';
import type { SlotMessage } from '$stylist/communication/interface/slot/message';

export interface SlotMessageItem {
  message: SlotMessage;
  isOwn?: boolean;
  showAvatar?: boolean;
  enableReactions?: boolean;
  sender?: SlotUser;
}
