import type { ChatMessageStatus, ChatMessageVariant } from '../props/chat';
import {
	CHAT_MESSAGE_ALIGNMENT_CLASSES,
	CHAT_MESSAGE_BUBBLE_BASE_CLASSES,
	CHAT_MESSAGE_BUBBLE_OWN_CLASSES,
	CHAT_MESSAGE_BUBBLE_VARIANT_CLASSES,
	CHAT_MESSAGE_FOOTER_BASE_CLASSES,
	CHAT_MESSAGE_HEADER_BASE_CLASSES,
	CHAT_MESSAGE_STATUS_ICON_CLASSES
} from '../classes/chat';
import { cn } from '../utils/cn';

export class ChatStyleManager {
	static getChatMessageAlignmentClass(isOwn: boolean): string {
		return isOwn ? CHAT_MESSAGE_ALIGNMENT_CLASSES.own : CHAT_MESSAGE_ALIGNMENT_CLASSES.other;
	}

	static getChatMessageBubbleClasses(
		isOwn: boolean,
		variant: ChatMessageVariant,
		className = ''
	): string {
		return cn(
			CHAT_MESSAGE_BUBBLE_BASE_CLASSES,
			isOwn ? CHAT_MESSAGE_BUBBLE_OWN_CLASSES : CHAT_MESSAGE_BUBBLE_VARIANT_CLASSES[variant],
			className
		);
	}

	static getChatMessageHeaderClasses(className = ''): string {
		return cn(CHAT_MESSAGE_HEADER_BASE_CLASSES, className);
	}

	static getChatMessageFooterClasses(className = ''): string {
		return cn(CHAT_MESSAGE_FOOTER_BASE_CLASSES, className);
	}

	static getChatMessageStatusIconClasses(status: ChatMessageStatus): string {
		return CHAT_MESSAGE_STATUS_ICON_CLASSES[status];
	}
}
