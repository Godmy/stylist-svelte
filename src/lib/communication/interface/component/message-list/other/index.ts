import type { Message, User } from '$stylist/communication/interface/component/chat/other';

export interface MessageListProps {
  messages: Message[];
  currentUser: User;
  onMessageAction?: (action: string, message: Message) => void;
}
