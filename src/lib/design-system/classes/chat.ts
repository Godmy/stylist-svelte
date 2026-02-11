import type { ChatMessageStatus, ChatMessageVariant } from '../props/all-props';

export const DEFAULT_CHAT_MESSAGE_VARIANT: ChatMessageVariant = 'default';

export const getChatMessageAlignmentClass = (isOwn: boolean) =>
	isOwn ? 'justify-end' : 'justify-start';

export const getChatMessageBubbleClasses = (
	isOwn: boolean,
	variant: ChatMessageVariant,
	className = ''
) => {
	const base = ['rounded-lg px-4 py-2 text-sm'];
	if (isOwn) base.push('bg-blue-500 text-white rounded-br-none');
	else {
		const variantClasses: Record<ChatMessageVariant, string> = {
			default: 'bg-gray-100 text-gray-800 rounded-bl-none',
			primary: 'bg-blue-100 text-blue-800 rounded-bl-none',
			secondary: 'bg-gray-200 text-gray-900 rounded-bl-none',
			success: 'bg-green-100 text-green-800 rounded-bl-none',
			warning: 'bg-yellow-100 text-yellow-800 rounded-bl-none',
			danger: 'bg-red-100 text-red-800 rounded-bl-none',
			info: 'bg-teal-100 text-teal-800 rounded-bl-none',
			neutral: 'bg-stone-100 text-gray-800 rounded-bl-none'
		};
		base.push(variantClasses[variant]);
	}
	if (className) base.push(className);
	return base.join(' ');
};

export const getChatMessageHeaderClasses = (className = '') =>
	['flex items-center mb-1 text-xs font-semibold text-gray-600', className]
		.filter(Boolean)
		.join(' ');

export const getChatMessageFooterClasses = (className = '') =>
	['flex items-center justify-end mt-1 text-xs text-gray-500', className]
		.filter(Boolean)
		.join(' ');

export const getChatMessageStatusIconClasses = (status: ChatMessageStatus) =>
	`ml-1 h-3 w-3 ${status === 'read' ? 'text-blue-500' : 'text-gray-400'}`.trim();
