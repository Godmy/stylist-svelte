import {
	CHAT_PREVIEW_CONTAINER_CLASSES,
	CHAT_PREVIEW_HEADER_CLASSES,
	CHAT_PREVIEW_CHAT_INFO_CLASSES,
	CHAT_PREVIEW_TITLE_CLASSES,
	CHAT_PREVIEW_PARTICIPANTS_CLASSES,
	CHAT_PREVIEW_MESSAGES_CONTAINER_CLASSES,
	CHAT_PREVIEW_SIZE_CLASSES,
	CHAT_PREVIEW_VARIANT_CLASSES,
	DEFAULT_CHAT_PREVIEW_SIZE,
	DEFAULT_CHAT_PREVIEW_VARIANT
} from '../classes/chat-preview';
import { cn } from '../utils/cn';

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
		container: cn(CHAT_PREVIEW_CONTAINER_CLASSES, CHAT_PREVIEW_VARIANT_CLASSES[variant], CHAT_PREVIEW_SIZE_CLASSES[size]),
		header: CHAT_PREVIEW_HEADER_CLASSES,
		chatInfo: CHAT_PREVIEW_CHAT_INFO_CLASSES,
		title: CHAT_PREVIEW_TITLE_CLASSES,
		participants: CHAT_PREVIEW_PARTICIPANTS_CLASSES,
		messagesContainer: CHAT_PREVIEW_MESSAGES_CONTAINER_CLASSES
	};
};