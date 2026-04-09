export interface ChatPreviewMessage {
  text: string;
  sender: string;
  timestamp?: string;
  isOwn?: boolean;
  avatar?: string;
  status?: 'sent' | 'delivered' | 'read';
}
