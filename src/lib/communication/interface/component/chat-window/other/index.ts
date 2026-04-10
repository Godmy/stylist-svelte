import type { Chat, User, Message } from '$stylist/communication/interface/component/chat/other';

export interface ChatWindowProps {
  chat: Chat;
  currentUser: User;
  messages: Message[];
}
