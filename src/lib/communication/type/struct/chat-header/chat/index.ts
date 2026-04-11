import type { User } from '../user';

// Chat type
export type Chat = {
  id: string;
  name?: string;
  participants: User[];
  isGroup: boolean;
  lastMessage?: string;
  lastMessageTime?: Date;
  unreadCount?: number;
  avatar?: string;
}
