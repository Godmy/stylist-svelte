import type { SlotUser as User } from '$stylist/chat/interface/slot/user';

export type ChatHeaderChat = {
  id: string;
  name?: string;
  participants: User[];
  isGroup: boolean;
  avatar?: string;
};
