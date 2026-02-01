import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';

export type ChatMessageStatus = 'sent' | 'delivered' | 'read';
export type ChatMessageVariant = 'default' | 'primary' | 'secondary';

export interface ChatMessageProps extends HTMLAttributes<HTMLDivElement> {
  text?: string;
  sender?: string;
  senderAvatar?: string;
  timestamp?: string;
  status?: ChatMessageStatus;
  isOwn?: boolean;
  children?: Snippet;
  class?: string;
  contentClass?: string;
  headerClass?: string;
  footerClass?: string;
  variant?: ChatMessageVariant;
}

export const DEFAULT_CHAT_MESSAGE_STATUS: ChatMessageStatus = 'sent';
export const DEFAULT_CHAT_MESSAGE_VARIANT: ChatMessageVariant = 'default';

const ALIGNMENT_CLASSES = {
  own: 'justify-end',
  other: 'justify-start'
};

const BUBBLE_BASE_CLASSES = 'rounded-lg px-4 py-2 text-sm';
const OWN_BUBBLE_CLASSES = 'bg-blue-500 text-white rounded-br-none';
const VARIANT_BUBBLE_CLASSES: Record<ChatMessageVariant, string> = {
  default: 'bg-gray-100 text-gray-800 rounded-bl-none',
  primary: 'bg-blue-100 text-blue-800 rounded-bl-none',
  secondary: 'bg-gray-200 text-gray-900 rounded-bl-none'
};

const HEADER_BASE_CLASSES = 'flex items-center mb-1 text-xs font-semibold text-gray-600';
const FOOTER_BASE_CLASSES = 'flex items-center justify-end mt-1 text-xs text-gray-500';

export const getChatMessageAlignmentClass = (isOwn: boolean) => {
  return isOwn ? ALIGNMENT_CLASSES.own : ALIGNMENT_CLASSES.other;
};

export const getChatMessageBubbleClasses = (
  isOwn: boolean,
  variant: ChatMessageVariant,
  className = ''
) => {
  const base = [BUBBLE_BASE_CLASSES];
  if (isOwn) base.push(OWN_BUBBLE_CLASSES);
  else base.push(VARIANT_BUBBLE_CLASSES[variant]);
  if (className) base.push(className);
  return base.join(' ');
};

export const getChatMessageHeaderClasses = (className = '') => {
  return [HEADER_BASE_CLASSES, className].filter(Boolean).join(' ');
};

export const getChatMessageFooterClasses = (className = '') => {
  return [FOOTER_BASE_CLASSES, className].filter(Boolean).join(' ');
};

export const getChatMessageStatusIconClasses = (status: ChatMessageStatus) => {
  return `ml-1 h-3 w-3 ${status === 'read' ? 'text-blue-500' : 'text-gray-400'}`.trim();
};
