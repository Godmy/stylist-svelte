import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';

export interface MessageItemAttachment {
	id?: string;
	name?: string;
	url?: string;
	type?: string;
	size?: number | string;
}

export interface MessageItemData {
	id: string;
	senderId: string;
	content: string;
	timestamp: Date;
	type?: 'text' | 'image' | 'file' | string;
	status?: 'sent' | 'delivered' | 'read' | string;
	replyTo?: string;
	attachments?: MessageItemAttachment[];
}

export interface MessageItemUser {
	id: string;
	name: string;
	avatar?: string;
	status?: 'online' | 'offline' | 'away' | 'typing';
}

export type MessageItemContract = RecordArchitectureMerge<
	[
		{
			message: MessageItemData;
			isOwn?: boolean;
			showAvatar?: boolean;
			enableReactions?: boolean;
			sender?: MessageItemUser;
		}
	]
>;
