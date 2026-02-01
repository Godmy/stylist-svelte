import type { ChatMessageStatus, ChatMessageVariant } from './chat-message';

export type MessageThreadVariant = 'default' | 'compact' | 'spacious';

export interface MessageThreadMessage {
  id: string;
  text: string;
  sender: string;
  senderAvatar?: string;
  timestamp: string;
  status?: ChatMessageStatus;
  isOwn: boolean;
}

export interface MessageThreadProps {
  messages?: MessageThreadMessage[];
  title?: string;
  class?: string;
  containerClass?: string;
  messageContainerClass?: string;
  headerClass?: string;
  loading?: boolean;
  variant?: MessageThreadVariant;
  messageVariant?: ChatMessageVariant;
}

export const DEFAULT_MESSAGE_THREAD_VARIANT: MessageThreadVariant = 'default';
export const DEFAULT_MESSAGE_THREAD_MESSAGE_VARIANT: ChatMessageVariant = 'default';

const VARIANT_PADDING: Record<MessageThreadVariant, string> = {
  default: 'p-4',
  compact: 'p-2',
  spacious: 'p-6'
};

export const getMessageThreadVariantClass = (variant: MessageThreadVariant) => {
  return VARIANT_PADDING[variant];
};

export const getMessageThreadHostClasses = (className = '') => {
  return `message-thread flex flex-col h-full ${className}`.trim();
};

export const getMessageThreadHeaderClasses = (className = '') => {
  return `bg-white border-b p-4 ${className}`.trim();
};

export const getMessageThreadContainerClasses = (className = '') => {
  return `flex-1 overflow-y-auto ${className}`.trim();
};

export const getMessageThreadMessageContainerClasses = (className = '') => {
  return `space-y-4 ${className}`.trim();
};

export const getMessageThreadLoadingClasses = () => {
  return 'flex justify-center items-center h-full';
};

export const getMessageThreadSpinnerClasses = () => {
  return 'animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500';
};
