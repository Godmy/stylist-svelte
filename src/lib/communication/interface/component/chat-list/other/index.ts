import type { Chat, User } from '$stylist/communication/interface/component/chat/other';

export interface ChatListProps {
  chats: Chat[];
  currentUser: User;
  activeChatId?: string;
}
