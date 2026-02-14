import type { ChatMessageStatus, ChatMessageVariant } from '../props/chat';

export const DEFAULT_CHAT_MESSAGE_VARIANT: ChatMessageVariant = 'default';

export const CHAT_MESSAGE_ALIGNMENT_CLASSES = {
	own: 'justify-end',
	other: 'justify-start'
} as const;

export const CHAT_MESSAGE_BUBBLE_BASE_CLASSES = 'rounded-lg px-4 py-2 text-sm';
export const CHAT_MESSAGE_BUBBLE_OWN_CLASSES = 'bg-blue-500 text-white rounded-br-none';
export const CHAT_MESSAGE_BUBBLE_VARIANT_CLASSES: Record<ChatMessageVariant, string> = {
	default: 'bg-gray-100 text-gray-800 rounded-bl-none',
	primary: 'bg-blue-100 text-blue-800 rounded-bl-none',
	secondary: 'bg-gray-200 text-gray-900 rounded-bl-none',
	success: 'bg-green-100 text-green-800 rounded-bl-none',
	warning: 'bg-yellow-100 text-yellow-800 rounded-bl-none',
	danger: 'bg-red-100 text-red-800 rounded-bl-none',
	info: 'bg-teal-100 text-teal-800 rounded-bl-none',
	neutral: 'bg-stone-100 text-gray-800 rounded-bl-none'
};

export const CHAT_MESSAGE_HEADER_BASE_CLASSES =
	'flex items-center mb-1 text-xs font-semibold text-gray-600';
export const CHAT_MESSAGE_FOOTER_BASE_CLASSES =
	'flex items-center justify-end mt-1 text-xs text-gray-500';

export const CHAT_MESSAGE_STATUS_ICON_CLASSES: Record<ChatMessageStatus, string> = {
	sent: 'ml-1 h-3 w-3 text-gray-400',
	delivered: 'ml-1 h-3 w-3 text-gray-400',
	read: 'ml-1 h-3 w-3 text-blue-500'
};
