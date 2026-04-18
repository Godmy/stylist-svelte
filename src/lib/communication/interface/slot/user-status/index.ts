import type { SlotUser as User } from '$stylist/communication/interface/slot/user';
import type { SlotUser } from '$stylist/communication/interface/slot/user';

export interface SlotUserStatus {
  user: SlotUser;
  showAvatar?: boolean;
  showName?: boolean;
  showStatusText?: boolean;
}
