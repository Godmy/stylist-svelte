import type { SlotUser as User } from '$stylist/chat/interface/slot/user';
import type { SlotUser } from '$stylist/chat/interface/slot/user';

export interface SlotUserStatus {
  user: SlotUser;
  showAvatar?: boolean;
  showName?: boolean;
  showStatusText?: boolean;
}
