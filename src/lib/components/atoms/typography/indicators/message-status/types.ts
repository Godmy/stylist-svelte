export type MessageStatus = 'sent' | 'delivered' | 'read';
export type MessageStatusSize = 'sm' | 'md';

export interface IMessageStatusProps {
  status?: MessageStatus;
  size?: MessageStatusSize;
}