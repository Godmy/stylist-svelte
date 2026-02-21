/**
 * Chat Preview CSS classes
 */

export const CHAT_PREVIEW_CONTAINER_CLASSES = 'border rounded-lg p-4 bg-white';
export const CHAT_PREVIEW_HEADER_CLASSES = 'flex justify-between items-center mb-3';
export const CHAT_PREVIEW_CHAT_INFO_CLASSES = 'flex flex-col';
export const CHAT_PREVIEW_TITLE_CLASSES = 'font-semibold text-gray-800';
export const CHAT_PREVIEW_PARTICIPANTS_CLASSES = 'text-xs text-gray-500';
export const CHAT_PREVIEW_MESSAGES_CONTAINER_CLASSES = 'space-y-3';

export const CHAT_PREVIEW_SIZE_CLASSES = {
	sm: 'text-sm',
	md: 'text-base',
	lg: 'text-lg'
} as const;

export const CHAT_PREVIEW_VARIANT_CLASSES = {
	compact: 'p-2',
	detailed: 'p-6',
	default: 'p-4'
} as const;

export const DEFAULT_CHAT_PREVIEW_SIZE: keyof typeof CHAT_PREVIEW_SIZE_CLASSES = 'md';
export const DEFAULT_CHAT_PREVIEW_VARIANT: keyof typeof CHAT_PREVIEW_VARIANT_CLASSES = 'default';
