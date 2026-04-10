import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { User, Message } from '$stylist/communication/interface/component/chat/other';

export interface ChatRoomProps extends Omit<InteractionHTMLAttributes<HTMLDivElement>, 'class'> {
  messages: Message[];
  currentUser: User;
  participants: User[];
  title?: string;
  subtitle?: string;
  class?: string;
  messagesClass?: string;
  headerClass?: string;
  footerClass?: string;
  onMessageSend?: (text: string) => void;
  loading?: boolean;
  variant?: 'default' | 'compact' | 'spacious';
}
