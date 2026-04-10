import type { User } from '$stylist/communication/interface/component/chat/other';

export interface UserStatusProps {
  user: User;
  showAvatar?: boolean;
  showName?: boolean;
  showStatusText?: boolean;
}
