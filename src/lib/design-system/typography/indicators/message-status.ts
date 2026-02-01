export type MessageStatusType = 'sent' | 'delivered' | 'read';
export type MessageStatusSize = 'sm' | 'md';

export interface MessageStatusProps {
  status?: MessageStatusType;
  size?: MessageStatusSize;
}

const STATUS_COLORS: Record<MessageStatusType, string> = {
  sent: 'text-gray-400',
  delivered: 'text-gray-400',
  read: 'text-green-500'
};

const SIZE_CLASSES: Record<MessageStatusSize, string> = {
  sm: 'w-3 h-3',
  md: 'w-4 h-4'
};

export const getMessageStatusContainerClasses = (status: MessageStatusType) => {
  return `inline-flex items-center justify-center ${STATUS_COLORS[status]}`.trim();
};

export const getMessageStatusIconClasses = (size: MessageStatusSize) => {
  return SIZE_CLASSES[size];
};
