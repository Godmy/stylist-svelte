import type { Message, User } from '$stylist/communication/interface/component/chat/other';

export interface MessageItemProps {
  message: Message;
  isOwn?: boolean;
  showAvatar?: boolean;
  enableReactions?: boolean;
  sender?: User;
}
