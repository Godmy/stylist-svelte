type ChatHeaderChat = { [key: string]: any };
import type { SlotUser as User } from '$stylist/communication/interface/slot/user';

export type ChatHeaderOrganismProps = {
	[key: string]: any;
  chat: ChatHeaderChat;
  currentUser: User;
  showActions?: boolean;
  class?: string;
  onCall?: () => void;
};
