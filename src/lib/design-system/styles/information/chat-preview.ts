import { cn } from '../../utils/cn/index';

const CHAT_PREVIEW_SIZE_CLASSES = {
	xs: 'text-sm',
	sm: 'text-sm',
	md: 'text-base',
	lg: 'text-lg',
	xl: 'text-lg',
	'2xl': 'text-lg'
} as const;

const CHAT_PREVIEW_VARIANT_CLASSES = {
	compact: 'p-2',
	detailed: 'p-6',
	default: 'p-4'
} as const;

const DEFAULT_CHAT_PREVIEW_SIZE: keyof typeof CHAT_PREVIEW_SIZE_CLASSES = 'md';
const DEFAULT_CHAT_PREVIEW_VARIANT: keyof typeof CHAT_PREVIEW_VARIANT_CLASSES = 'default';

export interface ChatPreviewStyles {
	container: string;
	header: string;
	chatInfo: string;
	title: string;
	participants: string;
	messagesContainer: string;
}

export const createChatPreviewStyles = (
	options: {
		variant?: keyof typeof CHAT_PREVIEW_VARIANT_CLASSES;
		size?: keyof typeof CHAT_PREVIEW_SIZE_CLASSES;
	} = {}
): ChatPreviewStyles => {
	const variant = options.variant ?? DEFAULT_CHAT_PREVIEW_VARIANT;
	const size = options.size ?? DEFAULT_CHAT_PREVIEW_SIZE;

	return {
		container: cn('border rounded-lg p-4 bg-[--color-background-primary]', CHAT_PREVIEW_VARIANT_CLASSES[variant], CHAT_PREVIEW_SIZE_CLASSES[size]),
		header: 'flex justify-between items-center mb-3',
		chatInfo: 'flex flex-col',
		title: 'font-semibold text-[--color-text-primary]',
		participants: 'text-xs text-[--color-text-secondary]',
		messagesContainer: 'space-y-3'
	};
};
