import type { User } from '../user';

// Chat type
export interface Chat {
  id: string;
  name?: string;
  participants: User[];
  isGroup: boolean;
  lastMessage?: string;
  lastMessageTime?: Date;
  unreadCount?: number;
  avatar?: string;
}
