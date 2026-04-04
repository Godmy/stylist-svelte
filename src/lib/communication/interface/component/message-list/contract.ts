import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { RecordCommunicationMerge } from '$stylist/communication/type/record';

export interface MessageListMessage {
	id: string;
	senderId: string;
	content: string;
	timestamp: Date;
	type?: 'text' | 'image' | 'file' | string;
	status?: 'sent' | 'delivered' | 'read' | string;
}

export interface MessageListUser {
	id: string;
	name: string;
}

export type MessageListContract = RecordArchitectureMerge<
	[
		{
			messages?: MessageListMessage[];
			currentUser: MessageListUser;
			onMessageAction?: (action: string, message: MessageListMessage) => void;
		}
	]
>;
