import type { SlotUser as User } from '$stylist/communication/interface/slot/user';

export type ChatHeaderChat = {
  id: string;
  name?: string;
  participants: User[];
  isGroup: boolean;
  avatar?: string;
};
