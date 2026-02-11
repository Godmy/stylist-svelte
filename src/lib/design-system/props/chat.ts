import type { MessageThreadVariant } from '../tokens';
import type { NeutralVariant, SemanticVariant } from '../tokens/variants';
import type { HtmlAttributesBase, HtmlAttributesWithChildren } from './common';

export type ChatMessageStatus = 'sent' | 'delivered' | 'read';

export type ChatMessageVariant = SemanticVariant | NeutralVariant;

export interface ChatMessageProps extends HtmlAttributesWithChildren<HTMLDivElement> {
	text?: string;
	sender?: string;
	senderAvatar?: string;
	timestamp?: string;
	status?: ChatMessageStatus;
	isOwn?: boolean;
	contentClass?: string;
	headerClass?: string;
	footerClass?: string;
	variant?: ChatMessageVariant;
}

export interface MessageThreadMessage {
	id: string;
	text: string;
	sender: string;
	senderAvatar?: string;
	timestamp: string;
	status?: ChatMessageStatus;
	isOwn: boolean;
}

export interface MessageInputProps extends HtmlAttributesBase<HTMLDivElement> {
	disabled?: boolean;
	placeholder?: string;
	showAttachment?: boolean;
	showEmoji?: boolean;
	showSend?: boolean;
}

export interface MessageThreadProps extends HtmlAttributesBase<HTMLDivElement> {
	title?: string;
	messages?: MessageThreadMessage[];
	containerClass?: string;
	messageContainerClass?: string;
	headerClass?: string;
	loading?: boolean;
	variant?: MessageThreadVariant;
	messageVariant?: ChatMessageVariant;
}
