import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { RecordCommunicationMerge } from '$stylist/communication/type/record';
import type { ChatItemData, ChatItemUser } from '../chat-item/contract';

export interface ChatWindowMessage {
	id: string;
	senderId: string;
	content: string;
	timestamp: Date;
	type?: 'text' | 'image' | 'file' | string;
	status?: 'sent' | 'delivered' | 'read' | string;
	replyTo?: string;
}

export type ChatWindowContract = RecordArchitectureMerge<
	[
		{
			chat: ChatItemData;
			currentUser: ChatItemUser;
			messages?: ChatWindowMessage[];
		}
	]
>;
