import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { Chat, User } from '$stylist/communication/interface/component/chat/other';

export interface ChatItemProps extends InteractionHTMLAttributes<HTMLDivElement> {
  chat: Chat;
  currentUser: User;
  isActive?: boolean;
}
