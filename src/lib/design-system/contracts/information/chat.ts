import type { Density } from '$stylist/design-system/tokens';
import type { NeutralVariant, DefaultVariants } from '$stylist/design-system/tokens/information/default-variants';
import type { HtmlAttributesBase, HtmlAttributesWithChildren } from './common';

export type ChatMessageStatus = 'sent' | 'delivered' | 'read';

export interface User {
	id: string;
	name: string;
	avatar?: string;
	status?: 'online' | 'offline' | 'away' | 'typing' | 'idle';
}

export interface MessageAttachment {
	id?: string;
	name?: string;
	url?: string;
	type?: string;
	size?: number | string;
}

export interface MessageReaction {
	emoji: string;
	count?: number;
	users?: string[];
}

export interface Message {
	id: string;
	senderId: string;
	content: string;
	timestamp: Date;
	type?: 'text' | 'image' | 'file' | string;
	status?: ChatMessageStatus | string;
	replyTo?: string;
	attachments?: MessageAttachment[];
	reactions?: MessageReaction[];
}

export interface Chat {
	id: string;
	name?: string;
	participants: User[];
	isGroup: boolean;
	lastMessage?: Message | string;
	lastMessageTime?: Date;
	unreadCount?: number;
	avatar?: string;
}

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
	variant?: DefaultVariants | NeutralVariant;
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
	onSendMessage?: (content: string) => void;
	onAttachClick?: () => void;
	onEmojiClick?: () => void;
	onMessageInput?: (content: string) => void;
}

export interface MessageThreadProps extends HtmlAttributesBase<HTMLDivElement> {
	title?: string;
	messages?: MessageThreadMessage[];
	containerClass?: string;
	messageContainerClass?: string;
	headerClass?: string;
	loading?: boolean;
	variant?: Density;
	messageVariant?: DefaultVariants | NeutralVariant;
}


